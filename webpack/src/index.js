import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
import Data from './data.xml'
import printme from './print.js' //引入js文件
import printMe from './print.js';

function component(){
    var element = document.createElement('div')
    element.innerHTML = _.join(['hello','webpack'],'')
    element.classList.add('hello')
    var myIcon = new Image();
    myIcon.src = Icon
    element.appendChild(myIcon)
    console.log(Data)
    var btn = document.createElement('div')
    btn.innerHTML = 'click me!!!'
    btn.onclick = printme
    element.appendChild(btn)

    return element
}
document.body.appendChild(component())

if(module.hot){
    module.hot.accept('./print.js',function(){
        console.log("accepting the updated printMe module!");
        printMe();
    })
}