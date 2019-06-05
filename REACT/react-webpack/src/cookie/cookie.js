//cookie的简单封装 最终放弃使用自己封装的cookie ，选择了js-cookie，它考虑的更全面，兼容性和安全性都更好
const setCookie = ( name , value , day )=>{
    let xDate = new Date()
    xDate.setDate(xDate.getDate()+day)
    document.cookie =name+"="+value+";expires=" + xDate
}

const getCookie = (name) =>{
    let value = document.cookie
    let array = value.split(";")
    console.log(name,array)
    for (let index = 0; index < array.length; index++) {
        let array1 = array[index].split("=")
        console.log(array1)
        if (array1[0]==name) {
            return array1[1]
        }
    }
}

const removeCookie = (name)=>{
    setCookie(name,1,-1)
}

export {setCookie , getCookie , removeCookie}