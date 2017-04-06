<?php
    include("../config.php");
    include("../session.php");
    if($id && $_SESSION["USER"]["userType"] == "1"){
        $sql = "SELECT * FROM ".$USERS;
        $sql_result = mysqli_query($connection, $sql);
        if ($sql_result) {
            $text = array();
            while ($result = mysqli_fetch_assoc($sql_result)) {
              array_push($text, $result);
            }
            echo json_encode($text);
        } else {
            die ('Could not execute SQL query '.$sql);
        }
    } else {
        echo "Not Authorized query";
    }
?>