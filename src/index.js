import dayjs from 'dayjs';
import IndexArt from './index.art';
import LogContextArt from './components/LogContextPop.art';
import LogConsoleListArt from './components/LogConsoleList.art';
import './styles/index.scss';
import { findParentElement } from './utils/index';
import setChart from './libs/chart';

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
    this.options = { ...defaults, ...options };
    // 初始化阶段先渲染日志界面
    this.app.innerHTML = IndexArt({
      options: this.options
    });
    window.LogVisualComp = this;
  }

  // 异步请求取回的新日志数据调用该方法
  setState(data) {
    this.logs = [].concat(data.logs);
    this.renderState();
    this.setEvents();
    // 默认关闭柱状图
    if (this.options.useChart) {
      setChart(this.logs);
    }
  }

  renderState () {
    const logConsoleListElement = document.getElementById('logConsoleList');
    if (!logConsoleListElement) throw new ReferenceError('日志挂载的节点不存在！');
    logConsoleListElement.innerHTML = LogConsoleListArt(
      this.formatLogs()
    );
  }

  formatLogs (options = {}) {
    options = { ...this.options, ...options };
    return this.logs.map(log => {
      if (options.useTimestamp) {
        if (log[0] && typeof log[0] === 'string') {
          const tsString = dayjs(log[0]).format('YYYY-MM-DD hh:mm:ss.ms')
          log[1] = tsString + ' ' + log[1]
        }
      }
      return log
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
    })
  }
}

export default App;
