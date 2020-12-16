import IndexArt from './index.art';

class App {
  constructor (id, options = {}) {
    const app = document.getElementById(id);
    if (!app) {
      throw new ReferenceError(`id 名为 ${id} 的节点不存在`);
    }

    // 初始化
    const elementString = IndexArt();
    app.innerHTML = elementString;
  }
}

export default App;
