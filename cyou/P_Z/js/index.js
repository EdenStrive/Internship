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

window.onscroll = function(){
    //页面顶部距离浏览器顶部的距离
    var scrollTop =  document.body.scrollTop || document.documentElement.scrollTop;

    for(var i=0; i<len; i++){
        if(move[i].offsetTop < seeHeight + scrollTop + 100){
            var isLeft = move[i].classList.contains('left')
            var isRight = move[i].classList.contains('right')
            if (getStyle(move[i],"animation-name") == "need" && isLeft) {
                move[i].style = "animation-name:twoMove"
            }
            if (getStyle(move[i],"animation-name") == "need" && isRight) {
                move[i].style = "animation-name:twoMove_right"
            }
        }
        
    }
}

function show(event){
    console.log(event)
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

//头部序列帧
// var iMg =[],flag = 0
// var load_img = []
// var ne_flag = 1
// for (var i = 0; i < 40; i++) {
//     load_img.push('https://event.changyou.com/wjhy/main/20190516/wujin' + (i+1) + '.jpg');
// }
// for (var x = 0; x < 40; x++) {
//     iMg[x] = new Image()
//     iMg[x].src = load_img[x]
//     iMg[x].onload = function(){
//         flag++
//         if (flag == 40) {
//             if (ne_flag == 3) {
//                 return
//             }else if (ne_flag == 1) {
//                 ne_flag = 2
//                 xuliezhen()
//             }
//         }
//     }
// }
// var xuChange = document.querySelector("#xuleizhen")
// var xuNumber = 0
// function xuliezhen(){
//     var dididi = setInterval(function(){
//         if (xuNumber > 39) {
//             xuNumber = 0
//         }
//         xuChange.style.backgroundImage = "url('"+ load_img[xuNumber] +"')"
//         xuNumber++
//     }, 100);
// }
// setTimeout(function(){
//     if (ne_flag == 1) {
//         ne_flag = 3
//         xuliezhen()
//     }
// }, 10000);
