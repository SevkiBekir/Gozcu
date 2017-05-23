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

class application extends CI_Controller {


	public function index($link = NULL){
	    if(!isset($link))
            headerLocation("main");

        $this->load->model('catagories');
        $this->load->model('applications');

        $uriLink = $link;

        $applicationId = $this->applications->getApplicationLink(NULL,$link)->applicationId;
        $applicationInfo = $this->applications->getApplicationInfo($applicationId);
        $levelsOfApplication = $this->applications->getLevelsOfApplication($applicationInfo->name);
        $dummyArray=[];
        $i=0;
        foreach ($levelsOfApplication as $row){
            $dummyArray['l'.$i]=array(
                'name'		        => $row->name,
                'catagoryId'        => $row->catagoryId,
                'level'             => $row->level,

            );
            $i++;
        }
        $data["levels"] = $dummyArray;
        $catagoryName = $this->catagories->getCatagoryName($dummyArray["l0"]["catagoryId"])[0]->name;
        $link = $this -> catagories -> generateLinkAndSave($catagoryName,$dummyArray["l0"]["catagoryId"]);
        $dummyArray = array('name' => $catagoryName, 'link' => $link);
        $data["catagory"] = $dummyArray;

        $data["appLink"] = $uriLink;
        //new dBug($data);
        changeEyeTackerStatus(0);
        loadView('levels',$data);
        loadView("footer");


    }

    public function levels($appLink,$num){
	   // echo $appLink."-> level-> ".$num;
        if(!isset($appLink,$num))
            headerLocation("main");

        $this->load->model('catagories');
        $this->load->model('applications');


        $applicationId = $this->applications->getApplicationLink(NULL,$appLink)->applicationId;
        $applicationInfo = $this->applications->getApplicationInfo($applicationId);
        $applicationCatagoryId = $applicationInfo->catagoryId;
        $applicationName = $applicationInfo->name;

        if($getApplicationInfo = $this->applications->getApplicationLevelInfo($applicationCatagoryId,$num,$applicationName)){

            $catagoryName = $this->catagories->getCatagoryName($applicationCatagoryId)[0]->name;
            $catLink = $this -> catagories -> generateLinkAndSave($catagoryName,$applicationCatagoryId);
            $data["application"] = array("link"=> $appLink, "name" => $applicationInfo->name);
            $data["catagory"] = array("name" => $catagoryName, "link" => $catLink );
            $data["js"] = $getApplicationInfo->gameJs;
            $data["level"] = $getApplicationInfo->level;

            session('applicationId',$getApplicationInfo->id);
            loadView('application',$data);
            loadView("footer");
            changeEyeTackerStatus(1);


        }else{
            headerLocation("main");

        }

    }
}
