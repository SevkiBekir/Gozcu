<?php

/**
 * Created by PhpStorm.
 * User: sbk
 * Date: 29/03/2017
 * Time: 01:16
 */
include_once "Dbug.php";
class Data
{
    public $mouseX;
    public $mouseY;
    public $leftEyeX;
    public $leftEyeY;
    public $rightEyeY;
    public $rightEyeX;
    public $time;
    public $username;
    public $id;
    private $db;

    function dbConnection (){
        if ($_SERVER['REMOTE_ADDR'] == "127.0.0.1"){
            $servername = "localhost";
            $username = "root";
            $password = "123";
            $database = "flash";
        }else{
            $servername = "localhost";
            $username = "wwwgozcu";
            $password = "tP2cVNhr";
            $database = "wwwgozcu";
        }
        $this->db = new mysqli($servername, $username, $password, $database);
        if($this->db->connect_error){
            die($this->db->connect_error);
            return false;
        }


        return true;
    }

    function insertDataByEyeTracker($leftX,$leftY,$rightX,$rightY,$username,$mouseX, $mouseY){
        if($this->dbConnection()){
            if (mysqli_connect_errno()) {
                printf("Connect failed: %s\n", mysqli_connect_error());
                exit();
            }
            $sql = "INSERT INTO eyeTracker (leftX,leftY,rightX,rightY,username,mouseX,mouseY) VALUES(?,?,?,?,?,?,?)";

            $stmt = $this->db->prepare($sql);

            $stmt->bind_param("sssssss", $leftX, $leftY, $rightX,$rightY,$username,$mouseX,$mouseY);

            printf("%d Row inserted.\n", $stmt->affected_rows);
            return $stmt->execute();
        }else
            return false;

    }
}


?>