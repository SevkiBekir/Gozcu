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

class login extends CI_Controller {

	public function index(){
        //echo "login page";
		 $this->load->model('users');
         $userInfo = $this->users->getUserInfo(post("txbUsername"));

         if($userInfo){
            //echo "selam";
             //new dBug($userInfo);
             $this->users->hash = $userInfo->hash;
             $this->users->keyValue = $userInfo->keyValue;
             $this->users->password = post("txbPassword");
             //new dBug($this);
             if($this->users->loginCheck()){
                 $this->users->username = $userInfo->username;
                 $this->users->firstname = $userInfo->firstname;
                 $this->users->lastname = $userInfo->lastname;
                 $this->users->email = $userInfo->email;
                 $this->users->id = $userInfo->id;
                 $this->users->createdDate = $userInfo->createdDate;

                 session('username', $this->users->username);
                 session('userFName', $this->users->firstname);
                 session('userLName', $this->users->lastname);
                 changeEyeTackerStatus(0);
                 headerLocation("main");

             }else{
                 $this->users->hash = "";
                 $this->users->keyValue = "";
                 $this->users->password = "";
                 loadView("login");
             }



         }else
             //echo "sıkıntı";
             loadView("login");

    }
}
