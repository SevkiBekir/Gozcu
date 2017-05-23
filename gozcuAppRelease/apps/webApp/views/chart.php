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
                    <?php
                    $start = $filter['start'];
                    $finish = $filter['finish'];

                    $dt1 = new DateTime($start);
                    $dt2 = new DateTime($finish);
                    ?>
                    <li class="active"><?=$dt1->format('j M Y g:i A')."-". $dt2->format('j M Y g:i A')?></li>
                </ol>
            </div>

            <div class="clearfix"></div>


            <div style="width:100%;">
                <canvas id="canvas"></canvas>
            </div>
            <script src="<?php assetsUrl("js/chart/src/Chart.bundle.js")?>"></script>
            <script src="<?php assetsUrl("js/chart/utils.js")?>"></script>

            <script>

                var lineChartData = {
                    labels: <?php

                    echo "[";
                    $j=0;
                    foreach ($data as $row){
                        $time = $row["time"];
                        echo "\"$time saniye\" ";
                        if(!($k-1 == $j)){
                            echo ",";
                        }
                        $j++;

                    }

                    echo "]"?>,
                    datasets: [{
                        label: "Left Eye X Axis",
                        borderColor: window.chartColors.red,
                        backgroundColor: window.chartColors.red,
                        fill: false,
                        data: [
                            <?php
                            $j=0;
                            foreach ($data as $row){
                                $leftEyeX = $row["leftX"];
                                echo "\"$leftEyeX\"";
                                if(!($k-1 == $j)){
                                    echo ",";
                                }
                                $j++;

                            }
                            ?>
                        ],
                        yAxisID: "y-axis-1",
                    }, {
                        label: "Mouse X Axis",
                        borderColor: window.chartColors.blue,
                        backgroundColor: window.chartColors.blue,
                        fill: false,
                        data: [
                            <?php
                            $j=0;
                            foreach ($data as $row){
                                $mouseX = $row["mouseX"];
                                echo "\"$mouseX\"";
                                if(!($k-1 == $j)){
                                    echo ",";
                                }
                                $j++;

                            }
                            ?>
                        ],
                        yAxisID: "y-axis-1"
                    },
                        {
                            label: "Right Eye X Axis",
                            borderColor: window.chartColors.green,
                            backgroundColor: window.chartColors.green,
                            fill: false,
                            data: [
                                <?php
                                $j=0;
                                foreach ($data as $row){
                                    $rightEyeX = $row["rightX"];
                                    echo "\"$rightEyeX\"";
                                    if(!($k-1 == $j)){
                                        echo ",";
                                    }
                                    $j++;

                                }
                                ?>
                            ],
                            yAxisID: "y-axis-1"
                        }]
                };


                window.onload = function() {
                    var ctx = document.getElementById("canvas").getContext("2d");
                    window.myLine = Chart.Line(ctx, {
                        data: lineChartData,
                        options: {
                            responsive: true,
                            hoverMode: 'single',
                            stacked: false,
                            title:{
                                display: true,
                                text:'Fark Bulma Oyunu - X Ekseni Hareketleri'
                            },

                            scales: {
                                xAxes: [{
                                    display: false
                                }],
                                yAxes: [{
                                    type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                                    display: true,
                                    position: "left",
                                    id: "y-axis-1",
                                    label:{
                                        display:false,
                                    }
                                }],
                            },
                            tooltips: {
                                mode: "index",
                                intersect: false,
                            },
                            hover: {
                                mode: "index",
                                intersect: false
                            },
                        }
                    });
                };


            </script>

        </div>
    </div>
