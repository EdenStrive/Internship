//预约
var appoint = {}
    $(function(){
    appoint = {
        conf:{
            game:"toufang",//游戏 toufang
            actv_key:"kzgj_20181109",//活动key
            cdk_type:"",//礼包码是否相同（不填获取不同CDK）
            phone_num:"",
            phone_code:"",
            userId:"",//用户标志
            deviceType:"",//手机型号（非必填）
            cdkType:"",//礼包码是否相同（不填获取不同CDK）
            col01:"",//其他参数1(最大32字符)
            col02:"",//其他参数1(最大32字符)
            col03:""//其他参数1(最大32字符)
        },
        times:"",
        time_num:60,
        u_phone:new RegExp("^1[0-9][0-9]{9}$"),
        code:new RegExp("^[0-9]{6}$"),
        clear_times:function(){
            clearInterval(this.times);
            $("#getCodeBtn").removeClass('btn_disabled');
            $("#getCodeBtn").text('获取验证码');
        },
        countdown:function(){
                this.time_num--;
                $("#getCodeBtn").text("*" + this.time_num + "s后再试");
                if (this.time_num <= 0) {
                    this.clear_times();
                    this.time_num = 60;
                }
        },    
        //验证码检测
        checkCode:function(){
            var num = $.trim($("#code-input").val());
            this.conf.phone_code = '';
            if(!this.code.test(num)){            
                alert("请输入正确的验证码");
                return false;
            }else{
                this.conf.phone_code = num;
                return true;
            }
        },
        //手机号验证
        checkPhone:function(){
            var phone = $.trim($("#phone-input").val());
            this.conf.phone_num = '';
            if(!this.u_phone.test(phone)){            
                alert("请输入正确的手机号");
                return false;
            }else{
                this.conf.phone_num = phone;
                return true;
            }
        },
        //根据手机号获取验证码
        getPhoneCode:function(){
            var _this = this;
            if(!this.checkPhone()){
                return;
            }
            $.ajax({
            type: "get",
            url: "//activity2.changyou.com/appoint/getVerificationCode.ncdo",
            dataType: "jsonp",
            data: {
                game: _this.conf.game,
                actvKey: _this.conf.actv_key,
                phone: _this.conf.phone_num
            },
            success: function(data) {
                if (data) {
                    if (data.errCode == "000") {
                        _this.times = setInterval(function(){
                            _this.countdown();
                        }, 1000);
                        $("#getCodeBtn").addClass('btn_disabled');
                    } else if (data.errCode == "016") {
                        alert("您已预约！");                    
                    } else {
                        alert(data.errMsg);
                    }
                }
            },
            error: function() {}
        });
        },
        //提交验证码
        codeSubmit:function(){
            var _this = this;
            if(!this.checkPhone()){
                return;
            }
            if(!this.checkCode()){
                return;
            }
            
            $.ajax({
                type: "get",
                url: "//activity2.changyou.com/appoint/verificationCode.ncdo",
                dataType: "jsonp",
                data: {
                    game: _this.conf.game,
                    actvKey: _this.conf.actv_key,
                    phone: _this.conf.phone_num,
                    numCode: _this.conf.phone_code,
                    userId:_this.conf.userId,//用户标志
                    deviceType:_this.conf.deviceType,//手机型号（非必填）
                    cdkType:_this.conf.cdkType,//礼包码是否相同（不填获取不同CDK）
                    col01:_this.conf.col01,//其他参数1(最大32字符)
                    col02:_this.conf.col02,//其他参数1(最大32字符)
                    col03:_this.conf.col03//其他参数1(最大32字符)
                },
                success: function(data) {
                    if (data) {
                        if (data.errCode == "000" || data.errCode == "016") {
                            _this.clear_times();
                            _this.time_num = 60;
                            // $(".mail_num").val("");
                            $("#phone-input").val("");
                            $("#code-input").val("");
                            $("#step1").hide();
                            $("#step2").show();
                        } else {
                            alert(data.errMsg);
                        }
                    }
                },
                error: function() {}
            });
        },
        init:function(){
            var _this = this;
            var mask = document.getElementById("pop-mask");
            $(mask).bind('touchstart',function(e){
                    $(window).scroll();
                    e.preventDefault(); //标准  
                    e.stopPropagation();
                    return false;
            })
            $("#subBtn").click(function(){
                _this.codeSubmit();
            });
            $("#getCodeBtn").click(function(){
                _this.getPhoneCode();
            });
            $("#pop-back").click(function(){
                $("#step2").hide();
                $("#step1").show();
            });
            $(".close-box").click(function(){
                $("#Dialog1").hide();
            });
            $(".os-sel label").click(function(){
                var ind = $(this).index();
                $(".os-sel .active").removeClass("active");
                $(this).find('em').addClass('active');
            })
        }
    }
    $(window).scroll(function(event) {
        var target = $(".con-dialog");
        if($("#Dialog1").is(":visible")){
            target.css("top",($(window).height()-target.height())/2 + $(window).scrollTop())
               .css("left",($(window).width()-target.width())/2+$(window).scrollLeft())
               .css("z-index","9999")
               .fadeIn();
        }
    });
    //-------定制参数
    var urlName, qudao,order;
    //获取页面文件名 
    function GetPageName() 
    { 
        var url=window.location.href;//获取完整URL 
        var tmp= new Array();//临时变量，保存分割字符串 
        tmp=url.split("/");//按照"/"分割 
        var pp = tmp[tmp.length-1];//获取最后一部分，即文件名和参数 
        tmp=pp.split("?");//把参数和文件名分割开
        tmp[0].split(".");
        return tmp[0].split(".")[0]; 
    }
    urlName = GetPageName();
    qudao = urlName.split('-')[0];
    order = urlName.split('-')[1]?urlName.split('-')[1]:"kong";
    appoint.conf.col01 = qudao;
    appoint.conf.col02 = order;
    appoint.conf.col03 = 'load';
    //-------定制参数

    appoint.init();
    $(window).scroll();
    });

//预约绑定
$(".btn1,.con2").click(function(event) {
	$("#Dialog1").show();
	$(window).scroll();
});

var kzhj = [
    ["空之轨迹OL_android_今日头条_今日头条1","toutiao-1","2015612002","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612002.apk","北京爱游盟信息科技有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-1.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条2","toutiao-2","2015612003","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612003.apk","北京爱游盟信息科技有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-2.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条3","toutiao-3","2015612004","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612004.apk","北京爱游盟信息科技有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-3.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条4","toutiao-4","2015612005","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612005.apk","北京爱游盟信息科技有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-4.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条5","toutiao-5","2015612017","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612017.apk","北京爱游盟信息科技有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-5.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条6","toutiao-6","2015612018","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612018.apk","北京爱游盟信息科技有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-6.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条7","toutiao-7","2015612019","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612019.apk","北京爱游盟信息科技有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-7.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条8","toutiao-8","2015612020","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612020.apk","北京爱游盟信息科技有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-8.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条9","toutiao-9","2015612021","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612021.apk","北京爱游盟信息科技有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-9.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条10","toutiao-10","2015612022","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612022.apk","北京爱游盟信息科技有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-10.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条11","toutiao-11","2015612023","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612023.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-11.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条12","toutiao-12","2015612024","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612024.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-12.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条13","toutiao-13","2015612025","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612025.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-13.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条14","toutiao-14","2015612026","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612026.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-14.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条15","toutiao-15","2015612027","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612027.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-15.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条16","toutiao-16","2015612028","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612028.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-16.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条17","toutiao-17","2015612029","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612029.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-17.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条18","toutiao-18","2015612030","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612030.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-18.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条19","toutiao-19","2015612031","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612031.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-19.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条20","toutiao-20","2015612032","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612032.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-20.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条21","toutiao-21","2015612033","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612033.apk","北京赞成科技发展有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-21.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条22","toutiao-22","2015612034","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612034.apk","北京赞成科技发展有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-22.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条23","toutiao-23","2015612035","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612035.apk","北京赞成科技发展有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-23.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条24","toutiao-24","2015612036","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612036.apk","北京赞成科技发展有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-24.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条25","toutiao-25","2015612037","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612037.apk","北京赞成科技发展有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-25.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条26","toutiao-26","2015612038","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612038.apk","北京赞成科技发展有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-26.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条27","toutiao-27","2015612039","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612039.apk","北京赞成科技发展有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-27.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条28","toutiao-28","2015612040","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612040.apk","北京赞成科技发展有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-28.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条29","toutiao-29","2015612041","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612041.apk","北京赞成科技发展有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-29.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条30","toutiao-30","2015612042","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612042.apk","北京赞成科技发展有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-30.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条31","toutiao-31","2015612043","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612043.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-31.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条32","toutiao-32","2015612044","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612044.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-32.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条33","toutiao-33","2015612045","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612045.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-33.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条34","toutiao-34","2015612046","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612046.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-34.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条35","toutiao-35","2015612047","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612047.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-35.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条36","toutiao-36","2015612048","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612048.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-36.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条37","toutiao-37","2015612049","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612049.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-37.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条38","toutiao-38","2015612050","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612050.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-38.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条39","toutiao-39","2015612051","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612051.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-39.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条40","toutiao-40","2015612052","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612052.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-40.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条41","toutiao-41","2015612053","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612053.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-41.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条42","toutiao-42","2015612054","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612054.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-42.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条43","toutiao-43","2015612055","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612055.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-43.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条44","toutiao-44","2015612056","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612056.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-44.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条45","toutiao-45","2015612057","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612057.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-45.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条46","toutiao-46","2015612058","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612058.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-46.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条47","toutiao-47","2015612059","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612059.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-47.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条48","toutiao-48","2015612060","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612060.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-48.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条49","toutiao-49","2015612061","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612061.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-49.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条50","toutiao-50","2015612062","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612062.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-50.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条51","toutiao-51","2015612063","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612063.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-51.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条52","toutiao-52","2015612064","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612064.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-52.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条53","toutiao-53","2015612065","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612065.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-53.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条54","toutiao-54","2015612066","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612066.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-54.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条55","toutiao-55","2015612067","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612067.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-55.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条56","toutiao-56","2015612068","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612068.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-56.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条57","toutiao-57","2015612069","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612069.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-57.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条58","toutiao-58","2015612070","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612070.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-58.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条59","toutiao-59","2015612071","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612071.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-59.shtml"],
    ["空之轨迹OL_android_今日头条_今日头条60","toutiao-60","2015612072","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015612072.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/toutiao-60.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文1","sina-fst-1","2015622004","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622004.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-1.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文2","sina-fst-2","2015622005","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622005.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-2.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文3","sina-fst-3","2015622006","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622006.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-3.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文4","sina-fst-4","2015622007","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622007.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-4.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文5","sina-fst-5","2015622008","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622008.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-5.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文6","sina-fst-6","2015622009","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622009.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-6.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文7","sina-fst-7","2015622010","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622010.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-7.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文8","sina-fst-8","2015622011","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622011.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-8.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文9","sina-fst-9","2015622012","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622012.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-9.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文10","sina-fst-10","2015622013","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622013.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-10.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文11","sina-fst-11","2015622019","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622019.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-11.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文12","sina-fst-12","2015622020","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622020.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-12.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文13","sina-fst-13","2015622021","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622021.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-13.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文14","sina-fst-14","2015622022","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622022.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-14.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文15","sina-fst-15","2015622023","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622023.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-15.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文16","sina-fst-16","2015622024","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622024.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-16.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文17","sina-fst-17","2015622025","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622025.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-17.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文18","sina-fst-18","2015622026","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622026.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-18.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文19","sina-fst-19","2015622027","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622027.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-19.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文20","sina-fst-20","2015622028","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622028.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-20.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文21","sina-fst-21","2015622029","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622029.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-21.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文22","sina-fst-22","2015622030","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622030.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-22.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文23","sina-fst-23","2015622031","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622031.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-23.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文24","sina-fst-24","2015622032","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622032.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-24.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文25","sina-fst-25","2015622033","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622033.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-25.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文26","sina-fst-26","2015622034","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622034.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-26.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文27","sina-fst-27","2015622035","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622035.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-27.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文28","sina-fst-28","2015622036","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622036.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-28.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文29","sina-fst-29","2015622037","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622037.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-29.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文30","sina-fst-30","2015622038","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622038.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-30.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文31","sina-fst-31","2015622039","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622039.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-31.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文32","sina-fst-32","2015622040","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622040.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-32.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文33","sina-fst-33","2015622041","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622041.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-33.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文34","sina-fst-34","2015622042","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622042.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-34.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文35","sina-fst-35","2015622043","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622043.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-35.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文36","sina-fst-36","2015622044","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622044.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-36.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文37","sina-fst-37","2015622045","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622045.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-37.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文38","sina-fst-38","2015622046","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622046.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-38.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文39","sina-fst-39","2015622047","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622047.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-39.shtml"],
    ["空之轨迹OL_android_安卓-新浪粉丝通_粉丝通博文40","sina-fst-40","2015622048","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015622048.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/sina-fst-40.shtml"],
    ["空之轨迹OL_android_UC_UC1","uc-1","2015712002","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015712002.apk","北京爱游盟信息科技有限公司","changy.aiyoumeng.cn","http://www.changyou.com/events/kzgj/201811/load/uc-1.shtml"],
    ["空之轨迹OL_android_UC_UC2","uc-2","2015712003","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015712003.apk","北京爱游盟信息科技有限公司","changy.aiyoumeng.cn","http://www.changyou.com/events/kzgj/201811/load/uc-2.shtml"],
    ["空之轨迹OL_android_UC_UC3","uc-3","2015712004","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015712004.apk","北京爱游盟信息科技有限公司","changy.aiyoumeng.cn","http://www.changyou.com/events/kzgj/201811/load/uc-3.shtml"],
    ["空之轨迹OL_android_UC_UC4","uc-4","2015712005","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015712005.apk","北京爱游盟信息科技有限公司","changy.aiyoumeng.cn","http://www.changyou.com/events/kzgj/201811/load/uc-4.shtml"],
    ["空之轨迹OL_android_UC_UC5","uc-5","2015712006","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015712006.apk","北京爱游盟信息科技有限公司","changy.aiyoumeng.cn","http://www.changyou.com/events/kzgj/201811/load/uc-5.shtml"],
    ["空之轨迹OL_android_UC_UC6","uc-6","2015712007","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015712007.apk","北京爱游盟信息科技有限公司","changy.aiyoumeng.cn","http://www.changyou.com/events/kzgj/201811/load/uc-6.shtml"],
    ["空之轨迹OL_android_UC_UC7","uc-7","2015712008","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015712008.apk","北京爱游盟信息科技有限公司","changy.aiyoumeng.cn","http://www.changyou.com/events/kzgj/201811/load/uc-7.shtml"],
    ["空之轨迹OL_android_UC_UC8","uc-8","2015712009","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015712009.apk","北京爱游盟信息科技有限公司","changy.aiyoumeng.cn","http://www.changyou.com/events/kzgj/201811/load/uc-8.shtml"],
    ["空之轨迹OL_android_UC_UC9","uc-9","2015712010","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015712010.apk","北京爱游盟信息科技有限公司","changy.aiyoumeng.cn","http://www.changyou.com/events/kzgj/201811/load/uc-9.shtml"],
    ["空之轨迹OL_android_UC_UC10","uc-10","2015712011","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015712011.apk","北京爱游盟信息科技有限公司","changy.aiyoumeng.cn","http://www.changyou.com/events/kzgj/201811/load/uc-10.shtml"],
    ["空之轨迹OL_android_UC_UC11","uc-11","2015712012","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015712012.apk","北京爱游盟信息科技有限公司","changy.aiyoumeng.cn","http://www.changyou.com/events/kzgj/201811/load/uc-11.shtml"],
    ["空之轨迹OL_android_UC_UC12","uc-12","2015712013","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015712013.apk","北京爱游盟信息科技有限公司","changy.aiyoumeng.cn","http://www.changyou.com/events/kzgj/201811/load/uc-12.shtml"],
    ["空之轨迹OL_android_UC_UC13","uc-13","2015712014","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015712014.apk","北京爱游盟信息科技有限公司","changy.aiyoumeng.cn","http://www.changyou.com/events/kzgj/201811/load/uc-13.shtml"],
    ["空之轨迹OL_android_UC_UC14","uc-14","2015712015","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015712015.apk","北京爱游盟信息科技有限公司","changy.aiyoumeng.cn","http://www.changyou.com/events/kzgj/201811/load/uc-14.shtml"],
    ["空之轨迹OL_android_UC_UC15","uc-15","2015712016","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015712016.apk","北京爱游盟信息科技有限公司","changy.aiyoumeng.cn","http://www.changyou.com/events/kzgj/201811/load/uc-15.shtml"],
    ["空之轨迹OL_android_UC_UC16","uc-16","2015712017","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015712017.apk","北京爱游盟信息科技有限公司","changy.aiyoumeng.cn","http://www.changyou.com/events/kzgj/201811/load/uc-16.shtml"],
    ["空之轨迹OL_android_UC_UC17","uc-17","2015712018","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015712018.apk","北京爱游盟信息科技有限公司","changy.aiyoumeng.cn","http://www.changyou.com/events/kzgj/201811/load/uc-17.shtml"],
    ["空之轨迹OL_android_UC_UC18","uc-18","2015712019","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015712019.apk","北京爱游盟信息科技有限公司","changy.aiyoumeng.cn","http://www.changyou.com/events/kzgj/201811/load/uc-18.shtml"],
    ["空之轨迹OL_android_UC_UC19","uc-19","2015712020","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015712020.apk","北京爱游盟信息科技有限公司","changy.aiyoumeng.cn","http://www.changyou.com/events/kzgj/201811/load/uc-19.shtml"],
    ["空之轨迹OL_android_UC_UC20","uc-20","2015712021","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2015712021.apk","北京爱游盟信息科技有限公司","changy.aiyoumeng.cn","http://www.changyou.com/events/kzgj/201811/load/uc-20.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流1","baidu-1","2016222002","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222002.apk","北京畅游时代数码技术有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-1.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流2","baidu-2","2016222003","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222003.apk","北京畅游时代数码技术有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-2.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流3","baidu-3","2016222004","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222004.apk","北京畅游时代数码技术有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-3.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流4","baidu-4","2016222005","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222005.apk","北京畅游时代数码技术有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-4.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流5","baidu-5","2016222006","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222006.apk","北京畅游时代数码技术有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-5.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流6","baidu-6","2016222007","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222007.apk","北京畅游时代数码技术有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-6.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流7","baidu-7","2016222008","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222008.apk","北京畅游时代数码技术有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-7.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流8","baidu-8","2016222009","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222009.apk","北京畅游时代数码技术有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-8.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流9","baidu-9","2016222010","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222010.apk","北京畅游时代数码技术有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-9.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流10","baidu-10","2016222011","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222011.apk","北京畅游时代数码技术有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-10.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流11","baidu-11","2016222012","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222012.apk","北京畅游时代数码技术有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-11.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流12","baidu-12","2016222013","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222013.apk","北京畅游时代数码技术有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-12.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流13","baidu-13","2016222014","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222014.apk","北京畅游时代数码技术有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-13.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流14","baidu-14","2016222015","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222015.apk","北京畅游时代数码技术有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-14.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流15","baidu-15","2016222016","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222016.apk","北京畅游时代数码技术有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-15.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流16","baidu-16","2016222017","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222017.apk","北京畅游时代数码技术有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-16.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流17","baidu-17","2016222018","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222018.apk","北京畅游时代数码技术有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-17.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流18","baidu-18","2016222019","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222019.apk","北京畅游时代数码技术有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-18.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流19","baidu-19","2016222020","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222020.apk","北京畅游时代数码技术有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-19.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流20","baidu-20","2016222021","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222021.apk","北京畅游时代数码技术有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-20.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流21","baidu-21","2016222022","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222022.apk","北京赞成科技发展有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-21.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流22","baidu-22","2016222023","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222023.apk","北京赞成科技发展有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-22.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流23","baidu-23","2016222024","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222024.apk","北京赞成科技发展有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-23.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流24","baidu-24","2016222025","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222025.apk","北京赞成科技发展有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-24.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流25","baidu-25","2016222026","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222026.apk","北京赞成科技发展有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-25.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流26","baidu-26","2016222027","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222027.apk","北京赞成科技发展有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-26.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流27","baidu-27","2016222028","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222028.apk","北京赞成科技发展有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-27.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流28","baidu-28","2016222029","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222029.apk","北京赞成科技发展有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-28.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流29","baidu-29","2016222030","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222030.apk","北京赞成科技发展有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-29.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流30","baidu-30","2016222031","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222031.apk","北京赞成科技发展有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-30.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流31","baidu-31","2016222032","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222032.apk","北京赞成科技发展有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-31.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流32","baidu-32","2016222033","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222033.apk","北京赞成科技发展有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-32.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流33","baidu-33","2016222034","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222034.apk","北京赞成科技发展有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-33.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流34","baidu-34","2016222035","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222035.apk","北京赞成科技发展有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-34.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流35","baidu-35","2016222036","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222036.apk","北京赞成科技发展有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-35.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流36","baidu-36","2016222037","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222037.apk","北京赞成科技发展有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-36.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流37","baidu-37","2016222038","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222038.apk","北京赞成科技发展有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-37.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流38","baidu-38","2016222039","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222039.apk","北京赞成科技发展有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-38.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流39","baidu-39","2016222040","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222040.apk","北京赞成科技发展有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-39.shtml"],
    ["空之轨迹OL_android_百度信息流_百度信息流40","baidu-40","2016222041","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016222041.apk","北京赞成科技发展有限公司","changy.geiliyou.com","http://www.changyou.com/events/kzgj/201811/load/baidu-40.shtml"],
    ["空之轨迹OL_android_备用_备用1","beiyong-1","2016252002","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016252002.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/beiyong-1.shtml"],
    ["空之轨迹OL_android_备用_备用2","beiyong-2","2016252003","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016252003.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/beiyong-2.shtml"],
    ["空之轨迹OL_android_备用_备用3","beiyong-3","2016252004","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016252004.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/beiyong-3.shtml"],
    ["空之轨迹OL_android_备用_备用4","beiyong-4","2016252005","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016252005.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/beiyong-4.shtml"],
    ["空之轨迹OL_android_备用_备用5","beiyong-5","2016252006","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016252006.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/beiyong-5.shtml"],
    ["空之轨迹OL_android_备用_备用6","beiyong-6","2016252007","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016252007.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/beiyong-6.shtml"],
    ["空之轨迹OL_android_备用_备用7","beiyong-7","2016252008","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016252008.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/beiyong-7.shtml"],
    ["空之轨迹OL_android_备用_备用8","beiyong-8","2016252009","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016252009.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/beiyong-8.shtml"],
    ["空之轨迹OL_android_备用_备用9","beiyong-9","2016252010","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016252010.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/beiyong-9.shtml"],
    ["空之轨迹OL_android_备用_备用10","beiyong-10","2016252011","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016252011.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/beiyong-10.shtml"],
    ["空之轨迹OL_android_备用_备用11","beiyong-11","2016252012","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016252012.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/beiyong-11.shtml"],
    ["空之轨迹OL_android_备用_备用12","beiyong-12","2016252013","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016252013.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/beiyong-12.shtml"],
    ["空之轨迹OL_android_备用_备用13","beiyong-13","2016252014","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016252014.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/beiyong-13.shtml"],
    ["空之轨迹OL_android_备用_备用14","beiyong-14","2016252015","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016252015.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/beiyong-14.shtml"],
    ["空之轨迹OL_android_备用_备用15","beiyong-15","2016252016","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016252016.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/beiyong-15.shtml"],
    ["空之轨迹OL_android_备用_备用16","beiyong-16","2016252017","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016252017.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/beiyong-16.shtml"],
    ["空之轨迹OL_android_备用_备用17","beiyong-17","2016252018","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016252018.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/beiyong-17.shtml"],
    ["空之轨迹OL_android_备用_备用18","beiyong-18","2016252019","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016252019.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/beiyong-18.shtml"],
    ["空之轨迹OL_android_备用_备用19","beiyong-19","2016252020","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016252020.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/beiyong-19.shtml"],
    ["空之轨迹OL_android_备用_备用20","beiyong-20","2016252021","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2016252021.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/beiyong-20.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_01","douyin-1","2017382002","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382002.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-1.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_02","douyin-2","2017382003","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382003.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-2.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_03","douyin-3","2017382004","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382004.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-3.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_04","douyin-4","2017382005","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382005.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-4.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_05","douyin-5","2017382006","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382006.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-5.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_06","douyin-6","2017382007","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382007.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-6.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_07","douyin-7","2017382008","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382008.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-7.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_08","douyin-8","2017382009","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382009.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-8.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_09","douyin-9","2017382010","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382010.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-9.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_10","douyin-10","2017382011","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382011.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-10.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_11","douyin-11","2017382012","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382012.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-11.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_12","douyin-12","2017382013","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382013.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-12.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_13","douyin-13","2017382014","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382014.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-13.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_14","douyin-14","2017382015","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382015.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-14.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_15","douyin-15","2017382016","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382016.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-15.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_16","douyin-16","2017382017","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382017.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-16.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_17","douyin-17","2017382018","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382018.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-17.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_18","douyin-18","2017382019","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382019.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-18.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_19","douyin-19","2017382020","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382020.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-19.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_20","douyin-20","2017382021","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382021.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-20.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_21","douyin-21","2017382022","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382022.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-21.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_22","douyin-22","2017382023","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382023.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-22.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_23","douyin-23","2017382024","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382024.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-23.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_24","douyin-24","2017382025","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382025.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-24.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_25","douyin-25","2017382026","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382026.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-25.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_26","douyin-26","2017382027","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382027.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-26.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_27","douyin-27","2017382028","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382028.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-27.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_28","douyin-28","2017382029","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382029.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-28.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_29","douyin-29","2017382030","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382030.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-29.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_30","douyin-30","2017382031","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382031.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-30.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_31","douyin-31","2017382032","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382032.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-31.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_32","douyin-32","2017382033","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382033.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-32.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_33","douyin-33","2017382034","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382034.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-33.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_34","douyin-34","2017382035","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382035.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-34.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_35","douyin-35","2017382036","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382036.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-35.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_36","douyin-36","2017382037","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382037.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-36.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_37","douyin-37","2017382038","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382038.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-37.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_38","douyin-38","2017382039","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382039.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-38.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_39","douyin-39","2017382040","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382040.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-39.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_40","douyin-40","2017382041","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382041.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-40.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_41","douyin-41","2017382042","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382042.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-41.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_42","douyin-42","2017382043","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382043.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-42.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_43","douyin-43","2017382044","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382044.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-43.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_44","douyin-44","2017382045","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382045.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-44.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_45","douyin-45","2017382046","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382046.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-45.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_46","douyin-46","2017382047","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382047.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-46.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_47","douyin-47","2017382048","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382048.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-47.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_48","douyin-48","2017382049","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382049.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-48.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_49","douyin-49","2017382050","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382050.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-49.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_50","douyin-50","2017382051","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382051.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-50.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_51","douyin-51","2017382052","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382052.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-51.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_52","douyin-52","2017382053","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382053.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-52.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_53","douyin-53","2017382054","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382054.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-53.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_54","douyin-54","2017382055","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382055.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-54.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_55","douyin-55","2017382056","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382056.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-55.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_56","douyin-56","2017382057","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382057.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-56.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_57","douyin-57","2017382058","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382058.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-57.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_58","douyin-58","2017382059","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382059.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-58.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_59","douyin-59","2017382060","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382060.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-59.shtml"],
    ["空之轨迹OL_android_抖音信息流_抖音信息流_60","douyin-60","2017382061","加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017382061.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/douyin-60.shtml"],
    ["空之轨迹OL_android_wax_wax_01","wax-1","2017502002","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017502002.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/wax-1.shtml"],
    ["空之轨迹OL_android_wax_wax_02","wax-2","2017502003","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017502003.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/wax-2.shtml"],
    ["空之轨迹OL_android_wax_wax_03","wax-3","2017502004","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017502004.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/wax-3.shtml"],
    ["空之轨迹OL_android_wax_wax_04","wax-4","2017502005","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017502005.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/wax-4.shtml"],
    ["空之轨迹OL_android_wax_wax_05","wax-5","2017502006","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017502006.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/wax-5.shtml"],
    ["空之轨迹OL_android_wax_wax_06","wax-6","2017502007","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017502007.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/wax-6.shtml"],
    ["空之轨迹OL_android_wax_wax_07","wax-7","2017502008","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017502008.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/wax-7.shtml"],
    ["空之轨迹OL_android_wax_wax_08","wax-8","2017502009","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017502009.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/wax-8.shtml"],
    ["空之轨迹OL_android_wax_wax_09","wax-9","2017502010","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017502010.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/wax-9.shtml"],
    ["空之轨迹OL_android_wax_wax_10","wax-10","2017502011","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017502011.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/wax-10.shtml"],
    ["空之轨迹OL_android_wax_wax_11","wax-11","2017502012","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017502012.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/wax-11.shtml"],
    ["空之轨迹OL_android_wax_wax_12","wax-12","2017502013","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017502013.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/wax-12.shtml"],
    ["空之轨迹OL_android_wax_wax_13","wax-13","2017502014","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017502014.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/wax-13.shtml"],
    ["空之轨迹OL_android_wax_wax_14","wax-14","2017502015","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017502015.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/wax-14.shtml"],
    ["空之轨迹OL_android_wax_wax_15","wax-15","2017502016","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017502016.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/wax-15.shtml"],
    ["空之轨迹OL_android_wax_wax_16","wax-16","2017502017","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017502017.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/wax-16.shtml"],
    ["空之轨迹OL_android_wax_wax_17","wax-17","2017502018","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017502018.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/wax-17.shtml"],
    ["空之轨迹OL_android_wax_wax_18","wax-18","2017502019","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017502019.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/wax-18.shtml"],
    ["空之轨迹OL_android_wax_wax_19","wax-19","2017502020","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017502020.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/wax-19.shtml"],
    ["空之轨迹OL_android_wax_wax_20","wax-20","2017502021","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017502021.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/wax-20.shtml"],
    ["空之轨迹OL_android_新数_新数_01","xs-1","2017512002","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017512002.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/xs-1.shtml"],
    ["空之轨迹OL_android_新数_新数_02","xs-2","2017512003","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017512003.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/xs-2.shtml"],
    ["空之轨迹OL_android_新数_新数_03","xs-3","2017512004","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017512004.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/xs-3.shtml"],
    ["空之轨迹OL_android_新数_新数_04","xs-4","2017512005","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017512005.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/xs-4.shtml"],
    ["空之轨迹OL_android_新数_新数_05","xs-5","2017512006","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017512006.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/xs-5.shtml"],
    ["空之轨迹OL_android_新数_新数_06","xs-6","2017512007","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017512007.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/xs-6.shtml"],
    ["空之轨迹OL_android_新数_新数_07","xs-7","2017512008","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017512008.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/xs-7.shtml"],
    ["空之轨迹OL_android_新数_新数_08","xs-8","2017512009","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017512009.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/xs-8.shtml"],
    ["空之轨迹OL_android_新数_新数_09","xs-9","2017512010","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017512010.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/xs-9.shtml"],
    ["空之轨迹OL_android_新数_新数_10","xs-10","2017512011","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017512011.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/xs-10.shtml"],
    ["空之轨迹OL_android_新数_新数_11","xs-11","2017512012","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017512012.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/xs-11.shtml"],
    ["空之轨迹OL_android_新数_新数_12","xs-12","2017512013","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017512013.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/xs-12.shtml"],
    ["空之轨迹OL_android_新数_新数_13","xs-13","2017512014","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017512014.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/xs-13.shtml"],
    ["空之轨迹OL_android_新数_新数_14","xs-14","2017512015","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017512015.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/xs-14.shtml"],
    ["空之轨迹OL_android_新数_新数_15","xs-15","2017512016","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017512016.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/xs-15.shtml"],
    ["空之轨迹OL_android_新数_新数_16","xs-16","2017512017","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017512017.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/xs-16.shtml"],
    ["空之轨迹OL_android_新数_新数_17","xs-17","2017512018","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017512018.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/xs-17.shtml"],
    ["空之轨迹OL_android_新数_新数_18","xs-18","2017512019","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017512019.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/xs-18.shtml"],
    ["空之轨迹OL_android_新数_新数_19","xs-19","2017512020","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017512020.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/xs-19.shtml"],
    ["空之轨迹OL_android_新数_新数_20","xs-20","2017512021","不加抖音SDK的包","http://ydkzgj.the3.changyou.com/kzgj-cyou-test_2017512021.apk","北京畅游时代数码技术有限公司","","http://www.changyou.com/events/kzgj/201811/load/xs-20.shtml"], 
]
var curWwwPath = window.document.location.href;
var pos = curWwwPath.indexOf("?");
var canshu = curWwwPath.substring(pos+4);
search(canshu)
function search(id){
    var Identification;
    for (let index = 0; index < kzhj.length; index++) {
        for (let inde = 0; inde < kzhj[index].length; inde++) {
            // console.log(kzhj[index][inde])
            if (kzhj[index][inde] == id ) {
                Identification = index;
                break;
            }
        }
    }
    document.querySelector(".commbot").innerHTML = kzhj[Identification][0]
    document.querySelector("#download").href = kzhj[Identification][4]
}

