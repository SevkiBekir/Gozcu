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

class result extends CI_Controller {


	public function index(){

	    //new dBug($this->session);
        changeEyeTackerStatus(0);
        loadView("resultCatagoryList");
        loadView("footer");


    }

    public function catagory($catLink = NULL){
        if (!isset($catLink))
            headerLocation("result");

        $this->load->model('catagories');
        $this->load->model('applications');


        $catagoryId = $this->catagories->getCatagoryLink(NULL,$catLink)->catagoryId;
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
        //new dBug($data);
        changeEyeTackerStatus(0);
        loadView('resultApplicationList',$data);
        loadView("footer");

    }

    public function application ($appLink = NULL){
        if (!isset($appLink))
            headerLocation("result");


        $this->load->model("attempts");
        $this->load->model("applications");
        $this->load->model("catagories");


        $applicationInfo = $this->applications->getApplicationLink(NULL,$appLink);
        //KONTROL
        if(!$applicationInfo)
            headerLocation("result");


        $applicationId=$applicationInfo->applicationId;

        if(!$applicationId)
            headerLocation("result");
        $username = session('username');

        if(isset($applicationId,$username)){
            $this->attempts->username = $username;
            $this->attempts->applicationId = $applicationId;
            $getAttempts = $this->attempts->getAttemptsForResults();

            if($getAttempts){
//                new dBug($getAttempts);
                $showableStatistics = array();
                for ($i=0;$i<count($getAttempts)-1;$i++){

                    if(($getAttempts[$i]->status == 1) && ($getAttempts[$i+1]->status == 0)){
                        // Attempt yaptı. Sonra bitti. Bunu check ediyor.

                        $rowSuccessAttempt["start"] = $getAttempts[$i]->time;
                        $rowSuccessAttempt["finish"] = $getAttempts[$i+1]->time;
                        $showableStatistics[] = $rowSuccessAttempt;
                    }
                }

//                new dBug($showableStatistics);
                $applicationInfo = $this->applications->getApplicationInfo($applicationId);
                $applicationCatagoryId = $applicationInfo->catagoryId;
                $applicationName = $applicationInfo->name;

                $catagoryName = $this->catagories->getCatagoryName($applicationCatagoryId)[0]->name;
                $catLink = $this -> catagories -> generateLinkAndSave($catagoryName,$applicationCatagoryId);

                $data["filter"] = $showableStatistics;
                session("filter", $showableStatistics);
                $data["application"] = array("name" => $applicationName, "link" => $appLink);
                $data["catagory"] = array("name" => $catagoryName, "link" => $catLink );

//                new dBug($data);

                loadView("resultFilter",$data);
                loadView("footer");
            }else{
                // Attempt yok!
                headerLocation("result");
            }


        }else{
            // App, Username yok!
            headerLocation("result");
        }

    }

    public function filter($appLink = NULL){
        date_default_timezone_set('Europe/Istanbul');
        if (!isset($appLink))
            headerLocation("result");

        $user = session("username");

        if(!isset($user))
            headerLocation("login");

//        echo "filter";
        $start = get("start");
        $finish = get("finish");

        if(isset($start,$finish)){
            $this->load->model("data");
            $this->data->username = session("username");

            if($results = $this->data->getDataForResult($start,$finish)){
                $k=0;
                foreach ($results as $row){
//                    new dBug($row);
                    $leftEyeX = round(floatval($row->leftX),2);
                    $leftEyeY = round(floatval($row->leftY),2);
                    $rightEyeX =round(floatval($row->rightX),2);
                    $rightEyeY = round(floatval($row->rightY ),2);
                    $mouseX = round(floatval($row->mouseX),2);
                    $mouseY = round(floatval($row->mouseY ),2);
                    $time = $row->date;

                    if($k == 0){
                        $firstTime =  new DateTime($time);
                        $firstTime= floatval($firstTime->getTimestamp());
                    }

                    $dt4 = new DateTime($time);

                    $time = round(floatval($dt4->getTimestamp())-$firstTime,2);

                    $k++;

                    $res[] = array("leftX"=>$leftEyeX,"leftY"=>$leftEyeY,"rightX"=>$rightEyeX,"rightY"=>$rightEyeY,"mouseX"=>$mouseX,"mouseY"=>$mouseY,"time"=>$time);
                }

                $this->load->model("applications");
                $this->load->model("catagories");

                $applicationInfo = $this->applications->getApplicationLink(NULL,fixLink($appLink));
                //KONTROL
                if(!$applicationInfo)
                    headerLocation("result");


                $applicationId=$applicationInfo->applicationId;

                $applicationInfo = $this->applications->getApplicationInfo($applicationId);
                $applicationCatagoryId = $applicationInfo->catagoryId;
                $applicationName = $applicationInfo->name;

                $catagoryName = $this->catagories->getCatagoryName($applicationCatagoryId)[0]->name;
                $catLink = $this -> catagories -> generateLinkAndSave($catagoryName,$applicationCatagoryId);

                $data["data"] = $res;
                $data["filter"] = array("start"=>get("start"),"finish"=>get("finish"));

                $data["application"] = array("name" => $applicationName, "link" => $appLink);
                $data["catagory"] = array("name" => $catagoryName, "link" => $catLink );
                $data["k"] = $k;

//                new dBug($data);
                loadView("chart",$data);
                loadView("footer");
            }



        }

    }
}
