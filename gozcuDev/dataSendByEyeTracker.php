<?php
include_once "Dbug.php";
include_once "Data.php";
session_start();


if($_SESSION["userAttempt"] === 1){
$getLeftX = $_GET['eyeLeftX'];
$getLeftY = $_GET['eyeLeftY'];
$getRightX = $_GET['eyeRightX'];
$getRightY = $_GET['eyeRightY'];
$getMouseX = $_GET['mouseX'];
$getMouseY = $_GET['mouseY'];
$getUser = $_SESSION["user"]["username"];

echo $getLeftX."<br/>";
echo $getLeftY."<br/>";
echo $getRightX."<br/>";
echo $getRightY."<br/>";
echo $getUser."<br/>";


$data = new Data();
$result  = $data->insertDataByEyeTracker($getLeftX,$getLeftY,$getRightX,$getRightY,$getUser,$getMouseX,$getMouseY);
if($result === true)
    echo "successful";
else
    echo "failed";

}
?>
