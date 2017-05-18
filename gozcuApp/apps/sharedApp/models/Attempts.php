<?php
/**
 *
 * @2017
 * ************ T E A M ************
 * Şevki KOCADAĞ -> bekirsevki@gmail.com
 *
 *
 */

class attempts extends BaseModel {

    /**
     * Columns of table users
     */
    public $id;
    public $applicationId;
    public $username;
    public $status;
    public $time;




    /**
     * users constructor.
     */
    public function __construct(){
        // Call the CI_Model constructor
        parent::__construct();
    }


    function insertAttempt(){
        if($this->save(array("applicationId" => $this->applicationId, "username" => $this->username, "status" => $this->status))){

            /// Registration is successful
            return true;
        }
        return false;


    }











}


                
                