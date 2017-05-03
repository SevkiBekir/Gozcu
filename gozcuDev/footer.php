
    <!--footer section start-->
    <footer>
        <p>&copy 2017 Gözcü | <a href="http://ceit.metu.edu.tr">ODTÜ BÖTE</a> Bölümü Tarafından Geliştirilmiştir | Template: w3Layouts</p>
    </footer>
    <!--footer section end-->
    </section>


    <!-- Bootstrap Core JavaScript -->
    <script src="js/jquery-1.10.2.min.js"></script>
    <script src="js/bootstrap.min.js"></script>

    <script src="js/wow.min.js"></script>
    <script>
        new WOW().init();
    </script>
    <?php
    if($_SESSION["page"] == "app"){
        $app = <<< EOF

<script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>
<script src="js/visualDiscriminationv7.js"></script>
    <script>
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
            exportRoot = new lib.visualDiscriminationv7();
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
EOF;

        echo $app;

    }
    ?>

    <script src="js/jquery.nicescroll.js"></script>
    <script src="js/scripts.js"></script>
    </body>
    </html>