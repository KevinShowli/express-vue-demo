# Node.js

### 是什么
+ nodejs是一个js运行时环境，能够解析js代码
+ 不是语言，不是库，不是框架

+ node提供了一些服务器级别的操作的api：（web服务器开发）
  + 文件读写
  + 网路服务的构建
  + 网络通信
  + http服务器

+ 主要就是学习api的用法

+ node有事件驱动，非阻塞IO模型（异步）的特性，使得它轻量和高效

### http
+ Content-Type
  + 在服务端默认发送的数据，是utf-8编码，浏览器默认按照当前操作系统的默认编码去解析，中文是gbk，HTTP协议中的Content-type就是用来告诉对方我给你发送的数据内容是什么类型的。
    + res.setHeader('Content-Type', 'text/plain; charset=utf-8') (中文--普通文本，text/plain)
    + 如果是html的文本
      + res.setHeader('Content-Type', 'text/html; charset=utf-8')

+ tool.oschina.net

### 代码分号问题
+ 当一行代码以：
  + (
  + [
  + `
  开头的时候，需要在前面不上一个分号，用以避免一些语法解析错误
  
### 优先从缓存加载

### node热更新
nodemon 
``` shell
npm install --global nodemon

nodemon app.js
```
### express获取表单post请求体数据
express中没有内置的方法，
``` shell
npm i --save body-parser
```
只要加入这个配置，则在req请求对象上会多出来一个属性：body
req.body 

``` javascript
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
```
### get 请求参数获取  req.query


### MongoDB 
+ 关系型数据库和非关系型数据库
  + 表就是关系或表与表之间存在关系
  + 非关系型数据库没有表的概念
+ MongoDB是非关系型数据库
  + 数据库---数据库
  + 数据表---集合
  + 表记录---文档对象
+ MongoDB不需要设计表结构，可以任意存储数据。
  + 安装后在安装盘根目录新建data/db文件夹用于存储，才能开启成功。
  + mongod 开启数据库

### node中操作数据库
+ 官方的mongodb包（开发项目时一般不用）
 `cnpm i mongodb --save`
+ 使用第三方的mongoose包来操作数据库





