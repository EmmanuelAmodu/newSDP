<?php 
    include("../config.php");
    include("../session.php");
    if($id && $_SESSION["USER"]["userType"] == "1"){
        if (isset($_POST['username'])) {
            $username = mysqli_real_escape_string($connection, $_POST['username']);

            $sql = "DELETE FROM `".$USERS."` WHERE `username`='".$username."'";
            echo mysqli_query($connection, $sql);
        }
    }
?>