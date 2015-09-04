/**
 * Created by JokerHing on 2015/5/16.
 */
/*window.onload = function(){
    //alert(1);
    //var username = document.getElementById('userName').value;
    //var password = document.getElementById('password').value;
    var button = document.getElementById('loginButton');
    button.onclick = check;

};*/
function check(){
    //get form
    //var form = document.getElementById('signbeforeForm');
    if(isUsername() && isPassword()){
        return true;
    }else{
        return false;
    }
}


function isUsername(){
    var userName = document.getElementById('userName'),
        //检测时候为邮箱
        reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    //alert(userName.value);
    //取得提示错误的span
    var errorTips = document.getElementById('errorTip');
    var result = reg.test(userName.value);
    if(!result || userName.value==null || userName == "") {
        errorTips.innerHTML = "请输入正确的邮箱地址";
        userName.focus();
        return false;
    }else{
        errorTips.innerHTML = "";
        return true;
    }
}


function isPassword(){
    //得到密码
    var password = document.getElementById('password'),
//        正则表达式
        reg =  /[a-zA-Z0-9]{6,16}/;
//    get span
    var errorTip11 = document.getElementById('errorTip1');
    var result = reg.test(password.value);
    if(!result || password.value == null || password.value == ""){
        errorTip11.innerHTML = "密码输入错误,至少六位"
        password.focus();
        return false;
    }else{
        return true;
    }

}

//ajax check
/*function checkInfo(username,password){
    alert(2);
    request = createRequest();
    if(request == null){
        alert("无法创建对象。");
        return null;
    }
    url = "check.php?userName="+username+"&password="+password;
    request.open("POST",url,true);//异步请求
    request.onreadystatechange = loadInfo;
    request.send(null);
}
function loadInfo(){
    alert(3);
    if(request.readyState == 4){
        alert(5);
        if(request.status == 200){
            var jsonArr = $.parseJSON(request.responseText);
            if(jsonArr.data.token!=null || jsonArr.data.token!=""){
                //var token = getCookie('token');
                setCookie('token',token,7);//7七天过期
                *//*var token = getCookie('token');
                if(token != null || token !=""){
                    //加载信息
                    alert("i am here!");
                }else{
                    //不加载信息
                    alert("i am nor here!");
                }*//*
            }else{
                return false;
            }

        }
    }
}*/

/*function getCookie(c_name){//cookie
    if(document.cookie.length>0){
        c_start = document.cookie.indexOf(c_name+"+");
        if(c_start != 1){
            c_start = c_start+c_name.length+1;
            c_end = document.cookies.indexOf(";",c_start);
            if(c_end == -1){
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return "";
}*/
/*function setCookie(c_name,value,expiredays){//设置cookie的值，传入cookie名字，cookie的值，过期时间
    var exdate = new Date();
    exdate.setDate(exdate.getDate()+expiredays);//
    document.cookie = c_name+"="+escape(value)+(
        (expiredays == null) ? " " : "expires="+exdate.toGMTString()
    );
}

function ckeckCookie(){

}*/













