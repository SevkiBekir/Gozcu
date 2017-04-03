
<?php
echo "<h1>Mouse Location Result</h1>";
echo "<table style='border: solid 1px black;'>";
echo "<tr><th>Id</th><th>User</th><th>Time</th><th>MouseX</th><th>MouseY</th><th>Left Eye X</th><th>Left Eye Y</th><th>Right Eye X</th><th>Right Eye Y</th></tr>";

class TableRows extends RecursiveIteratorIterator { 
    function __construct($it) { 
        parent::__construct($it, self::LEAVES_ONLY); 
    }

    function current() {
        return "<td style='width:150px;border:1px solid black;'>" . parent::current(). "</td>";
    }

    function beginChildren() { 
        echo "<tr>"; 
    } 

    function endChildren() { 
        echo "</tr>" . "\n";
    } 
} 

$servername = "localhost";
$username = "parkinte_flashUs";
$password = "flash1234";
$dbname = "parkinte_flash";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("SELECT id, user,time,mouseX, mouseY,leftEyeX,leftEyeY,rightEyeX,rightEyeY date FROM data order by id desc");
    $stmt->execute();

    // set the resulting array to associative
    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
    foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) { 
        echo $v;
    }
}
catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
$conn = null;
echo "</table>";
?>


