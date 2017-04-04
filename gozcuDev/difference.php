<?php
include_once ("header.php");
$_SESSION["page"] = "";

$loggedin = false;
if(isset($_SESSION['loggedin']))
    $loggedin = $_SESSION['loggedin'];
if($loggedin===false){
    $meta = <<< EOF

<meta http-equiv="refresh" content="0; url=login.php">
EOF;
    echo $meta;
}
?>
<!-- main content start-->
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
                <h3>Farklılık Uygulamaları</h3>
                <div class="activity-row activity-row1">
                    <div class="single-bottom">
                        <ul>
                            <li></li>
                            <li><a href="findSevenDiff.php"> 7 Fark Oyunu (RESİM KONABİLİR)</a> </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>

        </div>
    </div>

<?php
include_once ("footer.php");
?>