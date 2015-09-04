/**
 * Created by JokerHing on 2015/5/19.
 */

function check(){
//get button
/*    var button = document.getElementById('submitButton');
//    get form
    var form = document.getElementById('publicJob');*/
        if(isJobName() &&isjobJob()&& isJobApplyCount() && isJobMoney()&&isTotalMoney() &&isDeadline() && isDate()&& isjobTime && isAddresss() && isJobIntro() && isJobNeed() ){
            return true;
        }else{
            return false;
        }
}

function isJobName(){
    var jobName = document.getElementById('jobName');
        //reg = /^[\u4e00-\u9fa5]/,
       // result = reg.test(jobName.value);

    if(jobName.value==null || jobName.value == "" ){
        jobName.parentNode.parentNode.className = "form-group has-error";
        jobName.value="请输入正确的兼职名称";
        jobName.placeholder="请输入正确的兼职名称,中文或英文";
        jobName.focus();
        return false;
    }else{
        if(jobName.value=="请输入正确的兼职名称"){
            jobName.parentNode.parentNode.className = "form-group has-error";
            jobName.focus();
            return false;
        }else{
            jobName.parentNode.parentNode.className = "form-group";
            return true;
        }
    }
}


function isJobApplyCount(){
//    get jobApplyCount
    var jobApplyCount = document.getElementById('jobApplyCount'),
        valueText = jobApplyCount.value,
        reg = /^[-+]?\d*$/,
        result = reg.test(jobApplyCount.value);

    if(!result || valueText == null || valueText == ""){
        jobApplyCount.parentNode.parentNode.className ="form-group has-error";
        jobApplyCount.value = "请输入整数";
        jobApplyCount.placeholder = "请输入整数";
        jobApplyCount.focus();
        return false;
    }else{
        jobApplyCount.parentNode.parentNode.className ="form-group";
        return true;
    }

}

function isJobMoney(){
//    get money
    var jobMoney = document.getElementById('jobMoney');
    if(jobMoney.value.length === 0){
        jobMoney.parentNode.parentNode.className="form-group has-error";
        jobMoney.value = "请输入薪资，如10元/小时，100元/天";
        jobMoney.focus();
        return false;
    }else{
        if(jobMoney.value == "请输入薪资，如10元/小时，100元/天"){
            jobMoney.parentNode.parentNode.className="form-group has-error";
            jobMoney.focus();
            return false;
        }else{
            jobMoney.parentNode.parentNode.className="form-group";
            return true;
        }
    }
}

function isDeadline(){
    var deadline = document.getElementById('jobDeadline');
//    get time picker
    if(deadline.value.length === 0){
        deadline.parentNode.parentNode.className="form-group has-error";
        deadline.value = "请选择正确的时间";
        deadline.placeholder = "请选择正确的时间";
        deadline.focus();
        return false;
    }else{
        if(deadline.value == "请选择正确的时间"){
            deadline.parentNode.parentNode.className="form-group has-error";
            deadline.focus();
            return false;
        }else{
            deadline.parentNode.parentNode.className = "form-group";
            return true;
        }
    }

}


function isDate(){
//    get jobPostDate
    var jobBegin = document.getElementById('jobBegin');
//    get jobDeadline
    var jobEnd = document.getElementById('jobEnd');
        //get error
    var errorTips = document.getElementById('errorTips');
        //取得时间的值
        var beginTime = jobBegin.value,
            endTime = jobEnd.value;
    //用字符串“-”分割获得的时间
    if(beginTime ==null || beginTime==""){
        errorTips.innerHTML = "请选择时间";
        jobBegin.focus();
        return false;
    }else{
        errorTips.innerHTML ="";
    }
    if(endTime == null || endTime == ""){
        errorTips.innerHTML = "请选择时间";
        jobEnd.focus();
        return false;
    }else{
        errorTips.innerHTML ="";
    }
    var str1 = endTime.split("-");
    var str = beginTime.split("-");

    if(str1[0] <= str[0]){
        if(str1[1] >str[1]){
            return true;
        }else if(str1[1] == str[1]){
            if(str1[2] < str[2]){
                errorTips.innerHTML = "请选择正确的时间";
                jobEnd.focus();
                return false;
            }else{
                errorTips.innerHTML = "";
                return true;
            }
        }
    }else{
        return true;
    }

}
function isAddresss(){
//    get address
    var jobAddress = document.getElementById('jobAddress');
    if(jobAddress.value.length === 0){
        jobAddress.parentNode.parentNode.className = "form-group has-error";
        jobAddress.value="请输入地址";
        jobAddress.placeholder = "请输入地址";
        jobAddress.focus();
        return false;
    }else if(jobAddress.value=="请输入地址"){
        jobAddress.focus();
        return false;
    }else{
        jobAddress.parentNode.parentNode.className = "form-group";
        return true;
    }
}

function isJobIntro(){
//    get jobintro
    var jobIntro = document.getElementById('jobIntro');
//    get text
    var job_info = document.getElementById('job_info');
    jobIntro.value = job_info.value;

    if(jobIntro.value.length === 0){
        job_info.className = "errotip";
        job_info.focus();
        return false;
    }else{
        job_info.className="";
        return true;
    }
}

function isJobNeed(){
//    get jobNeed
    var jobNeed = document.getElementById('jobNeed');
    //get textarea value
    var job_request = document.getElementById('job_request');
    jobNeed.value = job_request.value;
    if(jobNeed.value.length === 0){
        job_request.className = "errotip";
        job_request.focus();
        return false;
    }else{
        job_request.className = "";
        return true;
    }
}

//预计薪资
function isTotalMoney(){
    var   jobMoneyTatol = document.getElementById('jobMoneyTatol');
    if(jobMoneyTatol.value.length === 0){
        jobMoneyTatol.parentNode.parentNode.className="form-group has-error";
        jobMoneyTatol.value="请输入预计获得的总工资";
        jobMoneyTatol.placeholder ="请输入预计获得的总工资";
        jobMoneyTatol.focus();
        return false;
    }else{
        jobMoneyTatol.parentNode.parentNode.className="form-group";
        return true;
    }
}

//岗位
function isjobJob(){
    var jobJob = document.getElementById('jobJob');
    if(jobJob.length === 0){
        jobJob.parentNode.parentNode.calssName = "form-group has-error";
        jobJob.value = "请输入兼职的岗位";
        jobJob.placeholder = "请输入兼职的岗位";
        jobJob.focus();
        return false;
    }else{
        jobJob.parentNode.parentNode.calssName = "form-group";
        return true;
    }
}

//具体时间描述
function isjobTime(){
    var jobTime = document.getElementById('jobTime');
    if(jobTime.value.length === 0){
        jobTime.parentNode.parentNode.className = "form-group has-error";
        jobTime.value = "请输入具体的工作时间描述";
        jobTime.placeholder = "请输入的具体的时间描述，即一天做几个小时或者时间点";
        return false;
    }else{
        jobTime.parentNode.parentNode.className = "form-group";
        return true;
    }
}

//检测图片
function isPic(){
    var picPath = documEnt.getElementById('jobTime');
    if(picPath.value.lenght === 0){
            picPath.parentNode.parentNode.className = "form-group has-error";
            picPath.placeholder="请放入图片的url";
        return false;
    }else{
        picPath.parentNode.parentNode.className = "form-group";
        return true;
    }
}
