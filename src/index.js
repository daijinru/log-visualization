const template = require('./templates/index.art');
const html = render();

class App {
  constructor (id, options = {}) {
    const app = document.getElementById(id);
    if (!app) {
      throw new ReferenceError(`id 名为 ${id} 的节点不存在`);
    }
    const html = require('./templates/index.art')();
    app.innnerHTML = html;
  }
}

export default App;
