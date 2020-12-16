import Vue from 'vue';
import IndexCtor from './index.vue';

class App {
  constructor (id, options = {}) {
    const app = document.getElementById(id);
    if (!app) {
      throw new ReferenceError(`id 名为 ${id} 的节点不存在`);
    }

    // 初始化
    this.$instance = new (Vue.extend(IndexCtor))({
      el: document.createElement('div')
    });
    app.appendChild(this.$instance.$el);
  }
}

export default App;
