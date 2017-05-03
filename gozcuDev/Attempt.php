<?php

/**
 * Created by PhpStorm.
 * User: sbk
 * Date: 29/03/2017
 * Time: 01:16
 */
include_once "Dbug.php";
class Attempt
{
    public $applicationId;
    public $user;
    public $id;
    public $status;
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

    function insertAttempt($applicationId, $user, $status){
        if($this->dbConnection()){
            if (mysqli_connect_errno()) {
                printf("Connect failed: %s\n", mysqli_connect_error());
                exit();
            }
            $sql = "INSERT INTO attempts (applicationId,user,status) VALUES(?,?,?)";

            $stmt = $this->db->prepare($sql);

            $stmt->bind_param("sss", $applicationId, $user, $status);

            printf("%d Row inserted.\n", $stmt->affected_rows);
            return $stmt->execute();
        }else
            return false;

    }
}


?>