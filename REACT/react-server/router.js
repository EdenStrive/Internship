const Router = require('koa-router');
const router = new Router();
const query = require('./app/mysql'); //sql查询


//---------------------------------------具体方法
//获取博文技术栈
async function index(ctx){
    let sql = "SELECT * FROM blog_introduce"
    await query.query(sql).then(res => {
        ctx.body = {value:res} 
    }).catch(err => {
        console.log("错误",err) 
    }) 
} 

//查询ip是否在数据库中
async function like(ctx){
    let sql = "SELECT * FROM blog_like where ip='"+ctx.request.body.Ip+"'";
    await query.query(sql).then(res => {
        ctx.body = {isLike:res.length}
    }).catch(err =>{
        console.log("获取小心心出错".err)
    })
}

//获取点赞总数
async function count(ctx){
    let sql1 = "SELECT COUNT(*) FROM blog_like";
    await query.query(sql1).then(res => {
        ctx.body = {namber:res[0]["COUNT(*)"]}
    }).catch(err =>{
        console.log("获取小心心出错".err)
    })
}

//点赞添加
async function inserL(ctx){
    let ip = ctx.request.body.Ip
    let position = ctx.request.body.Position
    // console.log(ip)
    let sql = "INSERT INTO blog_like (ip,position) VALUES('"+ip+"','"+position+"')"
    await query.query(sql).then(res => {
        ctx.body = { data: "感谢点赞o(￣▽￣)ｄ"}
    }).catch(err =>{
        console.log("点赞添加出错：".err)
    })

}

//-----------------------------------------路由  
module.exports = app => {

    router.get('/',index)
    router.post('/like',like)
    router.get('/count',count)
    router.post('/inserL',inserL)

    app.use(router.routes()).use(router.allowedMethods());
}

