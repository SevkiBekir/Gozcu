<?php
/**
 *
 * @2017
 * ************ T E A M ************
 * Şevki KOCADAĞ -> bekirsevki@gmail.com
 *
 *
 */

defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Class main
 */
class main extends CI_Controller {

    /**
     *
     */
    public function index(){

	    // CATAGORY LINK
        $this->load->model('catagories');
        $catagories = $this->catagories->getCatagoryName();
        $dummyArray=[];
        $i=0;
        foreach ($catagories as $row){
            $dummyArray['c'.$i]=array(
                'name'		        => $row->name,
                'link'				=> $this -> catagories -> generateLinkAndSave($row->name,$row->id),
            );
            $i++;
        }
        session('catagories',$dummyArray);



        changeEyeTackerStatus(0);
        loadView("main");
        loadView("footer");


    }
}

