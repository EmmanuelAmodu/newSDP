<?php
include("loginState.php");
if ($state === true){
    if(isset($_POST["number"])){
        if($_POST["number"] !== 'undefined'){
            $response = sendPostRequest("http://192.168.1.6/api/xgeniuss.php", 'msisdn='.$_POST["number"].'&auth=800df2099d4&action=1&format=txt');
            echo $response;
        } else {
            echo "requesting for ".$_POST["number"];
 	}
    } elseif (isset($_POST["msisdn"]) && isset($_POST["action"]) && isset($_POST["subId"]) && isset($_POST["format"])) {
	      $url = "http://192.168.1.6/api/xgeniuss.php?msisdn=".$_POST["msisdn"]."&auth=800df2099d4&action=".$_POST["action"]."&subId=".$_POST["subId"]."&format=".$_POST["format"];
	      echo sendGetRequest($url);
    } 
} else {
    echo "Authorized user only";
}

function sendPostRequest($url, $fields){
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $server_output = curl_exec ($ch);
    curl_close($ch);
    return $server_output;
}

function sendGetRequest($url){
    $ch = curl_init();  
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    $output=curl_exec($ch);
    curl_close($ch);
    return $output;
}
?>




