<?php
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
    <link href="<?php assetsUrl("css/animate.css") ?>" rel="stylesheet" type="text/css" media="all">

    <link rel="apple-touch-icon" sizes="57x57" href="<?php assetsUrl("images/icons/apple-icon-57x57.png")?>">
    <link rel="apple-touch-icon" sizes="60x60" href="<?php assetsUrl("images/icons/apple-icon-60x60.png")?>">
    <link rel="apple-touch-icon" sizes="72x72" href="<?php assetsUrl("images/icons/apple-icon-72x72.png")?>">
    <link rel="apple-touch-icon" sizes="76x76" href="<?php assetsUrl("images/icons/apple-icon-76x76.png")?>">
    <link rel="apple-touch-icon" sizes="114x114" href="<?php assetsUrl("images/icons/apple-icon-114x114.png")?>">
    <link rel="apple-touch-icon" sizes="120x120" href="<?php assetsUrl("images/icons/apple-icon-120x120.png")?>">
    <link rel="apple-touch-icon" sizes="144x144" href="<?php assetsUrl("images/icons/apple-icon-144x144.png")?>">
    <link rel="apple-touch-icon" sizes="152x152" href="<?php assetsUrl("images/icons/apple-icon-152x152.png")?>">
    <link rel="apple-touch-icon" sizes="180x180" href="<?php assetsUrl("images/icons/apple-icon-180x180.png")?>">
    <link rel="icon" type="image/png" sizes="192x192"  href="<?php assetsUrl("images/icons/android-icon-192x192.png")?>">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php assetsUrl("images/icons/favicon-32x32.png")?>">
    <link rel="icon" type="image/png" sizes="96x96" href="<?php assetsUrl("images/icons/favicon-96x96.png")?>">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php assetsUrl("images/icons/favicon-16x16.png")?>">
    <link rel="manifest" href="<?php assetsUrl("images/icons/manifest.json")?>">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="<?php assetsUrl("images/icons/ms-icon-144x144.png")?>">
    <meta name="theme-color" content="#ffffff">
    <!--//end-animate-->
    <!----webfonts--->
    <link href='//fonts.googleapis.com/css?family=Cabin:400,400italic,500,500italic,600,600italic,700,700italic'
          rel='stylesheet' type='text/css'>
    <!---//webfonts--->
    <!-- Meters graphs -->

    <!-- Placed js at the end of the document so the pages load faster -->

</head>
<body>
    <div id="animation_container"
         style="background-color:rgba(255, 255, 255, 1.00); width:1366px; height:768px">
        <canvas id="canvas" width="1366" height="768"
                style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas>
        <div id="dom_overlay_container"
             style="pointer-events:none; overflow:hidden; width:1366px; height:768px; position: absolute; left: 0px; top: 0px; display: block;">
        </div>
    </div>




<!-- Bootstrap Core JavaScript -->
<script src="<?php assetsUrl("js/jquery-1.10.2.min.js")?>"></script>
<?php

if(isset($js))
{
    ?>
    <script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>
    <script src="<?php assetsUrl('js/'.$js.'.js'); ?>"></script>
    <script>
        //window.alert("he");
        var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
        function init() {
            canvas = document.getElementById("canvas");
            anim_container = document.getElementById("animation_container");
            dom_overlay_container = document.getElementById("dom_overlay_container");
            images = images||{};
            ss = ss||{};
            var loader = new createjs.LoadQueue(false);
            loader.installPlugin(createjs.Sound);
            loader.addEventListener("fileload", handleFileLoad);
            loader.addEventListener("complete", handleComplete);
            loader.loadManifest(lib.properties.manifest);
        }
        function handleFileLoad(evt) {
            if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
        }
        function handleComplete(evt) {
            //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
            var queue = evt.target;
            var ssMetadata = lib.ssMetadata;
            for(i=0; i<ssMetadata.length; i++) {
                ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
            }
            exportRoot = new lib.<?=$js?>();
            stage = new createjs.Stage(canvas);
            stage.addChild(exportRoot);
            stage.enableMouseOver();
            //Registers the "tick" event listener.
            fnStartAnimation = function() {
                createjs.Ticker.setFPS(lib.properties.fps);
                createjs.Ticker.addEventListener("tick", stage);
            }
            //Code to support hidpi screens and responsive scaling.
            function makeResponsive(isResp, respDim, isScale, scaleType) {
                var lastW, lastH, lastS=1;
                window.addEventListener('resize', resizeCanvas);
                resizeCanvas();
                function resizeCanvas() {
                    var w = lib.properties.width, h = lib.properties.height;
                    var iw = window.innerWidth, ih=window.innerHeight;
                    var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
                    if(isResp) {
                        if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                            sRatio = lastS;
                        }
                        else if(!isScale) {
                            if(iw<w || ih<h)
                                sRatio = Math.min(xRatio, yRatio);
                        }
                        else if(scaleType==1) {
                            sRatio = Math.min(xRatio, yRatio);
                        }
                        else if(scaleType==2) {
                            sRatio = Math.max(xRatio, yRatio);
                        }
                    }
                    canvas.width = w*pRatio*sRatio;
                    canvas.height = h*pRatio*sRatio;
                    canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
                    canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
                    stage.scaleX = pRatio*sRatio;
                    stage.scaleY = pRatio*sRatio;
                    lastW = iw; lastH = ih; lastS = sRatio;
                }
            }
            makeResponsive(true,'both',false,2);
            fnStartAnimation();
        }
        function playSound(id, loop) {
            return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
        }

        window.onload = init;
    </script>
    <?php
}
?>
        </body>
    </html>


<?php
}
?>

