const express = require('express');
const fs = require('fs')
// 相当于http.createServer
const app = express();
const port = 3000;


// 开放资源、公共文件夹
app.use('/public/', express.static('./public/'))
app.use('/static/', express.static('./static/'))


app.get('/', (req, res) => {
  fs.readFile('./my.json', 'utf8', (err, data) => {
    if (err) {
      return res.send('Server error.')
    }
  
    // let students = JSON.parse(data);
    res.send(data)
  })
});

app.get('/hello', (req, res) => {
  res.send('中文');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

