/**
 * Created by JokerHing on 2015/5/20.
 */
function createRequest(){
    try{
        request = new XMLHttpRequest();
    }catch(tryM5){
        try{
            request = new ActiveXObject("Msxml2.XMLHTTP");
        }catch(otherMS){
            try{
                request = new ActiveXObject("Mocrosoft.XMLHTTP");
            }catch(failed){
                return null;
            }
        }
    }
    return request;
}






















