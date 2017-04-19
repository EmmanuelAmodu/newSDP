<?php
include("../phphttp.php");
include("../session.php");
if ($id){
    if(isset($_POST["number"])){
        if($_POST["number"] !== 'undefined'){
            $response = sendPostRequest("http://192.168.1.6/api/xgeniuss.php", 'msisdn='.$_POST["number"].'&auth=800df2099d4&action=1&format=txt');
            echo $response;
        } else {
            echo "requesting for ".$_POST["number"];
 	    }
    }
} else {
    echo "Authorized user only";
}
?>
