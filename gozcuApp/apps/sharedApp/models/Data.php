<?php
/**
 *
 * @2017
 * ************ T E A M ************
 * Şevki KOCADAĞ -> bekirsevki@gmail.com
 *
 *
 */

class data extends BaseModel {

    /**
     * Columns of table users
     */
    public $id;
    public $leftX;
    public $leftY;
    public $rightX;
    public $rightY;
    public $mouseX;
    public $mouseY;
    public $date;
    public $username;





    /**
     * users constructor.
     */
    public function __construct(){
        // Call the CI_Model constructor
        parent::__construct();
    }


    function insertData(){

        if($this->save(array(
            "leftX" => $this->leftX,
            "leftY" => $this->leftY,
            "rightX" => $this->rightX,
            "rightY" => $this->rightY,
            "mouseX" => $this->mouseX,
            "mouseY" => $this->mouseY,
            "username" => $this->username
            ))){

            /// Registration is successful
            return true;
        }
        return false;


    }











}


                
                