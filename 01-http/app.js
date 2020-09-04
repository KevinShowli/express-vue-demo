const http = require('http')
const url = require('url')
const tools = require('./modules/tools')
// request  客户端请求
// response  服务端响应
  http.createServer((req, res) => {

  // let params = url.parse(req.url, true).query
  res.writeHead(200, {"Content-type":"text/html;charset='utf-8'"});
  let url = tools.formatApi('/123')
  res.write(url)
  
  res.end();

}).listen(3000)




