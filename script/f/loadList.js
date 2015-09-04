/**
 * Created by _Hing on 2015/6/3.
 */
window.onload = function(){
    ajaxRequest();
}
function ajaxRequest(){
    $.ajax({
        type: "GET",
        dataType: "json",
        data: {kid:1},
        url: "/heihei.php/back/Topic/topicItemList",
        success: function (json) {
            if(json.data != null){
                var pages = Math.ceil(json.data.length/9);
                loadInfo(json.data);
                loadPage(pages);
            }else{
                alert('something is error.');
            }
        },
        error: function () {
            alert('请求失败');
        }
    })
}
function loadInfo(data) {
    for(var i =0;i<data.length;i++){
        $('<div/>').appendTo($('.pic_box .row')).addClass('col-md-3 col-sm-3 col-xs-3').css('border',"1px solid #ccc").append(function(){
            var str ="<div class=\"thumbnail\" ><img src=\""+data[i].jobImg+"\" alt=\"兼职图片\" /></div><div class=\"caption\"><h4>"+data[i].jobName+"</h4><p class=\"pull-right\"><a href=\"#deleteJob\" class=\"btn btn-danger btn-sm\" role=\"button\" data-toggle=\"modal\" id=\""+data[i].jobId+"\" onclick = \"set(this.id);\">删除</a></p></div>";
            return str;
        });
    }

}

function loadPage(pages){
    for(var i = 1;i<=pages;i++){
        $('<li/>').appendTo($('.pagination')).append(function(){
            var str = "<a href=\"javascript:;\">"+i+"</a>";
            return str;
        });
    }
}

//删除兼职
function deleteJob(){
    //alert(1);
    $.post("/heihei.php/back/Topic/topicDelItem","kid="+$('#subId').val()+"&jobId="+window.jid,function(json){
        if(json.status == "200"){
            location.reload();
        }else{
            alert('删除失败');
        }
    });
}
function set(id){
    window.jid = id;
}

$('#deleteBtn').bind('click',function(){
    deleteJob();
});



//array


//add job
$('#addBtn').bind('click',function(){
        $.ajax({
            type:'POST',
            dataType:'json',
            data:{kid:$('#subId').val(),isAdd:1},
            url:"/heihei.php/back/Topic/topicItemList",
            success:function(json){
                if(json != null){
                    loadJobList(json.data);
                }
            },
            error:function(){
                alert("加载失败");
            }
        });


});

function loadJobList(data){
    for(var i =0;i<data.length;i++){
        $('.list-grounp').append(function(){
            var str = "<li class=\"list-group-item\"><div class=\"checkbox\"><input type=\"checkbox\" id=\"job"+i+"\"  value=\""+data[i].jobId+"\" />"+data[i].jobName+"</div></li>";
            return str;
        });
    }
}
