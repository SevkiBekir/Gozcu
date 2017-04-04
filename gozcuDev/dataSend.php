<?php
include_once "Dbug.php";
session_start();
$getTime = $_GET['time'];
$getMouseX = $_GET['x'];
$getMouseY = $_GET['y'];
$getLeftX = $_GET['x']-100;
$getLeftY = $_GET['y']-100;
$getRightX = $_GET['x']+100;
$getRightY = $_GET['y']+100;
//$getUser = $_GET['user'];
$getUser = $_SESSION["user"]["username"];


echo $getTime."<br/>";
echo $getMouseX."<br/>";
echo $getMouseY."<br/>";

if ($_SERVER['REMOTE_ADDR'] == "127.0.0.1"){
    $servername = "localhost";
    $username = "root";
    $password = "123";
    $database = "flash";
}else{
    $servername = "localhost";
    $username = "parkinte_flashUs";
    $password = "flash1234";
    $database = "parkinte_flash";
}

try {
    $conn = new PDO("mysql:host=localhost;dbname=".$database, $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully"; 
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }
    
    
$sql = "INSERT INTO data (mouseX,mouseY,time,leftEyeX,leftEyeY,rightEyeX,rightEyeY,user)
VALUES (\"$getMouseX\",\"$getMouseY\",\"$getTime\",\"$getLeftX\",\"$getLeftY\",\"$getRightX\",\"$getRightY\",\"$getUser\")";

echo $sql;

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
    


?>
