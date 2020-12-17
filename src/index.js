import IndexArt from './index.art';
import './styles/index.scss';

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
    // 单条日志点击事件和动效
    document.getElementById('log-visual-app').addEventListener('click', e => {
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
