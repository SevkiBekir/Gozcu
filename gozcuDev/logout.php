<?php
/**
 * Created by PhpStorm.
 * User: sbk
 * Date: 04/04/2017
 * Time: 05:58
 */


session_start();
$loggedin = $_SESSION['loggedin'];

if($loggedin===true){

    unset($_SESSION['user']);
    $_SESSION['loggedin']=false;

    header("Location: login.php");
}

?>