<?php
/**
 *
 * @2017
 * ************ T E A M ************
 * Şevki KOCADAĞ -> bekirsevki@gmail.com
 *
 *
 */

class catagories extends BaseModel {

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



    function getCatagoryId($name){
        $table="catagories c";
        $schemeVar=printSchemeName();
        if (findLocalOrNot()==true)
            $table=$schemeVar.".".$table;

        if($row = $this->search(array('name' => $name))){

            //new dBug($row);

            return $row[0]->id;
        }
        return false;
    }




    function getCatagoryName($id = 0){
        $table="catagories c";
        $schemeVar=printSchemeName();
        if (findLocalOrNot()==true)
            $table=$schemeVar.".".$table;

        $this->db->select('id,name')
                 ->from($table);
        if($id)
            $this->db->where('id',$id);

        $query=$this->db->get();

        $row=$query->result();
        return $row;
    }

    public function controlLink($link,$catagoryId=0,$optionalCase=0){

        $table="links li";
        $schemeVar=printSchemeName();
        if (findLocalOrNot()==true)
            $table=$schemeVar.".".$table;
        $conditionArray=[];

        if ($optionalCase==0)
            $conditionArray=array('catagoryId' => $catagoryId);
        else if ($optionalCase==1)
            $conditionArray=array('catagoryId' => NULL);

        $conditionArray['name']=$link;

        $row=$this->countRow($conditionArray,$table);

        return $row->rowCount;

    }

    public function generateLinkAndSave($catagoryName=NULL,$catagoryId = 0)
    {
        $table="links";
        $schemeVar=printSchemeName();
        if (findLocalOrNot()==true)
            $table=$schemeVar.".".$table;

        if(isset($catagoryName) && $catagoryId != 0){

            $catagoryName = prepareNameLink($catagoryName);
            if(!($this->controlLink($catagoryName,$catagoryId))){
                // there is no link and save
                //case1: is there any the same link name in the table, if it's not, then save,
                //case 2: if it is, then change link name with random number and save it.
                if(!($this->controlLink($catagoryName,$catagoryId,1))){
                    $this -> save(array('catagoryId'=> $catagoryId, 'name'=>$catagoryName),$table);
                    return $catagoryName;
                }
                else{
                    $randomNumber=rand(1,999999);
                    $catagoryName.="-".$randomNumber;
                    $this -> save(array('catagoryId'=> $catagoryId, 'name'=>$catagoryName),$table);
                    return $catagoryName;
                }
            }
            else //found the link
                return $catagoryName;
        }
        else
            return NULL;

    }

    public function getCatagoryLink($id=NULL,$where=NULL){
        $table="links li";
        $schemeVar=printSchemeName();
        if (findLocalOrNot()==true)
            $table=$schemeVar.".".$table;

        $this->db->select('*')
            ->from($table);
        if ($where == NULL)
            $this -> db ->where('catagoryId',$id);
        else if ($id == NULL)
            $this -> db -> where('name', $where);

        $query=$this->db->get();
        $row=$query->result();

        return $row[0];
    }








}


                
                