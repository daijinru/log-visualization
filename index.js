import App from './src/index.js';

const app = new App('log-visual-app');

app.setState({
  name: 'art template',
  logs: [
    { msg: '2020-12-16 16:18:24.645 [INFO ] [main] [org.springframework.boot.web.embedded.tomcat.TomcatWebServer][206] - Tomcat started on port(s): 8081 (http) with context path ' },
    { msg: '2020-12-16 16:18:22.783 [INFO ] [main] [org.springframework.jmx.export.annotation.AnnotationMBeanExporter][433] - Registering beans for JMX exposure on startup' }
  ]
})
