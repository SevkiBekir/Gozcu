<?php
/**
 *
 * @2017
 * ************ T E A M ************
 * Şevki KOCADAĞ -> bekirsevki@gmail.com
 *
 *
 */


include_once("header.php");

if($username==""){
    headerLocation("login");

 }
else{
//    $_SESSION["page"] = "";
//    $loggedin = false;
//    if(isset($_SESSION['loggedin']))
//        $loggedin = $_SESSION['loggedin'];
//    if($loggedin===false){
//        $meta = <<< EOF
//
//<meta http-equiv="refresh" content="0; url=login.php">
//EOF;
//        echo $meta;
//    }
//
//    $_SESSION["userAttempt"] = 0;
?>
    <div class="main-content main-content2 main-content2copy">
    <!-- header-starts -->
    <div class="header-section">

        <!--toggle button start-->
        <a class="toggle-btn  menu-collapsed"><i class="fa fa-bars"></i></a>
        <!--toggle button end-->

        <!--notification menu start -->
        <?php include_once("navbar.php") ?>
        <!--notification menu end -->
    </div>
    <!-- //header-ends -->
    <div id="page-wrapper">
        <div class="graphs">
            <div class="activity_box" style="min-height:250px">
                <h3>DUYURULAR!</h3>
                <div class="activity-row activity-row1">
                    <div class="single-bottom">
                        <ul>
                            <li></li>
                            <li>- Gözcü uygulaması hayata geçirilmiştir. </li>
                            <li>- Uygulamalarımız sürekli güncellenmektedir. </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>

        </div>
    </div>
<?php		
	}
?>