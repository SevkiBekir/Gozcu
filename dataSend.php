<?php
$getTime = $_GET['time'];
$getMouseX = $_GET['x'];
$getMouseY = $_GET['y'];
$getLeftX = $_GET['x']-100;
$getLeftY = $_GET['y']-100;
$getRightX = $_GET['x']+100;
$getRightY = $_GET['y']+100;
//$getUser = $_GET['user'];
$getUser = "sbk11";


echo $getTime."<br/>";
echo $getMouseX."<br/>";
echo $getMouseY."<br/>";

$servername = "localhost";
$username = "parkinte_flashUs";
$password = "flash1234";

try {
    $conn = new PDO("mysql:host=localhost;dbname=parkinte_flash", $username, $password);
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
