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
                    <li><a href="<?=baseUrl(1,"catagory/")."/".$catagory["link"]?>"><?=$catagory["name"]?></a></li>
                    <li class="active"><?=$levels["l0"]["name"]?></li>
                </ol>
            </div>
            <div class="activity_box" style="min-height:250px">
                <h3><?=$levels["l0"]["name"]?> Uygulamaları</h3>
                <div class="activity-row activity-row1">
                    <div class="single-bottom">
                        <ul>
                            <li></li>
                            <?php
                            foreach ($levels as $row){
                                echo "<li><a onclick=\"window.open('";
                                echo baseUrl(1, "application/") . "/" . $appLink."/levels/".$row["level"]."/play";
                                echo "', '_blank', 'location=no,height=768,width=1366,scrollbars=no,status=no,resizable=no,menubar=no');\">Seviye ".$row["level"]."</a> </li>";

                            }
                            ?>

                        </ul>
                    </div>
                </div>
            </div>

            <div class="activity_box activity_box1" style="min-height:250px">
                <h3><?=$application["name"]?> Oyunu Yönergesi</h3>
                <div class="activity-row activity-row1">
                    <div class="single-bottom">
                        <ul>
                            <li></li>
                            <li><?php
                                echo $text;
                                ?></li>

                        </ul>
                    </div>
                </div>
            </div>

            <div class="clearfix"></div>

        </div>
    </div>
