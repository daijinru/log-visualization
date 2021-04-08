import dayjs from 'dayjs';
import IndexArt from './index.art';
import LogContextArt from './components/LogContextPop.art';
import LogConsoleListArt from './components/LogConsoleList.art';
import LogConsoleLoadingArt from './components/Loading.art';
import './styles/index.scss';
import { findParentElement, isObject, getAbsolutePoi } from './utils/index';
import pkg from '../package.json';

// @TODO 修改 Art 模版以支持高亮功能，暂时使用 loader options 关闭 escape 但是有 XSS 风险
// 匹配 mark 标签，并返回原始内容而不作解析
// console.log(artTemplate.defaults);
// LogConsoleListArt.defaults.rules.push({
//   test: /^<mark>.*<\/mark>$/,
//   use: function (match, code) {
//     return {
//       code,
//       output: 'raw'
//     };
//   },
// });

const defaults = {
  useTimestamp: false,
  // useUniqueLabel: false,
  useWrapLines: false,
  useContext: false,
  search: '',
  maxHeight: 500,
}
class App {
  constructor (id, options = {}) {
    this.app = document.getElementById(id);
    if (!this.app) throw new ReferenceError(`id 名为 ${id} 的节点不存在`);
    this.logs = [];
    this.events = new Map();
    this.options = { ...defaults, ...options };
    // 暂存展开上下文时生成的渲染函数，当使用点击加载更多这样的功能时可以持续使用
    this.renderContextFn = null;
    // 暂存展开上下文时的日志
    this.renderContextLog = null;

    // 初始化阶段先渲染日志界面
    this.app.innerHTML = IndexArt({
      options: this.options
    });
    window._LogVisualComp_ = this;
    this.version = pkg.version;
    this.author = pkg.author;
  }

  // 异步请求取回的新日志数据调用该方法
  setState(data) {
    // 当数据来源是多个，也就是 data 是 { logs, stream }[] 类型
    let logs = [];
    if (Array.isArray(data)) {
      const validateTypeError = data.some(item => {
        return !Array.isArray(item.logs) || !isObject(item.stream);
      });
      if (validateTypeError) {
         throw new TypeError(
           '传入数组的每个元素都必须是 {logs, stream} 类型 \n 而 logs 必须是二维数组类型 [[时间戳，日志文本]] \n stream 是对象类型'
         )
      }
      // 先让每一个 item 的 stream 推入 logs 二维数组每一项
      data.forEach(item => {
        item.logs.forEach(log => {
          log.push(item.stream);
        });
      });
      // 将 data 每一个元素中的 logs 整合到一个数组
      logs = data.reduce((acc, curr) => {
        return acc.concat(curr.logs);
      }, []);
      // 根据 logs（二维数组）元素中的第一项，时间戳正序操作
      logs.sort((a, b) => {
        return a[0] - b[0];
      });
      this.logs = [].concat(logs);
    } else {
      if (!Array.isArray(data.logs) || !isObject(data.stream)) {
        throw new TypeError(
          '日志 logs 必须是二维数组类型：[["时间戳", "日志文本"]] \n stream 是对象类型'
        );
      }
      data.logs.forEach(log => {
        log.push(data.stream)
      });
      this.logs = [].concat(data.logs);
    }

    this.renderState();
    this.bindEvents();
    // 默认关闭柱状图
    if (this.options.useChart) {
      console.warn('Chart 图表已废弃，请从设置中移除 useChart 选项');
    }
  }

  search (str) {
    this.options.search = str;
    this.renderState({ search: str });
  }

  // 注册监听 filter 按钮的事件
  onFilter (cbs) {
    this.registerEvents('filter', cbs);
  }

  regRenderContext (cb) {
    if (typeof cb !== 'function') {
      throw new TypeError('传入回调必须是函数类型');
    }
    this.registerEvents('context', cb);
  }

  regRenderMoreContext (cb) {
    if (typeof cb !== 'function') {
      throw new TypeError('传入回调必须是函数类型');
    }
    this.registerEvents('contextMore', cb);
  }

  registerEvents (eventType, cbs) {
    let events;
    if (!this.events.get(eventType)) {
      events = [];
      this.events.set(eventType, events);
    }
    events = this.events.get(eventType);
    const errText = 'Filter 要求所有回调都是 Function 类型';
    if (Array.isArray(cbs)) {
      if (cbs.some(cb => typeof cb !== 'function')) throw new TypeError(errText);
      events = events.concat(cbs);
      return;
    }
    if (typeof cbs !== 'function') throw new TypeError(errText);
    events.push(cbs);
  }

  renderState (options = {}) {
    this.options = { ...this.options, ...options };
    const logConsoleListElement = document.getElementById('logConsoleList');
    if (!logConsoleListElement) {
      console.warn('日志列表的挂载节点不存在：该问题不影响运作，但是请尽量在 DOM 渲染完毕后执行 setState() 操作');
      return;
    }
    logConsoleListElement.innerHTML = LogConsoleListArt({
      logs: this.formatLogs(),
      options: this.options,
    });

    // 换行涉及 DOM 操作需要在渲染结束后执行
    this.logRenderWithWrapLines(this.options.useWrapLines);
  }

  logRenderWithWrapLines (actionStatus) {
    Array.from(document.getElementsByClassName('log-console-item-msg-text')).forEach(item => {
      if (actionStatus) {
        item.classList.add('text-wrap');
      } else {
        item.classList.remove('text-wrap');
      }
    });
  }

  hideRenderedLogContext () {
    Array.from(document.getElementsByClassName('log-console-msg-context')).forEach(node => node.remove());
    Array.from(document.getElementsByClassName('log-console-item-msg-context')).forEach(node => {
      node.innerText = '展开上下文';
      node.classList.remove('collapsed');
    });
  }

  renderLogContext (target) {
    return (prevs, nexts) => {
      if (!Array.isArray(prevs) || !Array.isArray(nexts)) {
        throw new TypeError('prevs 和 nexts 都必须是二维数组类型，例如 [[Timestamp, Log]]');
      }
      // 清除所有已存在的上下文弹框
      // 还原所有展开上下文按钮的文案
      this.hideRenderedLogContext();
      const parentElement = findParentElement(target, 'log-console-item');
      if (parentElement) {
        const LogContextTemplateString = LogContextArt({
          prevs,
          nexts,
          prevsCount: prevs.length,
          nextsCount: nexts.length,
        });
        const DIV = document.createElement('div');
        DIV.classList.add('log-console-msg-context');
        DIV.innerHTML = LogContextTemplateString;
        parentElement.prepend(DIV);
        target.classList.add('collapsed');
        target.innerText = '收起上下文';
        // 调整上下文的上半部分位置
        const logConsoleList = document.getElementById('logConsoleList');
        const parentElementAbsPoi = getAbsolutePoi(parentElement);
        const prevCtxElement = document.getElementsByClassName('log-context-prevs')[0];
        if (prevCtxElement) {
          prevCtxElement.style.top = parentElementAbsPoi.top - prevCtxElement.offsetHeight + 'px';
          prevCtxElement.style.left = logConsoleList.left + 20 + 'px';
          prevCtxElement.style.width = logConsoleList.offsetWidth + 'px';
        }
        const nextCtxElement = document.getElementsByClassName('log-context-nexts')[0];
        if (nextCtxElement) {
          nextCtxElement.style.top = parentElementAbsPoi.top + 20 + 'px';
          nextCtxElement.style.left = logConsoleList.left + 20 + 'px';
          nextCtxElement.style.width = logConsoleList.offsetWidth + 'px';
        }
        document.getElementsByClassName('log-console-msg-context')[0].onclick = e => {
          // 阻止冒泡即避免触发绑定到全局 Document 的事件
          e.stopPropagation();
          if (e.target.classList.contains('more-context-prev') || e.target.classList.contains('more-context-next')) {
            const cbs = this.events.get('contextMore');
            if (!cbs) return;
            cbs.forEach(cb => {
              cb(this.renderContextFn);
            })
          }
        }
      }
    }
  }

  formatLogs () {
    const options = this.options;
    return this.logs.map(log => {
      const item = {
        content: [],
        parsedField: [],
        streams: Object.entries(log[2]).map(([k, v]) => [k, v]),
      };
      item.content[0] = log[0];
      item.content[1] = log[1];
      const tsFormatString = dayjs(log[0] / 1000000).format('YYYY-MM-DD hh:mm:ss.ms');
      if (options.useTimestamp) {
        item.content[1] = tsFormatString + ' ' + log[1];
      }
      item.parsedField[0] = ['ts', tsFormatString];
      item.parsedField[1] = ['tsNs', log[0]];

      // 精准匹配搜索字符并高亮
      if (options.search) {
        if (item.content[1].indexOf(options.search) > -1) {
          item.content[1] = item.content[1].replaceAll(options.search, `<mark>${options.search}</mark>`);
        }
      }
      return item;
    })
  }

  bindEvents () {
    // 全局点击，用于关闭上下文弹窗（
    const _this = this;
    document.onclick = function () {
      _this.hideRenderedLogContext();
    }

    // 全局委托事件
    const eventDelegation = (e) => {
      // 单条日志点击事件和动效
      if (e.target.classList.contains('log-console-item-msg-text')) {
        // 日志详情展开
        const nextElementSibling = e.target.parentElement.nextElementSibling;
        if (nextElementSibling && nextElementSibling.classList.contains('collapsed')) {
          nextElementSibling.classList.remove('collapsed');
        } else {
          e.target.parentElement.nextElementSibling.classList.add('collapsed');
        }
        // 箭头
        const parentElement = e.target.parentElement;
        if (parentElement && parentElement.classList.contains('log-console-item-msg')) {
          parentElement.childNodes.forEach(node => {
            if (node.tagName === 'SPAN' && node.classList.contains('log-console-item-msg-arrow')) {
              if (node.classList.contains('collapsed')) {
                node.classList.remove('collapsed');
              } else {
                node.classList.add('collapsed');
              }
            }
          })
        }
      }
      // 单条日志的展开上下文操作
      if (e.target.classList.contains('log-console-item-msg-context')) {
        if (e.target.classList.contains('collapsed')) {
          this.hideRenderedLogContext();
          return;
        }

        const renderFn = this.renderLogContext(e.target);
        const log = this.logs[Number(e.target.getAttribute('data-key'))];
        const cbs = this.events.get('context');
        this.renderContextFn = renderFn;
        this.renderContextLog = log;
        if (!cbs) return;
        cbs.forEach(cb => {
          // log[0] 和 log[1] 是原始 log 对象，而 log[2] 来自 stream 对象
          cb(renderFn, { log: [log[0], log[1]], stream: log[2] });
        });
      }

      if (e.target.getAttribute('data-action') === 'filter') {
        const parentElement = findParentElement(e.target, 'log-console-btn');
        const filterDesc = parentElement.getAttribute('data-desc');
        if (filterDesc) {
          // 从这里使用 - 分离 filterDesc
          // 所有事件类型的结构是 eventType - action - value
          // 例如 filter 这里是 filter - for | out - value
          const pubs = filterDesc.split('$$');
          const cbs = this.events.get('filter');
          if (!cbs) return;
          cbs.forEach(cb => {
            cb({
              type: pubs[0],
              action: pubs[1],
              key: pubs[2],
              value: pubs[3],
            });
          })
        }
      }

      if (e.target.getAttribute('data-input')) {
        const buildInAction = e.target.getAttribute('data-input');
        const actionStatus = e.target.checked;
        switch (buildInAction) {
          case 'timestamp':
            this.setLoading(true);
            setTimeout(() => {
              this.renderState({ useTimestamp: actionStatus });
              this.setLoading(false);
            }, 300)
            break;
          case 'unique-label':
            // 暂时不提供该功能
            // this.renderState({ useUniqueLabel: actionStatus });
            break;
          case 'wrap-lines':
            this.setLoading(true);
            this.options = { ...this.options, ...{ useWrapLines: actionStatus } };
            // 换行仅涉及 className 修改因此性能较高
            this.logRenderWithWrapLines(actionStatus);
            setTimeout(() => {
              this.setLoading(false);
            }, 300);
            break;
        }
      }

      if (e.target.classList.contains('more-context-prev') || e.target.classList.contains('more-context-next')) {
        const cbs = this.events.get('context');
        if (!cbs) return;
        console.info(cbs, this.renderContextFn, this.renderContextLog);
        cbs.forEach(cb => {
          // log[0] 和 log[1] 是原始 log 对象，而 log[2] 来自 stream 对象
          cb(this.renderContextFn, { log: [this.renderContextLog[0], this.renderContextLog[1]], stream: this.renderContextLog[2] });
        });
      }
    }
    this.app.onclick = eventDelegation;
  }

  setLoading (bool) {
    const logConsoleLoading = document.getElementById('logConsoleLoading');
    if (!logConsoleLoading) throw ReferenceError('logConsoleLoading 节点不存在，请实例化以后调用该方法');
    if (bool) {
      const top = document.documentElement.scrollTop + (window.innerHeight / 2) + 'px';
      const left = window.innerWidth / 2 + 'px';
      logConsoleLoading.innerHTML = LogConsoleLoadingArt({ style: `top: ${top}; left: ${left};` });
    } else {
      logConsoleLoading.innerHTML = '';
    }
  }
}

export default App;
