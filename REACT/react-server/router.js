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

//获取最新的两篇博文
async function newA(ctx){
    let sql = "SELECT id,title,content,create_time FROM blog_article_detail where status=1 order by create_time desc limit 0 , 2"
    await query.query(sql).then(res => {
        ctx.body = {value:res} 
    }).catch(err => {
        console.log("错误",err) 
    }) 
} 

//获取博文总数
async function total(ctx){
    let sql = "select count(*) from blog_article_detail"
    await query.query(sql).then(res => {
        ctx.body = {value:res} 
    }).catch(err => {
        console.log("错误",err) 
    }) 
}

//获取博文one
async function blogOne(ctx){
    let sql = "SELECT id,title,content,create_time FROM blog_article_detail where status=1 order by create_time desc limit "+ctx.query.start+","+ctx.query.end
    await query.query(sql).then(res => {
        ctx.body = {value:res} 
    }).catch(err => {
        console.log("错误",err) 
    }) 
}

//获取博文详情
async function blogTwo(ctx){
    let sql ='SELECT id,title,content,create_time FROM blog_article_detail where id='+ctx.query.id
    await query.query(sql).then(res => {
        ctx.body = {value:res} 
    }).catch(err => {
        console.log("博文详情错误",err) 
    }) 
}




//-----------------------------------------路由  
module.exports = app => {

    router.get('/',index)
    router.post('/like',like)
    router.get('/count',count)
    router.post('/inserL',inserL)
    router.get('/newA',newA)
    router.get('/total',total)
    router.get('/blogOne', blogOne)
    router.get('/blogTwo', blogTwo)

    app.use(router.routes()).use(router.allowedMethods());
}

