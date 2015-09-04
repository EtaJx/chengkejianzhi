/**
 * Created by JokerHing on 2015/5/16.
 */
window.onload = function(){
    //失去焦点时的动作
    document.getElementById('email').onblur = checkEmail;
    //get button
    var signButton = document.getElementById('signButton');
    //signButton.disabled = "true";
    signButton.onclick = check;
}

function check(){
//    get form
    var signbeforeForm = document.getElementById('signbeforeForm');
    var errorTip = document.getElementById('errorTip');
    if(isEmail() && isPassword() && isSame()){
        if(errorTip.innerHTML != "该邮箱已被注册。"){
            signbeforeForm.submit();
            //window.location="signup.html";
        }else{
            return false;
        }

    }else{
        return false;
    }
}

function isEmail(){
//email address
    var email = document.getElementById('email'),
        reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    var errorTip = document.getElementById('errorTip');
//    检测结果
    var result = reg.test(email.value);
    if(!result || email.value == null || email.value == ""){
        errorTip.innerHTML = "请输入正确的邮箱地址";
        email.focus();
        return false;
    }else{
        //errorTip.innerHTML = "";
        return true;
    }
}

function isPassword(){
//    get password
    var password = document.getElementById('password'),
//        正则表达式
        reg = /[a-zA-Z0-9]{6,16}/;
//    get span
    var errorTip = document.getElementById('errorTip1');
//    验证结果
    var result = reg.test(password.value);
    if(!result || password.value == null || password.value ==""){
        errorTip.innerHTML = "请输入密码,至少六位";
        password.focus();
        return false;
    }else{
        errorTip.innerHTML = "";
        return true;
    }
}

function isSame(){
    //    get password
    var password = document.getElementById('password');
//    get repeat
    var repassword = document.getElementById('rePassword');
    //get span
    var errorTip = document.getElementById('errorTip2');
    if(password.value != null && password.value!="" && repassword.value != null && repassword.value!=""){
        if(password.value !== repassword.value){
            errorTip.innerHTML = "两次输入不一样";
            repassword.focus();
            return false;
        }else{
            errorTip.innerHTML = "";
            return true;
        }
    }
}

//ajax check E-mail
function checkEmail(){
    //get tip span
    var tip = document.getElementById('errorTip');
    //alert(1);
    request = createRequest();
    if(request == null){
        alert("无法创建对象");
    }else{
        //alert(2);
        var Email = document.getElementById('email').value,
        //    验证邮箱格式的正则表达式
            reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        if(reg.test(Email)){
            var theEmail = escape(Email);//处理错误的字符串
            var url = "/heihei.php/home/Seller/chkmail?email="+theEmail;
            //alert(4);
            request.onreadystatechange = showEmailStatus;
            request.open("GET",url,true);
            request.send(null);
        }else{
            tip.className = "errorTips";
            tip.innerHTML = "邮箱格式错误";
            return false;
        }

    }
}

function showEmailStatus(){
    //alert(3);
    //get the info span
    var tip = document.getElementById('errorTip');
    if(request.readyState == 4){
        if(request.status == 200){
                var json = eval("("+request.responseText+")");
            if(json.status == 200){
                tip.className = "correct";
                tip.innerHTML="恭喜，该邮箱可用。";
            }else{
                tip.className = "errorTips";
                tip.innerHTML = "该邮箱已被注册。";
            }
        }
    }
}



















































