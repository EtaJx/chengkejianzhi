<?php
    $takenEmail = array('591933443@qq.com','zx591933443@163.com');
    sleep(0.5);
if(!in_array($_REQUEST['email'],$takenEmail)){
    echo 'okay';
}else{
    echo 'denied';
}
?>