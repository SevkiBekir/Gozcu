<?php
/**
 *
 * @2017
 * ************ T E A M ************
 * Şevki KOCADAĞ -> bekirsevki@gmail.com
 *
 *
 */

class instructions extends BaseModel {

    /**
     * Columns of table users
     */
    public $id;
    public $applicationId;
    public $text;



    /**
     * users constructor.
     */
    public function __construct(){
        // Call the CI_Model constructor
        parent::__construct();
    }


    public function getInstruction($applicationId = NULL){
        $table="instructions i";
        $schemeVar=printSchemeName();
        if (findLocalOrNot()==true)
            $table=$schemeVar.".".$table;


        if(isset($applicationId)){
            $this->db->select('*')
                ->from($table)
                ->where(array('applicationId'=>$applicationId));

            $query=$this->db->get();

            $row=$query->result();
            if ($row)
                return $row[0];
            else
                return false;
        }
        return false;
    }









}


                
                