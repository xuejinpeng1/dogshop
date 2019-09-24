//app.js 服务器端项目
//1.下载第三方模块
//2.将第三方模块引入到当前程序中
const express = require("express");
const session = require("express-session");
const cors = require("cors")
const mysql = require("mysql")
//3.创建数据库连接池
var pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  port: 3306,
  connectionLimit: 20,
  database: "pet"
})
//4:创建web服务器监听 8080 端口
var server = express();
server.listen(8080);
//5:处理跨域 cors 
//5.1：配置允许访问程序地址(脚手架)
//     http://127.0.0.1:5050  (ok)
//     http://localhost:5050
//5.2:每请求是否验证true
server.use(cors({
  origin: ["http://127.0.0.1:3001", "http://localhost:3001"],
  credentials: true
}))

//6配置session
//# session配置一定要在所有请求之前
server.use(session({
  secret: "128位字符串",//安全字符串
  resave: true,//每次请求保存数据
  saveUninitialized: true//保存初始化数据
}))

//7.配置静态目录
//http://127.0.0.1:8080/01.jpg
server.use(express.static("public"))


//功能一:完成用户登录
//启动服务器app.js/启动数据库
//打开浏览器
//http://127.0.0.1:8080/login?uname=tom&upwd=123
//http://127.0.0.1:8080/login?uname=tom&upwd=122


server.get("/csl1", (req, res) => {
  pool.query('select * from carousel1', (err, result) => {
    if (err) throw err;
    res.send(result)
    // console.log(result)
  })
})

server.get("/csl2", (req, res) => {
  pool.query('select * from carousel2', (err, result) => {
    if (err) throw err;
    res.send(result)
    // console.log(result)
  })
})

server.get("/login", (req, res) => {
  //6.1:接收网页传递数据 用户名和密码
  var u = req.query.uname;
  var p = req.query.upwd;
  //6.2:创建sql
  var sql = "SELECT id FROM pet_login";
  sql += " WHERE uname = ? AND upwd = ?";
  //6.3:执行sql语句并且获取返回结果
  pool.query(sql, [u, p], (err, result) => {
    //6.4:判断登录是否成功
    if (err) throw err;
    //6.5:将结果返回网页
    // console.log(result)
    if (result.length == 0) {
      res.send({ code: -1, msg: "用户名或密码有误" })
    } else {
      //获取当前登陆用户id
      //result=[{id:2}]
      // var uid = result[0].uid;
      // console.log(id)
      //将用户id保存session对象中
      //uid当前登录：用户凭证
      // req.session.id = result[0].id;
      // console.log(req.session)
      res.send(result)
    }
  })
})

server.get("/sale", (req, res) => {
  pool.query('select ptype,sp_price,sp_price2,sp_address,sp_img,sp_video from shop_pet where bright=?', ["特价"], (err, result) => {
    if (err) throw err;
    res.send(result)
  })
})
server.get("/new", (req, res) => {
  pool.query('select ptype,sp_price,sp_img,sp_video from shop_pet', (err, result) => {
    if (err) throw err;
    res.send(result)
    // console.log(result)
  })
})
server.get("/better", (req, res) => {
  pool.query('select ptype,sp_price,sp_price2,sp_address,sp_img,sp_video from shop_pet where bright=?', ["精品"], (err, result) => {
    if (err) throw err;
    res.send(result)
    console.log(result)
  })
})
server.get("/best", (req, res) => {
  pool.query('select ptype,sp_price,sp_price2,sp_address,sp_img,sp_video from shop_pet where bright=?', ["高端"], (err, result) => {
    if (err) throw err;
    res.send(result)
<<<<<<< Updated upstream
    console.log(result)
=======
    // console.log(111)
    // console.log(result)
>>>>>>> Stashed changes
  })
})

// shop 活跃商家
server.get("/shop1", (req, res) => {
  pool.query('select * from shop_info', (err, result) => {
    if (err) throw err;
    res.send(result)
    // console.log(result)
  })
})

<<<<<<< Updated upstream
server.get("/dog", (req, res) => {
  pool.query('select * from dog', (err, result) => {
    if (err) throw err;
    console.log(111)
=======
server.get("/dog",(req,res)=>{
  pool.query('select * from dog',(err,result)=>{
    if(err)throw err;
    // console.log(111)

>>>>>>> Stashed changes
    res.send(result)
    // console.log(result)
  })
})

server.get("/wyd",(req,res)=>{
  var $id=req.query.id
  console.log($id)
  pool.query('select * from pet_login where id=?',[$id],(err,result)=>{
    if(err)throw err;
    // console.log(result)
    res.send(result)
  })
})