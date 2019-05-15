import axios from 'axios'
const host = 'http://127.0.0.1:5000'

const getIntroduce = () =>{
    axios.get(host + "/")
        .then((res) =>{
            console.log(res)
        })
        .catch((err)=>{
            console.log("err:"+err)
        })
}

export { getIntroduce }