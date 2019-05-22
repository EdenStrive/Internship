import axios from 'axios'
const host = 'http://10.12.28.177:5000'

//获取博文技术栈
const getIntroduce = () => axios.get(host + "/")

//获取心的情况以及点心的次数
const getLike = (ip) => {
    return axios.post(host + '/like', {
                Ip:ip
        })
}

//获取心心数量
const getLnumber = () => axios.get(host + "/count")

//新增用户ip以及地理位置
const inserLike = (ip,position) =>{
    return axios.post(host+'/inserL',{
        Ip : ip,
        Position: position
    })
}

//获取首页两票博文
const getNarticle = ()=> axios.get(host + "/newA");

export { getIntroduce , getLike , getLnumber , inserLike , getNarticle}