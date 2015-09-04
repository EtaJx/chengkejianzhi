/**
 * Created by JokerHing on 2015/5/16.
 */


function checkResult(){
    //get error span
    //span = document.getElementsByTagName('span');

        if (isCompadnyName() && isPic() && isScale() && isIntro()) {
            return true;
        } else {
            return false;
        }
}

function isCompadnyName(){
    var companyName = document.getElementById('companyName');
    if(companyName){
        reg = /^[\u4e00-\u9fa5]/,//验证中文
            reg1 = /^[a-zA-Z]/;//验证英文
    //    result
        var result = reg.test(companyName.value);
        var result1 = reg1.test(companyName.value)
        if((!result && !result1) || companyName.value == null || companyName == ""){
            companyName.parentNode.parentNode.className="form-group has-error";
            companyName.placeholder="请输入正确的公司名称，英文或中文组合";
            companyName.focus();
            return false;
        }else{
            companyName.parentNode.parentNode.className="form-group";
            return true;
        }
    }else{
        return false;
    }
}

function isPic(){
    var fileInput = document.getElementById('fileInput');

    if(fileInput.value == null || fileInput.value==""){
        fileInput.parentNode.parentNode.className = "form-group has-error";
        fileInput.focus();
        return false;
    }else{
        fileInput.parentNode.parentNode.className = "form-group";
        return true;
    }
}

function isScale(){
//    get the scale
    var scale = document.getElementById('scale'),
//        reg
        reg = /^[-+]?\d*$/,
    //正则表达式验证结果
    result = reg.test(scale.value);
    if(!result || scale.value == null || scale.value == ""){
        scale.parentNode.parentNode.className = "form-group has-error";
        scale.placeholder = "请输入整数";
        scale.value="请输入整数";
        scale.focus();
        return false;
    }else{
        scale.parentNode.parentNode.className = "form-group";
        return true;
    }
}

function isIntro() {
//    get textarea
    var introText = document.getElementById('introText'),
//        get intro
        intro = document.getElementById('intro');
//    赋值
    intro.value = introText.value;

    if (intro.value == null || intro.value == ""){
        introText.className = "errotip";
        introText.focus();
        return false;
    }else{
        introText.className = "";
        return true;
    }
}


