<?php
    session_start();
    $id = NULL;
    $user = NULL;
    $userType = NULL;
    if(isset($_SESSION["USER"])){
        $id = $_SESSION["ID"];
        $user = json_encode($_SESSION["USER"]);
        $userType = $_SESSION["USER"]['userType'];
    }
?>