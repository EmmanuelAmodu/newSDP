<?php
session_start();
   if (isset($_SESSION["USER"]["userType"])){
	function sendGetRequest($url){
	    $ch = curl_init();  
	    curl_setopt($ch, CURLOPT_URL,$url);
	    curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);
	    $output=curl_exec($ch);
	    curl_close($ch);
	    return $output;
	}
	
        $url = "http://192.168.1.6/api/xgeniuss.php?"."msisdn=".$_POST["msisdn"]."&action=".$_POST["action"]."&auth=800df2099d4&dnd=".$_POST["dnd"]."&dnc=".$_POST["dnc"]."&tbl=".$_POST["tbl"];
	echo sendGetRequest($url);
   }

?>
