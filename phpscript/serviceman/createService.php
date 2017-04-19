<?php
  include("../session.php");
    include("../phphttp.php");
    if ($id){
        if(isset($_POST["sname"])&&isset($_POST["dsp"])&&isset($_POST["keyword"])&&isset($_POST["price"])&&isset($_POST["validity"])&&isset($_POST["btype"])&&isset($_POST["status"])){
            $fields = "sname=".$_POST["sname"]."&dsp=".$_POST["dsp"]."&keyword=".$_POST["test"]."&price=".$_POST["price"]."&validity=".$_POST["validity"]."&btype=".$_POST["btype"]."&Noext=-1&grace=90&sq=-1&trail=-1&status=".$_POST["status"]."&autonew=1&dst=1&sbill=-1&currencyCode=N&sid=1&auth=2HJ249K2JJ2&ratingCode=53344";
            $url = "http://192.168.1.6/api/xpat.php";
            echo sendPostRequest($url, $fields);
        } else {
            echo "parameters not defined";
        }
    } else {
        echo "not authorised";
    }
  
?>