
$(".sw-sel").click(function() {
	$(".sw-sel").removeClass("on");
	$(this).addClass("on");
})

$(".sw-sel").click(function() {
	var index = $(this).index();
	switch(index) {
		case 0:
			$(".device").removeClass("on");
			$("#device1").addClass("on");
			$(".bg3").css("background", "url(//i0.cy.com/ldjsy/mobile/2019/0104/bg3.jpg)");
			break;
		case 1:
			$(".device").removeClass("on");
			$("#device2").addClass("on");
			$(".bg3").css("background", "url(//i0.cy.com/ldjsy/mobile/2019/0104/bg3.jpg)");
			break;
		case 2:
			$(".device").removeClass("on");
			$("#device3").addClass("on");
			$(".bg3").css("background", "url(//i0.cy.com/ldjsy/mobile/2019/0104/bg3.jpg)");
			break;
		case 3:
			$(".device").removeClass("on");
			$("#device4").addClass("on");
			$(".bg3").css("background", "url(//i0.cy.com/ldjsy/mobile/2019/0104/bg3.jpg)");
			break;
		case 4:
			$(".device").removeClass("on");
			$("#device5").addClass("on");
			$(".bg3").css("background", "url(//i0.cy.com/ldjsy/mobile/2019/0104/bg3.jpg)");
			break;
		case 5:
			$(".device").removeClass("on");
			$("#device6").addClass("on");
			$(".bg3").css("background", "url(//i0.cy.com/ldjsy/mobile/2019/0104/bg3.jpg)");
			break;
		default:
			break;
	}
})

// 综合

// function getNews(){
// 	var url = '/ldjsy/multiple/multiple.shtml';
// 	$.ajax({
// 		url:url,
// 		type : "GET",
// 		dataType : "html",
// 		cache : "false",
// 		success:function(data){
// 			var obj = $(data);
// 			var list = obj.find("div.center > div.new:lt(5)");
// 			if(data && list && list.length){
// 				createList(list);
// 			}
// 		}
// 	})
	
// }

// function createList(list){
// 	var str = '';
// 	list.each(function(index,el){
// 		var link,title,newType,alight,time;
// 		link = $(el).find('a').attr('href');
// 		title = $(el).find('a').attr('tit');
// 		newType = $(el).find('.icon').html();
// 		time = $(el).find('.time').html();
// 		link = link.replace('/ldjsy/','/m/article.shtml?id=/ldjsy/')
// 		if(newType == '新闻'){
// 			alight = 'strong1'
// 		}else if(newType == '公告'){
// 			alight = 'strong2'
// 		}else if(newType == '活动'){
// 			alight = 'strong3'
// 		}
// 		else if(newType == '攻略'){
// 			alight = 'strong4'
// 		}
// 		str += '<li class="new_list">\
// 					<span>'+ time +'</span>\
// 	                <strong class="'+ alight +'">'+ newType +'</strong>\
// 	                <a href="'+ link +'" target="_blank" title="'+ title +'">'+ title +'</a>\
// 				</li>'
// 	})
// 	$(".new_box").html(str);
// }
// getNews();

//音频
var audio = document.getElementById('music');
//如果是和h5在微信交互的话
document.addEventListener("WeixinJSBridgeReady", function () {audio.play();}, false);   
var window_first=true;
$(window).bind("touchstart",function(){
	if(window_first==true){
    	audio.play();
		window_first=false;
	}
});


var musicBtn= document.getElementById('musicBtn');
musicBtn.addEventListener('mousedown',clickMusic)
function clickMusic(e){
	window_first=false;
	e.stopPropagation();
	
    if($(this).hasClass('pause')){
        $(this).removeClass('pause');
        audio.play();
	
		//alert('play')
    }else{
        $(this).addClass('pause');
		//alert('pause')
		
        audio.pause();
    }

}

var js_arr = [
	["鹿鼎记PL_android_UC_UC1","2015712002","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015712002.apk","成都摩奇互娱科技有限公司","蜀ICP备16030064号"],
	["鹿鼎记PL_android_UC_UC2","2015712003","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015712003.apk","成都摩奇互娱科技有限公司","蜀ICP备16030064号"],
	["鹿鼎记PL_android_UC_UC3","2015712004","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015712004.apk","成都摩奇互娱科技有限公司","蜀ICP备16030064号"],
	["鹿鼎记PL_android_UC_UC4","2015712005","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015712005.apk","成都摩奇互娱科技有限公司"," 蜀ICP备16030064号"],
	["鹿鼎记PL_android_UC_UC5","2015712006","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015712006.apk","成都摩奇互娱科技有限公司"," 蜀ICP备16030064号"],
	["鹿鼎记PL_android_UC_UC6","2015712007","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015712007.apk","成都摩奇互娱科技有限公司"," 蜀ICP备16030064号"],
	["鹿鼎记PL_android_UC_UC7","2015712008","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015712008.apk","成都摩奇互娱科技有限公司"," 蜀ICP备16030064号"],
	["鹿鼎记PL_android_UC_UC8","2015712009","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015712009.apk","成都摩奇互娱科技有限公司"," 蜀ICP备16030064号"],
	["鹿鼎记PL_android_UC_UC9","2015712010","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015712010.apk","成都摩奇互娱科技有限公司"," 蜀ICP备16030064号"],
	["鹿鼎记PL_android_UC_UC10","2015712011","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015712011.apk","成都摩奇互娱科技有限公司","蜀ICP备16030064号"],
	["鹿鼎记PL_android_UC_UC11","2015712012","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015712012.apk","成都摩奇互娱科技有限公司","蜀ICP备16030064号"],
	["鹿鼎记PL_android_UC_UC12","2015712013","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015712013.apk","成都摩奇互娱科技有限公司","蜀ICP备16030064号"],
	["鹿鼎记PL_android_UC_UC13","2015712014","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015712014.apk","成都摩奇互娱科技有限公司","蜀ICP备16030064号"],
	["鹿鼎记PL_android_UC_UC14","2015712015","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015712015.apk","成都摩奇互娱科技有限公司","蜀ICP备16030064号"],
	["鹿鼎记PL_android_UC_UC15","2015712016","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015712016.apk","成都摩奇互娱科技有限公司","蜀ICP备16030064号"],
	["鹿鼎记PL_android_UC_UC16","2015712017","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015712017.apk","成都摩奇互娱科技有限公司","蜀ICP备16030064号"],
	["鹿鼎记PL_android_UC_UC17","2015712018","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015712018.apk","成都摩奇互娱科技有限公司","蜀ICP备16030064号"],
	["鹿鼎记PL_android_UC_UC18","2015712019","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015712019.apk","成都摩奇互娱科技有限公司","蜀ICP备16030064号"],
	["鹿鼎记PL_android_UC_UC19","2015712020","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015712020.apk","成都摩奇互娱科技有限公司","蜀ICP备16030064号"],
	["鹿鼎记PL_android_UC_UC20","2015712021","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015712021.apk","成都摩奇互娱科技有限公司","蜀ICP备16030064号"],
	["鹿鼎记PL_android_安卓-新浪粉丝通_粉丝通博文1","2015622004","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015622004.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_安卓-新浪粉丝通_粉丝通博文2","2015622005","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015622005.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_安卓-新浪粉丝通_粉丝通博文3","2015622006","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015622006.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_安卓-新浪粉丝通_粉丝通博文4","2015622007","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015622007.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_安卓-新浪粉丝通_粉丝通博文5","2015622008","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015622008.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_安卓-新浪粉丝通_粉丝通博文6","2015622009","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015622009.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_安卓-新浪粉丝通_粉丝通博文7","2015622010","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015622010.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_安卓-新浪粉丝通_粉丝通博文8","2015622011","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015622011.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_安卓-新浪粉丝通_粉丝通博文9","2015622012","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015622012.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_安卓-新浪粉丝通_粉丝通博文10","2015622013","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015622013.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_安卓-新浪粉丝通_粉丝通博文11","2015622019","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015622019.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_安卓-新浪粉丝通_粉丝通博文12","2015622020","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015622020.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_安卓-新浪粉丝通_粉丝通博文13","2015622021","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015622021.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_安卓-新浪粉丝通_粉丝通博文14","2015622022","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015622022.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_安卓-新浪粉丝通_粉丝通博文15","2015622023","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015622023.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_安卓-新浪粉丝通_粉丝通博文16","2015622024","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015622024.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_安卓-新浪粉丝通_粉丝通博文17","2015622025","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015622025.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_安卓-新浪粉丝通_粉丝通博文18","2015622026","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015622026.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_安卓-新浪粉丝通_粉丝通博文19","2015622027","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015622027.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_安卓-新浪粉丝通_粉丝通博文20","2015622028","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015622028.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_百度信息流_百度信息流1","2016222002","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016222002.apk","广州游城网络科技有限公司 ","粤ICP备17129481号-2 ","公司地址：广州市天河区沙太南路418号","联系号码: 020-67055432"],
	["鹿鼎记PL_android_百度信息流_百度信息流2","2016222003","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016222003.apk","广州游城网络科技有限公司 ","粤ICP备17129481号-2 ","公司地址：广州市天河区沙太南路418号","联系号码: 020-67055432"],
	["鹿鼎记PL_android_百度信息流_百度信息流3","2016222004","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016222004.apk","广州游城网络科技有限公司 ","粤ICP备17129481号-2 ","公司地址：广州市天河区沙太南路418号","联系号码: 020-67055432"],
	["鹿鼎记PL_android_百度信息流_百度信息流4","2016222005","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016222005.apk","广州游城网络科技有限公司 ","粤ICP备17129481号-2 ","公司地址：广州市天河区沙太南路418号","联系号码: 020-67055432"],
	["鹿鼎记PL_android_百度信息流_百度信息流5","2016222006","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016222006.apk","广州游城网络科技有限公司 ","粤ICP备17129481号-2 ","公司地址：广州市天河区沙太南路418号","联系号码: 020-67055432"],
	["鹿鼎记PL_android_百度信息流_百度信息流6","2016222007","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016222007.apk","广州游城网络科技有限公司 ","粤ICP备17129481号-2 ","公司地址：广州市天河区沙太南路418号","联系号码: 020-67055432"],
	["鹿鼎记PL_android_百度信息流_百度信息流7","2016222008","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016222008.apk","广州游城网络科技有限公司 ","粤ICP备17129481号-2 ","公司地址：广州市天河区沙太南路418号","联系号码: 020-67055432"],
	["鹿鼎记PL_android_百度信息流_百度信息流8","2016222009","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016222009.apk","广州游城网络科技有限公司 ","粤ICP备17129481号-2 ","公司地址：广州市天河区沙太南路418号","联系号码: 020-67055432"],
	["鹿鼎记PL_android_百度信息流_百度信息流9","2016222010","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016222010.apk","广州游城网络科技有限公司 ","粤ICP备17129481号-2 ","公司地址：广州市天河区沙太南路418号","联系号码: 020-67055432"],
	["鹿鼎记PL_android_百度信息流_百度信息流10","2016222011","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016222011.apk","广州游城网络科技有限公司","粤ICP备17129481号-2"," 公司地址：广州市天河区沙太南路418号","联系号码: 020-67055432"],
	["鹿鼎记PL_android_百度信息流_百度信息流11","2016222012","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016222012.apk","广州游城网络科技有限公司","粤ICP备17129481号-2"," 公司地址：广州市天河区沙太南路418号","联系号码: 020-67055432"],
	["鹿鼎记PL_android_百度信息流_百度信息流12","2016222013","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016222013.apk","广州游城网络科技有限公司","粤ICP备17129481号-2"," 公司地址：广州市天河区沙太南路418号","联系号码: 020-67055432"],
	["鹿鼎记PL_android_百度信息流_百度信息流13","2016222014","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016222014.apk","广州游城网络科技有限公司","粤ICP备17129481号-2"," 公司地址：广州市天河区沙太南路418号","联系号码: 020-67055432"],
	["鹿鼎记PL_android_百度信息流_百度信息流14","2016222015","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016222015.apk","广州游城网络科技有限公司","粤ICP备17129481号-2"," 公司地址：广州市天河区沙太南路418号","联系号码: 020-67055432"],
	["鹿鼎记PL_android_百度信息流_百度信息流15","2016222016","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016222016.apk","广州游城网络科技有限公司","粤ICP备17129481号-2"," 公司地址：广州市天河区沙太南路418号","联系号码: 020-67055432"],
	["鹿鼎记PL_android_百度信息流_百度信息流16","2016222017","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016222017.apk","广州游城网络科技有限公司","粤ICP备17129481号-2"," 公司地址：广州市天河区沙太南路418号","联系号码: 020-67055432"],
	["鹿鼎记PL_android_百度信息流_百度信息流17","2016222018","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016222018.apk","广州游城网络科技有限公司","粤ICP备17129481号-2"," 公司地址：广州市天河区沙太南路418号","联系号码: 020-67055432"],
	["鹿鼎记PL_android_百度信息流_百度信息流18","2016222019","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016222019.apk","广州游城网络科技有限公司","粤ICP备17129481号-2"," 公司地址：广州市天河区沙太南路418号","联系号码: 020-67055432"],
	["鹿鼎记PL_android_百度信息流_百度信息流19","2016222020","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016222020.apk","广州游城网络科技有限公司","粤ICP备17129481号-2"," 公司地址：广州市天河区沙太南路418号","联系号码: 020-67055432"],
	["鹿鼎记PL_android_百度信息流_百度信息流20","2016222021","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016222021.apk","广州游城网络科技有限公司","粤ICP备17129481号-2"," 公司地址：广州市天河区沙太南路418号","联系号码: 020-67055432"],
	["鹿鼎记PL_android_备用_备用1","2016252002","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016252002.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_备用_备用2","2016252003","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016252003.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_备用_备用3","2016252004","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016252004.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_备用_备用4","2016252005","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016252005.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_备用_备用5","2016252006","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016252006.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_备用_备用6","2016252007","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016252007.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_备用_备用7","2016252008","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016252008.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_备用_备用8","2016252009","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016252009.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_备用_备用9","2016252010","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016252010.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_备用_备用10","2016252011","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016252011.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_备用_备用11","2016252012","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016252012.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_备用_备用12","2016252013","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016252013.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_备用_备用13","2016252014","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016252014.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_备用_备用14","2016252015","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016252015.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_备用_备用15","2016252016","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016252016.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_备用_备用16","2016252017","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016252017.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_备用_备用17","2016252018","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016252018.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_备用_备用18","2016252019","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016252019.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_备用_备用19","2016252020","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016252020.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_备用_备用20","2016252021","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2016252021.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_01","2017382002","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382002.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_02","2017382003","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382003.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_03","2017382004","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382004.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_04","2017382005","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382005.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_05","2017382006","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382006.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_06","2017382007","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382007.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_07","2017382008","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382008.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_08","2017382009","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382009.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_09","2017382010","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382010.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_10","2017382011","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382011.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_11","2017382012","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382012.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_12","2017382013","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382013.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_13","2017382014","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382014.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_14","2017382015","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382015.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_15","2017382016","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382016.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_16","2017382017","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382017.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_17","2017382018","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382018.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_18","2017382019","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382019.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_19","2017382020","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382020.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_20","2017382021","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382021.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_21","2017382022","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382022.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_22","2017382023","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382023.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_23","2017382024","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382024.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_24","2017382025","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382025.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_25","2017382026","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382026.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_26","2017382027","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382027.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_27","2017382028","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382028.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_28","2017382029","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382029.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_29","2017382030","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382030.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_30","2017382031","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382031.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_31","2017382032","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382032.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_32","2017382033","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382033.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_33","2017382034","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382034.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_34","2017382035","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382035.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_35","2017382036","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382036.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_36","2017382037","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382037.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_37","2017382038","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382038.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_38","2017382039","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382039.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_39","2017382040","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382040.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_40","2017382041","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382041.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_41","2017382042","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382042.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_42","2017382043","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382043.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_43","2017382044","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382044.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_44","2017382045","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382045.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_45","2017382046","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382046.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_46","2017382047","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382047.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_47","2017382048","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382048.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_48","2017382049","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382049.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_49","2017382050","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382050.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_50","2017382051","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382051.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_51","2017382052","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382052.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_52","2017382053","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382053.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_53","2017382054","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382054.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_54","2017382055","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382055.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_55","2017382056","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382056.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_56","2017382057","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382057.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_57","2017382058","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382058.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_58","2017382059","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382059.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_59","2017382060","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382060.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_60","2017382061","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382061.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_61","2017382062","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382062.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_62","2017382063","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382063.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_63","2017382064","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382064.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_64","2017382065","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382065.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_65","2017382066","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382066.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_66","2017382067","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382067.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_67","2017382068","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382068.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_68","2017382069","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382069.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_69","2017382070","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382070.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_70","2017382071","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382071.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_71","2017382072","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382072.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_72","2017382073","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382073.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_73","2017382074","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382074.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_74","2017382075","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382075.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_75","2017382076","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382076.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_76","2017382077","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382077.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_77","2017382078","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382078.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_78","2017382079","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382079.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_79","2017382080","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382080.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_80","2017382081","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382081.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_81","2017382082","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382082.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_82","2017382083","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382083.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_83","2017382084","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382084.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_84","2017382085","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382085.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_85","2017382086","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382086.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_86","2017382087","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382087.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_87","2017382088","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382088.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_88","2017382089","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382089.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_89","2017382090","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382090.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_90","2017382091","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382091.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_91","2017382092","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382092.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_92","2017382093","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382093.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_93","2017382094","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382094.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_94","2017382095","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382095.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_95","2017382096","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382096.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_96","2017382097","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382097.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_97","2017382098","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382098.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_98","2017382099","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382099.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_99","2017382100","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382100.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_100","2017382101","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382101.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_101","2017382102","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382102.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_102","2017382103","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382103.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_103","2017382104","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382104.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_104","2017382105","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382105.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_105","2017382106","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382106.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_106","2017382107","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382107.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_107","2017382108","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382108.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_108","2017382109","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382109.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_109","2017382110","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382110.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_110","2017382111","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382111.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_111","2017382112","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382112.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_112","2017382113","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382113.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_113","2017382114","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382114.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_114","2017382115","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382115.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_115","2017382116","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382116.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_116","2017382117","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382117.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_117","2017382118","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382118.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_118","2017382119","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382119.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_119","2017382120","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382120.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_抖音信息流_抖音信息流_120","2017382121","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2017382121.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条1","2015612002","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612002.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条2","2015612003","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612003.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条3","2015612004","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612004.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条4","2015612005","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612005.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条5","2015612017","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612017.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条6","2015612018","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612018.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条7","2015612019","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612019.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条8","2015612020","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612020.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条9","2015612021","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612021.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条10","2015612022","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612022.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条11","2015612023","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612023.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条12","2015612024","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612024.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条13","2015612025","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612025.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条14","2015612026","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612026.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条15","2015612027","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612027.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条16","2015612028","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612028.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条17","2015612029","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612029.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条18","2015612030","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612030.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条19","2015612031","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612031.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条20","2015612032","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612032.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条21","2015612033","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612033.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条22","2015612034","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612034.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条23","2015612035","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612035.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条24","2015612036","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612036.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条25","2015612037","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612037.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条26","2015612038","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612038.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条27","2015612039","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612039.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条28","2015612040","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612040.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条29","2015612041","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612041.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条30","2015612042","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612042.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条31","2015612043","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612043.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条32","2015612044","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612044.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条33","2015612045","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612045.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条34","2015612046","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612046.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条35","2015612047","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612047.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条36","2015612048","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612048.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条37","2015612049","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612049.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条38","2015612050","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612050.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条39","2015612051","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612051.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条40","2015612052","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612052.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条41","2015612053","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612053.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条42","2015612054","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612054.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条43","2015612055","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612055.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条44","2015612056","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612056.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条45","2015612057","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612057.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条46","2015612058","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612058.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条47","2015612059","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612059.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条48","2015612060","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612060.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条49","2015612061","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612061.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条50","2015612062","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612062.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条51","2015612063","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612063.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条52","2015612064","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612064.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条53","2015612065","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612065.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条54","2015612066","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612066.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条55","2015612067","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612067.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条56","2015612068","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612068.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条57","2015612069","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612069.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条58","2015612070","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612070.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条59","2015612071","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612071.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条60","2015612072","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612072.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条61","2015612073","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612073.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条62","2015612074","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612074.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条63","2015612075","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612075.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条64","2015612076","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612076.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条65","2015612077","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612077.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条66","2015612078","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612078.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条67","2015612079","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612079.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条68","2015612080","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612080.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条69","2015612081","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612081.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条70","2015612082","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612082.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条71","2015612084","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612084.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条72","2015612085","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612085.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条73","2015612086","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612086.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条74","2015612087","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612087.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条75","2015612088","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612088.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条76","2015612089","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612089.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条77","2015612090","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612090.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条78","2015612091","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612091.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条79","2015612092","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612092.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条80","2015612093","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612093.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条81","2015612094","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612094.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条82","2015612095","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612095.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条83","2015612096","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612096.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条84","2015612097","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612097.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条85","2015612098","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612098.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条86","2015612099","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612099.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条87","2015612100","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612100.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条88","2015612101","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612101.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条89","2015612102","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612102.apk","北京畅游时代数码技术有限公司"],
	["鹿鼎记PL_android_今日头条_今日头条90","2015612103","http://ydldj.the3.changyou.com/201904/ldj-cyou-test_2015612103.apk","北京畅游时代数码技术有限公司"],
]
/* funname getQueryString
  * desc 获取地址参数
  * params {name: string}参数名称
  * return {string or null}
  */
var xwp_id
function getQueryString(name) {
	var r, reg;
	reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	r = window.location.search.substr(1).match(reg);
	if (r !== null) {
		return r[2]; //不解码
	}
	return null;
};
xwp_id = getQueryString("id")
x_element(js_arr)
function x_element(js_arr){
		let new_arr
		for (let _index = 0; _index < js_arr.length; _index++) {
			if (js_arr[_index][1] == xwp_id) {
				new_arr = js_arr[_index]
				break;
			}
		}
		if (new_arr) {
			document.querySelector(".ljxz-btn").href = new_arr[2]
			document.querySelector(".xz_btn").href = new_arr[2]
			document.querySelectorAll(".company")[0].innerHTML = new_arr[3]
			if (new_arr[4]) {
				document.querySelector(".j_code").innerHTML = new_arr[4]
			}
			if (new_arr[5]) {
				document.querySelectorAll(".company")[1].innerHTML = new_arr[5]
			}
			if (new_arr[6]) {
				document.querySelectorAll(".company")[2].innerHTML = new_arr[6]
			}
		}
}


// var Batch =js_arr=>{
// 	let new_arr //存储js数据库中对应的数组
// 	let curpath = window.document.location.href; //获取整个url地址
// 	let pathName = window.document.location.pathname;
// 	let pos = curpath.indexOf(pathName);
// 	let _host = curpath.substring(pos);
// 	let number = _host.indexOf("?")
// 	let _value = _host.substring(number+4) //获取id后面内容
// 	for (let _index = 0; _index < js_arr.length; _index++) {
// 		if (js_arr[_index][1] == _value) {
// 			new_arr = js_arr[_index]
// 			break;
// 		}
// 	}
// 	if (new_arr) {
// 		document.querySelector(".ljxz-btn").href = new_arr[2]
// 		document.querySelector(".xz_btn").href = new_arr[2]
// 		document.querySelectorAll(".company")[0].innerHTML = new_arr[3]
// 		if (new_arr[4]) {
// 			document.querySelector(".j_code").innerHTML = new_arr[4]
// 		}
// 		if (new_arr[5]) {
// 			document.querySelectorAll(".company")[1].innerHTML = new_arr[5]
// 		}
// 		if (new_arr[6]) {
// 			document.querySelectorAll(".company")[2].innerHTML = new_arr[6]
// 		}
// 	}
// }
// Batch(js_arr)
