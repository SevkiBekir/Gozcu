<?php
/**
 *
 * @2017
 * ************ T E A M ************
 * Şevki KOCADAĞ -> bekirsevki@gmail.com
 *
 *
 */

class applications extends BaseModel {

    /**
     * Columns of table users
     */
    public $id;
    public $name;



    /**
     * users constructor.
     */
    public function __construct(){
        // Call the CI_Model constructor
        parent::__construct();
    }




    function getApplications($catagoryId = 0){
        $table="applications a";
        $schemeVar=printSchemeName();
        if (findLocalOrNot()==true)
            $table=$schemeVar.".".$table;

        $this->db->select(' id,name')
                 ->distinct()
                 ->from($table);
        if($catagoryId)
            $this->db->where(array('catagoryId' => $catagoryId, 'level' => 1));

        $query=$this->db->get();

        $row=$query->result();
        return $row;
    }

    public function controlLink($link,$applicationId=0,$optionalCase=0){

        $table="links li";
        $schemeVar=printSchemeName();
        if (findLocalOrNot()==true)
            $table=$schemeVar.".".$table;
        $conditionArray=[];

        if ($optionalCase==0)
            $conditionArray=array('applicationId' => $applicationId);
        else if ($optionalCase==1)
            $conditionArray=array('applicationId' => NULL);

        $conditionArray['name']=$link;

        $row=$this->countRow($conditionArray,$table);

        return $row->rowCount;

    }

    public function generateLinkAndSave($applicationName=NULL,$applicationId = 0)
    {
        $table="links";
        $schemeVar=printSchemeName();
        if (findLocalOrNot()==true)
            $table=$schemeVar.".".$table;

        if(isset($applicationName) && $applicationId != 0){

            $applicationName = prepareNameLink($applicationName);
            if(!($this->controlLink($applicationName,$applicationId))){
                // there is no link and save
                //case1: is there any the same link name in the table, if it's not, then save,
                //case 2: if it is, then change link name with random number and save it.
                if(!($this->controlLink($applicationName,$applicationId,1))){
                    $this -> save(array('applicationId'=> $applicationId, 'name'=>$applicationName),$table);
                    return $applicationName;
                }
                else{
                    $randomNumber=rand(1,999999);
                    $applicationName.="-".$randomNumber;
                    $this -> save(array('applicationId'=> $applicationId, 'name'=>$applicationName),$table);
                    return $applicationName;
                }
            }
            else //found the link
                return $applicationName;
        }
        else
            return NULL;

    }

    public function getApplicationLink($id=NULL,$where=NULL){
        $table="links li";
        $schemeVar=printSchemeName();
        if (findLocalOrNot()==true)
            $table=$schemeVar.".".$table;

        $this->db->select('*')
            ->from($table);
        if ($where == NULL)
            $this -> db ->where('applicationId',$id);
        else if ($id == NULL)
            $this -> db -> where('name', $where);

        $query=$this->db->get();
        $row=$query->result();
        if($row)
            return $row[0];
        else
            return false;
    }


    public function getLevelsOfApplication($name){
        $table="applications a";
        $schemeVar=printSchemeName();
        if (findLocalOrNot()==true)
            $table=$schemeVar.".".$table;

        $this->db->select('*')
            ->from($table)
            ->where('name',$name);

        $query=$this->db->get();
        $row=$query->result();

        return $row;
    }

    public function getApplicationInfo($id,$level = NULL){
        $table="applications a";
        $schemeVar=printSchemeName();
        if (findLocalOrNot()==true)
            $table=$schemeVar.".".$table;

        $this->db->select('*')
            ->from($table)
            ->where('id',$id);

        if (isset($level))
            $this->db->where('level',$level);

        $query=$this->db->get();
        $row=$query->result();


        return $row[0];
    }

    public function getApplicationLevelInfo($catagoryId = NULL,$level = NULL, $name = NULL){
        $table="applications a";
        $schemeVar=printSchemeName();
        if (findLocalOrNot()==true)
            $table=$schemeVar.".".$table;


        if(isset($catagoryId,$level,$name)){
            $this->db->select('*')
                ->from($table)
                ->where(array('catagoryId'=>$catagoryId , 'level' => $level, 'name' => $name));

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


                
                