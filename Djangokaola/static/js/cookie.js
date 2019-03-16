/*
    设置cookie:
        1.参数name、value     name=value; 必须有；
        2.参数expires    失效时间，如果没有声明，则为浏览器关闭后即失效。
        3.参数path       访问路径，当设置了路径，那么只有设置的那个路径文件才可以访问cookie
        4.参数domain     访问域名，用于限制只有设置的域名才可以访问，那么没有设置，会默认限制为创建cookie的域名
        5.参数secure      安全设置，指明必须通过安全的通信通道来传输(HTTPS)才能获取 cookie。
*/
function setCookie(name,value,expires,path,domain,secure) {
    var sum = encodeURIComponent(name)+"="+encodeURIComponent(value);//这个必须有
    if(expires instanceof Date){
        sum += ";expires="+expires;
    }
    if(path){
        sum += ";path="+path;
    }
    if(domain){
        sum += ";domain="+domain;
    }
    if(secure){
        sum +=";secure";
    }
    document.cookie = sum;
}
//拿cookie中数据，只需提供参数name;
function getCookie(name) {
    var str = decodeURIComponent(document.cookie);
    var reg = /;\s*/ig;//去除“;空格”的正则
    var arr = str.split(reg);
    for(var i=0;i<=arr.length-1;i++){
        var arr2 = arr[i].split("=");
        if(arr2[0]== name){
            return arr2[1];
        }
    }
    return "";
}

//删除cookie
function removeCookie(name) {
    var d = new Date()-1;
    document.cookie = encodeURIComponent(name) + "=; expires=" + d;
}

//拿到所有的cookie值---用于购物车
/*
 cookie上的值："水果1=5;水果2=3;水果3=7;"     split       [水果1=5,水果2=3,水果3=7]
 返回值：[[水果1,5],[水果2,3],[水果3,7]]
 */
function getAll(){
    var str = decodeURIComponent(document.cookie);//"水果1=5;水果2=3;水果3=7;"
    var reg = /;\s*/ig;
    var arr = str.split(reg);//[水果1=5,水果2=3,水果3=7]
    var resultLast=[];
    for(var i=0;i<arr.length;i++){
        var arr2 = arr[i].split("=");//[[水果1,5@@1],[水果1,5@@1]]
        var arr3=arr2[1].split("@@");////[src,价格，数量]
        if(arr3.length==3){
            var result = [];
            result.push(arr2[0]);//
            result.push(arr3);
            resultLast.push(result);
        }
    }
    return resultLast;
}


