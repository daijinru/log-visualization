import dayjs from 'dayjs';
import IndexArt from './index.art';
import LogContextArt from './components/LogContextPop.art';
import LogConsoleListArt from './components/LogConsoleList.art';
import './styles/index.scss';
import { findParentElement } from './utils/index';
import setChart from './libs/chart';
import pkg from '../package.json';

const defaults = {
  useChart: false,
  useTimestamp: false,
  useUniqueLabel: false,
  useWrapLines: false,
}
class App {
  constructor (id, options = {}) {
    this.app = document.getElementById(id);
    if (!this.app) throw new ReferenceError(`id 名为 ${id} 的节点不存在`);
    this.logs = [];
    this.stream = [];
    this.events = new Map();
    this.options = { ...defaults, ...options };
    // 初始化阶段先渲染日志界面
    this.app.innerHTML = IndexArt({
      options: this.options
    });
    window.LogVisualComp = this;
    this.version = pkg.version;
    this.author = pkg.author;
  }

  // 异步请求取回的新日志数据调用该方法
  setState(data) {
    if (!Array.isArray(data.logs)) {
      throw new TypeError('日志 logs 必须是二维数组类型：[["时间戳", "日志文本"]]');
    }
    this.logs = [].concat(data.logs);
    if (data.stream) {
      this.stream = Object.entries(data.stream).map(([k, v]) => [k, v]);
    }
    this.renderState();
    this.setEvents();
    // 默认关闭柱状图
    if (this.options.useChart) {
      setChart(this.logs);
    }
  }

  // 注册监听 filter 按钮的事件
  onFilter (cbs) {
    this.registerEvents('filter', cbs);
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
    const logConsoleListElement = document.getElementById('logConsoleList');
    if (!logConsoleListElement) throw new ReferenceError('日志挂载的节点不存在！');
    logConsoleListElement.innerHTML = LogConsoleListArt({
      logs: this.formatLogs(options),
      stream: this.stream,
    });
  }

  formatLogs (options = {}) {
    options = { ...this.options, ...options };
    return this.logs.map(log => {
      const item = {
        content: [],
        parsedField: []
      };
      item.content[0] = log[0];
      item.content[1] = log[1];
      const tsFormatString = dayjs(log[0]).format('YYYY-MM-DD hh:mm:ss.ms');
      if (options.useTimestamp) {
        item.content[1] = tsFormatString + ' ' + log[1];
      }
      item.parsedField[0] = ['ts', tsFormatString];
      item.parsedField[1] = ['tsNs', log[0]];
      return item;
    })
  }

  setEvents () {
    document.getElementById('log-visual-app').addEventListener('click', e => {
      // 单条日志点击事件和动效
      if (e.target.className === 'log-console-item-msg-text') {
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
          Array.from(document.getElementsByClassName('log-console-msg-context')).forEach(node => node.remove());
          e.target.classList.remove('collapsed');
          e.target.innerText = '展开上下文';
          return;
        }
        // 清除所有已存在的上下文弹框
        // 还原所有展开上下文按钮的文案
        Array.from(document.getElementsByClassName('log-console-msg-context')).forEach(node => node.remove());
        Array.from(document.getElementsByClassName('log-console-item-msg-context')).forEach(node => {
          node.innerText = '展开上下文';
          node.classList.remove('collapsed');
        });
        const parentElement = findParentElement(e.target, 'log-console-item');
        if (parentElement) {
          // 从 key 开始往前和往后各获取 10 条日志
          const key = Number(e.target.getAttribute('data-key'));
          const prevs = [];
          const nexts = [];
          for (let i = 1; i <= 10; i++) {
            const nextLog = this.logs[key + i];
            const prevLog = this.logs[key - (11 - i)];
            if (nextLog) {
              nexts.push(nextLog);
            }
            if (prevLog) {
              prevs.push(prevLog)
            }
          }
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
          e.target.classList.add('collapsed');
          e.target.innerText = '收起上下文';
          // 调整上下文的上半部分位置
          const prevCtxElement = document.getElementsByClassName('log-context-prevs')[0];
          if (prevCtxElement) {
            prevCtxElement.style.top = (0 - prevCtxElement.offsetHeight) + 'px';

          }
        }
      }

      if (e.target.getAttribute('data-action') === 'filter') {
        console.info(e.target);
        const parentElement = findParentElement(e.target, 'log-console-btn');
        const filterDesc = parentElement.getAttribute('data-desc');
        if (filterDesc) {
          // 从这里使用 - 分离 filterDesc
          // 所有事件类型的结构是 eventType - action - value
          // 例如 filter 这里是 filter - for | out - value
          const pubs = filterDesc.split('-');
          const cbs = this.events.get('filter');
          cbs.forEach(cb => {
            cb({
              type: pubs[0],
              action: pubs[1],
              value: pubs[2],
            });
          })
        }
      }
    })
  }
}

export default App;
