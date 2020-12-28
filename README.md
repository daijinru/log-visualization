# Log Visualzation

可安装到任意 UI 库

## 使用指南

安装：
```Bash
$ npm i log-visual-comp
```

使用示例：
```Javascript
import App from 'log-visual-comp';

// 实例化和默认配置
// 当日志渲染后可到上方操作区修改配置，并且该配置将保留到下一批数据，除非重新实例化
const app = new App('log-visual-app', {
  useTimestamp: true, // 显示时间戳
  useWrapLines: true, // 当容器宽度小于日志宽度时日志会自动换行显示
  useContext: true, // 打开查看每条日志上下文的按钮
  search: '2052475',
});

// 传入 Logs 数据
// 如果 Logs 数据更新再次调用本方法
app.setState({
  logs,
  stream,
})

// 并且也支持多个输入源的数组，logs 将被合并并且正序排序
app.setState(
  [
    {
      logs,
      stream,
    },
    {
      logs,
      stream,
    },
    {
      logs,
      stream,
    },
  ]
)

// 在回调事件中添加 loading 效果
app.setLoading(true);
http.req(data => {
  app.setState(data);
  app.setLoading(false);
})

// 监听筛选事件
app.onFilter(function (pubs) {
  console.info(pubs);
  // 通常筛选结束后会再次请求数据并重新 setState()
});

// 注册上下文渲染回调
// 需要实例化时打开 useContext: true
// log 和 stream 分别来自传入的 log 对象和 stream 对象
app.regRenderContext(function (render, { log, stream }) {
  // 模拟请求上下文
  app.setLoading(true);
  setTimeout(() => {
    // prevs 和 nexts 分别是二维数组类型的 log: [Timestamp, Text]
    render(mockContextData.prevs, mockContextData.nexts);
    app.setLoading(false);
  }, 2000);
});

// 搜索并高亮结果
app.search('some str');
```

## 开发指南

启动开发服务：
```Bash
# 安装
$ npm i
# 启动开发服务
$ npm start
```

编译到静态文件：
```Bash
$ npm run build
```

发布到 NPM 仓库：
```Bash
# 需事先在本地配置 NPM 帐户
$ npm run publish
```
