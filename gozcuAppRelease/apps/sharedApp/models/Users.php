<?php
/**
 *
 * @2017
 * ************ T E A M ************
 * Şevki KOCADAĞ -> bekirsevki@gmail.com
 *
 *
 */

class users extends BaseModel {

    /**
     * Columns of table users
     */
    public $firstname;
    /**
     * @var
     */
    public $lastname;
    /**
     * @var
     */
    public $email;
    /**
     * @var
     */
    public $password;

    /**
     * @var
     */
    public $id;
    /**
     * @var
     */
    public $username;
    /**
     * @var
     */
    public $hash;
    /**
     * @var
     */
    public $keyValue;
    /**
     * @var
     */
    public $createdDate;



    /**
     * users constructor.
     */
    public function __construct(){
        // Call the CI_Model constructor
        parent::__construct();
    }


    /**
     * @param $username
     * @return bool
     */
    function getUserInfo($username){
        $table="users u";
        $schemeVar=printSchemeName();
        if (findLocalOrNot()==true)
            $table=$schemeVar.".".$table;

        if($row = $this->search(array('username' => $username))){

            //new dBug($row);

            return $row[0];
        }
        return false;
    }


    /**
     * @param $hash
     * @param $keyValue
     * @param $password
     * @return bool
     */
    function loginCheck(){
        if(hash_hmac('sha256', $this->password, $this->keyValue)===$this->hash){
            return true;
        }
        return false;
    }


     /**
     * Register
     */
    function register($email, $password, $firstName, $lastName, $username){
        //DAHA SONRA FORM VALIDATION OLACAK!

        if($this->search(array('email'=>$email))){
            //Email found!
            //No register
            return false;
        }

        $keyValue = uniqid("", true);

        $hash = hash_hmac('sha256', $password, $keyValue);

        if($this->save(array("hash" => $hash, "email" => $email, "keyValue" => $keyValue, "firstname" => $firstName, "lastname" => $lastName, "username" => $username))){

            /// Registration is successful
            return true;
        }


    }






}


                
                