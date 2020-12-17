import IndexArt from './index.art';
import LogContextArt from './components/LogContextPop.art';
import './styles/index.scss';

import { findParentElement } from './utils/index';

class App {
  constructor (id, options = {}) {
    this.app = document.getElementById(id);
    if (!this.app) {
      throw new ReferenceError(`id 名为 ${id} 的节点不存在`);
    }
  }

  setState(data) {
    return new Promise((resolve, reject) => {
      try {
        this.render(this.createTemplateString(data));
        this.setEvents();
        resolve();
      } catch (err) {
        reject(err);
      }
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
          const LogContextTemplateString = LogContextArt({
            prevs: [
              { msg: '2020-12-16 16:18:24.645 [INFO ] [main] [org.springframework.boot.web.embedded.tomcat.TomcatWebServer][206] - Tomcat started on port(s): 8081 (http) with context path ' },
              { msg: '2020-12-16 16:18:22.783 [INFO ] [main] [org.springframework.jmx.export.annotation.AnnotationMBeanExporter][433] - Registering beans for JMX exposure on startup' }
            ],
            nexts: [
              { msg: '2020-12-16 16:18:24.645 [INFO ] [main] [org.springframework.boot.web.embedded.tomcat.TomcatWebServer][206] - Tomcat started on port(s): 8081 (http) with context path ' },
              { msg: '2020-12-16 16:18:22.783 [INFO ] [main] [org.springframework.jmx.export.annotation.AnnotationMBeanExporter][433] - Registering beans for JMX exposure on startup' }
            ]
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
