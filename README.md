# Log Visualzation

可安装到任意 UI 库

## 使用指南

安装：
```Bash
$ npm i log-visual-comp@0.0.2
```

使用示例：
```Javascript
import App from './src/index.js';

const app = new App('log-visual-app', {
  useTimestamp: true, // 显示时间戳
  // useUniqueLabel: false, // 使用唯一标识
  // useWrapLines: false, // 当容器宽度小于日志宽度时日志会自动换行显示
  search: '2052475',
});

// 传入 Logs 数据
// 如果 Logs 数据更新再次调用本方法
app.setState({
  logs,
  stream,
})

// 监听筛选事件
app.onFilter(function (pubs) {
  console.info(pubs);
});
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
