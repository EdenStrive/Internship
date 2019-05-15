const koa = require('koa');
const router = require('./router')

//实例化koa
const app = new koa();
router(app)

//----------
const port = 5000;

app.listen(port ,() =>{
    console.log(`server on ${port}`)
});