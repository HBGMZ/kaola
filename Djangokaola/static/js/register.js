

$(function(){
    var b1=false,b2=false,b3=false,b4=false;
    var c1=false,c2=false,c3=false;
    //手机号验证
    var regPhone=/^1[3|4|5|7|8]\d{9}$/ig;
    $("#phoneNum").blur(function(){
        if($(this).val().match(regPhone)){
            if(getCookie("userName")==$("#phoneNum").val()){
                $("#phoneNumTip").css("color","#ff6b52").html("该号码已注册过，请重新输入一个手机号");
                b1=false;
            }else{
                $("#phoneNumTip").css("color","#090").html("可以使用");
                b1=true;
            }
        }else if($(this).val()==""){
            $("#phoneNumTip").css("color","#ff6b52").html("请输入手机号码");
            b1=false;
        }else{
            $("#phoneNumTip").css("color","#ff6b52").html("您输入的手机号码格式错误，请重新输入!");
            b1=false;
        }
    });
    //密码验证
    var regPwd=/.{6,20}/ig;
    $("#pwd").blur(function(){
        if($(this).val().match(regPwd)){
            $("#pwdTip").html("");
            b2=true;
        }else if($(this).val()==""){
            $("#pwdTip").css("color","#ff6b52").html("请输入密码");
            b2=false;
        }else{
            $("#pwdTip").css("color","#ff6b52").html("密码长度必须为6-20个字符");
            b2=false;
        }
    });
    //重复输入密码验证
    $("#rePwd").blur(function(){
        if($(this).val()==""){
            $("#repwdTip").css("color","#ff6b52").html("请再次输入密码");
            b3=false;
        }else if($("#pwd").val()==""){
            $("#repwdTip").css("color","#ff6b52").html("请先设置密码，再输入确认密码");
            b3=false;
        }else if($(this).val()==$("#pwd").val()){
            $("#repwdTip").html("");
            b3=true;
        }else{
            $("#repwdTip").css("color","#ff6b52").html("两次输入的密码不一致，请重新输入");
            b3=false;
        }
    });
    //验证码
    $("#verifyRandom").html(create4());
    $("#verifyTab").click(function(){
        $("#verifyRandom").html(create4());
    });
    $("#verifyNum").blur(function(){

        if($(this).val()==""){
            $("#verifyErrImg").css("display","none");
            $("#verifyCodeTip").css("color","#ff6b52").html("请输入验证码");
            b4=false;
            c1=false;
        }else if($(this).val()==$("#verifyRandom").html()){
            $("#verifyErrImg").css({"display":"block","background-position":"-1px -111px"});
            $("#verifyCodeTip").html("");
            b4=true;
            c1=true;
        }else{
            $("#verifyErrImg").css({"display":"block","background-position":"-1px -132px"});
            $("#verifyCodeTip").css("color","#ff6b52").html("验证码有误，请重新输入");
            b4=false;
            c1=false;
        }
    })
    function create4() {
        var arr = [2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","m",
            "n","p","q","r","s","t","u","v","w","x","y","z"];
        var sum = "";
        for(var i=1;i<=4;i++){
            sum += arr[Math.floor(Math.random()*arr.length)];
        }
        return sum;
    }

    //同意条款验证
    $("#agreenBtn").click(function(){
        if($(this).prop("checked")){
            $("#registerNow").removeAttr("disabled").css({"background":"#e83917","border-color":"#e83917"});

        }else{
            $("#registerNow").attr("disabled","true").css({"background":"#ccc","border-color":"#ccc"});
        }
    });
    //注册
    $("#registerNow").click(function(){
        if(b1&&b2&&b3&&b4){
            var d = new Date();
            d.setDate(d.getDate()+10);
            setCookie("userName",$("#phoneNum").val(),d);
            setCookie("password",$("#pwd").val(),d);
            setCookie("passFlag","true",d);
            window.open("regSuccess.html");
        }else{
            if(b1==false && $("#phoneNumTip").html()==""){
                $("#phoneNumTip").css("color","#ff6b52").html("您输入的手机号码格式错误，请重新输入!");
            }
            if(b2==false && $("#pwdTip").html()==""){
                $("#pwdTip").css("color","#ff6b52").html("请输入密码");
            }
            if(b3==false && $("#repwdTip").html()==""){
                $("#repwdTip").css("color","#ff6b52").html("请再次输入密码");
            }
            if(b4==false && $("#verifyCodeTip").html()==""){
                $("#verifyCodeTip").css("color","#ff6b52").html("请输入验证码");
            }
        }
    })
    //登录
    if(getCookie("userName")){
        $("#loginName").val(getCookie("userName"));
    }
    $("#login").click(function(){
        if(c1&&getCookie("userName")==$("#loginName").val()&&getCookie("password")==$("#loginPwd").val()){
            var d = new Date();
            d.setDate(d.getDate()+10);
            setCookie("passFlag","true",d);
            window.open("kaolaIndex.html");
        }else{
            if($("#loginName").val()==""){
                $("#phoneNumTip").css("color","#ff6b52").html("请输入账号");
            }else if($("#loginPwd").val()==""){
                $("#pwdTip").css("color","#ff6b52").html("请输入密码");
            }else if($("#verifyNum").val()==""){
                $("#verifyCodeTip").css("color","#ff6b52").html("请输入验证码");
            }else if(!($("#verifyNum").val()==$("#verifyRandom").html())){
                $("#verifyRandom").html(create4());
                $("#verifyNum").val("");
            }else if(!($("#loginName").val()==getCookie("userName"))){
                $("#phoneNumTip").css("color","#ff6b52").html("您输入的用户名不存在，请核对后重新输入");

            }else{
                $("#verifyCodeTip").css("color","#ff6b52").html("您输入的用户名或密码错误，请核对后重新输入！");
            }
        }
    })
    $("#loginName").blur(function(){
        $("#phoneNumTip").css("color","#ff6b52").html("");
    })
    $("#loginPwd").blur(function(){
        $("#pwdTip").css("color","#ff6b52").html("");
    })

});
