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
    document.getElementById('log-visual-app').addEventListener('click', e => {
      console.info(e);
      if (e.target.className === 'log-console-item-msg-text') {
        const nextElementSibling = e.target.parentElement.nextElementSibling;
        if (nextElementSibling && nextElementSibling.classList.contains('collapsed')) {
          nextElementSibling.classList.remove('collapsed');
        } else {
          e.target.parentElement.nextElementSibling.classList.add('collapsed');
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
