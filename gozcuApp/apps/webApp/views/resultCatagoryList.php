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
                    <li><a href="<?=baseUrl(1);?>">Anasayfa</a></li>
                    <li class="active">Sonuçlar</li>
                </ol>
            </div>
            <div class="activity_box" style="min-height:250px">
                <h3>Katagoriler</h3>
                <div class="activity-row activity-row1">
                    <div class="single-bottom">
                        <ul>
                            <li></li>


                            <?php
                            foreach ($catagories as $row) {
                                echo "<li><a href='" . baseUrl(0) . "result/catagory/" . $row["link"] . "'>" . $row["name"] . "</a>";
                            }
                            ?>


                        </ul>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>

        </div>
    </div>
