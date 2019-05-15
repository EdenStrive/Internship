const Router = require('koa-router');
const router = new Router();
const query = require('./app/mysql'); //sql查询

router.use(async (ctx,next)=>{
    ctx.set('Access-Control-Allow-Origin','*') //在这里进行全局跨域
    await next()
})
//---------------------------------------具体方法
async function index(ctx){
    let sql = "SELECT * FROM blog_user"
    await query.query(sql).then(res => {
        ctx.body = {msg:"yonghu",value:JSON.parse(JSON.stringify(res))}
    })
}

//-----------------------------------------路由  
module.exports = app => {

    router.get('/',index)
    
    app.use(router.routes()).use(router.allowedMethods());
}

