<?php
include("../session.php");
include("../phphttp.php");
if ($id){
   if (isset($_SESSION["USER"]["userType"])){
		$url = "http://192.168.1.6/api/xgeniuss.php?"."msisdn=".$_POST["msisdn"]."&action=".$_POST["action"]."&auth=800df2099d4&dnd=".$_POST["dnd"]."&dnc=".$_POST["dnc"]."&tbl=".$_POST["tbl"];
		echo sendGetRequest($url);
   }
}

?>
