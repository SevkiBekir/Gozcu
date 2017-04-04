<?php
/**
 * Created by PhpStorm.
 * User: sbk
 * Date: 04/04/2017
 * Time: 05:31
 */

include_once ("User.php");
include_once ("DBug.php");

session_start();
$loggedin = false;
if(isset($_SESSION['loggedin']))
    $loggedin = $_SESSION['loggedin'];

if($loggedin===false)//new coming user
{
    if(isset($_POST['btnLogin'], $_POST['txbUsername'], $_POST['txbPassword'])){
        if($_POST['btnLogin']=='Giriş Yap'){
            ///Login Operations
            $user = new User();
            $result = $user->login($_POST["txbUsername"],$_POST["txbPassword"]);
            new dBug($result);
            if($result){
                $_SESSION['loggedin'] = true;
                $_SESSION['user'] = array();
                $_SESSION['user']['firstname']=$user->firstname;
                $_SESSION['user']['lastname']=$user->lastname;
                $_SESSION['user']['email']=$user->email;
                $_SESSION['user']['id']=$user->uid;
                $_SESSION['user']['username']=$user->username;
                $loggedin = true;
                $meta = <<< EOF

<meta http-equiv="refresh" content="0; url=index.php">
EOF;
                echo $meta;
            }else{
                $meta = <<< EOF

<meta http-equiv="refresh" content="0; url=login.php">
EOF;
                echo $meta;
            }


        }
    }
    if(isset($_POST['btnRegister'], $_POST['txbEmail'], $_POST['txbPassword1'],$_POST['txbPassword2'],$_POST['txbFName'],$_POST['txbLName'],$_POST['txbUsername'])){

        if($_POST['btnRegister']=='Kayıt Ol'){
            if($_POST["txbPassword1"] === $_POST["txbPassword2"]){
                ///Register Operations
                $user = new User();
                $result = $user->register($_POST['txbFName'], $_POST['txbLName'],$_POST['txbEmail'],$_POST['txbPassword1'],$_POST['txbUsername']);
                if($result){
                    $meta = <<< EOF

<meta http-equiv="refresh" content="0; url=login.php">
EOF;
                    echo $meta;
                }

                else{
                    $meta = <<< EOF

<meta http-equiv="refresh" content="0; url=register.php">
EOF;
                    echo $meta;
                }

            }
        }
    }
}else
    header("Location: index.php");

?>