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

class catagory extends CI_Controller {


	public function index($link = NULL){
	    if(!isset($link))
            headerLocation("main");

        $this->load->model('catagories');
        $this->load->model('applications');


        $catagoryId = $this->catagories->getCatagoryLink(NULL,$link)->catagoryId;
        $catagoryName = $this->catagories->getCatagoryName($catagoryId)[0]->name;
        //new dBug($catagoryName);
//        new dBug($catagoryId);

        $applications = $this->applications->getApplications($catagoryId);
//        new dBug($applications);

        $dummyArray=[];
        $i=0;
        foreach ($applications as $row){
            $dummyArray['a'.$i]=array(
                'name'		        => $row->name,
                'link'				=> $this -> applications -> generateLinkAndSave($row->name,$row->id),
            );
            $i++;
        }
//        new dBug($dummyArray);
        $data["applications"] = $dummyArray;
        $data["catagoryName"] = $catagoryName;
        changeEyeTackerStatus(0);
        loadView('applicationList',$data);
        loadView("footer");

    }
}
