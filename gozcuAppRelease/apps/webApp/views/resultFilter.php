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
                    <li><a href="<?=baseUrl(1,"result");?>">Sonuçlar</a></li>
                    <li><a href="<?=baseUrl(1,"result/catagory/".$catagory['link']);?>"><?=$catagory['name']?></a></li>
                    <li><a href="<?=baseUrl(1,"result/application/".$application['link']);?>"><?=$application['name']?></a></li>
                    <li class="active">Seviye <?=$application['level']?></li>
                </ol>
            </div>
            <div class="activity_box" style="min-height:250px">
                <h3>Filtreleme</h3>
                <div class="activity-row activity-row1">
                    <div class="single-bottom">
                        <ul>
                            <li></li>
                            <?php
                            foreach ($filter as $row){


                                $start = $row['start'];
                                $finish = $row['finish'];

                                $dt1 = new DateTime($start);
                                $dt2 = new DateTime($finish);
                                echo "<li><a href='".baseUrl(0)."result/application/".$application['name']."/levels/".$application['level']."/filter?start=".$row['start']."&finish=".$row['finish']."'>".$dt1->format('j M Y g:i A')."-". $dt2->format('j M Y g:i A')."</a>";
                            }
                            ?>

                        </ul>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>

        </div>
    </div>
