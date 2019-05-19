const koa = require('koa');
const bodyParser = require('koa-bodyparser') //安装中间件，对于post请求：koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中
const router = require('./router')
const cors = require('koa2-cors');

//实例化koa
const app = new koa();
app.use(bodyParser())
//跨域
app.use(cors({
    origin: function () {
        return "*"; // 允许来自所有域名请求
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

router(app)

//----------
const port = 5000;

app.listen(port ,() =>{
    console.log(`server on ${port}`)
});