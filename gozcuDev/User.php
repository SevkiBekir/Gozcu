<?php

/**
 * Created by PhpStorm.
 * User: sbk
 * Date: 04/04/2017
 * Time: 05:24
 */
class User
{
    private $db;
    public $email;
    public $uid;
    public $firstname;
    public $lastname;
    public $username;

    function __construct()
    {
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
        $this->db = new mysqli($servername, $username, $password, $database);
        if($this->db->connect_error)
            die($this->db->connect_error);
    }

    function register($firstname, $lastname, $email, $pass,$username){

        //User Existence Check
        $sql = "SELECT id FROM users WHERE email=?";
        $stmt = $this->db->prepare($sql);
        $stmt->bind_param("s", $email);
        $id = 0;
        $stmt->execute();
        $stmt->bind_result($id);
        if($stmt->fetch())
            return false;

        //User Insertion
        $sql = "INSERT INTO users (email,keyValue,hash,firstname,lastname,username) VALUES(?,?,?,?,?,?)";
        $stmt = $this->db->prepare($sql);
        $salt = uniqid("", true);

        $hash = hash_hmac('sha256', $pass, $salt);
        $stmt->bind_param("ssssss", $email, $salt, $hash,$firstname,$lastname,$username);
        new dBug([$firstname,$lastname,$email,$pass,$username]);

        $stmt->execute();
        new dBug([$hash,$salt]);
        return true;
    }

    function login($username, $pass){
        $sql = "SELECT id,email,keyValue,hash,firstname,lastname FROM users WHERE username=?";
        $stmt = $this->db->prepare($sql);
        $stmt->bind_param("s", $username);

        $id = 0;
        $dbemail = "";
        $keyValue = "";
        $hash = "";
        $firstname="";
        $lastname="";


        $stmt->execute();

        $stmt->bind_result($id, $dbemail, $keyValue, $hash, $firstname, $lastname);

        new dBug($id);
        if($stmt->fetch())
        {

            if(hash_hmac('sha256', $pass, $keyValue)===$hash)
            {
                $this->uid = $id;
                $this->email = $dbemail;
                $this->lastname=$lastname;
                $this->firstname=$firstname;
                $this->username=$username;
                return true;
            }
        }

        return false;

    }


    /**
     * @param $paraId
     * @return bool
     */
    function getFirstLastName($paraId){
        $sql = "SELECT firstname,lastname FROM users WHERE id=?";
        $stmt = $this->db->prepare($sql);
        $stmt->bind_param("i", $paraId);

        $firstname = "";
        $lastname = "";
        $stmt->execute();
        $stmt->bind_result($firstname,$lastname);
        if($stmt->fetch()){
            $this->firstname=$firstname;
            $this->lastname=$lastname;
            return true;
        }

    }
}