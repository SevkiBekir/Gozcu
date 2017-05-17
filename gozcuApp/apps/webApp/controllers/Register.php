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

class register extends CI_Controller {

	public function index(){
		$this->load->model('users');


        // DB'de olup olmadığını kontrol ediyor.
        //TRUE-> Kayıt yap
        //FALSE->User var, Giriş yap.

        $email = post('txbEmail');
        $pass1 = post('txbPassword1');
        $pass2 = post('txbPassword2');
        $txbFName = post('txbFName');
        $txbLName = post('txbLName');
        $txbUsername = post('txbUsername');


        // Is Empty Control
        if (isset($email,$pass1,$pass2,$txbFName,$txbLName,$txbUsername)){

            // Pass Control
            if($pass1 === $pass2){
                $result = $this->users->register($email,$pass1,$txbFName,$txbLName,$txbUsername);
                if($result){
                    //Registration Successful
                    headerLocation("login");
                }else{
                    //Registration Fail
                    loadView('register');
                }

            }else{
                // Does not match pass
                loadView('register');
            }

        }else{
            // Field(s) is/are empty!
            loadView('register');
        }

	}
}
