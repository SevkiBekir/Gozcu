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


    function getAttemptsForResults(){
        $table="attempts a";
        $schemeVar=printSchemeName();
        if (findLocalOrNot()==true)
            $table=$schemeVar.".".$table;


        if(isset($this->username,$this->applicationId)){
            $this->db->select('*')
                ->from($table)
                ->where(array('username'=> $this->username, 'applicationId' => $this->applicationId));

            $query=$this->db->get();

            $row=$query->result();
            if ($row)
                return $row;
            else
                return false;
        }
        return false;
    }











}


                
                