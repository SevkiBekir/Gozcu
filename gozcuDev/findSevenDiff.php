<?php
include_once ("header.php");
$_SESSION["page"] = "app";
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
        <div class="graphs" >

            <div id="animation_container" style="background-color:rgba(255, 255, 255, 1.00); width:1366px; height:768px">
                <canvas id="canvas" width="1366" height="768" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas>
                <div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:1366px; height:768px; position: absolute; left: 0px; top: 0px; display: block;">
                </div>
            </div>

        </div>
    </div>



<?php
include_once ("footer.php");
?>