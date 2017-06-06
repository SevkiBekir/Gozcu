(function (lib, img, cjs, ss, an) {
    var assetAddres = "http://gozcu.ceit.metu.edu.tr/app/assets/";
    //var assetAddres = "http://gozcu.local/gozcuAppRelease/assets/";
var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"trackingFixation_level1v7_atlas_", frames: [[1806,2145,170,155],[579,3656,121,113],[1806,1806,185,175],[1806,2302,170,155],[0,0,1366,778],[1204,1707,100,69],[1059,2884,120,115],[1806,2900,104,102],[1806,2459,155,155],[457,3610,120,115],[1806,2758,150,140],[1059,2754,133,128],[1806,1983,170,160],[1806,2616,150,140],[1368,602,600,600],[0,2152,600,600],[602,2754,455,449],[602,1550,600,600],[602,2152,600,600],[1059,3010,455,449],[0,780,1366,768],[1368,1204,600,600],[1204,2408,600,600],[0,3356,455,449],[1963,2459,82,120],[1204,1806,600,600],[0,1550,600,600],[1516,3010,455,449],[1505,3461,444,202],[1059,3461,444,202],[1970,0,59,87],[1368,0,600,600],[0,2754,600,600],[602,3205,455,449],[1970,89,59,87],[457,3356,130,125],[1204,1550,155,155],[457,3483,130,125]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.boga = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.boga_1 = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bogatıklandığında = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bogaüzerinegelindiğinde = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.fixationtrackingbackground = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.fıstık = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.hamster = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hamster_1 = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hamstertıklandığında = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hamsterüzerinegelindiğinde = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.kedi = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.kedi_1 = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.keditıklandığında = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.kediüzerinegelindiğinde = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.mavi = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.mavitıklandığında = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.maviüzerinegelindiğinde = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.mor = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.mortıklandığında = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.morüzerindegelindiğinde = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.nesneyeulaşım = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.pembe = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.pembetıklandığında = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.pembeüzerinegelindiğinde = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.redflag = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.sari = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.sarıtıklandığında = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.sarıüzerinegelindiğinde = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.startbutton = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.startbuttonüzerinegelindiğinde = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.sut = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.yesil = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.yeşiltıklandığında = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.yeşilüzerinegelindiğinde = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.yumurta_tek = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.yılan = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.yılantıklandığında = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.yılanüzerinegelindiğinde = function() {
	this.spriteSheet = ss["trackingFixation_level1v7_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.mcYumurta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yumurta_tek();
	this.instance.parent = this;
	this.instance.setTransform(-44.6,-65.7,1.511,1.511);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcYumurta, new cjs.Rectangle(-44.6,-65.7,89.2,131.5), null);


(lib.mcSut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sut();
	this.instance.parent = this;
	this.instance.setTransform(-52.9,-78,1.793,1.793);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcSut, new cjs.Rectangle(-52.9,-78,105.8,156), null);


(lib.mcRedFlag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.redflag();
	this.instance.parent = this;
	this.instance.setTransform(-41,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcRedFlag, new cjs.Rectangle(-41,-60,82,120), null);


(lib.mcFistik = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fıstık();
	this.instance.parent = this;
	this.instance.setTransform(-82,-56.5,1.64,1.64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcFistik, new cjs.Rectangle(-82,-56.5,164,113.2), null);


(lib.btnYilan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yılan();
	this.instance.parent = this;
	this.instance.setTransform(-97,-98,1.285,1.285);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AvgPqIAA/TIfBAAIAAfTg");
	this.shape.setTransform(-22.2,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-98,167.1,160.7);


(lib.btnKedi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kedi_1();
	this.instance.parent = this;
	this.instance.setTransform(-89.3,-86,1.344,1.344);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Au6PEIAA+HId1AAIAAeHg");
	this.shape.setTransform(6.1,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.3,-86,178.7,172);


(lib.btnHemster = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hamster_1();
	this.instance.parent = this;
	this.instance.setTransform(115.3,-113,2.216,2.216,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.2,-113,230.5,226);


(lib.btnBogaTwo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boga_1();
	this.instance.parent = this;
	this.instance.setTransform(-60.5,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-56.5,121,113);


(lib.btnBoga = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boga_1();
	this.instance.parent = this;
	this.instance.setTransform(-60.5,-56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-56.5,121,113);


(lib.mcYilan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yılantıklandığında();
	this.instance.parent = this;
	this.instance.setTransform(-77.5,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcYilan, new cjs.Rectangle(-77.5,-77.5,155,155), null);


(lib.mcYesil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yeşiltıklandığında();
	this.instance.parent = this;
	this.instance.setTransform(-100,-100,0.333,0.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcYesil, new cjs.Rectangle(-100,-100,200,200), null);


(lib.mcSari = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sarıtıklandığında();
	this.instance.parent = this;
	this.instance.setTransform(-300,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcSari, new cjs.Rectangle(-300,-300,600,600), null);


(lib.mcPembe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pembetıklandığında();
	this.instance.parent = this;
	this.instance.setTransform(-100,-100,0.333,0.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcPembe, new cjs.Rectangle(-100,-100,200,200), null);


(lib.mcMor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mortıklandığında();
	this.instance.parent = this;
	this.instance.setTransform(-100,-100,0.333,0.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcMor, new cjs.Rectangle(-100,-100,200,200), null);


(lib.mcMavi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mavitıklandığında();
	this.instance.parent = this;
	this.instance.setTransform(-100,-100,0.333,0.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcMavi, new cjs.Rectangle(-100,-100,200,200), null);


(lib.mcKedi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.keditıklandığında();
	this.instance.parent = this;
	this.instance.setTransform(-85,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcKedi, new cjs.Rectangle(-85,-80,170,160), null);


(lib.mcHamster = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hamstertıklandığında();
	this.instance.parent = this;
	this.instance.setTransform(-77.5,-77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcHamster, new cjs.Rectangle(-77.5,-77.5,155,155), null);


(lib.mcBoga = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bogatıklandığında();
	this.instance.parent = this;
	this.instance.setTransform(-92.5,-87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcBoga, new cjs.Rectangle(-92.5,-87.5,185,175), null);


(lib.btnYilan_i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yılan();
	this.instance.parent = this;
	this.instance.setTransform(-65,-62.5);

	this.instance_1 = new lib.yılanüzerinegelindiğinde();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-65,-62.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AuIM0IAA5nIcQAAIAAZng");
	this.shape.setTransform(6.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-62.5,130,125);


(lib.btnYesil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yesil();
	this.instance.parent = this;
	this.instance.setTransform(-100,-100,0.333,0.333);

	this.instance_1 = new lib.yeşilüzerinegelindiğinde();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-76,-76,0.333,0.333);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("ApjJkQj+j+ABlmQgBlmD+j9QD+j+FlAAQFmAAD+D+QD+D9AAFmQAAFmj+D+Qj+D9lmAAQllAAj+j9g");
	this.shape.setTransform(1.7,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-100,200,200);


(lib.btnStart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.startbutton();
	this.instance.parent = this;
	this.instance.setTransform(-222,-101);

	this.instance_1 = new lib.startbuttonüzerinegelindiğinde();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-222,-101);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("EgkaARTMAAAgimMBI1AAAMAAAAimg");
	this.shape.setTransform(-11.1,-9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222,-101,444,202);


(lib.btnSari = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sari();
	this.instance.parent = this;
	this.instance.setTransform(-100,-100,0.333,0.333);

	this.instance_1 = new lib.sarıüzerinegelindiğinde();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-74,-76,0.333,0.333);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AqZKaQkUkUAAmGQAAmFEUkUQEUkUGFAAQGGAAEUEUQEUEUAAGFQAAGGkUEUQkUEUmGAAQmFAAkUkUg");
	this.shape.setTransform(1.1,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-100,200,200);


(lib.btnPembe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pembe();
	this.instance.parent = this;
	this.instance.setTransform(-100,-100,0.333,0.333);

	this.instance_1 = new lib.pembeüzerinegelindiğinde();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-74,-76,0.333,0.333);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AqnKnQkYkZgBmOQABmNEYkaQEakZGNABQGOgBEZEZQEaEaAAGNQAAGOkaEZQkZEZmOAAQmNAAkakZg");
	this.shape.setTransform(4.5,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-100,200,200);


(lib.btnMor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mor();
	this.instance.parent = this;
	this.instance.setTransform(-100,-100,0.333,0.333);

	this.instance_1 = new lib.morüzerindegelindiğinde();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-78,-76,0.333,0.333);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Aq6KTQkikRABmCQgBmCEikQQEikRGYAAQGaAAEhERQEhEQABGCQgBGCkhERQkhESmaAAQmYAAkikSg");
	this.shape.setTransform(-2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-100,200,200);


(lib.btnMavi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mavi();
	this.instance.parent = this;
	this.instance.setTransform(-100,-100,0.333,0.333);

	this.instance_1 = new lib.maviüzerinegelindiğinde();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-76,-74,0.333,0.333);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("ArSLSQkrkrAAmnQAAmmErkrQEskrGmAAQGnAAErErQEsErgBGmQABGnksErQkrEsmnAAQmmAAksksg");
	this.shape.setTransform(1.9,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-100,200,200);


(lib.btnKedi_i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kedi();
	this.instance.parent = this;
	this.instance.setTransform(-75,-70);

	this.instance_1 = new lib.kediüzerinegelindiğinde();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-75,-70);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AvSNjIAA7FIelAAIAAbFg");
	this.shape.setTransform(7.4,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-70,150,140);


(lib.btnHamster_i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hamster();
	this.instance.parent = this;
	this.instance.setTransform(-60,-57.5);

	this.instance_1 = new lib.hamsterüzerinegelindiğinde();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-60,-57.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("As9K7IAA11IZ7AAIAAV1g");
	this.shape.setTransform(-0.7,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-57.5,120,115);


(lib.btnBoga_i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.boga();
	this.instance.parent = this;
	this.instance.setTransform(-85,-77.5);

	this.instance_1 = new lib.bogaüzerinegelindiğinde();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-85,-77.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Aw5N/IAA79MAhzAAAIAAb9g");
	this.shape.setTransform(1.7,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-77.5,170,155);


(lib.btnYilanTwo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.btnYilan = new lib.btnYilan();
	this.btnYilan.parent = this;
	new cjs.ButtonHelper(this.btnYilan, 0, 1, 2, false, new lib.btnYilan(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnYilan).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-98,167.1,160.7);


(lib.btnKediTwo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.btnKedi = new lib.btnKedi();
	this.btnKedi.parent = this;
	new cjs.ButtonHelper(this.btnKedi, 0, 1, 2, false, new lib.btnKedi(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnKedi).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.3,-86,178.7,172);


(lib.btnHemsterTwo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.btnHemster = new lib.btnHemster();
	this.btnHemster.parent = this;
	this.btnHemster.setTransform(0.1,0,1,1,0,0,180);
	new cjs.ButtonHelper(this.btnHemster, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnHemster).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.2,-113,230.5,226);


// stage content:
(lib.trackingFixation_level1v7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var canvas = document.getElementById("canvas");
		localThis = this;
		canvas.innerHTML = "<application><storySelection></storySelection><color></color></application>";
		
		//Btn Decleration
		var btnStart = this.btnStart;
		var btnBoga = this.btnBoga_i;
		var btnYilan = this.btnYilan_i;
		var btnHamster = this.btnHamster_i;
		var btnKedi = this.btnKedi_i;
		var mcBoga = this.mcBoga;
		var mcYilan = this.mcYilan;
		var mcHamster = this.mcHamster;
		var mcKedi = this.mcKedi;
		
		
		var btnMor = this.btnMor;
		var btnMavi = this.btnMavi;
		var btnSari = this.btnSari;
		var btnPembe = this.btnPembe;
		var btnYesil = this.btnYesil;
		var mcMor = this.mcMor;
		var mcMavi = this.mcMavi;
		var mcSari = this.mcSari;
		var mcPembe = this.mcPembe;
		var mcYesil = this.mcYesil;
		
		
		
		var afterObjectsColor = [mcMor,mcMavi,mcSari,mcPembe,mcYesil];
		var afterObjectsStory = [mcBoga,mcYilan,mcHamster,mcKedi];
		
		
		
		var btnColor = [btnMor,btnMavi,btnSari,btnPembe,btnYesil];
		var btnStory = [btnBoga,btnYilan,btnHamster,btnKedi];
		
		//Events
		btnStart.addEventListener("click", btnStart_Click.bind(this));
		btnMor.addEventListener("click", btn4sn_Click.bind(this));
		btnMavi.addEventListener("click", btn2sn_Click.bind(this));
		btnSari.addEventListener("click", btn6sn_Click.bind(this));
		btnPembe.addEventListener("click", btn8sn_Click.bind(this));
		btnYesil.addEventListener("click", btn10sn_Click.bind(this));
		
		btnYilan.addEventListener("click", btnSelectOda_Click.bind(this));
		btnBoga.addEventListener("click", btnSelectPlaj_Click.bind(this));
		btnHamster.addEventListener("click", btnSelectHamster_Click.bind(this));
		btnKedi.addEventListener("click", btnSelectKedi_Click.bind(this));
		
		function btn2sn_Click(event){
			allVisible(1);
			allHide(1);
			btnMavi.visible = false;
			mcMavi.visible = true;
			generateColorHTMl(1);
		}
		
		function btn4sn_Click(event){
			allVisible(1);
			allHide(1);
			btnMor.visible = false;
			mcMor.visible = true;
			generateColorHTMl(2);
		}
		
		function btn6sn_Click(event){
			allVisible(1);
			allHide(1);
			btnSari.visible = false;
			mcSari.visible = true;
			generateColorHTMl(3);
		}
		
		function btn8sn_Click(event){
			allVisible(1);
			allHide(1);
			btnPembe.visible = false;
			mcPembe.visible = true;
			generateColorHTMl(4);
		}
		
		function btn10sn_Click(event){
			allVisible(1);
			allHide(1);
			btnYesil.visible = false;
			mcYesil.visible = true;
			generateColorHTMl(5);
		}
		
		function btnSelectOda_Click(event){
			allVisible(2);
			allHide(2);
			btnYilan.visible = false;
			mcYilan.visible = true;
			generateStorySelectionHTMl(2);
		}
		
		function btnSelectPlaj_Click(event){
			console.log("girdi");
			allVisible(2);
			allHide(2);
			btnBoga.visible = false;
			mcBoga.visible = true;
			generateStorySelectionHTMl(1);
		}
		
		function btnSelectHamster_Click(event){
			allVisible(2);
			allHide(2);
			btnHamster.visible = false;
			mcHamster.visible = true;
			generateStorySelectionHTMl(3);
		
		}
		
		function btnSelectKedi_Click(event){	
			allVisible(2);
			allHide(2);
			btnKedi.visible = false;
			mcKedi.visible = true;
			generateStorySelectionHTMl(4);
		}
		
		
		
		function generateStorySelectionHTMl(storySelection) {
			document.getElementsByTagName("storyselection").value = storySelection;
		}
		
		function generateColorHTMl(color){
			document.getElementsByTagName("color").value = color;
		}
		
		
		function allHide(type){
			if(type==1){
				//hide after Time objects
				var arrLength = afterObjectsColor.length;
				for(var i = 0; i< arrLength; i++){
					
					afterObjectsColor[i].visible = false;
				}
			}
			else if(type==2){
				//hide after story objects
				var arrLength = afterObjectsStory.length;
				for(var i = 0; i< arrLength; i++){
					
					afterObjectsStory[i].visible = false;
				}
			}
		}
		
		
		function allVisible(type){
			if(type==1){
				//visible Time objects
				var arrLength = btnColor.length;
				for(var i = 0; i< arrLength; i++){
					
					btnColor[i].visible = true;
				}
			}
			else if(type==2){
				//visible  story objects
				var arrLength = btnStory.length;
				for(var i = 0; i< arrLength; i++){
					
					btnStory[i].visible = true;
				}
			}
		}
		
		function btnStart_Click (){
			var story = document.getElementsByTagName("storyselection").value;
			var col = document.getElementsByTagName("color").value;
			if(story !== undefined && col !== undefined)
				this.gotoAndPlay(1);
		}
		
		
		
		
		
		//MAIN
		allHide(1);
		allHide(2);
		allVisible(1);
		allVisible(2);
	}
	this.frame_1 = function() {
		this.stop();
		
		/* Definitions */
		
		var localThis = this;
		var btnBoga = this.btnBoga;
		var btnYilan = this.btnYilan;
		var btnHemster = this.btnHemster;
		var btnKedi = this.btnKedi;
		
		var mcRedFlag = this.mcRedFlag;
		var mcYumurta = this.mcYumurta;
		var mcSut = this.mcSut;
		var mcFistik = this.mcFistik;
		
		var characters = [btnBoga,btnYilan,btnHemster,btnKedi];
		var objects = [mcRedFlag,mcYumurta,mcFistik,mcSut];
		
		var frequency = 3;
		var canvas = document.getElementById("canvas");	
		var previousX=0;
		var storySelection = document.getElementsByTagName("storyselection").value;
		var colorSelection = document.getElementsByTagName("color").value;
		var currentObject;
		
		//MAIN
		if(controlSelection()){
			stage.enableMouseOver(frequency);
			prepareStory(storySelection);
			changeColor(colorSelection);
			startAttempt();
		}else{
			location.reload();
		}
		
		
		// Event Listeners
		btnBoga.addEventListener("mouseover", characters_MouseOver.bind(this));
		btnYilan.addEventListener("mouseover", characters_MouseOver.bind(this));
		btnHemster.addEventListener("mouseover", characters_MouseOver.bind(this));
		btnKedi.addEventListener("mouseover", characters_MouseOver.bind(this));
		
		btnBoga.addEventListener("mouseout", characters_MouseOut.bind(this));
		btnYilan.addEventListener("mouseout", characters_MouseOut.bind(this));
		btnHemster.addEventListener("mouseout", characters_MouseOut.bind(this));
		btnKedi.addEventListener("mouseout", characters_MouseOut.bind(this));
		
		
		
		
		
		// Function Definitions
		function prepareStory(storySelection){
			changeAllVisibleStatus(false);
			if(storySelection <= 4 && storySelection >= 1){
				characters[storySelection-1].visible = true;
				objects[storySelection-1].visible = true;
				currentObject=[characters[storySelection-1],objects[storySelection-1]];
			}
			
		}
		
		function changeAllVisibleStatus(status){
			for(var i=0; i<characters.length;i++){
				characters[i].visible = status;
				objects[i].visible = status;
			}
		}
		
		
		
		
		function characters_MouseOut(){
			createjs.Ticker.removeEventListener("tick", eventTicker);
		}
		
		
		function characters_MouseOver(){
			createjs.Ticker.addEventListener("tick", eventTicker);
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
			createjs.Ticker.setFPS(60);
		}
		
		
		function eventTicker(event){
			 //sendData("","kutu"+ count, true, stage.mouseX,stage.mouseY);
			var p = localThis.globalToLocal(stage.mouseX, stage.mouseY);	
			var newStageX= p.x;
			var getTime = createjs.Ticker.getTime()/1000;
			var width = parseInt(canvas.getAttribute("width"));
			if(currentObject[0].x> 1200){
				createjs.Ticker.removeEventListener("tick", eventTicker);
				currentObject[0].removeEventListener("mouseover", characters_MouseOver.bind(this));
				changeAllVisibleStatus(false);
				localThis.gotoAndStop(2);
				
			}
			else{
				playMouse (newStageX);
			}
			
		}
		
		
		function playMouse(stageX){
			previousX = currentObject[0].x;
			if(previousX<stageX)
				currentObject[0].x = stageX;
		}
		
		
		function changeColor(color){
			switch(color){
				case 1:
					canvas.style.backgroundColor = "#7dcaff";
					break;
				case 2:
					canvas.style.backgroundColor = "#d67dff";
					break;
				case 3:
					canvas.style.backgroundColor = "#fbff7d";
					break;
				case 4:
					canvas.style.backgroundColor = "#ff7da5";
					break;
				case 5:
					canvas.style.backgroundColor = "#7dff8c";
					break;
				default:
					break;
			}
		}
		
		function startAttempt(){
			var siteURL = "http://gozcu.ceit.metu.edu.tr/app/";
			var fileName = "webService/attempt?key=kc20sbk17md_at&";
			siteURL += fileName;
			siteURL += "status=1";
			
			var queue = new createjs.LoadQueue(true);
			queue.on('complete',completeF,this);
			queue.loadFile(siteURL);
			function completeF(e){
				//console.log(queue._loadedResults);
			}
			
		}
		
		function controlSelection(){
			 if(storySelection == undefined || colorSelection == undefined)
				 return false;
			 else
				 return true;
				
		}
	}
	this.frame_2 = function() {
		this.stop();
		
		
		/* Definitions */
		var localThis = this;
		var btnBoga = this.btnBogaTwo;
		var btnYilan = this.btnYilanTwo;
		var btnHemster = this.btnHemsterTwo;
		var btnKedi = this.btnKediTwo;
		
		var mcRedFlag = this.mcRedFlag;
		var mcYumurta = this.mcYumurta;
		var mcSut = this.mcSut;
		var mcFistik = this.mcFistik;
		
		var characters = [btnBoga,btnYilan,btnHemster,btnKedi];
		var objects = [mcRedFlag,mcYumurta,mcFistik,mcSut];
		
		
		var frequency = 3;
		var canvas = document.getElementById("canvas");
		var storySelection = document.getElementsByTagName("storyselection").value;
		var colorSelection = document.getElementsByTagName("color").value;
		var previousX=0;
		var currentObject;
		
		stage.enableMouseOver(frequency);
		prepareStory(storySelection);
		
		// Event Listeners
		btnBoga.addEventListener("mouseover", characters_MouseOver.bind(this));
		btnYilan.addEventListener("mouseover", characters_MouseOver.bind(this));
		btnHemster.addEventListener("mouseover", characters_MouseOver.bind(this));
		btnKedi.addEventListener("mouseover", characters_MouseOver.bind(this));
		
		btnBoga.addEventListener("mouseout", characters_MouseOut.bind(this));
		btnYilan.addEventListener("mouseout", characters_MouseOut.bind(this));
		btnHemster.addEventListener("mouseout", characters_MouseOut.bind(this));
		btnKedi.addEventListener("mouseout", characters_MouseOut.bind(this));
		
		
		// Function Definitions
		function prepareStory(storySelection){
			changeAllVisibleStatus(false);
			if(storySelection <= 4 && storySelection >= 1){
				characters[storySelection-1].visible = true;
				objects[storySelection-1].visible = true;
				currentObject=[characters[storySelection-1],objects[storySelection-1]];
			}
			
		}
		
		function changeAllVisibleStatus(status){
			for(var i=0; i<characters.length;i++){
				characters[i].visible = status;
				objects[i].visible = status;
			}
		}
		
		
		
		function characters_MouseOut(){
			createjs.Ticker.removeEventListener("tick", eventTicker2);
		}
		
		
		function characters_MouseOver(){
			createjs.Ticker.addEventListener("tick", eventTicker2);
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
			createjs.Ticker.setFPS(60);
		}
		
		
		function eventTicker2(event){
			 //sendData("","kutu"+ count, true, stage.mouseX,stage.mouseY);
			var p = localThis.globalToLocal(stage.mouseX, stage.mouseY);	
			var newStageX= p.x;
			
			var width = parseInt(canvas.getAttribute("width"));
			if(currentObject[0].x< 200){
				localThis.gotoAndStop(3);
			}
			else{
				playMouse2 (newStageX);
			}
		}
		
		
		function playMouse2(stageX){
			
			previousX = currentObject[0].x;
			
			if(previousX>stageX){
				currentObject[0].x = stageX;
			}
				
		}
	}
	this.frame_3 = function() {
		this.stop();
		var localThis = this;
		stopAttempt();
		
		function stopAttempt(){
			var siteURL = "http://gozcu.ceit.metu.edu.tr/app/";
			var fileName = "webService/attempt?key=kc20sbk17md_at&";
			siteURL += fileName;
			siteURL += "status=0";
			
			var queue = new createjs.LoadQueue(true);
			queue.on('complete',completeF,this);
			queue.loadFile(siteURL);
			function completeF(e){
				//console.log(queue._loadedResults);
			}
			
		}
		
		function startTicker(){
			
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
			createjs.Ticker.setFPS(60);
			
		}
		
		function getClose(){
			tickerTime = createjs.Ticker.getTime()/1000;
			var diff = tickerTime - time;
			if(diff>5)
				self.close();
		}
		time = createjs.Ticker.getTime()/1000;
		createjs.Ticker.addEventListener("tick", getClose);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// text
	this.instance = new lib.nesneyeulaşım();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// btnStart
	this.btnStart = new lib.btnStart();
	this.btnStart.parent = this;
	this.btnStart.setTransform(703,404);
	new cjs.ButtonHelper(this.btnStart, 0, 1, 2, false, new lib.btnStart(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnStart).to({_off:true},1).wait(3));

	// mcHemster
	this.mcFistik = new lib.mcFistik();
	this.mcFistik.parent = this;
	this.mcFistik.setTransform(1284,381.6);
	this.mcFistik._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcFistik).wait(1).to({_off:false},0).wait(1).to({x:94},0).to({_off:true},1).wait(1));

	// mcSut
	this.mcSut = new lib.mcSut();
	this.mcSut.parent = this;
	this.mcSut.setTransform(1281.9,382);
	this.mcSut._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcSut).wait(1).to({_off:false},0).wait(1).to({x:119.9},0).to({_off:true},1).wait(1));

	// mcYumurta
	this.mcYumurta = new lib.mcYumurta();
	this.mcYumurta.parent = this;
	this.mcYumurta.setTransform(1275.6,381.8);
	this.mcYumurta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcYumurta).wait(1).to({_off:false},0).wait(1).to({x:105.6},0).to({_off:true},1).wait(1));

	// mcRedFlag
	this.mcRedFlag = new lib.mcRedFlag();
	this.mcRedFlag.parent = this;
	this.mcRedFlag.setTransform(1294.1,360.1,1.309,1.309);
	this.mcRedFlag._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcRedFlag).wait(1).to({_off:false},0).wait(1).to({scaleX:1.31,scaleY:1.31,skewY:180,x:86.7,y:354.9},0).to({_off:true},1).wait(1));

	// btnHemster
	this.btnHemster = new lib.btnHemster();
	this.btnHemster.parent = this;
	this.btnHemster.setTransform(88.2,358);
	new cjs.ButtonHelper(this.btnHemster, 0, 1, 1);

	this.btnHemsterTwo = new lib.btnHemsterTwo();
	this.btnHemsterTwo.parent = this;
	this.btnHemsterTwo.setTransform(1276.2,358);
	new cjs.ButtonHelper(this.btnHemsterTwo, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btnHemster}]},1).to({state:[{t:this.btnHemsterTwo}]},1).to({state:[]},1).wait(1));

	// btnKedi
	this.btnKedi = new lib.btnKedi();
	this.btnKedi.parent = this;
	this.btnKedi.setTransform(122.4,365);
	new cjs.ButtonHelper(this.btnKedi, 0, 1, 2, false, new lib.btnKedi(), 3);

	this.btnKediTwo = new lib.btnKediTwo();
	this.btnKediTwo.parent = this;
	this.btnKediTwo.setTransform(1270.4,365);
	new cjs.ButtonHelper(this.btnKediTwo, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btnKedi}]},1).to({state:[{t:this.btnKediTwo}]},1).to({state:[]},1).wait(1));

	// btnYilan
	this.btnYilan = new lib.btnYilan();
	this.btnYilan.parent = this;
	this.btnYilan.setTransform(82.7,380.1,1,1,0,0,180);
	new cjs.ButtonHelper(this.btnYilan, 0, 1, 2, false, new lib.btnYilan(), 3);

	this.btnYilanTwo = new lib.btnYilanTwo();
	this.btnYilanTwo.parent = this;
	this.btnYilanTwo.setTransform(1280.7,380.1);
	new cjs.ButtonHelper(this.btnYilanTwo, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btnYilan}]},1).to({state:[{t:this.btnYilanTwo}]},1).to({state:[]},1).wait(1));

	// btnBoga
	this.btnBoga = new lib.btnBoga();
	this.btnBoga.parent = this;
	this.btnBoga.setTransform(98.7,365.9,1.493,1.493);
	new cjs.ButtonHelper(this.btnBoga, 0, 1, 1);

	this.btnBogaTwo = new lib.btnBogaTwo();
	this.btnBogaTwo.parent = this;
	this.btnBogaTwo.setTransform(1258.3,364.3,1.493,1.492,0,0,180);
	new cjs.ButtonHelper(this.btnBogaTwo, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btnBoga}]},1).to({state:[{t:this.btnBogaTwo}]},1).to({state:[]},1).wait(1));

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("An8A3IAAhtIP4AAIAABtg");
	this.shape.setTransform(350.8,428);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 10
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("An7A3IAAhtIP4AAIAABtg");
	this.shape_1.setTransform(490.8,428);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 11
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("An8A3IAAhtIP4AAIAABtg");
	this.shape_2.setTransform(210,426.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 12
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AnhA3IAAhtIPCAAIAABtg");
	this.shape_3.setTransform(1040.4,431.1);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 13
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("An7A3IAAhtIP4AAIAABtg");
	this.shape_4.setTransform(1178.5,432.8);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 14
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AngA3IAAhtIPBAAIAABtg");
	this.shape_5.setTransform(626.4,429.1);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 15
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("An7A3IAAhtIP4AAIAABtg");
	this.shape_6.setTransform(764.5,430.8);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer 16
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("An8A3IAAhtIP4AAIAABtg");
	this.shape_7.setTransform(904.5,430.8);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// btnKedi
	this.mcKedi = new lib.mcKedi();
	this.mcKedi.parent = this;
	this.mcKedi.setTransform(1238.9,679.6);

	this.timeline.addTween(cjs.Tween.get(this.mcKedi).to({_off:true},1).wait(3));

	// btnHamster
	this.mcHamster = new lib.mcHamster();
	this.mcHamster.parent = this;
	this.mcHamster.setTransform(1050,522.1);

	this.timeline.addTween(cjs.Tween.get(this.mcHamster).to({_off:true},1).wait(3));

	// btnYilan
	this.mcYilan = new lib.mcYilan();
	this.mcYilan.parent = this;
	this.mcYilan.setTransform(1246.4,367.1);

	this.timeline.addTween(cjs.Tween.get(this.mcYilan).to({_off:true},1).wait(3));

	// btnBoga
	this.mcBoga = new lib.mcBoga();
	this.mcBoga.parent = this;
	this.mcBoga.setTransform(1050,215.5);

	this.timeline.addTween(cjs.Tween.get(this.mcBoga).to({_off:true},1).wait(3));

	// btnYesil
	this.mcYesil = new lib.mcYesil();
	this.mcYesil.parent = this;
	this.mcYesil.setTransform(109.2,588.4);

	this.timeline.addTween(cjs.Tween.get(this.mcYesil).to({_off:true},1).wait(3));

	// btnPembe
	this.mcPembe = new lib.mcPembe();
	this.mcPembe.parent = this;
	this.mcPembe.setTransform(300,687.8);

	this.timeline.addTween(cjs.Tween.get(this.mcPembe).to({_off:true},1).wait(3));

	// btnSari
	this.mcSari = new lib.mcSari();
	this.mcSari.parent = this;
	this.mcSari.setTransform(300,436.9,0.333,0.333,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.mcSari).to({_off:true},1).wait(3));

	// btnMor
	this.mcMor = new lib.mcMor();
	this.mcMor.parent = this;
	this.mcMor.setTransform(300,212);

	this.timeline.addTween(cjs.Tween.get(this.mcMor).to({_off:true},1).wait(3));

	// btnMavi
	this.mcMavi = new lib.mcMavi();
	this.mcMavi.parent = this;
	this.mcMavi.setTransform(109.2,332);

	this.timeline.addTween(cjs.Tween.get(this.mcMavi).to({_off:true},1).wait(3));

	// btnKedi
	this.btnKedi_i = new lib.btnKedi_i();
	this.btnKedi_i.parent = this;
	this.btnKedi_i.setTransform(1243.9,677);
	new cjs.ButtonHelper(this.btnKedi_i, 0, 1, 2, false, new lib.btnKedi_i(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnKedi_i).to({_off:true},1).wait(3));

	// btnHamster
	this.btnHamster_i = new lib.btnHamster_i();
	this.btnHamster_i.parent = this;
	this.btnHamster_i.setTransform(1050,528);
	new cjs.ButtonHelper(this.btnHamster_i, 0, 1, 2, false, new lib.btnHamster_i(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnHamster_i).to({_off:true},1).wait(3));

	// btnYilan
	this.btnYilan_i = new lib.btnYilan_i();
	this.btnYilan_i.parent = this;
	this.btnYilan_i.setTransform(1237.1,365.5);
	new cjs.ButtonHelper(this.btnYilan_i, 0, 1, 2, false, new lib.btnYilan_i(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnYilan_i).to({_off:true},1).wait(3));

	// btnBoga
	this.btnBoga_i = new lib.btnBoga_i();
	this.btnBoga_i.parent = this;
	this.btnBoga_i.setTransform(1050.9,212.1);
	new cjs.ButtonHelper(this.btnBoga_i, 0, 1, 2, false, new lib.btnBoga_i(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnBoga_i).to({_off:true},1).wait(3));

	// btnYesil
	this.btnYesil = new lib.btnYesil();
	this.btnYesil.parent = this;
	this.btnYesil.setTransform(109.2,588.4);
	new cjs.ButtonHelper(this.btnYesil, 0, 1, 2, false, new lib.btnYesil(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnYesil).to({_off:true},1).wait(3));

	// btnPembe
	this.btnPembe = new lib.btnPembe();
	this.btnPembe.parent = this;
	this.btnPembe.setTransform(300,678);
	new cjs.ButtonHelper(this.btnPembe, 0, 1, 2, false, new lib.btnPembe(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnPembe).to({_off:true},1).wait(3));

	// btnSari
	this.btnSari = new lib.btnSari();
	this.btnSari.parent = this;
	this.btnSari.setTransform(300,436.9);
	new cjs.ButtonHelper(this.btnSari, 0, 1, 2, false, new lib.btnSari(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnSari).to({_off:true},1).wait(3));

	// btnMor
	this.btnMor = new lib.btnMor();
	this.btnMor.parent = this;
	this.btnMor.setTransform(300,208.3);
	new cjs.ButtonHelper(this.btnMor, 0, 1, 2, false, new lib.btnMor(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnMor).to({_off:true},1).wait(3));

	// btnMavi
	this.btnMavi = new lib.btnMavi();
	this.btnMavi.parent = this;
	this.btnMavi.setTransform(109.2,332);
	new cjs.ButtonHelper(this.btnMavi, 0, 1, 2, false, new lib.btnMavi(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnMavi).to({_off:true},1).wait(3));

	// arkaplan
	this.instance_1 = new lib.fixationtrackingbackground();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(683,384,1366,787.8);
// library properties:
lib.properties = {
	width: 1366,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:assetAddres +"images/trackingFixation_level1v7_atlas_.png", id:"trackingFixation_level1v7_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;