<?php
/**
 *
 * @2017
 * ************ T E A M ************
 * Şevki KOCADAĞ -> bekirsevki@gmail.com
 *
 *
 */


include_once("sessions.php");
if($username==""){
    headerLocation("login");

}
else {

    ?>
    <!DOCTYPE HTML>
    <html lang="tr">
    <head>
        <title>Uygulama | Gözcü</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="keywords" content="Eye Exercise"/>
        <script type="application/x-javascript"> addEventListener("load", function () {
                setTimeout(hideURLbar, 0);
            }, false);
            function hideURLbar() {
                window.scrollTo(0, 1);
            } </script>
        <!-- Bootstrap Core CSS -->
        <link href="<?php assetsUrl("css/bootstrap.min.css") ?>" rel='stylesheet' type='text/css'/>
        <!-- Custom CSS -->
        <link href="<?php assetsUrl("css/style.css") ?>" rel='stylesheet' type='text/css'/>

        <!-- Graph CSS -->
        <link href="<?php assetsUrl("css/font-awesome.css") ?>" rel="stylesheet">
        <!-- jQuery -->
        <!-- lined-icons -->
        <link rel="stylesheet" href="<?php assetsUrl("css/icon-font.min.css") ?>" type='text/css'/>
        <!-- //lined-icons -->
        <!--animate-->
        <link href="<?php assetsUrl("css/animate.css") ?> rel=" stylesheet
        " type="text/css" media="all">

        <!--//end-animate-->
        <!----webfonts--->
        <link href='//fonts.googleapis.com/css?family=Cabin:400,400italic,500,500italic,600,600italic,700,700italic'
              rel='stylesheet' type='text/css'>
        <!---//webfonts--->
        <!-- Meters graphs -->

        <!-- Placed js at the end of the document so the pages load faster -->

    </head>

<body class="sticky-header left-side-collapsed">
<section>
    <!-- left side start-->
    <div class="left-side sticky-left-side">

        <!--logo and iconic logo start-->
        <div class="logo">
            <h1><a href="<?php baseUrl(); ?>"><span>MENÜ</span></a></h1>
        </div>
        <div class="logo-icon text-center">
            <a href="<?php baseUrl(); ?>"><i class="lnr lnr-home"></i> </a>
        </div>

        <!--logo and iconic logo end-->
        <div class="left-side-inner">

            <!--sidebar nav start-->
            <ul class="nav nav-pills nav-stacked custom-nav">

                <li><a href="<?php baseUrl() . "results"; ?>"><i
                                class="lnr lnr-power-switch"></i><span>Sonuçlar<span></a></li>

                <li class="menu-list">
                    <a href="#"><i class="lnr lnr-cog"></i>
                        <span>Egzersizler</span></a>
                    <ul class="sub-menu-list">
                        <?php
                        foreach ($catagories as $row) {
                            echo "<li><a href='" . baseUrl(0) . "catagory/" . $row["link"] . "'>" . $row["name"] . "</a>";
                        }
                        ?>

                    </ul>
                </li>

            </ul>
            <!--sidebar nav end-->
        </div>
    </div>
    <!-- left side end-->

    <?php
}
    ?>