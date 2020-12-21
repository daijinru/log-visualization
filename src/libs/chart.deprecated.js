import dayjs from 'dayjs';

const echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/dataZoom');

export default function setChart (dataSource = {}) {
  // TODO 日志数据 dataSource 尚未处理
  // 此处是模拟效果图
  const chart = echarts.init(document.getElementById('logLineChart'));
  // 模拟时间库
  let base = new Date('2020-12-17').getTime();
  const date = [];
  const data = [];

  for (var i = 1; i < 1000; i++) {
      const now = new Date(base += (1000));
      date.push(dayjs(now).format('HH:mm:ss'));
      data.push(Math.floor(Math.random() * 10000));
  }
  chart.setOption({
    grid: {
      top: 20,
      left: 50,
      bottom: 40,
      right: 0,
    },
    tooltip: {
      trigger: 'axis',
      position: function (pt) {
          return [pt[0], '10%'];
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: date
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%']
    },
    dataZoom: [{
      type: 'inside',
      start: 0,
      end: 10
    }, {
      start: 0,
      end: 10,
      handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
      handleSize: '80%',
      handleStyle: {
        color: '#fff',
        shadowBlur: 3,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffsetX: 2,
        shadowOffsetY: 2
      }
    }],
    series: [
      {
        name: '访问数',
        type: 'bar',
        smooth: true,
        symbol: 'none',
        sampling: 'average',
        itemStyle: {
            color: 'rgb(123, 176, 126)'
        },
        data: data
      }
    ]
  })
}