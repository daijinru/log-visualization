import dayjs from 'dayjs';
import IndexArt from './index.art';
import LogContextArt from './components/LogContextPop.art';
import './styles/index.scss';
import { findParentElement } from './utils/index';

const echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/dataZoom');

const defaults = {
  chart: false,
}
class App {
  constructor (id, options = {}) {
    this.app = document.getElementById(id);
    this.logs = [];
    if (!this.app) {
      throw new ReferenceError(`id 名为 ${id} 的节点不存在`);
    }
    this.options = { ...defaults, ...options };
    window.LogVisualComp = this;
  }

  setState(data) {
    return new Promise((resolve, reject) => {
      try {
        this.logs = [].concat(data.logs);
        this.render(this.createTemplateString(data));
        this.setEvents();
        this.setChart();
        resolve();
      } catch (err) {
        reject(err);
      }
    })
  }

  setChart () {
    if (!this.options.chart) return;
    const chart = echarts.init(document.getElementById('logLineChart'));
    chart.style.display = 'block';
    // 模拟时间库
    let base = new Date('2020-12-17').getTime();
    const date = [];
    const data = [];

    for (var i = 1; i < 1000; i++) {
        const now = new Date(base += (1000));
        date.push(dayjs(now).format('HH:mm:ss'));
        data.push(Math.floor(Math.random() * 10000));
    }
    chart.setOption({
      grid: {
        top: 20,
        left: 50,
        bottom: 40,
        right: 0,
      },
      tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
      },
      dataZoom: [{
        type: 'inside',
        start: 0,
        end: 10
      }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
          color: '#fff',
          shadowBlur: 3,
          shadowColor: 'rgba(0, 0, 0, 0.6)',
          shadowOffsetX: 2,
          shadowOffsetY: 2
        }
      }],
      series: [
        {
          name: '访问数',
          type: 'bar',
          smooth: true,
          symbol: 'none',
          sampling: 'average',
          itemStyle: {
              color: 'rgb(123, 176, 126)'
          },
          data: data
        }
      ]
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

  listen (formSettings, callback) {

  }

  createTemplateString (data) {
    return IndexArt(data);
  }

  render (templateString) {
    this.app.innerHTML = templateString;
  }
}

export default App;
