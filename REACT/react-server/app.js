const koa = require('koa');
const Router = require('koa-router');
const query = require('./app/mysql'); //sql查询

//实例化koa
const app = new koa();
const router = new Router();

//路由
router.get('/x', async ctx=>{
    let sql = "SELECT * FROM blog_user"
    await query.query(sql).then(res => {
        ctx.body = {msg:"yonghu",value:JSON.parse(JSON.stringify(res))}
    })
})

//配置路由
app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 5000;

app.listen(port ,() =>{
    console.log(`server on ${port}`)
});