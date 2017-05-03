<?php
include_once ("header.php");
    $_SESSION["page"] = "";

include_once ("Data.php");
include_once ("Dbug.php");
include_once ("Attempt.php");

$_SESSION["userAttempt"] = 0;


date_default_timezone_set('Europe/Istanbul');

if ($_SERVER['REMOTE_ADDR'] == "127.0.0.1"){
    $servername = "localhost";
    $username = "root";
    $password = "123";
    $database = "flashv2";
}else{
    $servername = "localhost";
    $username = "wwwgozcu";
    $password = "tP2cVNhr";
    $database = "wwwgozcu";
}
$user = "sbk5";
if(isset($_SESSION['user']['username']))
    $user = $_SESSION['user']['username'];


$resultType = "";
if(isset($_GET['type']))
    $resultType = $_GET['type'];

$applicationId = 0;

if(isset($resultType) && $resultType === "findSevenDiff"){
    $applicationId = 1; // BURASI DEĞİŞECEK SONRA  ! ! !
}



if($applicationId !== 0){


    $db=new mysqli($servername, $username, $password, $database);
    if($db->connect_error)
        die($db->connect_error);


    $sql = "SELECT id,applicationId, status,time from attempts where user=? and applicationId=? order by id asc";
    $stmt = $db->prepare($sql);
    $stmt->bind_param("ss", $user,$applicationId);
    $stmt->execute();
    $id = 0;
    $dumpApplicationId = 0;
    $status = 0;
    $time = "";
    $stmt->bind_result($id,$dumpApplicationId,$status, $time);

    $attemptArray = array();
    while($stmt->fetch()){
        $myAttempt = new Attempt();
        $myAttempt->id = $id;
        $myAttempt->status = $status;
        $myAttempt->applicationId = $dumpApplicationId;
        $myAttempt->user = $user;
        $myAttempt->time = $time;

        $attemptArray[] = $myAttempt;
    }
    $showableStatistics = array();
    for ($i=0;$i<count($attemptArray)-1;$i++){

        if($attemptArray[$i]->status === 1 && $attemptArray[$i+1]->status === 0){
            // Attempt yaptı. Sonra bitti. Bunu check ediyor.
            $rowSuccessAttempt["start"] = $attemptArray[$i]->time;
            $rowSuccessAttempt["finish"] = $attemptArray[$i+1]->time;
            $showableStatistics[] = $rowSuccessAttempt;
        }
    }
}




if($applicationId !== 0 && isset($_GET["start"]) && isset($_GET["finish"])){
    $start = $_GET["start"];
    $finish = $_GET["finish"];


    for ($i=0;$i<count($showableStatistics);$i++){
        if($showableStatistics[$i]["start"] == $start && $showableStatistics[$i]["finish"] == $finish){
            //Kontrol: Gerçekten böyle bir zaman dilimi var mı?

            $res = array();

            $sql = "SELECT id,date,mouseX,mouseY,leftX,leftY,rightX,rightY from eyeTracker where user=? and date >= ? and date <= ? order by id asc";
            $stmt = $db->prepare($sql);
            $stmt->bind_param("sss", $user,$start,$finish);
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
            $k=0;
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


                if($k == 0){
                    $dt3 = new DateTime($time);

                    $firstTime = floatval($dt3->getTimestamp());
                }
                $dt4 = new DateTime($time);

                $myData->time = round(floatval($dt4->getTimestamp())-$firstTime,2);
                $myData->id = $id;
                $myData->username = $user;
                $res[] = $myData;
                $k++;
            }



        }
    }

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
            <?php



            $appTypeHTML = <<< APPTYPE
            <div class="activity_box" style="min-height:250px">
                <h3>UYGULAMALAR</h3>
                <div class="activity-row activity-row1">
                    <div class="single-bottom">
                        <ul>
                            <li></li>
                            
                            <li><a href="results.php?type=findSevenDiff"> 7 Fark Oyun Sonuçları (RESİM KONABİLİR)</a> </li>


                        </ul>
                    </div>
                </div>
            </div>
APPTYPE;






            if($applicationId === 0)
                echo $appTypeHTML;
            else
            {
                echo "<div class='activity_box' style='min-height:250px'>
                <h3>FİLTRELEME</h3>
                <div class='activity-row activity-row1'>
                    <div class='single-bottom'>
                        <ul> <li></li>";



                for($i=0;$i<count($showableStatistics);$i++) {
                    $start = $showableStatistics[$i]["start"];
                    $finish = $showableStatistics[$i]["finish"];

                    $dt1 = new DateTime($start);
                    $dt2 = new DateTime($finish);




                    echo "<li><a href=\"results.php?type=findSevenDiff&start=$start&finish=$finish\">".$dt1->format('j M Y g:i A')."-". $dt2->format('j M Y g:i A')."</a> </li>";
                }

                echo " 
                        </ul>
                    </div>
                </div>
            </div>";
            }



            ?>
            <div class="clearfix"></div>

            <?php


            if($applicationId != 0){

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
                            foreach ($res as $data){
                                echo "\"$data->leftEyeX\"";
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
                            foreach ($res as $data){
                                echo "\"$data->mouseX\"";
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
                                foreach ($res as $data){
                                    echo "\"$data->rightEyeX\"";
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

            <?php
            }
            ?>

        </div>
    </div>

<?php
include_once ("footer.php");
?>