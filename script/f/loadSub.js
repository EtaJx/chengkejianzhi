/**
 * Created by _Hing on 2015/6/4.
 */
$(document).ready(
    $.ajax({
        type:'GET',
        dataType:'json',
        data:'',
        url:'/heihei.php/home/Job/topicList',
        success:function(json){
            if(json != null){
                loadSub(json.data);
            }
        },
        error:function(){
            alert('加载失败！');
        }
    })
);

function loadSub(data){
    for(var i = 0;i<data.length;i++){
        $('.list-grounp').append(function(){
            var str = "<li class=\"list-group-item col-md-7 col-sm-7 col-xs-7\"><h4>"+data[i].title+"<span style=\"border-left:1px solid #ccc;margin: 0 2% 0 2%;\"></span><small>"+data[i].subTitle+"</small></h4><a class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" data-target='#edit' role=\"button\" id=\""+data[i].id+"\" onclick=\"setEdit(this.id)\">编辑</a> <a class=\"btn btn-danger btn-sm\" data-toggle=\"modal\" data-target='#cancel' role=\"button\" id=\""+data[i].id+"\" onclick = \"setCancel(this.id)\">删除</a></li>"
            return str;
        });
    }


}

//    edit
function editSub(){
    $.ajax({
        type:'POST',
        dataType:'json',
        data:{kid:window.eid},
        url:'/heihei.php/home/Job/topicItem',
        success:function(json){
            if(json.data != null){
                document.getElementById('title').value = json.data.title;
                document.getElementById('subTitle').value = json.data.subTitle;
                document.getElementById('eintroText').value = json.data.intro;
            }
        },
        error:function(){
            alert('加载失败！');
        }
    });
}

function setEdit(id){
    window.eid = id;
    editSub();
}

$("#editSub").bind('click',function(){
    $.post('/heihei.php/back/Topic/chTopic',{id:window.eid,title:$('#title').val(),subTitle:$('#subTitle').val(),intro:$('#eintroText').val()},function(json){
        if(json.status == 200){
            alert("修改成功");
        }else{
            alert('姑且失败');
        }
    })
});



//    cancel
function cancelSub(){
    $.post("/heihei.php/back/Topic/delTopic","kid="+window.cid,function(json){
        if(json!= null){
            if(json.status == 200){
                location.reload();
            }else{
                alert("失败");
            }
        }
    });
}

function setCancel(id){
    window.cid = id;
}

$('#cancelBtn').bind('click',function(){
    cancelSub();
});

//add
$('#subBtn').bind('click',function(){
    if(checkValue()){
        $.ajax({
            type:'POST',
            dataType:'json',
            data:$('#subList').serialize(),
            url:'/heihei.php/back/Topic/addTopic',
            success:function(json){
                if(json.status == 200 ){
                    alert("添加成功");
                    location.reload();
                }else{
                    alert("提交失败");
                }
            },
            error:function(){
                alert("加载失败");
            }
        });
    }else{
        alert("请检查你的数据");
        return false;
    }
});

function checkValue(){
    if( checkNewPic() && checNewTile() && checkNewSubTitle() && checkNewIntro()){
        return true;
    }else{
        return false;
    }
}

function checkNewPic(){
    var newPic = document.getElementById('newPic');
    if(newPic.value.length !== 0){
        newPic.parentNode.className = "form-group";
        return true;
    }else{
        newPic.parentNode.className = "form-group has-error";
        newPic.placeholder = "图片url不能为空";
        newPic.focus();
        return false;
    }
}

function checNewTile(){
    var newTitle = document.getElementById('newTitle');
    if(newTitle.value.length !==0 ){
        newTitle.parentNode.className = "form-group";
        return true;
    }else{
        newTitle.parentNode.className = "form-group has-error";
        newTitle.placeholder = "专题题目不能为空";
        newTitle.focus();
        return false;
    }
}

function checkNewSubTitle(){
    var newSubTitle = document.getElementById('newSubTitle');
    if(newSubTitle.value.length !== 0){
        newSubTitle.parentNode.className = "form-group";
        return true;
    }else{
        newSubTitle.parentNode.className = "form-group has-error";
        newSubTitle.placeholder = "专题副标题不能为空";
        newSubTitle.focus();
        return false;
    }
}

function checkNewIntro(){
    var introText = document.getElementById('introText');
    var intro = document.getElementById('intro');
    intro.value = introText.value;
    if(intro.value.length !== 0){
        introText.className = "";
        return true;
    }else{
        introText.className = "errorText";
        introText.focus();
        return false;
    }
}



