<?php
include_once ("header.php");
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
            <div>
                <ol class="breadcrumb">
                    <li><a href="<?= baseUrl(1); ?>">Anasayfa</a></li>
                    <li><a href="<?= baseUrl(1, "catagory/") . "/" . $catagory["link"] ?>"><?= $catagory["name"] ?></a>
                    </li>
                    <li>
                        <a href="<?= baseUrl(1, "application/") . "/" . $application["link"] ?>"><?= $application["name"] ?></a>
                    </li>
                    <li class="active"><?= $level ?></li>
                </ol>
            </div>

            <div id="animation_container"
                 style="background-color:rgba(255, 255, 255, 1.00); width:1366px; height:768px">
                <canvas id="canvas" width="1366" height="768"
                        style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas>
                <div id="dom_overlay_container"
                     style="pointer-events:none; overflow:hidden; width:1366px; height:768px; position: absolute; left: 0px; top: 0px; display: block;">
                </div>
            </div>
            <div class="clearfix"></div>

        </div>
    </div>
<!--    --><?php
//}
//?>