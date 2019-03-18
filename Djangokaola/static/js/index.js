/**
 * Created by a on 2016/8/1.
 */
$(function(){
  /*searchAll*/
    var searchAllText=$(".searchAllCon .textsub");
    var searchAllTextVal=searchAllText.attr("placeholder");
    searchAllText.on("focus",function(){
        $(this).attr({placeholder:""})
    });
    searchAllText.on("blur",function(){
        $(this).attr({placeholder:searchAllTextVal})
    });
    var searchAll=$("#searchAll");
    var floorFastNav=$(".floorFastNav");
    $(window).on("scroll",function(){
        var scrollFast=$(window).scrollTop();
        if(scrollFast>=1800){
            searchAll.slideDown(200);
        };
        if(scrollFast<1800){
            searchAll.slideUp(200);
        };
        var floorCon=$(".floorCon");
        /*for(var i=0;i<floorCon.size();i++){
            if()
        }*/
        if(scrollFast<floorCon.eq(0).offset().top+(floorCon.eq(0).height()/2)){
            floorFastNav.css("top",floorCon.eq(0).offset().top+floorCon.eq(0).height()+"px")
        }
        if(scrollFast>floorCon.eq(0).offset().top+(floorCon.eq(0).height()/2)){
            floorFastNav.css("top",scrollFast+233+"px")
        }
        if(scrollFast>floorCon.last().offset().top+floorCon.last().height()){
            floorFastNav.css("top",floorCon.last().offset().top+floorCon.last().height()+"px")
        }

        for(var i=0;i<floorCon.size();i++){
           if(scrollFast>floorCon.eq(i).offset().top-360){
                floorFastNav.children().eq(i).find("div").hide();
                floorFastNav.children().eq(i).find("span").show();
               floorFastNav.children().eq(i).addClass("noChange");
                floorFastNav.children().eq(i).siblings().find("span").hide();
                floorFastNav.children().eq(i).siblings().find("div").show();
               floorFastNav.children().eq(i).siblings().removeClass("noChange");
            }
        }

    })
    $(window).resize(function(){
        if(($(window).width()-1190)/2>37){
            floorFastNav.css({"left":($(window).width()-1190)/2-37+"px","display":"block"})
        }else{
            floorFastNav.css("display","none")
        }
    })
    if(($(window).width()-1190)/2>37){
        floorFastNav.css({"left":($(window).width()-1190)/2-37+"px","display":"block"})
    }else{
        floorFastNav.css("display","none")
    }
    /*
     logo
    */
    var logoSearchCon=$(".logoSearch .searchCon");
    var placeholderVal=logoSearchCon.attr("placeholder");
    var searchConBorderClor=logoSearchCon.css("border-color");


    logoSearchCon.on("mouseover",function(){
        $(this).css({"border-color":"#666"})
    });
    logoSearchCon.on("mouseout",function(){
        $(this).css({"border-color":searchConBorderClor})
    });

    logoSearchCon.on("focus",function(){
        $(this).attr({placeholder:""})
    });
    logoSearchCon.on("blur",function(){
        $(this).attr({placeholder:placeholderVal})
    });

    /*nav*/
    var navCenter=$(".navCenter");
    var navCenterLi=$(".navCenter li");
    var navLine=$(".navCenter .line");
    var navLineI=$(".navCenter .line i");

    navCenterLi.on("mouseover",function(){
        navLine.stop(true).animate({"left":$(this).offset().left-navCenter.offset().left+12,"width":$(this).width()-24})
    });
    navCenter.on("mouseout",function(){
        navLine.stop(true).animate({"left":12,"width":32})
    });
    var intPoi=$(".intPoint i");
    var timeX=600;
    setInterval(function(){
        for(var i=0;i<=5;i++){

            intPoiMove(i);
            timeX+=200;
            if(timeX==1200){
                timeX=600;
            }
        }
    },3000)


    function intPoiMove(num){

        intPoi.eq(num).animate({"top":parseInt(intPoi.eq(num).css("top"))-36},timeX,function(){
            if(parseInt(intPoi.eq(num).css("top"))==-36){
                intPoi.eq(num).css("top","36px")
            }
        })
    }



    /*banner*/
    //bannerLeft
    var bannerLeftLi=$(".bannerLeft").children();
    var bannerLeftLiBacColor=bannerLeftLi.css("background");
    var bannerLeftConMain=$(".bannerLeftCon");
    var bannerLeftCon=$(".bannerLeftCon .sub-pannel");
    var bannerLeftAll=$(".bannerLeftAll");

    var bannerLeftkaola=$(".bannerLeftCon .sub-pannel")
    var bannerLeftlogin=$()

    bannerLeftLi.on("mouseenter",function(){
        bannerLeftConMain.show();
        $(this).css("background","#a90000").stop(true).animate({"paddingLeft":"8px"},300).siblings().css("background",bannerLeftLiBacColor).stop(true).animate({"paddingLeft":"0px"},300);
        bannerLeftCon.eq($(this).index()).show().stop(true).animate({"left":"0px"},100).siblings().hide().css("left","-10px");

    })
    bannerLeftAll.on("mouseleave",function(){
        bannerLeftConMain.hide();
        bannerLeftLi.css("background",bannerLeftLiBacColor);
    })
    var banerImg=$(".bannerImg img");
    var index=0;
    var bannerNav=$(".bannerCenter ul li img");
    var bannerNavAll=$(".bannerCenter ul");
    var banner=$("#banner")
    var arrColor=["#eedffb","#ffebe7","#ffebe7","#f5f4f4","#f5f4f4"];
    bannerMove();
    var bannerA=setInterval(function(){
        bannerMove()
        index++;
        if(index==5){
            index=0;
        }
    },3000);
    bannerNavAll.children().on("mouseenter",function(){
        clearInterval(bannerA);
        index=$(this).index();
        bannerMove();
    });
    bannerNavAll.on("mouseleave",function(){
        bannerA=setInterval(function(){
            bannerMove();
            index++;
            if(index==5){
                index=0;
            }
        },3000);
    })

    function bannerMove(){
        banerImg.hide();
        banner.css("background",arrColor[index]);
        banerImg.eq(index).css({"display":"inline-block"}).stop(true).animate({"width":"810px","height":"480px"},1000);
        banerImg.not(banerImg.eq(index)).css({"width":"860px","height":"510px"});
        bannerNav.stop(true).animate({"top":"0px"});
        bannerNav.eq(index).stop(true).animate({"top":"-8px"});
    }

    //content TimeNav 整点抢
    var timeNav=$(".timeNav").children();
    var timeLeft=$(".time span");

    function countdown(){
        var now=new Date();
        var endDate=new Date(now.getFullYear(),now.getMonth(),now.getDate(),Math.floor(now.getHours()/2)*2+2,0,0)//年月日时分秒，月要减去1
        var oft=Math.floor((endDate-now)/1000);
        var ofh=Math.floor((oft%(3600*24))/3600);
        var ofh1=Math.floor(ofh/10);
        var ofh2=ofh%10;
        var ofm=Math.floor((oft%3600)/60);
        var ofm1=Math.floor(ofm/10);
        var ofm2=ofm%10;
        var ofs=oft%60;
        var ofs1=Math.floor(ofs/10);
        var ofs2=ofs%10;
        var ofms=Math.floor(((endDate-now)%1000)/100)
        timeLeft.eq(0).html(ofh1);
        timeLeft.eq(1).html(ofh2);
        timeLeft.eq(2).html(ofm1);
        timeLeft.eq(3).html(ofm2);
        timeLeft.eq(4).html(ofs1);
        timeLeft.eq(5).html(ofs2);
        timeLeft.eq(6).html(ofms);
    }
    countdown();
    setInterval(countdown,100);

    timeNav.on("click",function(){
        $(this).addClass("timeActive").siblings().removeClass("timeActive");
    })

    /*dayDayUpdate*/
    var dayDayUpdateI=$(".dayDayUpdate").children();
    var dayDayIndex=0;
    var b;
    setInterval(function(){
        b=setInterval(doudong,30)
    },2000);
    function doudong(){
        dayDayUpdateI.eq(dayDayIndex).animate({"top":"-6px"},100).delay(100).animate({"top":"0px"},100);
        dayDayIndex++;
        if(dayDayIndex==dayDayUpdateI.size()){
            dayDayIndex=0;
            clearInterval(b);
        }
    }


    var dayDayImg=$(".dayDayCon dl dt img");
    var dayDayDl=$(".dayDayCon dl");
    dayDayDl.on("mouseenter",function(){
        dayDayImg.eq($(this).index()).stop(true).animate({"width":"315px","top":"-19px","left":"-12px","height":"250px"},800);
    })
    dayDayDl.on("mouseleave",function(){
        dayDayImg.eq($(this).index()).stop(true).animate({"width":"290px","top":"0px","left":"0px","height":"230px"},800);
    })

    //floor快捷菜单

    $(".floorFastNav li").mouseenter(function(){
        $(this).find("span").show();
        $(this).find("div").hide();
        $(this).css("border-color","#e8a79c")
    })
    $(".floorFastNav li").mouseleave(function(){
        if($(this).prop("class")=="noChange"){

        }else{
            $(this).find("span").hide();
            $(this).find("div").show();
            $(this).css("border-color","#ccc")
        }

    })
    $(".floorFastNav li").click(function(){
        $("body").scrollTop($(".floorCon").eq($(this).index()).offset().top-50);

    })

})
