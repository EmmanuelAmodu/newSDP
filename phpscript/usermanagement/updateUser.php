<?php 
    include("../config.php");
    include("../session.php");
    if($id && $_SESSION["USER"]["userType"] == "1"){
        if (isset($_POST['username'])&&isset($_POST['password'])) {
            $email = mysqli_real_escape_string($connection, $_POST['email']);
            $password = mysqli_real_escape_string($connection, $_POST['password']);
            $userType = mysqli_real_escape_string($connection, $_POST['userType']);
            $id = mysqli_real_escape_string($connection, $_POST['id']);
            
            $sql = "UPDATE `".$USERS."` SET `email` = '".$email."', `password` = '".$password."', `userType` = '".$userType."' WHERE `id` = '".$id."'";
            echo mysqli_query($connection, $sql);
        }
    }
?>

