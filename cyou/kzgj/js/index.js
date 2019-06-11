//页面的可视高度
var seeHeight = document.documentElement.clientHeight;
var move = document.querySelectorAll("#needMove")
var len = move.length

//获取样式属性值
function getStyle(obj, attr) {
    if(obj.currentStyle) {    //兼容IE
      return obj.currentStyle[attr];    
    } else {    //兼容火狐谷歌
      return window.getComputedStyle(obj,false)[attr];
    }
}

//获取元素到页面顶部的高度
function getElementTop (el) {
　　　　var actualTop = el.offsetTop
　　　　var current = el.offsetParent
　　　　while (current !== null) {
            actualTop += current.offsetTop
　　　　　　current = current.offsetParent
　　　　}
　　　　return actualTop
}

window.onscroll = function(){
    //页面顶部距离浏览器顶部的距离
    var scrollTop =  document.body.scrollTop || document.documentElement.scrollTop;
    for(var i=0; i<len; i++){
        if(getElementTop(move[i]) < seeHeight + scrollTop){
            var isLeft = move[i].classList.contains('left')
            var isRight = move[i].classList.contains('right')
            if (getStyle(move[i],"animation-name") == "need" && isLeft) {
                move[i].style = "animation-name:twoMove;-webkit-animation-name:twoMove"
            }
            if (getStyle(move[i],"animation-name") == "need" && isRight) {
                move[i].style = "animation-name:twoMove_right;-webkit-animation-name:twoMove_right"
            }
        }
        
    }
}

function show(event){
    if (event.target.currentSrc) {
        var bigdiv = "<div class='quanping' onclick='hide()'><img src='"+event.target.currentSrc+"'><div class='black' style='top: 0px;'></div></div>"
        document.querySelector(".xwp_zheyan").innerHTML = bigdiv        
    }else{
        return
    }
}
function hide(){
    document.querySelector(".xwp_zheyan").innerHTML = null
}
