/**
 * Created by _Hing on 2015/6/7.
 */
$(document).ready(
    $.ajax({
        type:"GET",
        data:"",
        dataType:"json",
        contentType:"application/json",
        url:"/heihei.php/home/Seller/myJob",
        async:true,
        cache:false,
        success:function(json){
            if(json.data != null){
                loadInfo(json.data);

            }
        },
        error:function(){
            alert("发生错误！");
        }
    })
);


function loadInfo(data){
    for(var i = 0;i<data.length;i++){

        $('<tr/>').appendTo('tbody').append(function(){
            var str = "<td>"+(i+1)+"</td><td style=\"width:10%;\">"+data[i].jobName+"</td><td>"+data[i].jobDeadline+"</td></td.><td>"+data[i].jobBegin+"</td><td>"+data[i].jobMoney+"</td><td>"+data[i].jobNeedNum+"</td><td>"+data[i].jobApplyNum+"</td><td class=\"\" id=\"list"+i+"\">已完成</td><td></td>";
            return str;
        });
//                    alert(data[i].jobStatus)
        if(data[i].jobStatus == 1){
            $('#list'+i).addClass("uncomplete").text('未完成').next().append(function(){
                var str1 = "<a class=\"btn btn-primary btn-sm\" role=\"button\" data-toggle=\"modal\" data-target=\"#changeJob\" id=\""+data[i].jobId+"\" onclick=\"setCh(this.id)\">编辑</a> <a class=\"btn btn-danger btn-sm\" role=\"button\" data-toggle=\"modal\" data-target=\"#deleteJob\" id=\""+data[i].jobId+"\" onclick=\"setId(this.id)\">已完成</a> ";
                return str1;
            });
        }else{
            $('#list'+i).addClass("complete").text('已完成');
        }
    }
}


//删除兼职
function deleteJob(){
    $.post('/heihei.php/home/Seller/overJob',{jobId:window.jid},function(json){
        if(json.status == 200){
            alert("变身成功，已完成！");
            //alert();
            $('.uncomplete').next().html('');
            location.reload();
        }else{
            alert(json.info);
        }
    });
}

function setId(id){
    window.jid = id;
}

$('#delBtn').bind('click',function(){
    deleteJob();
});



