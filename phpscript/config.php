<?php
    $hostname = 'localhost';
    $mysql_user = 'root';
    $mysql_pass = '';
    $mysql_database = 'bucket';
    $USERS = 'db_sdpnok36_tvault'; // this is the default table name that we used

    /* Connect to MySQL */
    $connection = mysqli_connect( $hostname,  $mysql_user,  $mysql_pass, $mysql_database );
    if(!$connection) {
        die ('Unable to connect to MySQL server.<br ><br >SQL login details maybe incorrect'); 
    }

    $result = mysqli_query($connection, "SELECT DATABASE()");
    if(!$result){
        die ('request "Unable to select database."');
    }
?>