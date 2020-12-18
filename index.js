import App from './src/index.js';
import mockData from './mock.data';

const app = new App('log-visual-app', {
  useTimestamp: true,
});
const dataSource = mockData.response.data;
app.setState({
  logs: dataSource.result[0].values,
  stream: dataSource.result[0].stream,
})
