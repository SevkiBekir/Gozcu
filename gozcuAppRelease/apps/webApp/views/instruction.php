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
                    <li class="active">Seviye <?= $level ?></li>
                </ol>
            </div>
            <div class="activity_box" style="min-height:250px">
                <h3><?=$application["name"]?> Oyunu Seviye <?=$level?> Yönergesi</h3>
                <div class="activity-row activity-row1">
                    <div class="single-bottom">
                        <ul>
                            <li></li>
                            <li><?php
                            echo $text;
                            ?></li>
                            <li><div class="alert alert-danger" role="alert"><span style="font-weight: bold">DİKKAT:</span> Egzersiz bitiminde açılan pencereyi kapatınız!</div></li>
                            <li class="text-center"><a onclick="window.open('<?= baseUrl(1, "application/") . "/" . $application["link"]."/levels/".$level."/play" ?>', '_blank', 'location=no,height=768,width=1366,scrollbars=no,status=no,resizable=no,menubar=no');" class=" btn btn-lg btn-info">EGZERSİZE GİT</a> </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>

        </div>
    </div>
