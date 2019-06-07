import Cookies from 'js-cookie'

const setCookie = (name,roleId,day) =>{
    Cookies.set("edenName", name, { expires: day })
    Cookies.set("edenRole", roleId, { expires: day })
    return
}

const removeCookie = ()=>{
    Cookies.remove('edenName'); 
    Cookies.remove('edenRole'); 
    return
}

const getCookie = (data) =>{
    switch (data) {
        case "edenRole":
            return Cookies.get("edenRole");
            break;
        case "edenName":
            return Cookies.get("edenName");
            break;
        default:
            break;
    }
}

export { setCookie , removeCookie, getCookie }
