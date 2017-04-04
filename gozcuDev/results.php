<?php
include_once ("header.php");
    $_SESSION["page"] = "";

include_once ("Data.php");
include_once ("Dbug.php");

if ($_SERVER['REMOTE_ADDR'] == "127.0.0.1"){
    $servername = "localhost";
    $username = "root";
    $password = "123";
    $database = "flash";
}else{
    $servername = "localhost";
    $username = "parkinte_flashUs";
    $password = "flash1234";
    $database = "parkinte_flash";
}
$user = "sbk5";
if(isset($_GET['user']))
    $user = $_GET['user'];

$resultType = "";
if(isset($_GET['type']))
    $resultType = $_GET['type'];


$db=new mysqli($servername, $username, $password, $database);
if($db->connect_error)
    die($db->connect_error);

$res = array();

$sql = "SELECT id,time,mouseX,mouseY,leftEyeX,leftEyeY,rightEyeX,rightEyeY from data where user=? order by id asc";
$stmt = $db->prepare($sql);
$stmt->bind_param("s", $user);
$stmt->execute();
$mouseX = "";
$mouseY = "";
$leftEyeX = "";
$leftEyeY = "";
$rightEyeY = "";
$rightEyeX = "";
$time = "";
$id = 0;
$stmt->bind_result($id,$time,$mouseX,$mouseY,$leftEyeX,$leftEyeY,$rightEyeX,$rightEyeY);
$i=0;
$firstTime = 0;
while($stmt->fetch())
{
    $myData = new Data();
    $myData->leftEyeX=round(floatval($leftEyeX),2);
    $myData->leftEyeY=round(floatval($leftEyeY),2);
    $myData->rightEyeX =round(floatval($rightEyeX),2);
    $myData->rightEyeY = round(floatval($rightEyeY),2);
    $myData->mouseX = round(floatval($mouseX),2);
    $myData->mouseY = round(floatval($mouseY),2);
    if($i == 0){
        $firstTime = floatval($time);
    }
    $myData->time = round(floatval($time)-$firstTime,2);
    $myData->id = $id;
    $res[] = $myData;
    $i++;
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
                <h3>DUYURULAR!</h3>
                <div class="activity-row activity-row1">
                    <div class="single-bottom">
                        <ul>
                            <li></li>
                            <li><a href="results.php?type=findSevenDiff"> 7 Fark Oyun Sonuçları (RESİM KONABİLİR)</a> </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>

            <?php


            if($resultType == "findSevenDiff"){

                $chart = <<< CHART
                <div style="width:100%;">
                    <canvas id="canvas"></canvas>
                </div>
            <script src="js/chart/src/Chart.bundle.js"></script>
            <script src="js/chart/utils.js"></script>
CHART;
                echo $chart;
                ?>
            <script>
                var lineChartData = {
                    labels: <?php
                    echo "[";
                    $j=0;
                    foreach ($res as $data){
                        echo "\"$data->time saniye\" ";
                        if(!($i-1 == $j)){
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
                            foreach ($res as $data){
                                echo "\"$data->leftEyeX\"";
                                if(!($i-1 == $j)){
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
                            foreach ($res as $data){
                                echo "\"$data->mouseX\"";
                                if(!($i-1 == $j)){
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
                                foreach ($res as $data){
                                    echo "\"$data->rightEyeX\"";
                                    if(!($i-1 == $j)){
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

            <?php
            }
            ?>

        </div>
    </div>

<?php
include_once ("footer.php");
?>