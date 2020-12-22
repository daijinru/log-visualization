import App from './src/index.js';
import mockData from './mock/mock.data';
import mockContextData from './mock/mock.data.context';

const app = new App('log-visual-app', {
  useTimestamp: true,
  useWrapLines: false,
  useContext: true,
  // search: '2052475',
});
const dataSource = mockData.response.data;

// 数组类型
app.setState(
  [
    {
      logs: dataSource.result[0].values.slice(0, 100),
      stream: dataSource.result[0].stream,
    },
    {
      logs: dataSource.result[0].values.slice(101, 200),
      stream: dataSource.result[0].stream,
    },
    {
      logs: dataSource.result[0].values.slice(201, 300),
      stream: dataSource.result[0].stream,
    },
  ]
)

// 对象类型
// app.setState(
//   {
//     logs: dataSource.result[0].values,
//     stream: dataSource.result[0].stream,
//   },
// )
app.onFilter(function (pubs) {
  console.info(pubs);
});
app.regRenderContext(function (render) {
  // 模拟请求上下文
  setTimeout(() => {
    render(mockContextData.prevs, mockContextData.nexts);
  }, 2000);
});
// app.search('2052475');
