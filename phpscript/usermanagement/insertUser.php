<?php 
    include("../config.php");
    include("../session.php");
    if($id && $_SESSION["USER"]["userType"] == "1"){
        if (isset($_POST['username'])&&isset($_POST['password'])) {
            $username = mysqli_real_escape_string($connection, $_POST['username']);
            $password = mysqli_real_escape_string($connection, $_POST['password']);
            $email = mysqli_real_escape_string($connection, $_POST['email']);
            $userType = mysqli_real_escape_string($connection, $_POST['userType']);
            
            $sql = "INSERT INTO `".$USERS."` (`id`, `username`, `password`, `email`, `userType`, `isOnline`, `last_login`, `isActive`) VALUES (NULL, '".$username."', '".$password."', '".$email."', '".$userType."', '0', NULL, '1')";
            echo mysqli_query($connection, $sql);
        }
    }
?>