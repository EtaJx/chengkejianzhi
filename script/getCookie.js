/**
 * Created by _Hing on 2015/6/5.
 */
function getCookieObj(){
    var cookieObj = {},
        cookieSplit = [],
        cookieArr = document.cookie.split(';');
    for(var i = 0,len=cookieArr.length;i<len;i++){
        if(cookieArr[i]){
            cookieSplit = cookieArr[i].split('=');
            cookieObj[cookieSplit[0].trim()] = cookieSplit[1].trim();
        }
    }
    return cookieObj;
}