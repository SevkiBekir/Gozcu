<?php
 /**
     * SemTech Co -> E-Learning Project
     * @2016
     * ************ T E A M ************
     * Şevki KOCADAĞ -> bekirsevki@gmail.com
     * Asim Dogan NAMLI -> asim.dogan.namli@gmail.com
     * Okan KAYA -> okankaya93@gmail.com
     *
     */
defined('BASEPATH') OR exit('No direct script access allowed');
/**
 * Class profile
 */
class profile extends CI_Controller {
    /**
     * profile constructor.
     */
    public function __construct()
    {
    	parent::__construct();
    	
    }

    /**
     * @param null $link
     */
    public function index($link=NULL){
        if($link==NULL){
            // Kendi profilini goster
            $this -> load -> model('users');
            $this -> load -> model('courses');


            $username = $this->session->username;
            // login kontrolu
            if (!isset($username))
                headerLocation("login");

            $data=[];
            $getUserId = $this -> users -> getUserIdWithUsername($username);
            $getUserDetails = $this->users -> getUserDetails($getUserId);

            $getEducation = $this -> courses -> getEducation($getUserDetails -> educationId);
            $getOccupation = $this -> courses -> getOccupation($getUserDetails -> occupationId);
            $countCourse = $this -> courses -> countCourseForUsers($getUserId);
            $membership = $this -> users -> getUserType($getUserDetails->typeId);

            $data['users'] = array(
                'firstname'        =>   $getUserDetails -> firstname,
                'lastname'         =>   $getUserDetails -> lastname,
                'email'            =>   $getUserDetails -> email,
                'age'              =>   $getUserDetails -> age,
                'education'        =>   $getEducation -> name,
                'occupation'       =>   $getOccupation -> name,
                'phone'            =>   $getUserDetails -> phone,
                'countCourse'      =>   $countCourse->count,
                'membership'       =>   $membership-> name,
                'about'            =>   $getUserDetails -> about,
                'facebook'         =>   $getUserDetails -> fbUserName,
                'twitter'          =>   $getUserDetails -> twUserName,

            );

            if($countCourse !== 0){
                $i=0;
                $getCourse = $this -> courses -> getCourseIdFromBuyedCourses($getUserId);
                $myArray=[];
                $this -> load -> model('lessons');

                foreach ($getCourse as $row){
                    $getCourseLink = $this->courses->getCourseLink($row->courseId)->name;
                    $getCatagoryLink = $this->courses->getCatagoryLink($row->catagoryId)->name;

                    $countLesson = $this -> lessons -> countLessons($row->courseId);
                    $countCompleted = $this -> lessons -> countCompleted($getUserId,$row->courseId);


                    $myArray['a'.$i] = array(
                        'courseName'            =>  $row->courseName,
                        'catagoryName'          =>  $row->catagoryName,
                        'catagoryLink'          =>  $getCatagoryLink,
                        'courseLink'            =>  $getCourseLink,
                        'countLesson'           =>  $countLesson->count,
                        'countCompleted'        =>  $countCompleted->count,
                    );

                    $i++;
                }

                $data['course'] = $myArray;
            }

            $getCourse = $this -> courses -> getCourseFromTaught($getUserId);

            $countCourse = $this -> courses -> countCourseForInstructors($getUserId)->count;

            if($countCourse !== 0){
                $i=0;
                $myArray=[];
                $this -> load -> model('lessons');

                foreach ($getCourse as $row){
                    $getCourseLink = $this->courses->getCourseLink($row->courseId)->name;
                    $getCatagoryLink = $this->courses->getCatagoryLink($row->catagoryId)->name;

                    $countLesson = $this -> lessons -> countLessons($row->courseId);
                    $countCompleted = $this -> lessons -> countCompleted($getUserId,$row->courseId);


                    $myArray['a'.$i] = array(
                        'courseName'            =>  $row->courseName,
                        'catagoryName'          =>  $row->catagoryName,
                        'catagoryLink'          =>  $getCatagoryLink,
                        'courseLink'            =>  $getCourseLink,
                        'countLesson'           =>  $countLesson->count,
                        'countCompleted'        =>  $countCompleted->count,
                    );

                    $i++;
                }
                $data['instructorCourse'] = $myArray;
                $data['instructorCourseCount'] = $countCourse;

            }
           // new dBug($data);

            loadView('profile',$data);
            loadView('footer');


        }
        else{
            //Baska profili goster

        }
	}

	function edit(){
        $this -> load -> model('users');

        $username = $this->session->username;
        // login kontrolu
        if (!isset($username))
            headerLocation("login");

        $data=[];
        $getUserId = $this -> users -> getUserIdWithUsername($username);
        $getUserDetails = $this->users -> getUserDetails($getUserId);

        $getEducation = $this -> users -> getEducation($getUserDetails -> educationId);
        $getOccupation = $this -> users -> getOccupation($getUserDetails -> occupationId);

        $data['users'] = array(
            'firstname'        =>   $getUserDetails -> firstname,
            'lastname'         =>   $getUserDetails -> lastname,
            'email'            =>   $getUserDetails -> email,
            'age'              =>   $getUserDetails -> age,
            'education'        =>   $getEducation -> name,
            'occupation'       =>   $getOccupation -> name,
            'phone'            =>   $getUserDetails -> phone,
            'about'            =>   $getUserDetails -> about,
            'facebook'         =>   $getUserDetails -> fbUserName,
            'twitter'          =>   $getUserDetails -> twUserName,
            'gender'           =>   $getUserDetails -> gender,
            'TCNo'             =>   $getUserDetails-> tcNo,

        );

        $getEducationAll = $this -> users -> getEducation();
        $data['allEducation'] = $getEducationAll;

        $getOccupationAll = $this -> users -> getOccupation();
        $data['allOccupation'] = $getOccupationAll;

        loadView('editProfile',$data);
        loadView('footer');

    }

    function process(){
        $this -> load -> model('users');

        $this->load->library('form_validation');

        $this->form_validation->set_rules('txbFirstName', 'İsim', 'trim|required');
        $this->form_validation->set_rules('txbLastName', 'Soyisim', 'trim|required');
        $this->form_validation->set_rules('txbEmail', 'Email', 'trim|required|valid_email');
        $this->form_validation->set_rules('txbOldPassword', 'Eski Şifre', 'trim');
        $this->form_validation->set_rules('txbNewPassword1', 'Yeni Şifre', 'trim');
        $this->form_validation->set_rules('txbNewPassword2', 'Yeni Şifre (Tekrar)', 'trim|matches[txbNewPassword1]');
        $this->form_validation->set_rules('txbAge', 'Yaş', 'trim|is_natural_no_zero|max_length[2]');
        $this->form_validation->set_rules('cmbEducationLevel', 'Eğitim Seviyesi', 'trim');
        $this->form_validation->set_rules('cmbOccupation', 'Meslek', 'trim');
        $this->form_validation->set_rules('txbTelephone', 'Telefon', 'trim|is_natural|exact_length[11]');
        $this->form_validation->set_rules('txbTCNo', 'T.C. Kimlik No', 'trim|is_natural|exact_length[11]');
        $this->form_validation->set_rules('txbFbUserName', 'Facebook Kullanıcı Adı', 'trim|alpha_dash');
        $this->form_validation->set_rules('txbTwUserName', 'Twitter Kullanıcı Adı', 'trim|alpha_dash');
        $this->form_validation->set_rules('txbAbout', 'Hakkımda', 'trim');
        $this->form_validation->set_rules('cmbGender', 'Cinsiyet', 'trim|alpha|exact_length[5]');


        if($this->form_validation->run() == FALSE)
            //headerLocation("/profile/edit");
            echo validation_errors();

        $getUserId = $this -> users -> getUserIdWithUsername($this->session->username);
        if(!$getUserId){
            headerLocation("course/".$courseLink);
        }


        $fileProfileImage=$_FILES['fileProfileImage']['name'];
        $txbFirstName=post('txbFirstName');
        $txbLastName=post('txbLastName');

        $txbOldPassword=post('txbOldPassword');
        $txbNewPassword1=post('txbNewPassword1');
        $txbNewPassword2=post('txbNewPassword2');

        $txbAge=post('txbAge');
        $cmbEducationLevel=post('cmbEducationLevel');
        $cmbOccupation=post('cmbOccupation');
        $txbTelephone=post('txbTelephone');
        $txbFbUserName=post('txbFbUserName');
        $txbTwUserName=post('txbTwUserName');
        $txbAbout=post('txbAbout');
        $txbTCNo=post('txbTCNo');;
        $cmbGender=post('cmbGender');;

        $btnEdit=post('btnEdit');


    }
	

    
    
    
}
