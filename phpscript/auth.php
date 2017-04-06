<?php
     include("config.php");
     $user;

    if (isset($_POST['username'])&&isset($_POST['password'])) {
        $email = mysqli_real_escape_string($connection, $_POST['username']);
        $password = mysqli_real_escape_string($connection, $_POST['password']);
        
        $sql = "SELECT * FROM ".$USERS." WHERE `username` = '".$email."' AND `password` = '".$password."'";
        $sql_result = mysqli_query($connection, $sql);
        if ($sql_result) {
            $user = mysqli_fetch_assoc($sql_result);
        } else {
            die ('Could not execute SQL query '.$sql);
        }
        if ($user){
            session_start();
            $_SESSION["ID"] = session_id();
            $_SESSION["USER"] = $user;
            if ($_SESSION["ID"] == session_id()) {
                echo json_encode($_SESSION["USER"]);
            } 
        }
    }

    if (isset($_POST['logout'])) {
        if($_POST['logout'] == true){
            session_start();
            unset($_SESSION["USER"]);
            unset($_SESSION["ID"]);
            unset($user);
            session_destroy();
            echo "logged out";
        }
    }

    if(isset($_POST['checkstate'])) {
        if ($_POST['checkstate']==true){
            session_start();
            if(isset($_SESSION["USER"])){
                echo json_encode($_SESSION["USER"]);
            } else {
                session_destroy();
                echo "no user logged in";
            }
        }
    }
?>