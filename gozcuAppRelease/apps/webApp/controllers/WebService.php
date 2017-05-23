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
 * Class webService
 */
class webService extends CI_Controller {


    /**
     * @return string
     */
    public function index(){
        return "hello";
    }

    /**
     * http://gozcu.local/gozcuApp/webService/attempt?status=1&key=kc20sbk17md_at
     */
    public function attempt(){
	    $this->load->model("attempts");

	    $applicationId = session("applicationId");

//        new dBug(session("username"));
        $username = session("username");
        $status = get("status");
        $key = get("key");



//        new dBug(array($username,$status,$applicationId));


	    if(($status == 1 || $status == 0) && (isset($username,$applicationId)) && $key === "kc20sbk17md_at"){
            $this->attempts->status = $status;
            $this->attempts->username = $username;
            $this->attempts->applicationId = $applicationId;
            if($this->attempts->insertAttempt()){
                // Başarılı
                echo "başarılı";
            }
        }

    }

    /**
     * http://gozcu.local/gozcuApp/webService/eyeTracker?key=kc20sbk17md_ey&leftX=10&leftY=20&rightX=20&rightY=30&mouseX=50&mouseY=100
     */
    public function eyeTracker(){
        $this->load->model("data");
        $username = session("username");
        $eyeTrackerStatus = session("eyeTrackerStatus");
        new dBug($this->session->userdata());

        $key = get("key");
        $leftX = get("leftX");
        $leftY = get("leftY");
        $rightX = get("rightX");
        $rightY = get("rightY");
        $mouseX = get("mouseX");
        $mouseY = get("mouseY");

        if((isset($leftX,$leftY,$rightY,$rightX,$mouseX,$mouseY,$username)) && $key === "kc20sbk17md_ey" && $eyeTrackerStatus === 1){

            $this->data->username = $username;
            $this->data->leftX = $leftX;
            $this->data->leftY = $leftX;
            $this->data->rightY = $rightY;
            $this->data->rightX = $rightX;
            $this->data->mouseX = $mouseX;
            $this->data->mouseY = $mouseY;
            $this->data->username = $username;

            if($this->data->insertData()){
                // Başarılı
                echo "başarılı";
            }
        }

    }
}
