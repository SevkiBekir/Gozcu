<?php
include_once "Dbug.php";
include_once "Attempt.php";
session_start();

$status= $_GET['status'];
$getUser = $_SESSION["user"]["username"];
$applicationId = $_SESSION["applicationId"];
$_SESSION["userAttempt"] = $status;

echo $status."<br/>";
echo $applicationId."<br/>";
echo $_SESSION["userAttempt"]."<br/>";
echo $getUser."<br/>";

$attempt = new Attempt();
$result  = $attempt->insertAttempt($applicationId,$getUser,$status);
if($result === true)
    echo "successful";
else
    echo "failed";


?>
