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
		{name:"visualDiscrimination_level3v1_atlas_", frames: [[1121,2726,96,128],[1489,2613,128,96],[1359,2711,96,128],[1219,2775,96,128],[1359,2613,128,96],[1100,2856,96,128],[1002,2891,96,128],[1457,2711,128,96],[1587,2711,96,128],[1002,2761,96,128],[1457,2809,128,96],[1317,2841,96,128],[1179,2500,96,224],[1882,1581,164,223],[1882,1955,118,132],[1685,2753,104,73],[1002,2637,117,122],[1198,2905,98,116],[1368,0,610,525],[1368,527,610,525],[1368,1054,610,525],[1002,2320,350,178],[1354,2447,350,164],[0,780,1366,768],[1002,2500,175,135],[1002,3021,102,82],[1882,1806,153,147],[1776,2095,236,151],[1776,2248,236,151],[1368,2095,406,174],[1368,2271,406,174],[1706,2447,307,151],[1706,2600,307,151],[1106,2986,86,47],[1905,2753,95,58],[0,0,1366,778],[0,1550,1366,768],[1791,2753,112,56],[1368,1581,512,512],[1980,0,61,72],[0,2320,1000,1000],[1619,2613,78,64],[1277,2613,80,160]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
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



(lib._2sn_n = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2sn_t = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._2sn_u = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4sn_n = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._4sn_t = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._4sn_u = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._6sn_n = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._6sn_t = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._6sn_u = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._8sn_n = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._8sn_t = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._8sn_u = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.adam = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.agacyeni = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.ahtapot = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.balik = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.balik2 = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.bambi = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.button1 = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.button2 = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.button3 = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.cadir = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.cadıryeni = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.deniz2 = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.denizalti = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.denizkabugu = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.denizyildizi = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.kitap21 = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.kitap21_1 = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.kitaptıklandığında = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.kitaptıklandığındapngcopy = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.kitapüzerinegelindiğinde = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.kitapüzerinegelindiğindepngcopy = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.kutukyeni = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.mantaryeni = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.orjinalarkaplan = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.ormanyeni = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.palyaco = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.retry = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.sincapyeni = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.tick = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.tilki = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.yosun = function() {
	this.spriteSheet = ss["visualDiscrimination_level3v1_atlas_"];
	this.gotoAndStop(42);
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


(lib.mcTickYildiz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tick();
	this.instance.parent = this;
	this.instance.setTransform(-31.8,-31.8,0.064,0.064);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcTickYildiz, new cjs.Rectangle(-31.8,-31.8,63.7,63.7), null);


(lib.mcTickObj3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tick();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.064,0.064);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcTickObj3, new cjs.Rectangle(0,0,63.7,63.7), null);


(lib.mcTickObj2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tick();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.064,0.064);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcTickObj2, new cjs.Rectangle(0,0,63.7,63.7), null);


(lib.mcTickObj1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tick();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.064,0.064);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcTickObj1, new cjs.Rectangle(0,0,63.7,63.7), null);


(lib.btnYildiz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ahtapot();
	this.instance.parent = this;
	this.instance.setTransform(-116,36,0.998,1.062);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("At1NjIAA7FIbrAAIAAbFg");
	this.shape.setTransform(-59.2,95.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116,36,117.7,140.2);


(lib.btnTop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yosun();
	this.instance.parent = this;
	this.instance.setTransform(-66,-80,0.974,0.974);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AsXPTIAA+lIYwAAIAAelg");
	this.shape.setTransform(-6.2,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-80,78,155.9);


(lib.btnTas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.balik2();
	this.instance.parent = this;
	this.instance.setTransform(22,-81,0.984,1.08);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AtiNQIAA6fIbFAAIAAafg");
	this.shape.setTransform(72.8,-22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22,-81,115.2,131.8);


(lib.btnMeyveSuyu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.denizyildizi();
	this.instance.parent = this;
	this.instance.setTransform(-20,-62,1.068,1.068);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AxeQnMAAAghNIIdAAIAAAlIagAAMAAAAgog");
	this.shape.setTransform(54.5,16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-62,163.4,157);


(lib.btnGunes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.denizalti();
	this.instance.parent = this;
	this.instance.setTransform(-66,-80,0.981,0.981);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Av3SqIAAg5Ii7AAMAAAgkaMAllAAAMAAAAlTg");
	this.shape.setTransform(25.2,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-80,171.8,132.5);


(lib.btnSelectPlaj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kitap21_1();
	this.instance.parent = this;

	this.instance_1 = new lib.kitapüzerinegelindiğindepngcopy();
	this.instance_1.parent = this;

	this.instance_2 = new lib.kitapüzerinegelindiğinde();
	this.instance_2.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A5WPdIAA+5MAytAAAIAAe5g");
	this.shape.setTransform(145.9,82.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236,151);


(lib.btnSelectOda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kitap21();
	this.instance.parent = this;

	this.instance_1 = new lib.kitapüzerinegelindiğinde();
	this.instance_1.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A5XOeIAA87MAyvAAAIAAc7g");
	this.shape.setTransform(145.3,75.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236,151);


(lib.btnPlajAfter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kitaptıklandığındapngcopy();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnPlajAfter, new cjs.Rectangle(0,0,406,174), null);


(lib.btnOdaAfter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kitaptıklandığında();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnOdaAfter, new cjs.Rectangle(0,0,406,174), null);


(lib.btn8snAfter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._8sn_t();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn8snAfter, new cjs.Rectangle(0,0,128,96), null);


(lib.btn8sn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._8sn_n();
	this.instance.parent = this;

	this.instance_1 = new lib._8sn_u();
	this.instance_1.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ap5N2IAA7rITzAAIAAbrg");
	this.shape.setTransform(49.5,65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,128);


(lib.btn6snAfter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._6sn_t();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn6snAfter, new cjs.Rectangle(0,0,128,96), null);


(lib.btn6sn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._6sn_n();
	this.instance.parent = this;

	this.instance_1 = new lib._6sn_u();
	this.instance_1.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ap5NsIAA7YITzAAIAAbYg");
	this.shape.setTransform(53.4,64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,128);


(lib.btn4snAfter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._4sn_t();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn4snAfter, new cjs.Rectangle(0,0,128,96), null);


(lib.btn4sn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._4sn_n();
	this.instance.parent = this;

	this.instance_1 = new lib._4sn_u();
	this.instance_1.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ao/McIAA44IR/AAIAAY4g");
	this.shape.setTransform(48.3,66.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,128);


(lib.btn2snAfter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2sn_t();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn2snAfter, new cjs.Rectangle(0,0,128,96), null);


(lib.btn2sn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2sn_n();
	this.instance.parent = this;

	this.instance_1 = new lib._2sn_u();
	this.instance_1.parent = this;

	this.instance_2 = new lib._2sn_t();
	this.instance_2.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoGLbIAA21IQMAAIAAW1g");
	this.shape.setTransform(51.9,73.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,128);


(lib.mcLoader8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_460 = function() {
		playSound("complete");
	}
	this.frame_480 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(460).call(this.frame_460).wait(20).call(this.frame_480).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AgxCIIAAkPIBjAAIAAEPg");
	this.shape.setTransform(-322.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FE").s().p("Ag4CIIAAkPIBxAAIAAEPg");
	this.shape_1.setTransform(-321.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FE").s().p("Ag/CIIAAkPIB+AAIAAEPg");
	this.shape_2.setTransform(-321.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FD").s().p("AhFCIIAAkPICLAAIAAEPg");
	this.shape_3.setTransform(-320.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0099FD").s().p("AhMCIIAAkPICZAAIAAEPg");
	this.shape_4.setTransform(-319.8,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009AFC").s().p("AhTCIIAAkPICnAAIAAEPg");
	this.shape_5.setTransform(-319.1,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009AFC").s().p("AhZCIIAAkPICzAAIAAEPg");
	this.shape_6.setTransform(-318.5,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009AFB").s().p("AhgCIIAAkPIDBAAIAAEPg");
	this.shape_7.setTransform(-317.8,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009AFB").s().p("AhnCIIAAkPIDPAAIAAEPg");
	this.shape_8.setTransform(-317.1,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009AFA").s().p("AhuCIIAAkPIDdAAIAAEPg");
	this.shape_9.setTransform(-316.4,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009AFA").s().p("Ah0CIIAAkPIDpAAIAAEPg");
	this.shape_10.setTransform(-315.8,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009AF9").s().p("Ah7CIIAAkPID3AAIAAEPg");
	this.shape_11.setTransform(-315.1,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009AF9").s().p("AiCCIIAAkPIEEAAIAAEPg");
	this.shape_12.setTransform(-314.4,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009AF8").s().p("AiICIIAAkPIERAAIAAEPg");
	this.shape_13.setTransform(-313.8,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009AF8").s().p("AiPCIIAAkPIEfAAIAAEPg");
	this.shape_14.setTransform(-313.1,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009BF7").s().p("AiWCIIAAkPIEtAAIAAEPg");
	this.shape_15.setTransform(-312.4,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009BF6").s().p("AidCIIAAkPIE6AAIAAEPg");
	this.shape_16.setTransform(-311.7,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009BF6").s().p("AijCIIAAkPIFHAAIAAEPg");
	this.shape_17.setTransform(-311.1,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#009BF5").s().p("AiqCIIAAkPIFVAAIAAEPg");
	this.shape_18.setTransform(-310.4,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009BF5").s().p("AixCIIAAkPIFjAAIAAEPg");
	this.shape_19.setTransform(-309.7,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009BF4").s().p("Ai3CIIAAkPIFvAAIAAEPg");
	this.shape_20.setTransform(-309.1,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009BF4").s().p("Ai+CIIAAkPIF9AAIAAEPg");
	this.shape_21.setTransform(-308.4,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009BF3").s().p("AjFCIIAAkPIGLAAIAAEPg");
	this.shape_22.setTransform(-307.7,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009BF3").s().p("AjMCIIAAkPIGZAAIAAEPg");
	this.shape_23.setTransform(-307,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#009CF2").s().p("AjSCIIAAkPIGlAAIAAEPg");
	this.shape_24.setTransform(-306.4,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#009CF2").s().p("AjZCIIAAkPIGzAAIAAEPg");
	this.shape_25.setTransform(-305.7,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#009CF1").s().p("AjgCIIAAkPIHAAAIAAEPg");
	this.shape_26.setTransform(-305,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#009CF1").s().p("AjmCIIAAkPIHNAAIAAEPg");
	this.shape_27.setTransform(-304.4,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#009CF0").s().p("AjtCIIAAkPIHbAAIAAEPg");
	this.shape_28.setTransform(-303.7,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#009CF0").s().p("Aj0CIIAAkPIHpAAIAAEPg");
	this.shape_29.setTransform(-303,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#009CEF").s().p("Aj7CIIAAkPIH2AAIAAEPg");
	this.shape_30.setTransform(-302.3,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#009CEE").s().p("AkBCIIAAkPIIDAAIAAEPg");
	this.shape_31.setTransform(-301.7,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#009CEE").s().p("AkICIIAAkPIIRAAIAAEPg");
	this.shape_32.setTransform(-301,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#009DED").s().p("AkPCIIAAkPIIeAAIAAEPg");
	this.shape_33.setTransform(-300.3,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#009DED").s().p("AkVCIIAAkPIIrAAIAAEPg");
	this.shape_34.setTransform(-299.7,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#009DEC").s().p("AkcCIIAAkPII5AAIAAEPg");
	this.shape_35.setTransform(-299,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#009DEC").s().p("AkjCIIAAkPIJHAAIAAEPg");
	this.shape_36.setTransform(-298.3,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#009DEB").s().p("AkpCIIAAkPIJTAAIAAEPg");
	this.shape_37.setTransform(-297.7,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#009DEB").s().p("AkwCIIAAkPIJhAAIAAEPg");
	this.shape_38.setTransform(-297,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#009DEA").s().p("Ak3CIIAAkPIJvAAIAAEPg");
	this.shape_39.setTransform(-296.3,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#009DEA").s().p("Ak+CIIAAkPIJ9AAIAAEPg");
	this.shape_40.setTransform(-295.6,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#009DE9").s().p("AlECIIAAkPIKJAAIAAEPg");
	this.shape_41.setTransform(-295,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#009DE9").s().p("AlLCIIAAkPIKXAAIAAEPg");
	this.shape_42.setTransform(-294.3,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#009EE8").s().p("AlSCIIAAkPIKkAAIAAEPg");
	this.shape_43.setTransform(-293.6,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#009EE8").s().p("AlYCIIAAkPIKxAAIAAEPg");
	this.shape_44.setTransform(-293,0);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#009EE7").s().p("AlfCIIAAkPIK/AAIAAEPg");
	this.shape_45.setTransform(-292.3,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#009EE7").s().p("AlmCIIAAkPILNAAIAAEPg");
	this.shape_46.setTransform(-291.6,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#009EE6").s().p("AltCIIAAkPILaAAIAAEPg");
	this.shape_47.setTransform(-290.9,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#009EE5").s().p("AlzCIIAAkPILnAAIAAEPg");
	this.shape_48.setTransform(-290.3,0);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#009EE5").s().p("Al6CIIAAkPIL1AAIAAEPg");
	this.shape_49.setTransform(-289.6,0);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#009EE4").s().p("AmBCIIAAkPIMDAAIAAEPg");
	this.shape_50.setTransform(-288.9,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#009EE4").s().p("AmHCIIAAkPIMPAAIAAEPg");
	this.shape_51.setTransform(-288.3,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#009FE3").s().p("AmOCIIAAkPIMdAAIAAEPg");
	this.shape_52.setTransform(-287.6,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#009FE3").s().p("AmVCIIAAkPIMrAAIAAEPg");
	this.shape_53.setTransform(-286.9,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#009FE2").s().p("AmcCIIAAkPIM5AAIAAEPg");
	this.shape_54.setTransform(-286.2,0);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#009FE2").s().p("AmiCIIAAkPINFAAIAAEPg");
	this.shape_55.setTransform(-285.6,0);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#009FE1").s().p("AmpCIIAAkPINTAAIAAEPg");
	this.shape_56.setTransform(-284.9,0);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#009FE1").s().p("AmwCIIAAkPINgAAIAAEPg");
	this.shape_57.setTransform(-284.2,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#009FE0").s().p("Am2CIIAAkPINtAAIAAEPg");
	this.shape_58.setTransform(-283.6,0);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#009FE0").s().p("Am9CIIAAkPIN7AAIAAEPg");
	this.shape_59.setTransform(-282.9,0);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#009FDF").s().p("AnECIIAAkPIOJAAIAAEPg");
	this.shape_60.setTransform(-282.2,0);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#009FDF").s().p("AnLCIIAAkPIOWAAIAAEPg");
	this.shape_61.setTransform(-281.5,0);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00A0DE").s().p("AnRCIIAAkPIOjAAIAAEPg");
	this.shape_62.setTransform(-280.9,0);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00A0DD").s().p("AnYCIIAAkPIOxAAIAAEPg");
	this.shape_63.setTransform(-280.2,0);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00A0DD").s().p("AnfCIIAAkPIO/AAIAAEPg");
	this.shape_64.setTransform(-279.5,0);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00A0DC").s().p("AnlCIIAAkPIPLAAIAAEPg");
	this.shape_65.setTransform(-278.9,0);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00A0DC").s().p("AnsCIIAAkPIPZAAIAAEPg");
	this.shape_66.setTransform(-278.2,0);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00A0DB").s().p("AnzCIIAAkPIPnAAIAAEPg");
	this.shape_67.setTransform(-277.5,0);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00A0DB").s().p("An6CIIAAkPIP1AAIAAEPg");
	this.shape_68.setTransform(-276.8,0);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00A0DA").s().p("AoACIIAAkPIQBAAIAAEPg");
	this.shape_69.setTransform(-276.2,0);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00A0DA").s().p("AoHCIIAAkPIQPAAIAAEPg");
	this.shape_70.setTransform(-275.5,0);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00A1D9").s().p("AoOCIIAAkPIQcAAIAAEPg");
	this.shape_71.setTransform(-274.8,0);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00A1D9").s().p("AoUCIIAAkPIQpAAIAAEPg");
	this.shape_72.setTransform(-274.2,0);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00A1D8").s().p("AobCIIAAkPIQ3AAIAAEPg");
	this.shape_73.setTransform(-273.5,0);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00A1D8").s().p("AoiCIIAAkPIRFAAIAAEPg");
	this.shape_74.setTransform(-272.8,0);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#00A1D7").s().p("AooCIIAAkPIRRAAIAAEPg");
	this.shape_75.setTransform(-272.2,0);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#00A1D7").s().p("AovCIIAAkPIRfAAIAAEPg");
	this.shape_76.setTransform(-271.5,0);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#00A1D6").s().p("Ao2CIIAAkPIRtAAIAAEPg");
	this.shape_77.setTransform(-270.8,0);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#00A1D5").s().p("Ao9CIIAAkPIR7AAIAAEPg");
	this.shape_78.setTransform(-270.1,0);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00A1D5").s().p("ApDCIIAAkPISHAAIAAEPg");
	this.shape_79.setTransform(-269.5,0);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#00A2D4").s().p("ApKCIIAAkPISVAAIAAEPg");
	this.shape_80.setTransform(-268.8,0);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00A2D4").s().p("ApRCIIAAkPISjAAIAAEPg");
	this.shape_81.setTransform(-268.1,0);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00A2D3").s().p("ApXCIIAAkPISvAAIAAEPg");
	this.shape_82.setTransform(-267.5,0);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00A2D3").s().p("ApeCIIAAkPIS9AAIAAEPg");
	this.shape_83.setTransform(-266.8,0);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#00A2D2").s().p("AplCIIAAkPITLAAIAAEPg");
	this.shape_84.setTransform(-266.1,0);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00A2D2").s().p("ApsCIIAAkPITYAAIAAEPg");
	this.shape_85.setTransform(-265.4,0);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00A2D1").s().p("ApyCIIAAkPITlAAIAAEPg");
	this.shape_86.setTransform(-264.8,0);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#00A2D1").s().p("Ap5CIIAAkPITzAAIAAEPg");
	this.shape_87.setTransform(-264.1,0);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00A2D0").s().p("AqACIIAAkPIUBAAIAAEPg");
	this.shape_88.setTransform(-263.4,0);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00A2D0").s().p("AqGCIIAAkPIUNAAIAAEPg");
	this.shape_89.setTransform(-262.8,0);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00A3CF").s().p("AqNCIIAAkPIUbAAIAAEPg");
	this.shape_90.setTransform(-262.1,0);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00A3CF").s().p("AqUCIIAAkPIUpAAIAAEPg");
	this.shape_91.setTransform(-261.4,0);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#00A3CE").s().p("AqbCIIAAkPIU2AAIAAEPg");
	this.shape_92.setTransform(-260.7,0);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#00A3CD").s().p("AqhCIIAAkPIVDAAIAAEPg");
	this.shape_93.setTransform(-260.1,0);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#00A3CD").s().p("AqoCIIAAkPIVRAAIAAEPg");
	this.shape_94.setTransform(-259.4,0);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#00A3CC").s().p("AqvCIIAAkPIVfAAIAAEPg");
	this.shape_95.setTransform(-258.7,0);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#00A3CC").s().p("Aq1CIIAAkPIVrAAIAAEPg");
	this.shape_96.setTransform(-258.1,0);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#00A3CB").s().p("Aq8CIIAAkPIV5AAIAAEPg");
	this.shape_97.setTransform(-257.4,0);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#00A3CB").s().p("ArDCIIAAkPIWHAAIAAEPg");
	this.shape_98.setTransform(-256.7,0);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00A4CA").s().p("ArKCIIAAkPIWVAAIAAEPg");
	this.shape_99.setTransform(-256,0);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#00A4CA").s().p("ArQCIIAAkPIWhAAIAAEPg");
	this.shape_100.setTransform(-255.4,0);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#00A4C9").s().p("ArXCIIAAkPIWvAAIAAEPg");
	this.shape_101.setTransform(-254.7,0);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#00A4C9").s().p("AreCIIAAkPIW8AAIAAEPg");
	this.shape_102.setTransform(-254,0);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#00A4C8").s().p("ArkCIIAAkPIXJAAIAAEPg");
	this.shape_103.setTransform(-253.4,0);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#00A4C8").s().p("ArrCIIAAkPIXXAAIAAEPg");
	this.shape_104.setTransform(-252.7,0);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#00A4C7").s().p("AryCIIAAkPIXlAAIAAEPg");
	this.shape_105.setTransform(-252,0);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#00A4C7").s().p("Ar5CIIAAkPIXyAAIAAEPg");
	this.shape_106.setTransform(-251.3,0);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#00A4C6").s().p("Ar/CIIAAkPIX/AAIAAEPg");
	this.shape_107.setTransform(-250.7,0);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#00A4C6").s().p("AsGCIIAAkPIYNAAIAAEPg");
	this.shape_108.setTransform(-250,0);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#00A5C5").s().p("AsNCIIAAkPIYbAAIAAEPg");
	this.shape_109.setTransform(-249.3,0);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#00A5C4").s().p("AsTCIIAAkPIYnAAIAAEPg");
	this.shape_110.setTransform(-248.7,0);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#00A5C4").s().p("AsaCIIAAkPIY1AAIAAEPg");
	this.shape_111.setTransform(-248,0);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#00A5C3").s().p("AshCIIAAkPIZDAAIAAEPg");
	this.shape_112.setTransform(-247.3,0);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#00A5C3").s().p("AsoCIIAAkPIZRAAIAAEPg");
	this.shape_113.setTransform(-246.6,0);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#00A5C2").s().p("AsuCIIAAkPIZdAAIAAEPg");
	this.shape_114.setTransform(-246,0);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#00A5C2").s().p("As1CIIAAkPIZrAAIAAEPg");
	this.shape_115.setTransform(-245.3,0);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#00A5C1").s().p("As8CIIAAkPIZ4AAIAAEPg");
	this.shape_116.setTransform(-244.6,0);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#00A5C1").s().p("AtCCIIAAkPIaFAAIAAEPg");
	this.shape_117.setTransform(-244,0);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#00A6C0").s().p("AtJCIIAAkPIaTAAIAAEPg");
	this.shape_118.setTransform(-243.3,0);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00A6C0").s().p("AtQCIIAAkPIahAAIAAEPg");
	this.shape_119.setTransform(-242.6,0);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00A6BF").s().p("AtXCIIAAkPIauAAIAAEPg");
	this.shape_120.setTransform(-241.9,0);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00A6BF").s().p("AtdCIIAAkPIa7AAIAAEPg");
	this.shape_121.setTransform(-241.3,0);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#00A6BE").s().p("AtkCIIAAkPIbJAAIAAEPg");
	this.shape_122.setTransform(-240.6,0);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00A6BE").s().p("AtrCIIAAkPIbXAAIAAEPg");
	this.shape_123.setTransform(-239.9,0);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00A6BD").s().p("AtxCIIAAkPIbjAAIAAEPg");
	this.shape_124.setTransform(-239.3,0);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#00A6BC").s().p("At4CIIAAkPIbxAAIAAEPg");
	this.shape_125.setTransform(-238.6,0);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#00A6BC").s().p("At/CIIAAkPIb/AAIAAEPg");
	this.shape_126.setTransform(-237.9,0);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#00A7BB").s().p("AuGCIIAAkPIcNAAIAAEPg");
	this.shape_127.setTransform(-237.2,0);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#00A7BB").s().p("AuMCIIAAkPIcZAAIAAEPg");
	this.shape_128.setTransform(-236.6,0);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#00A7BA").s().p("AuTCIIAAkPIcnAAIAAEPg");
	this.shape_129.setTransform(-235.9,0);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#00A7BA").s().p("AuaCIIAAkPIc0AAIAAEPg");
	this.shape_130.setTransform(-235.2,0);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#00A7B9").s().p("AugCIIAAkPIdBAAIAAEPg");
	this.shape_131.setTransform(-234.6,0);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#00A7B9").s().p("AunCIIAAkPIdPAAIAAEPg");
	this.shape_132.setTransform(-233.9,0);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#00A7B8").s().p("AuuCIIAAkPIddAAIAAEPg");
	this.shape_133.setTransform(-233.2,0);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#00A7B8").s().p("Au1CIIAAkPIdqAAIAAEPg");
	this.shape_134.setTransform(-232.5,0);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#00A7B7").s().p("Au7CIIAAkPId3AAIAAEPg");
	this.shape_135.setTransform(-231.9,0);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#00A7B7").s().p("AvCCIIAAkPIeFAAIAAEPg");
	this.shape_136.setTransform(-231.2,0);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#00A8B6").s().p("AvJCIIAAkPIeTAAIAAEPg");
	this.shape_137.setTransform(-230.5,0);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#00A8B6").s().p("AvPCIIAAkPIefAAIAAEPg");
	this.shape_138.setTransform(-229.9,0);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#00A8B5").s().p("AvWCIIAAkPIetAAIAAEPg");
	this.shape_139.setTransform(-229.2,0);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#00A8B4").s().p("AvdCIIAAkPIe7AAIAAEPg");
	this.shape_140.setTransform(-228.5,0);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#00A8B4").s().p("AvjCIIAAkPIfHAAIAAEPg");
	this.shape_141.setTransform(-227.9,0);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#00A8B3").s().p("AvqCIIAAkPIfVAAIAAEPg");
	this.shape_142.setTransform(-227.2,0);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#00A8B3").s().p("AvxCIIAAkPIfjAAIAAEPg");
	this.shape_143.setTransform(-226.5,0);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#00A8B2").s().p("Av4CIIAAkPIfwAAIAAEPg");
	this.shape_144.setTransform(-225.8,0);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#00A8B2").s().p("Av+CIIAAkPIf9AAIAAEPg");
	this.shape_145.setTransform(-225.2,0);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#00A9B1").s().p("AwFCIIAAkPMAgLAAAIAAEPg");
	this.shape_146.setTransform(-224.5,0);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#00A9B1").s().p("AwMCIIAAkPMAgZAAAIAAEPg");
	this.shape_147.setTransform(-223.8,0);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#00A9B0").s().p("AwSCIIAAkPMAglAAAIAAEPg");
	this.shape_148.setTransform(-223.2,0);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#00A9B0").s().p("AwZCIIAAkPMAgzAAAIAAEPg");
	this.shape_149.setTransform(-222.5,0);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#00A9AF").s().p("AwgCIIAAkPMAhBAAAIAAEPg");
	this.shape_150.setTransform(-221.8,0);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#00A9AF").s().p("AwnCIIAAkPMAhOAAAIAAEPg");
	this.shape_151.setTransform(-221.1,0);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#00A9AE").s().p("AwtCIIAAkPMAhbAAAIAAEPg");
	this.shape_152.setTransform(-220.5,0);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#00A9AE").s().p("Aw0CIIAAkPMAhpAAAIAAEPg");
	this.shape_153.setTransform(-219.8,0);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#00A9AD").s().p("Aw7CIIAAkPMAh3AAAIAAEPg");
	this.shape_154.setTransform(-219.1,0);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#00AAAC").s().p("AxBCIIAAkPMAiDAAAIAAEPg");
	this.shape_155.setTransform(-218.5,0);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#00AAAC").s().p("AxICIIAAkPMAiRAAAIAAEPg");
	this.shape_156.setTransform(-217.8,0);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#00AAAB").s().p("AxPCIIAAkPMAifAAAIAAEPg");
	this.shape_157.setTransform(-217.1,0);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#00AAAB").s().p("AxWCIIAAkPMAitAAAIAAEPg");
	this.shape_158.setTransform(-216.4,0);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#00AAAA").s().p("AxcCIIAAkPMAi5AAAIAAEPg");
	this.shape_159.setTransform(-215.8,0);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#00AAAA").s().p("AxjCIIAAkPMAjHAAAIAAEPg");
	this.shape_160.setTransform(-215.1,0);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#00AAA9").s().p("AxqCIIAAkPMAjVAAAIAAEPg");
	this.shape_161.setTransform(-214.4,0);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#00AAA9").s().p("AxwCIIAAkPMAjhAAAIAAEPg");
	this.shape_162.setTransform(-213.8,0);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#00AAA8").s().p("Ax3CIIAAkPMAjvAAAIAAEPg");
	this.shape_163.setTransform(-213.1,0);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#00AAA8").s().p("Ax+CIIAAkPMAj9AAAIAAEPg");
	this.shape_164.setTransform(-212.4,0);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#00ABA7").s().p("AyFCIIAAkPMAkKAAAIAAEPg");
	this.shape_165.setTransform(-211.7,0);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#00ABA7").s().p("AyLCIIAAkPMAkXAAAIAAEPg");
	this.shape_166.setTransform(-211.1,0);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#00ABA6").s().p("AySCIIAAkPMAklAAAIAAEPg");
	this.shape_167.setTransform(-210.4,0);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#00ABA6").s().p("AyZCIIAAkPMAkzAAAIAAEPg");
	this.shape_168.setTransform(-209.7,0);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#00ABA5").s().p("AyfCIIAAkPMAk/AAAIAAEPg");
	this.shape_169.setTransform(-209.1,0);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#00ABA4").s().p("AymCIIAAkPMAlNAAAIAAEPg");
	this.shape_170.setTransform(-208.4,0);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#00ABA4").s().p("AytCIIAAkPMAlbAAAIAAEPg");
	this.shape_171.setTransform(-207.7,0);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#00ABA3").s().p("Ay0CIIAAkPMAlpAAAIAAEPg");
	this.shape_172.setTransform(-207,0);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#00ABA3").s().p("Ay6CIIAAkPMAl1AAAIAAEPg");
	this.shape_173.setTransform(-206.4,0);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#00ACA2").s().p("AzBCIIAAkPMAmDAAAIAAEPg");
	this.shape_174.setTransform(-205.7,0);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#00ACA2").s().p("AzICIIAAkPMAmQAAAIAAEPg");
	this.shape_175.setTransform(-205,0);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#00ACA1").s().p("AzOCIIAAkPMAmdAAAIAAEPg");
	this.shape_176.setTransform(-204.4,0);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#00ACA1").s().p("AzVCIIAAkPMAmrAAAIAAEPg");
	this.shape_177.setTransform(-203.7,0);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#00ACA0").s().p("AzcCIIAAkPMAm5AAAIAAEPg");
	this.shape_178.setTransform(-203,0);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#00ACA0").s().p("AzjCIIAAkPMAnGAAAIAAEPg");
	this.shape_179.setTransform(-202.3,0);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#00AC9F").s().p("AzpCIIAAkPMAnTAAAIAAEPg");
	this.shape_180.setTransform(-201.7,0);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#00AC9F").s().p("AzwCIIAAkPMAnhAAAIAAEPg");
	this.shape_181.setTransform(-201,0);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#00AC9E").s().p("Az3CIIAAkPMAnvAAAIAAEPg");
	this.shape_182.setTransform(-200.3,0);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#00AC9E").s().p("Az9CIIAAkPMAn7AAAIAAEPg");
	this.shape_183.setTransform(-199.7,0);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#00AD9D").s().p("A0ECIIAAkPMAoJAAAIAAEPg");
	this.shape_184.setTransform(-199,0);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#00AD9D").s().p("A0LCIIAAkPMAoXAAAIAAEPg");
	this.shape_185.setTransform(-198.3,0);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#00AD9C").s().p("A0SCIIAAkPMAolAAAIAAEPg");
	this.shape_186.setTransform(-197.6,0);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#00AD9B").s().p("A0YCIIAAkPMAoxAAAIAAEPg");
	this.shape_187.setTransform(-197,0);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#00AD9B").s().p("A0fCIIAAkPMAo/AAAIAAEPg");
	this.shape_188.setTransform(-196.3,0);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#00AD9A").s().p("A0mCIIAAkPMApMAAAIAAEPg");
	this.shape_189.setTransform(-195.6,0);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#00AD9A").s().p("A0sCIIAAkPMApZAAAIAAEPg");
	this.shape_190.setTransform(-195,0);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#00AD99").s().p("A0zCIIAAkPMApnAAAIAAEPg");
	this.shape_191.setTransform(-194.3,0);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#00AD99").s().p("A06CIIAAkPMAp1AAAIAAEPg");
	this.shape_192.setTransform(-193.6,0);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#00AE98").s().p("A1BCIIAAkPMAqCAAAIAAEPg");
	this.shape_193.setTransform(-192.9,0);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#00AE98").s().p("A1HCIIAAkPMAqPAAAIAAEPg");
	this.shape_194.setTransform(-192.3,0);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#00AE97").s().p("A1OCIIAAkPMAqdAAAIAAEPg");
	this.shape_195.setTransform(-191.6,0);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#00AE97").s().p("A1VCIIAAkPMAqrAAAIAAEPg");
	this.shape_196.setTransform(-190.9,0);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#00AE96").s().p("A1bCIIAAkPMAq3AAAIAAEPg");
	this.shape_197.setTransform(-190.3,0);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#00AE96").s().p("A1iCIIAAkPMArFAAAIAAEPg");
	this.shape_198.setTransform(-189.6,0);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#00AE95").s().p("A1pCIIAAkPMArTAAAIAAEPg");
	this.shape_199.setTransform(-188.9,0);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#00AE95").s().p("A1wCIIAAkPMArhAAAIAAEPg");
	this.shape_200.setTransform(-188.2,0);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#00AE94").s().p("A12CIIAAkPMArtAAAIAAEPg");
	this.shape_201.setTransform(-187.6,0);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#00AF93").s().p("A19CIIAAkPMAr7AAAIAAEPg");
	this.shape_202.setTransform(-186.9,0);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#00AF93").s().p("A2ECIIAAkPMAsIAAAIAAEPg");
	this.shape_203.setTransform(-186.2,0);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#00AF92").s().p("A2KCIIAAkPMAsVAAAIAAEPg");
	this.shape_204.setTransform(-185.6,0);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#00AF92").s().p("A2RCIIAAkPMAsjAAAIAAEPg");
	this.shape_205.setTransform(-184.9,0);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#00AF91").s().p("A2YCIIAAkPMAsxAAAIAAEPg");
	this.shape_206.setTransform(-184.2,0);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#00AF91").s().p("A2eCIIAAkPMAs9AAAIAAEPg");
	this.shape_207.setTransform(-183.6,0);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#00AF90").s().p("A2lCIIAAkPMAtLAAAIAAEPg");
	this.shape_208.setTransform(-182.9,0);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#00AF90").s().p("A2sCIIAAkPMAtZAAAIAAEPg");
	this.shape_209.setTransform(-182.2,0);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#00AF8F").s().p("A2zCIIAAkPMAtmAAAIAAEPg");
	this.shape_210.setTransform(-181.5,0);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#00AF8F").s().p("A25CIIAAkPMAtzAAAIAAEPg");
	this.shape_211.setTransform(-180.9,0);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#00B08E").s().p("A3ACIIAAkPMAuBAAAIAAEPg");
	this.shape_212.setTransform(-180.2,0);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#00B08E").s().p("A3HCIIAAkPMAuPAAAIAAEPg");
	this.shape_213.setTransform(-179.5,0);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#00B08D").s().p("A3NCIIAAkPMAubAAAIAAEPg");
	this.shape_214.setTransform(-178.9,0);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#00B08D").s().p("A3UCIIAAkPMAupAAAIAAEPg");
	this.shape_215.setTransform(-178.2,0);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#00B08C").s().p("A3bCIIAAkPMAu3AAAIAAEPg");
	this.shape_216.setTransform(-177.5,0);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#00B08B").s().p("A3iCIIAAkPMAvFAAAIAAEPg");
	this.shape_217.setTransform(-176.8,0);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#00B08B").s().p("A3oCIIAAkPMAvRAAAIAAEPg");
	this.shape_218.setTransform(-176.2,0);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#00B08A").s().p("A3vCIIAAkPMAvfAAAIAAEPg");
	this.shape_219.setTransform(-175.5,0);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#00B08A").s().p("A32CIIAAkPMAvsAAAIAAEPg");
	this.shape_220.setTransform(-174.8,0);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#00B189").s().p("A38CIIAAkPMAv5AAAIAAEPg");
	this.shape_221.setTransform(-174.2,0);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#00B189").s().p("A4DCIIAAkPMAwHAAAIAAEPg");
	this.shape_222.setTransform(-173.5,0);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#00B188").s().p("A4KCIIAAkPMAwVAAAIAAEPg");
	this.shape_223.setTransform(-172.8,0);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#00B188").s().p("A4RCIIAAkPMAwiAAAIAAEPg");
	this.shape_224.setTransform(-172.1,0);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#00B187").s().p("A4XCIIAAkPMAwvAAAIAAEPg");
	this.shape_225.setTransform(-171.5,0);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#00B187").s().p("A4eCIIAAkPMAw9AAAIAAEPg");
	this.shape_226.setTransform(-170.8,0);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#00B186").s().p("A4lCIIAAkPMAxLAAAIAAEPg");
	this.shape_227.setTransform(-170.1,0);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#00B186").s().p("A4rCIIAAkPMAxXAAAIAAEPg");
	this.shape_228.setTransform(-169.5,0);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#00B185").s().p("A4yCIIAAkPMAxlAAAIAAEPg");
	this.shape_229.setTransform(-168.8,0);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#00B185").s().p("A45CIIAAkPMAxzAAAIAAEPg");
	this.shape_230.setTransform(-168.1,0);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#00B284").s().p("A5ACIIAAkPMAyBAAAIAAEPg");
	this.shape_231.setTransform(-167.4,0);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#00B283").s().p("A5GCIIAAkPMAyNAAAIAAEPg");
	this.shape_232.setTransform(-166.8,0);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#00B283").s().p("A5NCIIAAkPMAybAAAIAAEPg");
	this.shape_233.setTransform(-166.1,0);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#00B282").s().p("A5UCIIAAkPMAyoAAAIAAEPg");
	this.shape_234.setTransform(-165.4,0);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#00B282").s().p("A5aCIIAAkPMAy1AAAIAAEPg");
	this.shape_235.setTransform(-164.8,0);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#00B281").s().p("A5hCIIAAkPMAzDAAAIAAEPg");
	this.shape_236.setTransform(-164.1,0);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#00B281").s().p("A5oCIIAAkPMAzRAAAIAAEPg");
	this.shape_237.setTransform(-163.4,0);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#00B280").s().p("A5vCIIAAkPMAzeAAAIAAEPg");
	this.shape_238.setTransform(-162.7,0);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#00B280").s().p("A51CIIAAkPMAzrAAAIAAEPg");
	this.shape_239.setTransform(-162.1,0);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#00B37F").s().p("A58CIIAAkPMAz5AAAIAAEPg");
	this.shape_240.setTransform(-161.4,0);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#00B37F").s().p("A6DCIIAAkPMA0HAAAIAAEPg");
	this.shape_241.setTransform(-160.7,0);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#00B37E").s().p("A6JCIIAAkPMA0TAAAIAAEPg");
	this.shape_242.setTransform(-160.1,0);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#00B37E").s().p("A6QCIIAAkPMA0hAAAIAAEPg");
	this.shape_243.setTransform(-159.4,0);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#00B37D").s().p("A6XCIIAAkPMA0vAAAIAAEPg");
	this.shape_244.setTransform(-158.7,0);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#00B37D").s().p("A6eCIIAAkPMA09AAAIAAEPg");
	this.shape_245.setTransform(-158,0);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#00B37C").s().p("A6kCIIAAkPMA1JAAAIAAEPg");
	this.shape_246.setTransform(-157.4,0);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#00B37C").s().p("A6rCIIAAkPMA1XAAAIAAEPg");
	this.shape_247.setTransform(-156.7,0);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#00B37B").s().p("A6yCIIAAkPMA1kAAAIAAEPg");
	this.shape_248.setTransform(-156,0);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#00B47A").s().p("A64CIIAAkPMA1xAAAIAAEPg");
	this.shape_249.setTransform(-155.4,0);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#00B47A").s().p("A6/CIIAAkPMA1/AAAIAAEPg");
	this.shape_250.setTransform(-154.7,0);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#00B479").s().p("A7GCIIAAkPMA2NAAAIAAEPg");
	this.shape_251.setTransform(-154,0);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#00B479").s().p("A7NCIIAAkPMA2aAAAIAAEPg");
	this.shape_252.setTransform(-153.3,0);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#00B478").s().p("A7TCIIAAkPMA2nAAAIAAEPg");
	this.shape_253.setTransform(-152.7,0);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#00B478").s().p("A7aCIIAAkPMA21AAAIAAEPg");
	this.shape_254.setTransform(-152,0);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#00B477").s().p("A7hCIIAAkPMA3DAAAIAAEPg");
	this.shape_255.setTransform(-151.3,0);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#00B477").s().p("A7nCIIAAkPMA3PAAAIAAEPg");
	this.shape_256.setTransform(-150.7,0);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#00B476").s().p("A7uCIIAAkPMA3dAAAIAAEPg");
	this.shape_257.setTransform(-150,0);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#00B476").s().p("A71CIIAAkPMA3rAAAIAAEPg");
	this.shape_258.setTransform(-149.3,0);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#00B575").s().p("A78CIIAAkPMA35AAAIAAEPg");
	this.shape_259.setTransform(-148.6,0);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#00B575").s().p("A8CCIIAAkPMA4FAAAIAAEPg");
	this.shape_260.setTransform(-148,0);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#00B574").s().p("A8JCIIAAkPMA4TAAAIAAEPg");
	this.shape_261.setTransform(-147.3,0);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#00B574").s().p("A8QCIIAAkPMA4hAAAIAAEPg");
	this.shape_262.setTransform(-146.6,0);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#00B573").s().p("A8WCIIAAkPMA4tAAAIAAEPg");
	this.shape_263.setTransform(-146,0);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#00B572").s().p("A8dCIIAAkPMA47AAAIAAEPg");
	this.shape_264.setTransform(-145.3,0);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#00B572").s().p("A8kCIIAAkPMA5JAAAIAAEPg");
	this.shape_265.setTransform(-144.6,0);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#00B571").s().p("A8rCIIAAkPMA5WAAAIAAEPg");
	this.shape_266.setTransform(-143.9,0);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#00B571").s().p("A8xCIIAAkPMA5jAAAIAAEPg");
	this.shape_267.setTransform(-143.3,0);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#00B670").s().p("A84CIIAAkPMA5xAAAIAAEPg");
	this.shape_268.setTransform(-142.6,0);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#00B670").s().p("A8/CIIAAkPMA5+AAAIAAEPg");
	this.shape_269.setTransform(-141.9,0);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#00B66F").s().p("A9FCIIAAkPMA6LAAAIAAEPg");
	this.shape_270.setTransform(-141.3,0);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#00B66F").s().p("A9MCIIAAkPMA6ZAAAIAAEPg");
	this.shape_271.setTransform(-140.6,0);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#00B66E").s().p("A9TCIIAAkPMA6nAAAIAAEPg");
	this.shape_272.setTransform(-139.9,0);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#00B66E").s().p("A9ZCIIAAkPMA6zAAAIAAEPg");
	this.shape_273.setTransform(-139.3,0);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#00B66D").s().p("A9gCIIAAkPMA7BAAAIAAEPg");
	this.shape_274.setTransform(-138.6,0);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#00B66D").s().p("A9nCIIAAkPMA7PAAAIAAEPg");
	this.shape_275.setTransform(-137.9,0);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#00B66C").s().p("A9uCIIAAkPMA7dAAAIAAEPg");
	this.shape_276.setTransform(-137.2,0);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#00B66C").s().p("A90CIIAAkPMA7pAAAIAAEPg");
	this.shape_277.setTransform(-136.6,0);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#00B76B").s().p("A97CIIAAkPMA73AAAIAAEPg");
	this.shape_278.setTransform(-135.9,0);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#00B76A").s().p("A+CCIIAAkPMA8EAAAIAAEPg");
	this.shape_279.setTransform(-135.2,0);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#00B76A").s().p("A+ICIIAAkPMA8RAAAIAAEPg");
	this.shape_280.setTransform(-134.6,0);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#00B769").s().p("A+PCIIAAkPMA8fAAAIAAEPg");
	this.shape_281.setTransform(-133.9,0);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#00B769").s().p("A+WCIIAAkPMA8tAAAIAAEPg");
	this.shape_282.setTransform(-133.2,0);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#00B768").s().p("A+dCIIAAkPMA86AAAIAAEPg");
	this.shape_283.setTransform(-132.5,0);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#00B768").s().p("A+jCIIAAkPMA9HAAAIAAEPg");
	this.shape_284.setTransform(-131.9,0);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#00B767").s().p("A+qCIIAAkPMA9VAAAIAAEPg");
	this.shape_285.setTransform(-131.2,0);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#00B767").s().p("A+xCIIAAkPMA9jAAAIAAEPg");
	this.shape_286.setTransform(-130.5,0);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#00B866").s().p("A+3CIIAAkPMA9vAAAIAAEPg");
	this.shape_287.setTransform(-129.9,0);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#00B866").s().p("A++CIIAAkPMA99AAAIAAEPg");
	this.shape_288.setTransform(-129.2,0);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#00B865").s().p("A/FCIIAAkPMA+LAAAIAAEPg");
	this.shape_289.setTransform(-128.5,0);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#00B865").s().p("A/MCIIAAkPMA+ZAAAIAAEPg");
	this.shape_290.setTransform(-127.8,0);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#00B864").s().p("A/SCIIAAkPMA+lAAAIAAEPg");
	this.shape_291.setTransform(-127.2,0);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#00B864").s().p("A/ZCIIAAkPMA+zAAAIAAEPg");
	this.shape_292.setTransform(-126.5,0);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#00B863").s().p("A/gCIIAAkPMA/AAAAIAAEPg");
	this.shape_293.setTransform(-125.8,0);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#00B862").s().p("A/mCIIAAkPMA/NAAAIAAEPg");
	this.shape_294.setTransform(-125.2,0);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#00B862").s().p("A/tCIIAAkPMA/bAAAIAAEPg");
	this.shape_295.setTransform(-124.5,0);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#00B961").s().p("A/0CIIAAkPMA/pAAAIAAEPg");
	this.shape_296.setTransform(-123.8,0);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#00B961").s().p("A/7CIIAAkPMA/2AAAIAAEPg");
	this.shape_297.setTransform(-123.1,0);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#00B960").s().p("EggBACIIAAkPMBADAAAIAAEPg");
	this.shape_298.setTransform(-122.5,0);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#00B960").s().p("EggIACIIAAkPMBARAAAIAAEPg");
	this.shape_299.setTransform(-121.8,0);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#00B95F").s().p("EggPACIIAAkPMBAfAAAIAAEPg");
	this.shape_300.setTransform(-121.1,0);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#00B95F").s().p("EggVACIIAAkPMBArAAAIAAEPg");
	this.shape_301.setTransform(-120.5,0);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#00B95E").s().p("EggcACIIAAkPMBA5AAAIAAEPg");
	this.shape_302.setTransform(-119.8,0);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#00B95E").s().p("EggjACIIAAkPMBBHAAAIAAEPg");
	this.shape_303.setTransform(-119.1,0);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#00B95D").s().p("EggqACIIAAkPMBBVAAAIAAEPg");
	this.shape_304.setTransform(-118.4,0);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#00B95D").s().p("EggwACIIAAkPMBBhAAAIAAEPg");
	this.shape_305.setTransform(-117.8,0);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#00BA5C").s().p("Egg3ACIIAAkPMBBvAAAIAAEPg");
	this.shape_306.setTransform(-117.1,0);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#00BA5C").s().p("Egg+ACIIAAkPMBB8AAAIAAEPg");
	this.shape_307.setTransform(-116.4,0);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#00BA5B").s().p("EghEACIIAAkPMBCJAAAIAAEPg");
	this.shape_308.setTransform(-115.8,0);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#00BA5B").s().p("EghLACIIAAkPMBCXAAAIAAEPg");
	this.shape_309.setTransform(-115.1,0);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#00BA5A").s().p("EghSACIIAAkPMBClAAAIAAEPg");
	this.shape_310.setTransform(-114.4,0);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#00BA59").s().p("EghZACIIAAkPMBCyAAAIAAEPg");
	this.shape_311.setTransform(-113.7,0);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#00BA59").s().p("EghfACIIAAkPMBC/AAAIAAEPg");
	this.shape_312.setTransform(-113.1,0);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#00BA58").s().p("EghmACIIAAkPMBDNAAAIAAEPg");
	this.shape_313.setTransform(-112.4,0);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#00BA58").s().p("EghtACIIAAkPMBDbAAAIAAEPg");
	this.shape_314.setTransform(-111.7,0);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#00BB57").s().p("EghzACIIAAkPMBDnAAAIAAEPg");
	this.shape_315.setTransform(-111.1,0);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#00BB57").s().p("Egh6ACIIAAkPMBD1AAAIAAEPg");
	this.shape_316.setTransform(-110.4,0);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#00BB56").s().p("EgiBACIIAAkPMBEDAAAIAAEPg");
	this.shape_317.setTransform(-109.7,0);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#00BB56").s().p("EgiHACIIAAkPMBEPAAAIAAEPg");
	this.shape_318.setTransform(-109.1,0);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#00BB55").s().p("EgiOACIIAAkPMBEdAAAIAAEPg");
	this.shape_319.setTransform(-108.4,0);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#00BB55").s().p("EgiVACIIAAkPMBErAAAIAAEPg");
	this.shape_320.setTransform(-107.7,0);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#00BB54").s().p("EgicACIIAAkPMBE5AAAIAAEPg");
	this.shape_321.setTransform(-107,0);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#00BB54").s().p("EgiiACIIAAkPMBFFAAAIAAEPg");
	this.shape_322.setTransform(-106.4,0);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#00BB53").s().p("EgipACIIAAkPMBFTAAAIAAEPg");
	this.shape_323.setTransform(-105.7,0);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#00BB53").s().p("EgiwACIIAAkPMBFhAAAIAAEPg");
	this.shape_324.setTransform(-105,0);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#00BC52").s().p("Egi2ACIIAAkPMBFtAAAIAAEPg");
	this.shape_325.setTransform(-104.4,0);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#00BC51").s().p("Egi9ACIIAAkPMBF7AAAIAAEPg");
	this.shape_326.setTransform(-103.7,0);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#00BC51").s().p("EgjEACIIAAkPMBGJAAAIAAEPg");
	this.shape_327.setTransform(-103,0);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#00BC50").s().p("EgjLACIIAAkPMBGWAAAIAAEPg");
	this.shape_328.setTransform(-102.3,0);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#00BC50").s().p("EgjRACIIAAkPMBGjAAAIAAEPg");
	this.shape_329.setTransform(-101.7,0);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#00BC4F").s().p("EgjYACIIAAkPMBGxAAAIAAEPg");
	this.shape_330.setTransform(-101,0);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#00BC4F").s().p("EgjfACIIAAkPMBG/AAAIAAEPg");
	this.shape_331.setTransform(-100.3,0);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#00BC4E").s().p("EgjlACIIAAkPMBHLAAAIAAEPg");
	this.shape_332.setTransform(-99.7,0);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#00BC4E").s().p("EgjsACIIAAkPMBHZAAAIAAEPg");
	this.shape_333.setTransform(-99,0);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#00BD4D").s().p("EgjzACIIAAkPMBHnAAAIAAEPg");
	this.shape_334.setTransform(-98.3,0);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#00BD4D").s().p("Egj6ACIIAAkPMBH1AAAIAAEPg");
	this.shape_335.setTransform(-97.6,0);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#00BD4C").s().p("EgkAACIIAAkPMBIBAAAIAAEPg");
	this.shape_336.setTransform(-97,0);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#00BD4C").s().p("EgkHACIIAAkPMBIPAAAIAAEPg");
	this.shape_337.setTransform(-96.3,0);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#00BD4B").s().p("EgkOACIIAAkPMBIdAAAIAAEPg");
	this.shape_338.setTransform(-95.6,0);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#00BD4B").s().p("EgkUACIIAAkPMBIpAAAIAAEPg");
	this.shape_339.setTransform(-95,0);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#00BD4A").s().p("EgkbACIIAAkPMBI3AAAIAAEPg");
	this.shape_340.setTransform(-94.3,0);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#00BD49").s().p("EgkiACIIAAkPMBJFAAAIAAEPg");
	this.shape_341.setTransform(-93.6,0);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#00BD49").s().p("EgkpACIIAAkPMBJSAAAIAAEPg");
	this.shape_342.setTransform(-92.9,0);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#00BE48").s().p("EgkvACIIAAkPMBJfAAAIAAEPg");
	this.shape_343.setTransform(-92.3,0);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#00BE48").s().p("Egk2ACIIAAkPMBJtAAAIAAEPg");
	this.shape_344.setTransform(-91.6,0);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#00BE47").s().p("Egk9ACIIAAkPMBJ7AAAIAAEPg");
	this.shape_345.setTransform(-90.9,0);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#00BE47").s().p("EglDACIIAAkPMBKHAAAIAAEPg");
	this.shape_346.setTransform(-90.3,0);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#00BE46").s().p("EglKACIIAAkPMBKVAAAIAAEPg");
	this.shape_347.setTransform(-89.6,0);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#00BE46").s().p("EglRACIIAAkPMBKjAAAIAAEPg");
	this.shape_348.setTransform(-88.9,0);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#00BE45").s().p("EglYACIIAAkPMBKxAAAIAAEPg");
	this.shape_349.setTransform(-88.2,0);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#00BE45").s().p("EgleACIIAAkPMBK9AAAIAAEPg");
	this.shape_350.setTransform(-87.6,0);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#00BE44").s().p("EgllACIIAAkPMBLLAAAIAAEPg");
	this.shape_351.setTransform(-86.9,0);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#00BE44").s().p("EglsACIIAAkPMBLYAAAIAAEPg");
	this.shape_352.setTransform(-86.2,0);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#00BF43").s().p("EglyACIIAAkPMBLlAAAIAAEPg");
	this.shape_353.setTransform(-85.6,0);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#00BF43").s().p("Egl5ACIIAAkPMBLzAAAIAAEPg");
	this.shape_354.setTransform(-84.9,0);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#00BF42").s().p("EgmAACIIAAkPMBMBAAAIAAEPg");
	this.shape_355.setTransform(-84.2,0);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#00BF41").s().p("EgmHACIIAAkPMBMOAAAIAAEPg");
	this.shape_356.setTransform(-83.5,0);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#00BF41").s().p("EgmNACIIAAkPMBMbAAAIAAEPg");
	this.shape_357.setTransform(-82.9,0);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#00BF40").s().p("EgmUACIIAAkPMBMpAAAIAAEPg");
	this.shape_358.setTransform(-82.2,0);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#00BF40").s().p("EgmbACIIAAkPMBM3AAAIAAEPg");
	this.shape_359.setTransform(-81.5,0);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#00BF3F").s().p("EgmhACIIAAkPMBNDAAAIAAEPg");
	this.shape_360.setTransform(-80.9,0);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#00BF3F").s().p("EgmoACIIAAkPMBNRAAAIAAEPg");
	this.shape_361.setTransform(-80.2,0);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#00C03E").s().p("EgmvACIIAAkPMBNfAAAIAAEPg");
	this.shape_362.setTransform(-79.5,0);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#00C03E").s().p("Egm2ACIIAAkPMBNtAAAIAAEPg");
	this.shape_363.setTransform(-78.8,0);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#00C03D").s().p("Egm8ACIIAAkPMBN5AAAIAAEPg");
	this.shape_364.setTransform(-78.2,0);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#00C03D").s().p("EgnDACIIAAkPMBOHAAAIAAEPg");
	this.shape_365.setTransform(-77.5,0);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#00C03C").s().p("EgnKACIIAAkPMBOUAAAIAAEPg");
	this.shape_366.setTransform(-76.8,0);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#00C03C").s().p("EgnQACIIAAkPMBOhAAAIAAEPg");
	this.shape_367.setTransform(-76.2,0);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#00C03B").s().p("EgnXACIIAAkPMBOvAAAIAAEPg");
	this.shape_368.setTransform(-75.5,0);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#00C03B").s().p("EgneACIIAAkPMBO9AAAIAAEPg");
	this.shape_369.setTransform(-74.8,0);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#00C03A").s().p("EgnlACIIAAkPMBPKAAAIAAEPg");
	this.shape_370.setTransform(-74.1,0);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#00C139").s().p("EgnrACIIAAkPMBPXAAAIAAEPg");
	this.shape_371.setTransform(-73.5,0);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#00C139").s().p("EgnyACIIAAkPMBPlAAAIAAEPg");
	this.shape_372.setTransform(-72.8,0);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#00C138").s().p("Egn5ACIIAAkPMBPzAAAIAAEPg");
	this.shape_373.setTransform(-72.1,0);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#00C138").s().p("Egn/ACIIAAkPMBP/AAAIAAEPg");
	this.shape_374.setTransform(-71.5,0);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#00C137").s().p("EgoGACIIAAkPMBQNAAAIAAEPg");
	this.shape_375.setTransform(-70.8,0);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#00C137").s().p("EgoNACIIAAkPMBQbAAAIAAEPg");
	this.shape_376.setTransform(-70.1,0);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#00C136").s().p("EgoUACIIAAkPMBQpAAAIAAEPg");
	this.shape_377.setTransform(-69.4,0);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#00C136").s().p("EgoaACIIAAkPMBQ1AAAIAAEPg");
	this.shape_378.setTransform(-68.8,0);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#00C135").s().p("EgohACIIAAkPMBRDAAAIAAEPg");
	this.shape_379.setTransform(-68.1,0);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#00C135").s().p("EgooACIIAAkPMBRQAAAIAAEPg");
	this.shape_380.setTransform(-67.4,0);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#00C234").s().p("EgouACIIAAkPMBRdAAAIAAEPg");
	this.shape_381.setTransform(-66.8,0);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#00C234").s().p("Ego1ACIIAAkPMBRrAAAIAAEPg");
	this.shape_382.setTransform(-66.1,0);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#00C233").s().p("Ego8ACIIAAkPMBR5AAAIAAEPg");
	this.shape_383.setTransform(-65.4,0);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#00C233").s().p("EgpCACIIAAkPMBSFAAAIAAEPg");
	this.shape_384.setTransform(-64.8,0);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#00C232").s().p("EgpJACIIAAkPMBSTAAAIAAEPg");
	this.shape_385.setTransform(-64.1,0);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#00C232").s().p("EgpQACIIAAkPMBShAAAIAAEPg");
	this.shape_386.setTransform(-63.4,0);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#00C231").s().p("EgpXACIIAAkPMBSuAAAIAAEPg");
	this.shape_387.setTransform(-62.7,0);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#00C230").s().p("EgpdACIIAAkPMBS7AAAIAAEPg");
	this.shape_388.setTransform(-62.1,0);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#00C230").s().p("EgpkACIIAAkPMBTJAAAIAAEPg");
	this.shape_389.setTransform(-61.4,0);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#00C32F").s().p("EgprACIIAAkPMBTXAAAIAAEPg");
	this.shape_390.setTransform(-60.7,0);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#00C32F").s().p("EgpxACIIAAkPMBTjAAAIAAEPg");
	this.shape_391.setTransform(-60.1,0);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#00C32E").s().p("Egp4ACIIAAkPMBTxAAAIAAEPg");
	this.shape_392.setTransform(-59.4,0);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#00C32E").s().p("Egp/ACIIAAkPMBT/AAAIAAEPg");
	this.shape_393.setTransform(-58.7,0);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#00C32D").s().p("EgqGACIIAAkPMBUNAAAIAAEPg");
	this.shape_394.setTransform(-58,0);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#00C32D").s().p("EgqMACIIAAkPMBUZAAAIAAEPg");
	this.shape_395.setTransform(-57.4,0);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#00C32C").s().p("EgqTACIIAAkPMBUnAAAIAAEPg");
	this.shape_396.setTransform(-56.7,0);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#00C32C").s().p("EgqaACIIAAkPMBU1AAAIAAEPg");
	this.shape_397.setTransform(-56,0);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#00C32B").s().p("EgqgACIIAAkPMBVBAAAIAAEPg");
	this.shape_398.setTransform(-55.4,0);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#00C32B").s().p("EgqnACIIAAkPMBVPAAAIAAEPg");
	this.shape_399.setTransform(-54.7,0);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#00C42A").s().p("EgquACIIAAkPMBVdAAAIAAEPg");
	this.shape_400.setTransform(-54,0);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#00C42A").s().p("Egq1ACIIAAkPMBVqAAAIAAEPg");
	this.shape_401.setTransform(-53.3,0);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#00C429").s().p("Egq7ACIIAAkPMBV3AAAIAAEPg");
	this.shape_402.setTransform(-52.7,0);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#00C428").s().p("EgrCACIIAAkPMBWFAAAIAAEPg");
	this.shape_403.setTransform(-52,0);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#00C428").s().p("EgrJACIIAAkPMBWTAAAIAAEPg");
	this.shape_404.setTransform(-51.3,0);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#00C427").s().p("EgrPACIIAAkPMBWfAAAIAAEPg");
	this.shape_405.setTransform(-50.7,0);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#00C427").s().p("EgrWACIIAAkPMBWtAAAIAAEPg");
	this.shape_406.setTransform(-50,0);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#00C426").s().p("EgrdACIIAAkPMBW7AAAIAAEPg");
	this.shape_407.setTransform(-49.3,0);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#00C426").s().p("EgrkACIIAAkPMBXJAAAIAAEPg");
	this.shape_408.setTransform(-48.6,0);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#00C525").s().p("EgrqACIIAAkPMBXVAAAIAAEPg");
	this.shape_409.setTransform(-48,0);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#00C525").s().p("EgrxACIIAAkPMBXjAAAIAAEPg");
	this.shape_410.setTransform(-47.3,0);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#00C524").s().p("Egr4ACIIAAkPMBXwAAAIAAEPg");
	this.shape_411.setTransform(-46.6,0);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#00C524").s().p("Egr+ACIIAAkPMBX9AAAIAAEPg");
	this.shape_412.setTransform(-46,0);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#00C523").s().p("EgsFACIIAAkPMBYLAAAIAAEPg");
	this.shape_413.setTransform(-45.3,0);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#00C523").s().p("EgsMACIIAAkPMBYZAAAIAAEPg");
	this.shape_414.setTransform(-44.6,0);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#00C522").s().p("EgsTACIIAAkPMBYmAAAIAAEPg");
	this.shape_415.setTransform(-43.9,0);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#00C522").s().p("EgsZACIIAAkPMBYzAAAIAAEPg");
	this.shape_416.setTransform(-43.3,0);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#00C521").s().p("EgsgACIIAAkPMBZBAAAIAAEPg");
	this.shape_417.setTransform(-42.6,0);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#00C620").s().p("EgsnACIIAAkPMBZPAAAIAAEPg");
	this.shape_418.setTransform(-41.9,0);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#00C620").s().p("EgstACIIAAkPMBZbAAAIAAEPg");
	this.shape_419.setTransform(-41.3,0);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#00C61F").s().p("Egs0ACIIAAkPMBZpAAAIAAEPg");
	this.shape_420.setTransform(-40.6,0);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#00C61F").s().p("Egs7ACIIAAkPMBZ3AAAIAAEPg");
	this.shape_421.setTransform(-39.9,0);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#00C61E").s().p("EgtCACIIAAkPMBaFAAAIAAEPg");
	this.shape_422.setTransform(-39.2,0);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#00C61E").s().p("EgtIACIIAAkPMBaRAAAIAAEPg");
	this.shape_423.setTransform(-38.6,0);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#00C61D").s().p("EgtPACIIAAkPMBafAAAIAAEPg");
	this.shape_424.setTransform(-37.9,0);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#00C61D").s().p("EgtWACIIAAkPMBasAAAIAAEPg");
	this.shape_425.setTransform(-37.2,0);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#00C61C").s().p("EgtcACIIAAkPMBa5AAAIAAEPg");
	this.shape_426.setTransform(-36.6,0);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#00C61C").s().p("EgtjACIIAAkPMBbHAAAIAAEPg");
	this.shape_427.setTransform(-35.9,0);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#00C71B").s().p("EgtqACIIAAkPMBbVAAAIAAEPg");
	this.shape_428.setTransform(-35.2,0);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#00C71B").s().p("EgtxACIIAAkPMBbiAAAIAAEPg");
	this.shape_429.setTransform(-34.5,0);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#00C71A").s().p("Egt3ACIIAAkPMBbvAAAIAAEPg");
	this.shape_430.setTransform(-33.9,0);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#00C71A").s().p("Egt+ACIIAAkPMBb9AAAIAAEPg");
	this.shape_431.setTransform(-33.2,0);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#00C719").s().p("EguFACIIAAkPMBcLAAAIAAEPg");
	this.shape_432.setTransform(-32.5,0);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#00C718").s().p("EguLACIIAAkPMBcXAAAIAAEPg");
	this.shape_433.setTransform(-31.9,0);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#00C718").s().p("EguSACIIAAkPMBclAAAIAAEPg");
	this.shape_434.setTransform(-31.2,0);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#00C717").s().p("EguZACIIAAkPMBczAAAIAAEPg");
	this.shape_435.setTransform(-30.5,0);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#00C717").s().p("EgugACIIAAkPMBdBAAAIAAEPg");
	this.shape_436.setTransform(-29.8,0);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#00C816").s().p("EgumACIIAAkPMBdNAAAIAAEPg");
	this.shape_437.setTransform(-29.2,0);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#00C816").s().p("EgutACIIAAkPMBdbAAAIAAEPg");
	this.shape_438.setTransform(-28.5,0);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#00C815").s().p("Egu0ACIIAAkPMBdoAAAIAAEPg");
	this.shape_439.setTransform(-27.8,0);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#00C815").s().p("Egu6ACIIAAkPMBd1AAAIAAEPg");
	this.shape_440.setTransform(-27.2,0);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#00C814").s().p("EgvBACIIAAkPMBeDAAAIAAEPg");
	this.shape_441.setTransform(-26.5,0);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#00C814").s().p("EgvIACIIAAkPMBeRAAAIAAEPg");
	this.shape_442.setTransform(-25.8,0);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#00C813").s().p("EgvPACIIAAkPMBeeAAAIAAEPg");
	this.shape_443.setTransform(-25.1,0);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#00C813").s().p("EgvVACIIAAkPMBerAAAIAAEPg");
	this.shape_444.setTransform(-24.5,0);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#00C812").s().p("EgvcACIIAAkPMBe5AAAIAAEPg");
	this.shape_445.setTransform(-23.8,0);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#00C812").s().p("EgvjACIIAAkPMBfGAAAIAAEPg");
	this.shape_446.setTransform(-23.1,0);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#00C911").s().p("EgvpACIIAAkPMBfTAAAIAAEPg");
	this.shape_447.setTransform(-22.5,0);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#00C911").s().p("EgvwACIIAAkPMBfhAAAIAAEPg");
	this.shape_448.setTransform(-21.8,0);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#00C910").s().p("Egv3ACIIAAkPMBfvAAAIAAEPg");
	this.shape_449.setTransform(-21.1,0);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#00C90F").s().p("Egv9ACIIAAkPMBf7AAAIAAEPg");
	this.shape_450.setTransform(-20.5,0);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#00C90F").s().p("EgwEACIIAAkPMBgJAAAIAAEPg");
	this.shape_451.setTransform(-19.8,0);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#00C90E").s().p("EgwLACIIAAkPMBgXAAAIAAEPg");
	this.shape_452.setTransform(-19.1,0);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#00C90E").s().p("EgwSACIIAAkPMBglAAAIAAEPg");
	this.shape_453.setTransform(-18.4,0);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#00C90D").s().p("EgwYACIIAAkPMBgxAAAIAAEPg");
	this.shape_454.setTransform(-17.8,0);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#00C90D").s().p("EgwfACIIAAkPMBg/AAAIAAEPg");
	this.shape_455.setTransform(-17.1,0);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#00CA0C").s().p("EgwmACIIAAkPMBhMAAAIAAEPg");
	this.shape_456.setTransform(-16.4,0);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#00CA0C").s().p("EgwsACIIAAkPMBhZAAAIAAEPg");
	this.shape_457.setTransform(-15.8,0);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#00CA0B").s().p("EgwzACIIAAkPMBhnAAAIAAEPg");
	this.shape_458.setTransform(-15.1,0);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#00CA0B").s().p("Egw6ACIIAAkPMBh1AAAIAAEPg");
	this.shape_459.setTransform(-14.4,0);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#00CA0A").s().p("EgxBACIIAAkPMBiCAAAIAAEPg");
	this.shape_460.setTransform(-13.7,0);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#00CA0A").s().p("EgxHACIIAAkPMBiPAAAIAAEPg");
	this.shape_461.setTransform(-13.1,0);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#00CA09").s().p("EgxOACIIAAkPMBidAAAIAAEPg");
	this.shape_462.setTransform(-12.4,0);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#00CA09").s().p("EgxVACIIAAkPMBirAAAIAAEPg");
	this.shape_463.setTransform(-11.7,0);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#00CA08").s().p("EgxbACIIAAkPMBi3AAAIAAEPg");
	this.shape_464.setTransform(-11.1,0);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#00CB07").s().p("EgxiACIIAAkPMBjFAAAIAAEPg");
	this.shape_465.setTransform(-10.4,0);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#00CB07").s().p("EgxpACIIAAkPMBjTAAAIAAEPg");
	this.shape_466.setTransform(-9.7,0);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#00CB06").s().p("EgxwACIIAAkPMBjhAAAIAAEPg");
	this.shape_467.setTransform(-9,0);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#00CB06").s().p("Egx2ACIIAAkPMBjtAAAIAAEPg");
	this.shape_468.setTransform(-8.4,0);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#00CB05").s().p("Egx9ACIIAAkPMBj7AAAIAAEPg");
	this.shape_469.setTransform(-7.7,0);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#00CB05").s().p("EgyEACIIAAkPMBkIAAAIAAEPg");
	this.shape_470.setTransform(-7,0);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#00CB04").s().p("EgyKACIIAAkPMBkVAAAIAAEPg");
	this.shape_471.setTransform(-6.4,0);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#00CB04").s().p("EgyRACIIAAkPMBkjAAAIAAEPg");
	this.shape_472.setTransform(-5.7,0);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#00CB03").s().p("EgyYACIIAAkPMBkxAAAIAAEPg");
	this.shape_473.setTransform(-5,0);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#00CB03").s().p("EgyfACIIAAkPMBk+AAAIAAEPg");
	this.shape_474.setTransform(-4.3,0);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#00CC02").s().p("EgylACIIAAkPMBlLAAAIAAEPg");
	this.shape_475.setTransform(-3.7,0);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#00CC02").s().p("EgysACIIAAkPMBlZAAAIAAEPg");
	this.shape_476.setTransform(-3,0);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#00CC01").s().p("EgyzACIIAAkPMBlnAAAIAAEPg");
	this.shape_477.setTransform(-2.3,0);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#00CC01").s().p("Egy5ACIIAAkPMBlzAAAIAAEPg");
	this.shape_478.setTransform(-1.7,0);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#00CC00").s().p("EgzAACIIAAkPMBmBAAAIAAEPg");
	this.shape_479.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mcLoader6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_345 = function() {
		playSound("complete");
	}
	this.frame_360 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(345).call(this.frame_345).wait(15).call(this.frame_360).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AgxCIIAAkPIBjAAIAAEPg");
	this.shape.setTransform(-322.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FE").s().p("Ag6CIIAAkPIB1AAIAAEPg");
	this.shape_1.setTransform(-321.6,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FE").s().p("AhDCIIAAkPICHAAIAAEPg");
	this.shape_2.setTransform(-320.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FD").s().p("AhMCIIAAkPICZAAIAAEPg");
	this.shape_3.setTransform(-319.8,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009AFC").s().p("AhVCIIAAkPICrAAIAAEPg");
	this.shape_4.setTransform(-318.9,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009AFB").s().p("AheCIIAAkPIC9AAIAAEPg");
	this.shape_5.setTransform(-318,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009AFB").s().p("AhnCIIAAkPIDPAAIAAEPg");
	this.shape_6.setTransform(-317.1,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009AFA").s().p("AhwCIIAAkPIDhAAIAAEPg");
	this.shape_7.setTransform(-316.2,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009AF9").s().p("Ah5CIIAAkPIDyAAIAAEPg");
	this.shape_8.setTransform(-315.3,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009AF9").s().p("AiCCIIAAkPIEEAAIAAEPg");
	this.shape_9.setTransform(-314.4,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009AF8").s().p("AiLCIIAAkPIEWAAIAAEPg");
	this.shape_10.setTransform(-313.5,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009BF7").s().p("AiUCIIAAkPIEoAAIAAEPg");
	this.shape_11.setTransform(-312.6,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009BF6").s().p("AidCIIAAkPIE6AAIAAEPg");
	this.shape_12.setTransform(-311.7,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009BF6").s().p("AimCIIAAkPIFMAAIAAEPg");
	this.shape_13.setTransform(-310.8,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009BF5").s().p("AivCIIAAkPIFeAAIAAEPg");
	this.shape_14.setTransform(-309.9,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009BF4").s().p("Ai3CIIAAkPIFvAAIAAEPg");
	this.shape_15.setTransform(-309.1,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009BF4").s().p("AjACIIAAkPIGBAAIAAEPg");
	this.shape_16.setTransform(-308.2,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009BF3").s().p("AjJCIIAAkPIGTAAIAAEPg");
	this.shape_17.setTransform(-307.3,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#009CF2").s().p("AjSCIIAAkPIGlAAIAAEPg");
	this.shape_18.setTransform(-306.4,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009CF2").s().p("AjbCIIAAkPIG3AAIAAEPg");
	this.shape_19.setTransform(-305.5,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009CF1").s().p("AjkCIIAAkPIHJAAIAAEPg");
	this.shape_20.setTransform(-304.6,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009CF0").s().p("AjtCIIAAkPIHbAAIAAEPg");
	this.shape_21.setTransform(-303.7,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009CEF").s().p("Aj2CIIAAkPIHtAAIAAEPg");
	this.shape_22.setTransform(-302.8,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009CEF").s().p("Aj/CIIAAkPIH/AAIAAEPg");
	this.shape_23.setTransform(-301.9,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#009CEE").s().p("AkICIIAAkPIIRAAIAAEPg");
	this.shape_24.setTransform(-301,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#009DED").s().p("AkRCIIAAkPIIjAAIAAEPg");
	this.shape_25.setTransform(-300.1,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#009DED").s().p("AkaCIIAAkPII1AAIAAEPg");
	this.shape_26.setTransform(-299.2,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#009DEC").s().p("AkjCIIAAkPIJHAAIAAEPg");
	this.shape_27.setTransform(-298.3,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#009DEB").s().p("AksCIIAAkPIJZAAIAAEPg");
	this.shape_28.setTransform(-297.4,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#009DEA").s().p("Ak1CIIAAkPIJrAAIAAEPg");
	this.shape_29.setTransform(-296.5,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#009DEA").s().p("Ak+CIIAAkPIJ9AAIAAEPg");
	this.shape_30.setTransform(-295.6,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#009DE9").s().p("AlHCIIAAkPIKPAAIAAEPg");
	this.shape_31.setTransform(-294.7,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#009EE8").s().p("AlQCIIAAkPIKhAAIAAEPg");
	this.shape_32.setTransform(-293.8,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#009EE8").s().p("AlZCIIAAkPIKzAAIAAEPg");
	this.shape_33.setTransform(-292.9,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#009EE7").s().p("AliCIIAAkPILFAAIAAEPg");
	this.shape_34.setTransform(-292,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#009EE6").s().p("AlrCIIAAkPILXAAIAAEPg");
	this.shape_35.setTransform(-291.1,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#009EE5").s().p("Al0CIIAAkPILpAAIAAEPg");
	this.shape_36.setTransform(-290.2,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#009EE5").s().p("Al8CIIAAkPIL5AAIAAEPg");
	this.shape_37.setTransform(-289.4,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#009EE4").s().p("AmFCIIAAkPIMLAAIAAEPg");
	this.shape_38.setTransform(-288.5,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#009FE3").s().p("AmOCIIAAkPIMdAAIAAEPg");
	this.shape_39.setTransform(-287.6,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#009FE3").s().p("AmXCIIAAkPIMvAAIAAEPg");
	this.shape_40.setTransform(-286.7,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#009FE2").s().p("AmgCIIAAkPINBAAIAAEPg");
	this.shape_41.setTransform(-285.8,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#009FE1").s().p("AmpCIIAAkPINTAAIAAEPg");
	this.shape_42.setTransform(-284.9,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#009FE0").s().p("AmyCIIAAkPINlAAIAAEPg");
	this.shape_43.setTransform(-284,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#009FE0").s().p("Am7CIIAAkPIN3AAIAAEPg");
	this.shape_44.setTransform(-283.1,0);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#009FDF").s().p("AnECIIAAkPIOJAAIAAEPg");
	this.shape_45.setTransform(-282.2,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00A0DE").s().p("AnNCIIAAkPIObAAIAAEPg");
	this.shape_46.setTransform(-281.3,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00A0DE").s().p("AnWCIIAAkPIOtAAIAAEPg");
	this.shape_47.setTransform(-280.4,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00A0DD").s().p("AnfCIIAAkPIO/AAIAAEPg");
	this.shape_48.setTransform(-279.5,0);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00A0DC").s().p("AnoCIIAAkPIPRAAIAAEPg");
	this.shape_49.setTransform(-278.6,0);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00A0DB").s().p("AnxCIIAAkPIPjAAIAAEPg");
	this.shape_50.setTransform(-277.7,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00A0DB").s().p("An6CIIAAkPIP1AAIAAEPg");
	this.shape_51.setTransform(-276.8,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00A0DA").s().p("AoDCIIAAkPIQHAAIAAEPg");
	this.shape_52.setTransform(-275.9,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00A1D9").s().p("AoMCIIAAkPIQZAAIAAEPg");
	this.shape_53.setTransform(-275,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00A1D9").s().p("AoVCIIAAkPIQrAAIAAEPg");
	this.shape_54.setTransform(-274.1,0);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00A1D8").s().p("AoeCIIAAkPIQ9AAIAAEPg");
	this.shape_55.setTransform(-273.2,0);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00A1D7").s().p("AonCIIAAkPIRPAAIAAEPg");
	this.shape_56.setTransform(-272.3,0);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00A1D7").s().p("AowCIIAAkPIRhAAIAAEPg");
	this.shape_57.setTransform(-271.4,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00A1D6").s().p("Ao5CIIAAkPIRzAAIAAEPg");
	this.shape_58.setTransform(-270.5,0);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00A1D5").s().p("ApCCIIAAkPISFAAIAAEPg");
	this.shape_59.setTransform(-269.6,0);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00A2D4").s().p("ApKCIIAAkPISVAAIAAEPg");
	this.shape_60.setTransform(-268.8,0);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00A2D4").s().p("ApTCIIAAkPISnAAIAAEPg");
	this.shape_61.setTransform(-267.9,0);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00A2D3").s().p("ApcCIIAAkPIS5AAIAAEPg");
	this.shape_62.setTransform(-267,0);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00A2D2").s().p("AplCIIAAkPITLAAIAAEPg");
	this.shape_63.setTransform(-266.1,0);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00A2D2").s().p("ApuCIIAAkPITdAAIAAEPg");
	this.shape_64.setTransform(-265.2,0);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00A2D1").s().p("Ap3CIIAAkPITvAAIAAEPg");
	this.shape_65.setTransform(-264.3,0);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00A2D0").s().p("AqACIIAAkPIUBAAIAAEPg");
	this.shape_66.setTransform(-263.4,0);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00A3CF").s().p("AqJCIIAAkPIUTAAIAAEPg");
	this.shape_67.setTransform(-262.5,0);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00A3CF").s().p("AqSCIIAAkPIUlAAIAAEPg");
	this.shape_68.setTransform(-261.6,0);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00A3CE").s().p("AqbCIIAAkPIU3AAIAAEPg");
	this.shape_69.setTransform(-260.7,0);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00A3CD").s().p("AqkCIIAAkPIVJAAIAAEPg");
	this.shape_70.setTransform(-259.8,0);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00A3CD").s().p("AqtCIIAAkPIVbAAIAAEPg");
	this.shape_71.setTransform(-258.9,0);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00A3CC").s().p("Aq2CIIAAkPIVtAAIAAEPg");
	this.shape_72.setTransform(-258,0);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00A3CB").s().p("Aq/CIIAAkPIV/AAIAAEPg");
	this.shape_73.setTransform(-257.1,0);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00A4CA").s().p("ArICIIAAkPIWRAAIAAEPg");
	this.shape_74.setTransform(-256.2,0);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#00A4CA").s().p("ArRCIIAAkPIWjAAIAAEPg");
	this.shape_75.setTransform(-255.3,0);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#00A4C9").s().p("AraCIIAAkPIW0AAIAAEPg");
	this.shape_76.setTransform(-254.4,0);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#00A4C8").s().p("ArjCIIAAkPIXGAAIAAEPg");
	this.shape_77.setTransform(-253.5,0);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#00A4C8").s().p("ArsCIIAAkPIXYAAIAAEPg");
	this.shape_78.setTransform(-252.6,0);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00A4C7").s().p("Ar1CIIAAkPIXqAAIAAEPg");
	this.shape_79.setTransform(-251.7,0);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#00A4C6").s().p("Ar+CIIAAkPIX8AAIAAEPg");
	this.shape_80.setTransform(-250.8,0);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00A5C5").s().p("AsHCIIAAkPIYOAAIAAEPg");
	this.shape_81.setTransform(-249.9,0);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00A5C5").s().p("AsPCIIAAkPIYfAAIAAEPg");
	this.shape_82.setTransform(-249.1,0);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00A5C4").s().p("AsYCIIAAkPIYxAAIAAEPg");
	this.shape_83.setTransform(-248.2,0);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#00A5C3").s().p("AshCIIAAkPIZDAAIAAEPg");
	this.shape_84.setTransform(-247.3,0);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00A5C3").s().p("AsqCIIAAkPIZVAAIAAEPg");
	this.shape_85.setTransform(-246.4,0);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00A5C2").s().p("AszCIIAAkPIZnAAIAAEPg");
	this.shape_86.setTransform(-245.5,0);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#00A5C1").s().p("As8CIIAAkPIZ5AAIAAEPg");
	this.shape_87.setTransform(-244.6,0);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00A6C0").s().p("AtFCIIAAkPIaLAAIAAEPg");
	this.shape_88.setTransform(-243.7,0);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00A6C0").s().p("AtOCIIAAkPIadAAIAAEPg");
	this.shape_89.setTransform(-242.8,0);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00A6BF").s().p("AtXCIIAAkPIavAAIAAEPg");
	this.shape_90.setTransform(-241.9,0);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00A6BE").s().p("AtgCIIAAkPIbBAAIAAEPg");
	this.shape_91.setTransform(-241,0);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#00A6BE").s().p("AtpCIIAAkPIbTAAIAAEPg");
	this.shape_92.setTransform(-240.1,0);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#00A6BD").s().p("AtyCIIAAkPIblAAIAAEPg");
	this.shape_93.setTransform(-239.2,0);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#00A6BC").s().p("At7CIIAAkPIb3AAIAAEPg");
	this.shape_94.setTransform(-238.3,0);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#00A6BC").s().p("AuECIIAAkPIcJAAIAAEPg");
	this.shape_95.setTransform(-237.4,0);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#00A7BB").s().p("AuNCIIAAkPIcbAAIAAEPg");
	this.shape_96.setTransform(-236.5,0);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#00A7BA").s().p("AuWCIIAAkPIctAAIAAEPg");
	this.shape_97.setTransform(-235.6,0);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#00A7B9").s().p("AufCIIAAkPIc/AAIAAEPg");
	this.shape_98.setTransform(-234.7,0);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00A7B9").s().p("AuoCIIAAkPIdQAAIAAEPg");
	this.shape_99.setTransform(-233.8,0);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#00A7B8").s().p("AuxCIIAAkPIdiAAIAAEPg");
	this.shape_100.setTransform(-232.9,0);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#00A7B7").s().p("Au6CIIAAkPId0AAIAAEPg");
	this.shape_101.setTransform(-232,0);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#00A7B7").s().p("AvDCIIAAkPIeGAAIAAEPg");
	this.shape_102.setTransform(-231.1,0);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#00A8B6").s().p("AvMCIIAAkPIeYAAIAAEPg");
	this.shape_103.setTransform(-230.2,0);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#00A8B5").s().p("AvUCIIAAkPIepAAIAAEPg");
	this.shape_104.setTransform(-229.4,0);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#00A8B4").s().p("AvdCIIAAkPIe7AAIAAEPg");
	this.shape_105.setTransform(-228.5,0);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#00A8B4").s().p("AvmCIIAAkPIfNAAIAAEPg");
	this.shape_106.setTransform(-227.6,0);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#00A8B3").s().p("AvvCIIAAkPIffAAIAAEPg");
	this.shape_107.setTransform(-226.7,0);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#00A8B2").s().p("Av4CIIAAkPIfxAAIAAEPg");
	this.shape_108.setTransform(-225.8,0);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#00A8B2").s().p("AwBCIIAAkPMAgDAAAIAAEPg");
	this.shape_109.setTransform(-224.9,0);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#00A9B1").s().p("AwKCIIAAkPMAgVAAAIAAEPg");
	this.shape_110.setTransform(-224,0);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#00A9B0").s().p("AwTCIIAAkPMAgnAAAIAAEPg");
	this.shape_111.setTransform(-223.1,0);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#00A9AF").s().p("AwcCIIAAkPMAg5AAAIAAEPg");
	this.shape_112.setTransform(-222.2,0);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#00A9AF").s().p("AwlCIIAAkPMAhLAAAIAAEPg");
	this.shape_113.setTransform(-221.3,0);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#00A9AE").s().p("AwuCIIAAkPMAhdAAAIAAEPg");
	this.shape_114.setTransform(-220.4,0);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#00A9AD").s().p("Aw3CIIAAkPMAhvAAAIAAEPg");
	this.shape_115.setTransform(-219.5,0);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#00A9AD").s().p("AxACIIAAkPMAiBAAAIAAEPg");
	this.shape_116.setTransform(-218.6,0);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#00AAAC").s().p("AxJCIIAAkPMAiTAAAIAAEPg");
	this.shape_117.setTransform(-217.7,0);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#00AAAB").s().p("AxSCIIAAkPMAilAAAIAAEPg");
	this.shape_118.setTransform(-216.8,0);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00AAAA").s().p("AxbCIIAAkPMAi3AAAIAAEPg");
	this.shape_119.setTransform(-215.9,0);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00AAAA").s().p("AxkCIIAAkPMAjJAAAIAAEPg");
	this.shape_120.setTransform(-215,0);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00AAA9").s().p("AxtCIIAAkPMAjaAAAIAAEPg");
	this.shape_121.setTransform(-214.1,0);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#00AAA8").s().p("Ax2CIIAAkPMAjsAAAIAAEPg");
	this.shape_122.setTransform(-213.2,0);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00AAA8").s().p("Ax/CIIAAkPMAj+AAAIAAEPg");
	this.shape_123.setTransform(-212.3,0);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00ABA7").s().p("AyICIIAAkPMAkQAAAIAAEPg");
	this.shape_124.setTransform(-211.4,0);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#00ABA6").s().p("AyRCIIAAkPMAkiAAAIAAEPg");
	this.shape_125.setTransform(-210.5,0);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#00ABA6").s().p("AyZCIIAAkPMAkzAAAIAAEPg");
	this.shape_126.setTransform(-209.7,0);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#00ABA5").s().p("AyiCIIAAkPMAlFAAAIAAEPg");
	this.shape_127.setTransform(-208.8,0);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#00ABA4").s().p("AyrCIIAAkPMAlXAAAIAAEPg");
	this.shape_128.setTransform(-207.9,0);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#00ABA3").s().p("Ay0CIIAAkPMAlpAAAIAAEPg");
	this.shape_129.setTransform(-207,0);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#00ABA3").s().p("Ay9CIIAAkPMAl7AAAIAAEPg");
	this.shape_130.setTransform(-206.1,0);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#00ACA2").s().p("AzGCIIAAkPMAmNAAAIAAEPg");
	this.shape_131.setTransform(-205.2,0);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#00ACA1").s().p("AzPCIIAAkPMAmfAAAIAAEPg");
	this.shape_132.setTransform(-204.3,0);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#00ACA1").s().p("AzYCIIAAkPMAmxAAAIAAEPg");
	this.shape_133.setTransform(-203.4,0);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#00ACA0").s().p("AzhCIIAAkPMAnDAAAIAAEPg");
	this.shape_134.setTransform(-202.5,0);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#00AC9F").s().p("AzqCIIAAkPMAnVAAAIAAEPg");
	this.shape_135.setTransform(-201.6,0);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#00AC9E").s().p("AzzCIIAAkPMAnnAAAIAAEPg");
	this.shape_136.setTransform(-200.7,0);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#00AC9E").s().p("Az8CIIAAkPMAn5AAAIAAEPg");
	this.shape_137.setTransform(-199.8,0);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#00AD9D").s().p("A0FCIIAAkPMAoLAAAIAAEPg");
	this.shape_138.setTransform(-198.9,0);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#00AD9C").s().p("A0OCIIAAkPMAodAAAIAAEPg");
	this.shape_139.setTransform(-198,0);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#00AD9C").s().p("A0XCIIAAkPMAovAAAIAAEPg");
	this.shape_140.setTransform(-197.1,0);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#00AD9B").s().p("A0gCIIAAkPMApBAAAIAAEPg");
	this.shape_141.setTransform(-196.2,0);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#00AD9A").s().p("A0pCIIAAkPMApTAAAIAAEPg");
	this.shape_142.setTransform(-195.3,0);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#00AD99").s().p("A0yCIIAAkPMAplAAAIAAEPg");
	this.shape_143.setTransform(-194.4,0);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#00AD99").s().p("A07CIIAAkPMAp3AAAIAAEPg");
	this.shape_144.setTransform(-193.5,0);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#00AE98").s().p("A1ECIIAAkPMAqJAAAIAAEPg");
	this.shape_145.setTransform(-192.6,0);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#00AE97").s().p("A1NCIIAAkPMAqbAAAIAAEPg");
	this.shape_146.setTransform(-191.7,0);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#00AE97").s().p("A1WCIIAAkPMAqtAAAIAAEPg");
	this.shape_147.setTransform(-190.8,0);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#00AE96").s().p("A1fCIIAAkPMAq/AAAIAAEPg");
	this.shape_148.setTransform(-189.9,0);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#00AE95").s().p("A1nCIIAAkPMArPAAAIAAEPg");
	this.shape_149.setTransform(-189.1,0);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#00AE94").s().p("A1wCIIAAkPMArhAAAIAAEPg");
	this.shape_150.setTransform(-188.2,0);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#00AE94").s().p("A15CIIAAkPMArzAAAIAAEPg");
	this.shape_151.setTransform(-187.3,0);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#00AF93").s().p("A2CCIIAAkPMAsFAAAIAAEPg");
	this.shape_152.setTransform(-186.4,0);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#00AF92").s().p("A2LCIIAAkPMAsXAAAIAAEPg");
	this.shape_153.setTransform(-185.5,0);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#00AF92").s().p("A2UCIIAAkPMAspAAAIAAEPg");
	this.shape_154.setTransform(-184.6,0);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#00AF91").s().p("A2dCIIAAkPMAs7AAAIAAEPg");
	this.shape_155.setTransform(-183.7,0);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#00AF90").s().p("A2mCIIAAkPMAtNAAAIAAEPg");
	this.shape_156.setTransform(-182.8,0);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#00AF8F").s().p("A2vCIIAAkPMAtfAAAIAAEPg");
	this.shape_157.setTransform(-181.9,0);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#00AF8F").s().p("A24CIIAAkPMAtxAAAIAAEPg");
	this.shape_158.setTransform(-181,0);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#00B08E").s().p("A3BCIIAAkPMAuDAAAIAAEPg");
	this.shape_159.setTransform(-180.1,0);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#00B08D").s().p("A3KCIIAAkPMAuVAAAIAAEPg");
	this.shape_160.setTransform(-179.2,0);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#00B08D").s().p("A3TCIIAAkPMAunAAAIAAEPg");
	this.shape_161.setTransform(-178.3,0);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#00B08C").s().p("A3cCIIAAkPMAu5AAAIAAEPg");
	this.shape_162.setTransform(-177.4,0);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#00B08B").s().p("A3lCIIAAkPMAvLAAAIAAEPg");
	this.shape_163.setTransform(-176.5,0);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#00B08B").s().p("A3uCIIAAkPMAvdAAAIAAEPg");
	this.shape_164.setTransform(-175.6,0);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#00B08A").s().p("A33CIIAAkPMAvvAAAIAAEPg");
	this.shape_165.setTransform(-174.7,0);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#00B189").s().p("A4ACIIAAkPMAwBAAAIAAEPg");
	this.shape_166.setTransform(-173.8,0);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#00B188").s().p("A4JCIIAAkPMAwTAAAIAAEPg");
	this.shape_167.setTransform(-172.9,0);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#00B188").s().p("A4SCIIAAkPMAwlAAAIAAEPg");
	this.shape_168.setTransform(-172,0);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#00B187").s().p("A4bCIIAAkPMAw3AAAIAAEPg");
	this.shape_169.setTransform(-171.1,0);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#00B186").s().p("A4kCIIAAkPMAxJAAAIAAEPg");
	this.shape_170.setTransform(-170.2,0);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#00B186").s().p("A4sCIIAAkPMAxZAAAIAAEPg");
	this.shape_171.setTransform(-169.4,0);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#00B185").s().p("A41CIIAAkPMAxrAAAIAAEPg");
	this.shape_172.setTransform(-168.5,0);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#00B284").s().p("A4+CIIAAkPMAx9AAAIAAEPg");
	this.shape_173.setTransform(-167.6,0);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#00B283").s().p("A5HCIIAAkPMAyPAAAIAAEPg");
	this.shape_174.setTransform(-166.7,0);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#00B283").s().p("A5QCIIAAkPMAyhAAAIAAEPg");
	this.shape_175.setTransform(-165.8,0);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#00B282").s().p("A5ZCIIAAkPMAyzAAAIAAEPg");
	this.shape_176.setTransform(-164.9,0);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#00B281").s().p("A5iCIIAAkPMAzFAAAIAAEPg");
	this.shape_177.setTransform(-164,0);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#00B281").s().p("A5rCIIAAkPMAzXAAAIAAEPg");
	this.shape_178.setTransform(-163.1,0);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#00B280").s().p("A50CIIAAkPMAzpAAAIAAEPg");
	this.shape_179.setTransform(-162.2,0);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#00B37F").s().p("A59CIIAAkPMAz7AAAIAAEPg");
	this.shape_180.setTransform(-161.3,0);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#00B37E").s().p("A6GCIIAAkPMA0NAAAIAAEPg");
	this.shape_181.setTransform(-160.4,0);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#00B37E").s().p("A6PCIIAAkPMA0fAAAIAAEPg");
	this.shape_182.setTransform(-159.5,0);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#00B37D").s().p("A6YCIIAAkPMA0xAAAIAAEPg");
	this.shape_183.setTransform(-158.6,0);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#00B37C").s().p("A6hCIIAAkPMA1DAAAIAAEPg");
	this.shape_184.setTransform(-157.7,0);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#00B37C").s().p("A6qCIIAAkPMA1VAAAIAAEPg");
	this.shape_185.setTransform(-156.8,0);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#00B37B").s().p("A6zCIIAAkPMA1nAAAIAAEPg");
	this.shape_186.setTransform(-155.9,0);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#00B47A").s().p("A68CIIAAkPMA15AAAIAAEPg");
	this.shape_187.setTransform(-155,0);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#00B479").s().p("A7FCIIAAkPMA2LAAAIAAEPg");
	this.shape_188.setTransform(-154.1,0);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#00B479").s().p("A7OCIIAAkPMA2cAAAIAAEPg");
	this.shape_189.setTransform(-153.2,0);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#00B478").s().p("A7XCIIAAkPMA2uAAAIAAEPg");
	this.shape_190.setTransform(-152.3,0);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#00B477").s().p("A7gCIIAAkPMA3AAAAIAAEPg");
	this.shape_191.setTransform(-151.4,0);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#00B477").s().p("A7pCIIAAkPMA3SAAAIAAEPg");
	this.shape_192.setTransform(-150.5,0);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#00B476").s().p("A7yCIIAAkPMA3kAAAIAAEPg");
	this.shape_193.setTransform(-149.6,0);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#00B575").s().p("A76CIIAAkPMA31AAAIAAEPg");
	this.shape_194.setTransform(-148.8,0);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#00B574").s().p("A8DCIIAAkPMA4HAAAIAAEPg");
	this.shape_195.setTransform(-147.9,0);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#00B574").s().p("A8MCIIAAkPMA4ZAAAIAAEPg");
	this.shape_196.setTransform(-147,0);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#00B573").s().p("A8VCIIAAkPMA4rAAAIAAEPg");
	this.shape_197.setTransform(-146.1,0);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#00B572").s().p("A8eCIIAAkPMA49AAAIAAEPg");
	this.shape_198.setTransform(-145.2,0);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#00B572").s().p("A8nCIIAAkPMA5PAAAIAAEPg");
	this.shape_199.setTransform(-144.3,0);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#00B571").s().p("A8wCIIAAkPMA5hAAAIAAEPg");
	this.shape_200.setTransform(-143.4,0);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#00B670").s().p("A85CIIAAkPMA5zAAAIAAEPg");
	this.shape_201.setTransform(-142.5,0);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#00B670").s().p("A9CCIIAAkPMA6FAAAIAAEPg");
	this.shape_202.setTransform(-141.6,0);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#00B66F").s().p("A9LCIIAAkPMA6XAAAIAAEPg");
	this.shape_203.setTransform(-140.7,0);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#00B66E").s().p("A9UCIIAAkPMA6pAAAIAAEPg");
	this.shape_204.setTransform(-139.8,0);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#00B66D").s().p("A9dCIIAAkPMA67AAAIAAEPg");
	this.shape_205.setTransform(-138.9,0);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#00B66D").s().p("A9mCIIAAkPMA7NAAAIAAEPg");
	this.shape_206.setTransform(-138,0);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#00B66C").s().p("A9vCIIAAkPMA7fAAAIAAEPg");
	this.shape_207.setTransform(-137.1,0);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#00B76B").s().p("A94CIIAAkPMA7xAAAIAAEPg");
	this.shape_208.setTransform(-136.2,0);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#00B76B").s().p("A+BCIIAAkPMA8DAAAIAAEPg");
	this.shape_209.setTransform(-135.3,0);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#00B76A").s().p("A+KCIIAAkPMA8VAAAIAAEPg");
	this.shape_210.setTransform(-134.4,0);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#00B769").s().p("A+TCIIAAkPMA8mAAAIAAEPg");
	this.shape_211.setTransform(-133.5,0);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#00B768").s().p("A+cCIIAAkPMA84AAAIAAEPg");
	this.shape_212.setTransform(-132.6,0);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#00B768").s().p("A+lCIIAAkPMA9KAAAIAAEPg");
	this.shape_213.setTransform(-131.7,0);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#00B767").s().p("A+uCIIAAkPMA9cAAAIAAEPg");
	this.shape_214.setTransform(-130.8,0);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#00B866").s().p("A+3CIIAAkPMA9uAAAIAAEPg");
	this.shape_215.setTransform(-129.9,0);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#00B866").s().p("A+/CIIAAkPMA9/AAAIAAEPg");
	this.shape_216.setTransform(-129.1,0);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#00B865").s().p("A/ICIIAAkPMA+RAAAIAAEPg");
	this.shape_217.setTransform(-128.2,0);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#00B864").s().p("A/RCIIAAkPMA+jAAAIAAEPg");
	this.shape_218.setTransform(-127.3,0);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#00B863").s().p("A/aCIIAAkPMA+1AAAIAAEPg");
	this.shape_219.setTransform(-126.4,0);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#00B863").s().p("A/jCIIAAkPMA/HAAAIAAEPg");
	this.shape_220.setTransform(-125.5,0);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#00B862").s().p("A/sCIIAAkPMA/ZAAAIAAEPg");
	this.shape_221.setTransform(-124.6,0);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#00B961").s().p("A/1CIIAAkPMA/rAAAIAAEPg");
	this.shape_222.setTransform(-123.7,0);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#00B961").s().p("A/+CIIAAkPMA/9AAAIAAEPg");
	this.shape_223.setTransform(-122.8,0);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#00B960").s().p("EggHACIIAAkPMBAPAAAIAAEPg");
	this.shape_224.setTransform(-121.9,0);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#00B95F").s().p("EggQACIIAAkPMBAhAAAIAAEPg");
	this.shape_225.setTransform(-121,0);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#00B95E").s().p("EggZACIIAAkPMBAzAAAIAAEPg");
	this.shape_226.setTransform(-120.1,0);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#00B95E").s().p("EggiACIIAAkPMBBFAAAIAAEPg");
	this.shape_227.setTransform(-119.2,0);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#00B95D").s().p("EggrACIIAAkPMBBXAAAIAAEPg");
	this.shape_228.setTransform(-118.3,0);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#00BA5C").s().p("Egg0ACIIAAkPMBBpAAAIAAEPg");
	this.shape_229.setTransform(-117.4,0);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#00BA5C").s().p("Egg9ACIIAAkPMBB7AAAIAAEPg");
	this.shape_230.setTransform(-116.5,0);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#00BA5B").s().p("EghGACIIAAkPMBCNAAAIAAEPg");
	this.shape_231.setTransform(-115.6,0);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#00BA5A").s().p("EghPACIIAAkPMBCfAAAIAAEPg");
	this.shape_232.setTransform(-114.7,0);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#00BA59").s().p("EghYACIIAAkPMBCxAAAIAAEPg");
	this.shape_233.setTransform(-113.8,0);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#00BA59").s().p("EghhACIIAAkPMBDDAAAIAAEPg");
	this.shape_234.setTransform(-112.9,0);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#00BA58").s().p("EghqACIIAAkPMBDVAAAIAAEPg");
	this.shape_235.setTransform(-112,0);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#00BB57").s().p("EghzACIIAAkPMBDnAAAIAAEPg");
	this.shape_236.setTransform(-111.1,0);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#00BB57").s().p("Egh8ACIIAAkPMBD5AAAIAAEPg");
	this.shape_237.setTransform(-110.2,0);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#00BB56").s().p("EgiFACIIAAkPMBELAAAIAAEPg");
	this.shape_238.setTransform(-109.3,0);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#00BB55").s().p("EgiNACIIAAkPMBEbAAAIAAEPg");
	this.shape_239.setTransform(-108.5,0);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#00BB55").s().p("EgiWACIIAAkPMBEtAAAIAAEPg");
	this.shape_240.setTransform(-107.6,0);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#00BB54").s().p("EgifACIIAAkPMBE/AAAIAAEPg");
	this.shape_241.setTransform(-106.7,0);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#00BB53").s().p("EgioACIIAAkPMBFRAAAIAAEPg");
	this.shape_242.setTransform(-105.8,0);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#00BC52").s().p("EgixACIIAAkPMBFjAAAIAAEPg");
	this.shape_243.setTransform(-104.9,0);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#00BC52").s().p("Egi6ACIIAAkPMBF1AAAIAAEPg");
	this.shape_244.setTransform(-104,0);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#00BC51").s().p("EgjDACIIAAkPMBGHAAAIAAEPg");
	this.shape_245.setTransform(-103.1,0);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#00BC50").s().p("EgjMACIIAAkPMBGZAAAIAAEPg");
	this.shape_246.setTransform(-102.2,0);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#00BC50").s().p("EgjVACIIAAkPMBGrAAAIAAEPg");
	this.shape_247.setTransform(-101.3,0);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#00BC4F").s().p("EgjeACIIAAkPMBG9AAAIAAEPg");
	this.shape_248.setTransform(-100.4,0);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#00BC4E").s().p("EgjnACIIAAkPMBHPAAAIAAEPg");
	this.shape_249.setTransform(-99.5,0);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#00BD4D").s().p("EgjwACIIAAkPMBHhAAAIAAEPg");
	this.shape_250.setTransform(-98.6,0);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#00BD4D").s().p("Egj5ACIIAAkPMBHzAAAIAAEPg");
	this.shape_251.setTransform(-97.7,0);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#00BD4C").s().p("EgkCACIIAAkPMBIFAAAIAAEPg");
	this.shape_252.setTransform(-96.8,0);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#00BD4B").s().p("EgkLACIIAAkPMBIXAAAIAAEPg");
	this.shape_253.setTransform(-95.9,0);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#00BD4B").s().p("EgkUACIIAAkPMBIpAAAIAAEPg");
	this.shape_254.setTransform(-95,0);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#00BD4A").s().p("EgkdACIIAAkPMBI7AAAIAAEPg");
	this.shape_255.setTransform(-94.1,0);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#00BD49").s().p("EgkmACIIAAkPMBJNAAAIAAEPg");
	this.shape_256.setTransform(-93.2,0);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#00BE48").s().p("EgkvACIIAAkPMBJfAAAIAAEPg");
	this.shape_257.setTransform(-92.3,0);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#00BE48").s().p("Egk4ACIIAAkPMBJxAAAIAAEPg");
	this.shape_258.setTransform(-91.4,0);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#00BE47").s().p("EglBACIIAAkPMBKDAAAIAAEPg");
	this.shape_259.setTransform(-90.5,0);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#00BE46").s().p("EglKACIIAAkPMBKVAAAIAAEPg");
	this.shape_260.setTransform(-89.6,0);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#00BE46").s().p("EglSACIIAAkPMBKlAAAIAAEPg");
	this.shape_261.setTransform(-88.8,0);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#00BE45").s().p("EglbACIIAAkPMBK3AAAIAAEPg");
	this.shape_262.setTransform(-87.9,0);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#00BE44").s().p("EglkACIIAAkPMBLJAAAIAAEPg");
	this.shape_263.setTransform(-87,0);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#00BF43").s().p("EgltACIIAAkPMBLbAAAIAAEPg");
	this.shape_264.setTransform(-86.1,0);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#00BF43").s().p("Egl2ACIIAAkPMBLtAAAIAAEPg");
	this.shape_265.setTransform(-85.2,0);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#00BF42").s().p("Egl/ACIIAAkPMBL/AAAIAAEPg");
	this.shape_266.setTransform(-84.3,0);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#00BF41").s().p("EgmIACIIAAkPMBMRAAAIAAEPg");
	this.shape_267.setTransform(-83.4,0);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#00BF41").s().p("EgmRACIIAAkPMBMjAAAIAAEPg");
	this.shape_268.setTransform(-82.5,0);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#00BF40").s().p("EgmaACIIAAkPMBM1AAAIAAEPg");
	this.shape_269.setTransform(-81.6,0);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#00BF3F").s().p("EgmjACIIAAkPMBNHAAAIAAEPg");
	this.shape_270.setTransform(-80.7,0);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#00BF3F").s().p("EgmsACIIAAkPMBNZAAAIAAEPg");
	this.shape_271.setTransform(-79.8,0);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#00C03E").s().p("Egm1ACIIAAkPMBNrAAAIAAEPg");
	this.shape_272.setTransform(-78.9,0);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#00C03D").s().p("Egm+ACIIAAkPMBN9AAAIAAEPg");
	this.shape_273.setTransform(-78,0);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#00C03C").s().p("EgnHACIIAAkPMBOPAAAIAAEPg");
	this.shape_274.setTransform(-77.1,0);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#00C03C").s().p("EgnQACIIAAkPMBOhAAAIAAEPg");
	this.shape_275.setTransform(-76.2,0);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#00C03B").s().p("EgnZACIIAAkPMBOzAAAIAAEPg");
	this.shape_276.setTransform(-75.3,0);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#00C03A").s().p("EgniACIIAAkPMBPFAAAIAAEPg");
	this.shape_277.setTransform(-74.4,0);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#00C03A").s().p("EgnrACIIAAkPMBPWAAAIAAEPg");
	this.shape_278.setTransform(-73.5,0);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#00C139").s().p("Egn0ACIIAAkPMBPoAAAIAAEPg");
	this.shape_279.setTransform(-72.6,0);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#00C138").s().p("Egn9ACIIAAkPMBP6AAAIAAEPg");
	this.shape_280.setTransform(-71.7,0);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#00C137").s().p("EgoGACIIAAkPMBQMAAAIAAEPg");
	this.shape_281.setTransform(-70.8,0);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#00C137").s().p("EgoPACIIAAkPMBQeAAAIAAEPg");
	this.shape_282.setTransform(-69.9,0);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#00C136").s().p("EgoYACIIAAkPMBQwAAAIAAEPg");
	this.shape_283.setTransform(-69,0);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#00C135").s().p("EgogACIIAAkPMBRBAAAIAAEPg");
	this.shape_284.setTransform(-68.2,0);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#00C135").s().p("EgopACIIAAkPMBRTAAAIAAEPg");
	this.shape_285.setTransform(-67.3,0);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#00C234").s().p("EgoyACIIAAkPMBRlAAAIAAEPg");
	this.shape_286.setTransform(-66.4,0);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#00C233").s().p("Ego7ACIIAAkPMBR3AAAIAAEPg");
	this.shape_287.setTransform(-65.5,0);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#00C232").s().p("EgpEACIIAAkPMBSJAAAIAAEPg");
	this.shape_288.setTransform(-64.6,0);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#00C232").s().p("EgpNACIIAAkPMBSbAAAIAAEPg");
	this.shape_289.setTransform(-63.7,0);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#00C231").s().p("EgpWACIIAAkPMBStAAAIAAEPg");
	this.shape_290.setTransform(-62.8,0);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#00C230").s().p("EgpfACIIAAkPMBS/AAAIAAEPg");
	this.shape_291.setTransform(-61.9,0);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#00C230").s().p("EgpoACIIAAkPMBTRAAAIAAEPg");
	this.shape_292.setTransform(-61,0);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#00C32F").s().p("EgpxACIIAAkPMBTjAAAIAAEPg");
	this.shape_293.setTransform(-60.1,0);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#00C32E").s().p("Egp6ACIIAAkPMBT1AAAIAAEPg");
	this.shape_294.setTransform(-59.2,0);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#00C32D").s().p("EgqDACIIAAkPMBUHAAAIAAEPg");
	this.shape_295.setTransform(-58.3,0);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#00C32D").s().p("EgqMACIIAAkPMBUZAAAIAAEPg");
	this.shape_296.setTransform(-57.4,0);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#00C32C").s().p("EgqVACIIAAkPMBUrAAAIAAEPg");
	this.shape_297.setTransform(-56.5,0);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#00C32B").s().p("EgqeACIIAAkPMBU9AAAIAAEPg");
	this.shape_298.setTransform(-55.6,0);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#00C32B").s().p("EgqnACIIAAkPMBVPAAAIAAEPg");
	this.shape_299.setTransform(-54.7,0);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#00C42A").s().p("EgqwACIIAAkPMBVgAAAIAAEPg");
	this.shape_300.setTransform(-53.8,0);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#00C429").s().p("Egq5ACIIAAkPMBVyAAAIAAEPg");
	this.shape_301.setTransform(-52.9,0);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#00C428").s().p("EgrCACIIAAkPMBWEAAAIAAEPg");
	this.shape_302.setTransform(-52,0);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#00C428").s().p("EgrLACIIAAkPMBWWAAAIAAEPg");
	this.shape_303.setTransform(-51.1,0);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#00C427").s().p("EgrUACIIAAkPMBWoAAAIAAEPg");
	this.shape_304.setTransform(-50.2,0);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#00C426").s().p("EgrdACIIAAkPMBW6AAAIAAEPg");
	this.shape_305.setTransform(-49.3,0);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#00C426").s().p("EgrlACIIAAkPMBXLAAAIAAEPg");
	this.shape_306.setTransform(-48.5,0);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#00C525").s().p("EgruACIIAAkPMBXdAAAIAAEPg");
	this.shape_307.setTransform(-47.6,0);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#00C524").s().p("Egr3ACIIAAkPMBXvAAAIAAEPg");
	this.shape_308.setTransform(-46.7,0);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#00C524").s().p("EgsAACIIAAkPMBYBAAAIAAEPg");
	this.shape_309.setTransform(-45.8,0);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#00C523").s().p("EgsJACIIAAkPMBYTAAAIAAEPg");
	this.shape_310.setTransform(-44.9,0);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#00C522").s().p("EgsSACIIAAkPMBYlAAAIAAEPg");
	this.shape_311.setTransform(-44,0);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#00C521").s().p("EgsbACIIAAkPMBY3AAAIAAEPg");
	this.shape_312.setTransform(-43.1,0);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#00C521").s().p("EgskACIIAAkPMBZJAAAIAAEPg");
	this.shape_313.setTransform(-42.2,0);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#00C620").s().p("EgstACIIAAkPMBZbAAAIAAEPg");
	this.shape_314.setTransform(-41.3,0);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#00C61F").s().p("Egs2ACIIAAkPMBZtAAAIAAEPg");
	this.shape_315.setTransform(-40.4,0);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#00C61F").s().p("Egs/ACIIAAkPMBZ/AAAIAAEPg");
	this.shape_316.setTransform(-39.5,0);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#00C61E").s().p("EgtIACIIAAkPMBaRAAAIAAEPg");
	this.shape_317.setTransform(-38.6,0);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#00C61D").s().p("EgtRACIIAAkPMBajAAAIAAEPg");
	this.shape_318.setTransform(-37.7,0);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#00C61C").s().p("EgtaACIIAAkPMBa1AAAIAAEPg");
	this.shape_319.setTransform(-36.8,0);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#00C61C").s().p("EgtjACIIAAkPMBbHAAAIAAEPg");
	this.shape_320.setTransform(-35.9,0);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#00C71B").s().p("EgtsACIIAAkPMBbZAAAIAAEPg");
	this.shape_321.setTransform(-35,0);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#00C71A").s().p("Egt1ACIIAAkPMBbrAAAIAAEPg");
	this.shape_322.setTransform(-34.1,0);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#00C71A").s().p("Egt+ACIIAAkPMBb9AAAIAAEPg");
	this.shape_323.setTransform(-33.2,0);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#00C719").s().p("EguHACIIAAkPMBcOAAAIAAEPg");
	this.shape_324.setTransform(-32.3,0);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#00C718").s().p("EguQACIIAAkPMBchAAAIAAEPg");
	this.shape_325.setTransform(-31.4,0);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#00C717").s().p("EguZACIIAAkPMBcyAAAIAAEPg");
	this.shape_326.setTransform(-30.5,0);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#00C717").s().p("EguiACIIAAkPMBdEAAAIAAEPg");
	this.shape_327.setTransform(-29.6,0);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#00C816").s().p("EgurACIIAAkPMBdXAAAIAAEPg");
	this.shape_328.setTransform(-28.7,0);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#00C815").s().p("EguzACIIAAkPMBdnAAAIAAEPg");
	this.shape_329.setTransform(-27.9,0);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#00C815").s().p("Egu8ACIIAAkPMBd5AAAIAAEPg");
	this.shape_330.setTransform(-27,0);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#00C814").s().p("EgvFACIIAAkPMBeLAAAIAAEPg");
	this.shape_331.setTransform(-26.1,0);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#00C813").s().p("EgvOACIIAAkPMBedAAAIAAEPg");
	this.shape_332.setTransform(-25.2,0);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#00C812").s().p("EgvXACIIAAkPMBevAAAIAAEPg");
	this.shape_333.setTransform(-24.3,0);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#00C812").s().p("EgvgACIIAAkPMBfBAAAIAAEPg");
	this.shape_334.setTransform(-23.4,0);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#00C911").s().p("EgvpACIIAAkPMBfTAAAIAAEPg");
	this.shape_335.setTransform(-22.5,0);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#00C910").s().p("EgvyACIIAAkPMBflAAAIAAEPg");
	this.shape_336.setTransform(-21.6,0);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#00C910").s().p("Egv7ACIIAAkPMBf3AAAIAAEPg");
	this.shape_337.setTransform(-20.7,0);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#00C90F").s().p("EgwEACIIAAkPMBgJAAAIAAEPg");
	this.shape_338.setTransform(-19.8,0);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#00C90E").s().p("EgwNACIIAAkPMBgbAAAIAAEPg");
	this.shape_339.setTransform(-18.9,0);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#00C90D").s().p("EgwWACIIAAkPMBgtAAAIAAEPg");
	this.shape_340.setTransform(-18,0);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#00C90D").s().p("EgwfACIIAAkPMBg/AAAIAAEPg");
	this.shape_341.setTransform(-17.1,0);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#00CA0C").s().p("EgwoACIIAAkPMBhRAAAIAAEPg");
	this.shape_342.setTransform(-16.2,0);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#00CA0B").s().p("EgwxACIIAAkPMBhjAAAIAAEPg");
	this.shape_343.setTransform(-15.3,0);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#00CA0B").s().p("Egw6ACIIAAkPMBh1AAAIAAEPg");
	this.shape_344.setTransform(-14.4,0);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#00CA0A").s().p("EgxDACIIAAkPMBiHAAAIAAEPg");
	this.shape_345.setTransform(-13.5,0);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#00CA09").s().p("EgxMACIIAAkPMBiZAAAIAAEPg");
	this.shape_346.setTransform(-12.6,0);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#00CA09").s().p("EgxVACIIAAkPMBirAAAIAAEPg");
	this.shape_347.setTransform(-11.7,0);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#00CA08").s().p("EgxeACIIAAkPMBi9AAAIAAEPg");
	this.shape_348.setTransform(-10.8,0);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#00CB07").s().p("EgxnACIIAAkPMBjPAAAIAAEPg");
	this.shape_349.setTransform(-9.9,0);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#00CB06").s().p("EgxwACIIAAkPMBjhAAAIAAEPg");
	this.shape_350.setTransform(-9,0);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#00CB06").s().p("Egx5ACIIAAkPMBjzAAAIAAEPg");
	this.shape_351.setTransform(-8.1,0);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#00CB05").s().p("EgyBACIIAAkPMBkDAAAIAAEPg");
	this.shape_352.setTransform(-7.3,0);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#00CB04").s().p("EgyKACIIAAkPMBkVAAAIAAEPg");
	this.shape_353.setTransform(-6.4,0);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#00CB04").s().p("EgyTACIIAAkPMBknAAAIAAEPg");
	this.shape_354.setTransform(-5.5,0);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#00CB03").s().p("EgycACIIAAkPMBk5AAAIAAEPg");
	this.shape_355.setTransform(-4.6,0);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#00CC02").s().p("EgylACIIAAkPMBlLAAAIAAEPg");
	this.shape_356.setTransform(-3.7,0);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#00CC01").s().p("EgyuACIIAAkPMBldAAAIAAEPg");
	this.shape_357.setTransform(-2.8,0);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#00CC01").s().p("Egy3ACIIAAkPMBlvAAAIAAEPg");
	this.shape_358.setTransform(-1.9,0);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#00CC00").s().p("EgzAACIIAAkPMBmBAAAIAAEPg");
	this.shape_359.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mcLoader4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_229 = function() {
		playSound("complete");
	}
	this.frame_240 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(229).call(this.frame_229).wait(11).call(this.frame_240).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AgxCIIAAkPIBjAAIAAEPg");
	this.shape.setTransform(-322.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FE").s().p("Ag/CIIAAkPIB+AAIAAEPg");
	this.shape_1.setTransform(-321.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FD").s().p("AhMCIIAAkPICZAAIAAEPg");
	this.shape_2.setTransform(-319.8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009AFC").s().p("AhZCIIAAkPICzAAIAAEPg");
	this.shape_3.setTransform(-318.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009AFB").s().p("AhnCIIAAkPIDPAAIAAEPg");
	this.shape_4.setTransform(-317.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009AFA").s().p("Ah0CIIAAkPIDpAAIAAEPg");
	this.shape_5.setTransform(-315.8,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009AF9").s().p("AiCCIIAAkPIEFAAIAAEPg");
	this.shape_6.setTransform(-314.4,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009AF8").s().p("AiPCIIAAkPIEfAAIAAEPg");
	this.shape_7.setTransform(-313.1,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009BF6").s().p("AidCIIAAkPIE7AAIAAEPg");
	this.shape_8.setTransform(-311.7,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009BF5").s().p("AiqCIIAAkPIFVAAIAAEPg");
	this.shape_9.setTransform(-310.4,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009BF4").s().p("Ai4CIIAAkPIFwAAIAAEPg");
	this.shape_10.setTransform(-309,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009BF3").s().p("AjFCIIAAkPIGLAAIAAEPg");
	this.shape_11.setTransform(-307.7,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009CF2").s().p("AjTCIIAAkPIGmAAIAAEPg");
	this.shape_12.setTransform(-306.3,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009CF1").s().p("AjgCIIAAkPIHBAAIAAEPg");
	this.shape_13.setTransform(-305,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009CF0").s().p("AjtCIIAAkPIHbAAIAAEPg");
	this.shape_14.setTransform(-303.7,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009CEF").s().p("Aj7CIIAAkPIH3AAIAAEPg");
	this.shape_15.setTransform(-302.3,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009CEE").s().p("AkICIIAAkPIIRAAIAAEPg");
	this.shape_16.setTransform(-301,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009DED").s().p("AkWCIIAAkPIItAAIAAEPg");
	this.shape_17.setTransform(-299.6,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#009DEC").s().p("AkjCIIAAkPIJHAAIAAEPg");
	this.shape_18.setTransform(-298.3,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009DEB").s().p("AkxCIIAAkPIJiAAIAAEPg");
	this.shape_19.setTransform(-296.9,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009DEA").s().p("Ak+CIIAAkPIJ9AAIAAEPg");
	this.shape_20.setTransform(-295.6,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009DE9").s().p("AlMCIIAAkPIKYAAIAAEPg");
	this.shape_21.setTransform(-294.2,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009EE8").s().p("AlZCIIAAkPIKzAAIAAEPg");
	this.shape_22.setTransform(-292.9,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009EE6").s().p("AlnCIIAAkPILOAAIAAEPg");
	this.shape_23.setTransform(-291.5,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#009EE5").s().p("Al0CIIAAkPILpAAIAAEPg");
	this.shape_24.setTransform(-290.2,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#009EE4").s().p("AmBCIIAAkPIMDAAIAAEPg");
	this.shape_25.setTransform(-288.9,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#009FE3").s().p("AmPCIIAAkPIMfAAIAAEPg");
	this.shape_26.setTransform(-287.5,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#009FE2").s().p("AmcCIIAAkPIM5AAIAAEPg");
	this.shape_27.setTransform(-286.2,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#009FE1").s().p("AmqCIIAAkPINVAAIAAEPg");
	this.shape_28.setTransform(-284.8,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#009FE0").s().p("Am3CIIAAkPINvAAIAAEPg");
	this.shape_29.setTransform(-283.5,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#009FDF").s().p("AnFCIIAAkPIOLAAIAAEPg");
	this.shape_30.setTransform(-282.1,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00A0DE").s().p("AnSCIIAAkPIOlAAIAAEPg");
	this.shape_31.setTransform(-280.8,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00A0DD").s().p("AngCIIAAkPIPBAAIAAEPg");
	this.shape_32.setTransform(-279.4,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00A0DC").s().p("AntCIIAAkPIPbAAIAAEPg");
	this.shape_33.setTransform(-278.1,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00A0DB").s().p("An6CIIAAkPIP1AAIAAEPg");
	this.shape_34.setTransform(-276.8,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00A0DA").s().p("AoICIIAAkPIQRAAIAAEPg");
	this.shape_35.setTransform(-275.4,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00A1D9").s().p("AoVCIIAAkPIQrAAIAAEPg");
	this.shape_36.setTransform(-274.1,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00A1D8").s().p("AojCIIAAkPIRHAAIAAEPg");
	this.shape_37.setTransform(-272.7,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00A1D6").s().p("AowCIIAAkPIRhAAIAAEPg");
	this.shape_38.setTransform(-271.4,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00A1D5").s().p("Ao+CIIAAkPIR9AAIAAEPg");
	this.shape_39.setTransform(-270,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00A2D4").s().p("ApLCIIAAkPISXAAIAAEPg");
	this.shape_40.setTransform(-268.7,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00A2D3").s().p("ApZCIIAAkPISzAAIAAEPg");
	this.shape_41.setTransform(-267.3,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00A2D2").s().p("ApmCIIAAkPITNAAIAAEPg");
	this.shape_42.setTransform(-266,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00A2D1").s().p("Ap0CIIAAkPITpAAIAAEPg");
	this.shape_43.setTransform(-264.6,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00A2D0").s().p("AqBCIIAAkPIUDAAIAAEPg");
	this.shape_44.setTransform(-263.3,0);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00A3CF").s().p("AqOCIIAAkPIUdAAIAAEPg");
	this.shape_45.setTransform(-262,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00A3CE").s().p("AqcCIIAAkPIU5AAIAAEPg");
	this.shape_46.setTransform(-260.6,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00A3CD").s().p("AqpCIIAAkPIVTAAIAAEPg");
	this.shape_47.setTransform(-259.3,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00A3CC").s().p("Aq3CIIAAkPIVvAAIAAEPg");
	this.shape_48.setTransform(-257.9,0);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00A3CB").s().p("ArECIIAAkPIWJAAIAAEPg");
	this.shape_49.setTransform(-256.6,0);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00A4CA").s().p("ArSCIIAAkPIWlAAIAAEPg");
	this.shape_50.setTransform(-255.2,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00A4C9").s().p("ArfCIIAAkPIW/AAIAAEPg");
	this.shape_51.setTransform(-253.9,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00A4C8").s().p("ArtCIIAAkPIXbAAIAAEPg");
	this.shape_52.setTransform(-252.5,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00A4C6").s().p("Ar6CIIAAkPIX1AAIAAEPg");
	this.shape_53.setTransform(-251.2,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00A5C5").s().p("AsICIIAAkPIYRAAIAAEPg");
	this.shape_54.setTransform(-249.8,0);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00A5C4").s().p("AsVCIIAAkPIYrAAIAAEPg");
	this.shape_55.setTransform(-248.5,0);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00A5C3").s().p("AsiCIIAAkPIZFAAIAAEPg");
	this.shape_56.setTransform(-247.2,0);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00A5C2").s().p("AswCIIAAkPIZhAAIAAEPg");
	this.shape_57.setTransform(-245.8,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00A5C1").s().p("As9CIIAAkPIZ7AAIAAEPg");
	this.shape_58.setTransform(-244.5,0);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00A6C0").s().p("AtLCIIAAkPIaXAAIAAEPg");
	this.shape_59.setTransform(-243.1,0);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00A6BF").s().p("AtYCIIAAkPIaxAAIAAEPg");
	this.shape_60.setTransform(-241.8,0);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00A6BE").s().p("AtmCIIAAkPIbNAAIAAEPg");
	this.shape_61.setTransform(-240.4,0);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00A6BD").s().p("AtzCIIAAkPIbnAAIAAEPg");
	this.shape_62.setTransform(-239.1,0);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00A6BC").s().p("AuBCIIAAkPIcDAAIAAEPg");
	this.shape_63.setTransform(-237.7,0);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00A7BB").s().p("AuOCIIAAkPIcdAAIAAEPg");
	this.shape_64.setTransform(-236.4,0);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00A7BA").s().p("AucCIIAAkPIc5AAIAAEPg");
	this.shape_65.setTransform(-235,0);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00A7B9").s().p("AupCIIAAkPIdTAAIAAEPg");
	this.shape_66.setTransform(-233.7,0);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00A7B8").s().p("Au2CIIAAkPIdtAAIAAEPg");
	this.shape_67.setTransform(-232.4,0);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00A8B6").s().p("AvECIIAAkPIeJAAIAAEPg");
	this.shape_68.setTransform(-231,0);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00A8B5").s().p("AvRCIIAAkPIejAAIAAEPg");
	this.shape_69.setTransform(-229.7,0);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00A8B4").s().p("AvfCIIAAkPIe/AAIAAEPg");
	this.shape_70.setTransform(-228.3,0);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00A8B3").s().p("AvsCIIAAkPIfZAAIAAEPg");
	this.shape_71.setTransform(-227,0);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00A8B2").s().p("Av6CIIAAkPIf0AAIAAEPg");
	this.shape_72.setTransform(-225.6,0);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00A9B1").s().p("AwHCIIAAkPMAgPAAAIAAEPg");
	this.shape_73.setTransform(-224.3,0);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00A9B0").s().p("AwVCIIAAkPMAgqAAAIAAEPg");
	this.shape_74.setTransform(-222.9,0);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#00A9AF").s().p("AwiCIIAAkPMAhFAAAIAAEPg");
	this.shape_75.setTransform(-221.6,0);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#00A9AE").s().p("AwvCIIAAkPMAhfAAAIAAEPg");
	this.shape_76.setTransform(-220.3,0);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#00A9AD").s().p("Aw9CIIAAkPMAh7AAAIAAEPg");
	this.shape_77.setTransform(-218.9,0);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#00AAAC").s().p("AxKCIIAAkPMAiVAAAIAAEPg");
	this.shape_78.setTransform(-217.6,0);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00AAAB").s().p("AxYCIIAAkPMAixAAAIAAEPg");
	this.shape_79.setTransform(-216.2,0);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#00AAAA").s().p("AxlCIIAAkPMAjLAAAIAAEPg");
	this.shape_80.setTransform(-214.9,0);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00AAA9").s().p("AxzCIIAAkPMAjmAAAIAAEPg");
	this.shape_81.setTransform(-213.5,0);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00AAA8").s().p("AyACIIAAkPMAkBAAAIAAEPg");
	this.shape_82.setTransform(-212.2,0);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00ABA6").s().p("AyOCIIAAkPMAkcAAAIAAEPg");
	this.shape_83.setTransform(-210.8,0);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#00ABA5").s().p("AybCIIAAkPMAk3AAAIAAEPg");
	this.shape_84.setTransform(-209.5,0);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00ABA4").s().p("AypCIIAAkPMAlSAAAIAAEPg");
	this.shape_85.setTransform(-208.1,0);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00ABA3").s().p("Ay2CIIAAkPMAltAAAIAAEPg");
	this.shape_86.setTransform(-206.8,0);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#00ACA2").s().p("AzDCIIAAkPMAmHAAAIAAEPg");
	this.shape_87.setTransform(-205.5,0);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00ACA1").s().p("AzRCIIAAkPMAmjAAAIAAEPg");
	this.shape_88.setTransform(-204.1,0);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00ACA0").s().p("AzeCIIAAkPMAm9AAAIAAEPg");
	this.shape_89.setTransform(-202.8,0);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00AC9F").s().p("AzsCIIAAkPMAnZAAAIAAEPg");
	this.shape_90.setTransform(-201.4,0);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00AC9E").s().p("Az5CIIAAkPMAnzAAAIAAEPg");
	this.shape_91.setTransform(-200.1,0);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#00AD9D").s().p("A0HCIIAAkPMAoOAAAIAAEPg");
	this.shape_92.setTransform(-198.7,0);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#00AD9C").s().p("A0UCIIAAkPMAopAAAIAAEPg");
	this.shape_93.setTransform(-197.4,0);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#00AD9B").s().p("A0iCIIAAkPMApEAAAIAAEPg");
	this.shape_94.setTransform(-196,0);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#00AD9A").s().p("A0vCIIAAkPMApfAAAIAAEPg");
	this.shape_95.setTransform(-194.7,0);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#00AD99").s().p("A09CIIAAkPMAp6AAAIAAEPg");
	this.shape_96.setTransform(-193.3,0);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#00AE98").s().p("A1KCIIAAkPMAqVAAAIAAEPg");
	this.shape_97.setTransform(-192,0);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#00AE96").s().p("A1XCIIAAkPMAqvAAAIAAEPg");
	this.shape_98.setTransform(-190.7,0);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00AE95").s().p("A1lCIIAAkPMArLAAAIAAEPg");
	this.shape_99.setTransform(-189.3,0);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#00AE94").s().p("A1yCIIAAkPMArlAAAIAAEPg");
	this.shape_100.setTransform(-188,0);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#00AF93").s().p("A2ACIIAAkPMAsBAAAIAAEPg");
	this.shape_101.setTransform(-186.6,0);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#00AF92").s().p("A2NCIIAAkPMAsbAAAIAAEPg");
	this.shape_102.setTransform(-185.3,0);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#00AF91").s().p("A2bCIIAAkPMAs2AAAIAAEPg");
	this.shape_103.setTransform(-183.9,0);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#00AF90").s().p("A2oCIIAAkPMAtRAAAIAAEPg");
	this.shape_104.setTransform(-182.6,0);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#00AF8F").s().p("A22CIIAAkPMAtsAAAIAAEPg");
	this.shape_105.setTransform(-181.2,0);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#00B08E").s().p("A3DCIIAAkPMAuHAAAIAAEPg");
	this.shape_106.setTransform(-179.9,0);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#00B08D").s().p("A3QCIIAAkPMAuhAAAIAAEPg");
	this.shape_107.setTransform(-178.6,0);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#00B08C").s().p("A3eCIIAAkPMAu9AAAIAAEPg");
	this.shape_108.setTransform(-177.2,0);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#00B08B").s().p("A3rCIIAAkPMAvXAAAIAAEPg");
	this.shape_109.setTransform(-175.9,0);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#00B08A").s().p("A35CIIAAkPMAvzAAAIAAEPg");
	this.shape_110.setTransform(-174.5,0);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#00B189").s().p("A4GCIIAAkPMAwNAAAIAAEPg");
	this.shape_111.setTransform(-173.2,0);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#00B188").s().p("A4UCIIAAkPMAwoAAAIAAEPg");
	this.shape_112.setTransform(-171.8,0);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#00B186").s().p("A4hCIIAAkPMAxDAAAIAAEPg");
	this.shape_113.setTransform(-170.5,0);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#00B185").s().p("A4vCIIAAkPMAxeAAAIAAEPg");
	this.shape_114.setTransform(-169.1,0);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#00B284").s().p("A48CIIAAkPMAx5AAAIAAEPg");
	this.shape_115.setTransform(-167.8,0);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#00B283").s().p("A5KCIIAAkPMAyUAAAIAAEPg");
	this.shape_116.setTransform(-166.4,0);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#00B282").s().p("A5XCIIAAkPMAyvAAAIAAEPg");
	this.shape_117.setTransform(-165.1,0);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#00B281").s().p("A5kCIIAAkPMAzJAAAIAAEPg");
	this.shape_118.setTransform(-163.8,0);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00B280").s().p("A5yCIIAAkPMAzlAAAIAAEPg");
	this.shape_119.setTransform(-162.4,0);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00B37F").s().p("A5/CIIAAkPMAz/AAAIAAEPg");
	this.shape_120.setTransform(-161.1,0);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00B37E").s().p("A6NCIIAAkPMA0bAAAIAAEPg");
	this.shape_121.setTransform(-159.7,0);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#00B37D").s().p("A6aCIIAAkPMA01AAAIAAEPg");
	this.shape_122.setTransform(-158.4,0);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00B37C").s().p("A6oCIIAAkPMA1RAAAIAAEPg");
	this.shape_123.setTransform(-157,0);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00B37B").s().p("A61CIIAAkPMA1rAAAIAAEPg");
	this.shape_124.setTransform(-155.7,0);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#00B47A").s().p("A7DCIIAAkPMA2HAAAIAAEPg");
	this.shape_125.setTransform(-154.3,0);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#00B479").s().p("A7QCIIAAkPMA2hAAAIAAEPg");
	this.shape_126.setTransform(-153,0);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#00B477").s().p("A7eCIIAAkPMA29AAAIAAEPg");
	this.shape_127.setTransform(-151.6,0);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#00B476").s().p("A7rCIIAAkPMA3XAAAIAAEPg");
	this.shape_128.setTransform(-150.3,0);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#00B575").s().p("A74CIIAAkPMA3xAAAIAAEPg");
	this.shape_129.setTransform(-149,0);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#00B574").s().p("A8GCIIAAkPMA4NAAAIAAEPg");
	this.shape_130.setTransform(-147.6,0);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#00B573").s().p("A8TCIIAAkPMA4nAAAIAAEPg");
	this.shape_131.setTransform(-146.3,0);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#00B572").s().p("A8hCIIAAkPMA5DAAAIAAEPg");
	this.shape_132.setTransform(-144.9,0);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#00B571").s().p("A8uCIIAAkPMA5dAAAIAAEPg");
	this.shape_133.setTransform(-143.6,0);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#00B670").s().p("A88CIIAAkPMA55AAAIAAEPg");
	this.shape_134.setTransform(-142.2,0);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#00B66F").s().p("A9JCIIAAkPMA6TAAAIAAEPg");
	this.shape_135.setTransform(-140.9,0);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#00B66E").s().p("A9XCIIAAkPMA6vAAAIAAEPg");
	this.shape_136.setTransform(-139.5,0);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#00B66D").s().p("A9kCIIAAkPMA7JAAAIAAEPg");
	this.shape_137.setTransform(-138.2,0);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#00B66C").s().p("A9xCIIAAkPMA7jAAAIAAEPg");
	this.shape_138.setTransform(-136.9,0);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#00B76B").s().p("A9/CIIAAkPMA7/AAAIAAEPg");
	this.shape_139.setTransform(-135.5,0);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#00B76A").s().p("A+MCIIAAkPMA8ZAAAIAAEPg");
	this.shape_140.setTransform(-134.2,0);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#00B769").s().p("A+aCIIAAkPMA81AAAIAAEPg");
	this.shape_141.setTransform(-132.8,0);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#00B767").s().p("A+nCIIAAkPMA9PAAAIAAEPg");
	this.shape_142.setTransform(-131.5,0);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#00B866").s().p("A+1CIIAAkPMA9rAAAIAAEPg");
	this.shape_143.setTransform(-130.1,0);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#00B865").s().p("A/CCIIAAkPMA+FAAAIAAEPg");
	this.shape_144.setTransform(-128.8,0);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#00B864").s().p("A/QCIIAAkPMA+hAAAIAAEPg");
	this.shape_145.setTransform(-127.4,0);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#00B863").s().p("A/dCIIAAkPMA+7AAAIAAEPg");
	this.shape_146.setTransform(-126.1,0);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#00B862").s().p("A/rCIIAAkPMA/XAAAIAAEPg");
	this.shape_147.setTransform(-124.7,0);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#00B961").s().p("A/4CIIAAkPMA/xAAAIAAEPg");
	this.shape_148.setTransform(-123.4,0);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#00B960").s().p("EggFACIIAAkPMBALAAAIAAEPg");
	this.shape_149.setTransform(-122.1,0);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#00B95F").s().p("EggTACIIAAkPMBAnAAAIAAEPg");
	this.shape_150.setTransform(-120.7,0);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#00B95E").s().p("EgggACIIAAkPMBBBAAAIAAEPg");
	this.shape_151.setTransform(-119.4,0);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#00B95D").s().p("EgguACIIAAkPMBBdAAAIAAEPg");
	this.shape_152.setTransform(-118,0);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#00BA5C").s().p("Egg7ACIIAAkPMBB3AAAIAAEPg");
	this.shape_153.setTransform(-116.7,0);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#00BA5B").s().p("EghJACIIAAkPMBCTAAAIAAEPg");
	this.shape_154.setTransform(-115.3,0);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#00BA5A").s().p("EghWACIIAAkPMBCtAAAIAAEPg");
	this.shape_155.setTransform(-114,0);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#00BA59").s().p("EghkACIIAAkPMBDJAAAIAAEPg");
	this.shape_156.setTransform(-112.6,0);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#00BB57").s().p("EghxACIIAAkPMBDjAAAIAAEPg");
	this.shape_157.setTransform(-111.3,0);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#00BB56").s().p("Egh/ACIIAAkPMBD/AAAIAAEPg");
	this.shape_158.setTransform(-109.9,0);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#00BB55").s().p("EgiMACIIAAkPMBEZAAAIAAEPg");
	this.shape_159.setTransform(-108.6,0);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#00BB54").s().p("EgiZACIIAAkPMBEzAAAIAAEPg");
	this.shape_160.setTransform(-107.3,0);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#00BB53").s().p("EginACIIAAkPMBFPAAAIAAEPg");
	this.shape_161.setTransform(-105.9,0);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#00BC52").s().p("Egi0ACIIAAkPMBFpAAAIAAEPg");
	this.shape_162.setTransform(-104.6,0);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#00BC51").s().p("EgjCACIIAAkPMBGFAAAIAAEPg");
	this.shape_163.setTransform(-103.2,0);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#00BC50").s().p("EgjPACIIAAkPMBGfAAAIAAEPg");
	this.shape_164.setTransform(-101.9,0);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#00BC4F").s().p("EgjdACIIAAkPMBG6AAAIAAEPg");
	this.shape_165.setTransform(-100.5,0);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#00BC4E").s().p("EgjqACIIAAkPMBHVAAAIAAEPg");
	this.shape_166.setTransform(-99.2,0);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#00BD4D").s().p("Egj4ACIIAAkPMBHwAAAIAAEPg");
	this.shape_167.setTransform(-97.8,0);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#00BD4C").s().p("EgkFACIIAAkPMBILAAAIAAEPg");
	this.shape_168.setTransform(-96.5,0);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#00BD4B").s().p("EgkSACIIAAkPMBIlAAAIAAEPg");
	this.shape_169.setTransform(-95.2,0);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#00BD4A").s().p("EgkgACIIAAkPMBJBAAAIAAEPg");
	this.shape_170.setTransform(-93.8,0);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#00BD49").s().p("EgktACIIAAkPMBJbAAAIAAEPg");
	this.shape_171.setTransform(-92.5,0);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#00BE47").s().p("Egk7ACIIAAkPMBJ3AAAIAAEPg");
	this.shape_172.setTransform(-91.1,0);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#00BE46").s().p("EglIACIIAAkPMBKRAAAIAAEPg");
	this.shape_173.setTransform(-89.8,0);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#00BE45").s().p("EglWACIIAAkPMBKsAAAIAAEPg");
	this.shape_174.setTransform(-88.4,0);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#00BE44").s().p("EgljACIIAAkPMBLHAAAIAAEPg");
	this.shape_175.setTransform(-87.1,0);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#00BF43").s().p("EglxACIIAAkPMBLiAAAIAAEPg");
	this.shape_176.setTransform(-85.7,0);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#00BF42").s().p("Egl+ACIIAAkPMBL9AAAIAAEPg");
	this.shape_177.setTransform(-84.4,0);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#00BF41").s().p("EgmMACIIAAkPMBMYAAAIAAEPg");
	this.shape_178.setTransform(-83,0);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#00BF40").s().p("EgmZACIIAAkPMBMzAAAIAAEPg");
	this.shape_179.setTransform(-81.7,0);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#00BF3F").s().p("EgmmACIIAAkPMBNNAAAIAAEPg");
	this.shape_180.setTransform(-80.4,0);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#00C03E").s().p("Egm0ACIIAAkPMBNpAAAIAAEPg");
	this.shape_181.setTransform(-79,0);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#00C03D").s().p("EgnBACIIAAkPMBODAAAIAAEPg");
	this.shape_182.setTransform(-77.7,0);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#00C03C").s().p("EgnPACIIAAkPMBOfAAAIAAEPg");
	this.shape_183.setTransform(-76.3,0);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#00C03B").s().p("EgncACIIAAkPMBO5AAAIAAEPg");
	this.shape_184.setTransform(-75,0);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#00C03A").s().p("EgnqACIIAAkPMBPUAAAIAAEPg");
	this.shape_185.setTransform(-73.6,0);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#00C139").s().p("Egn3ACIIAAkPMBPvAAAIAAEPg");
	this.shape_186.setTransform(-72.3,0);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#00C137").s().p("EgoFACIIAAkPMBQKAAAIAAEPg");
	this.shape_187.setTransform(-70.9,0);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#00C136").s().p("EgoSACIIAAkPMBQlAAAIAAEPg");
	this.shape_188.setTransform(-69.6,0);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#00C135").s().p("EgogACIIAAkPMBRAAAAIAAEPg");
	this.shape_189.setTransform(-68.2,0);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#00C234").s().p("EgotACIIAAkPMBRbAAAIAAEPg");
	this.shape_190.setTransform(-66.9,0);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#00C233").s().p("Ego6ACIIAAkPMBR1AAAIAAEPg");
	this.shape_191.setTransform(-65.6,0);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#00C232").s().p("EgpIACIIAAkPMBSRAAAIAAEPg");
	this.shape_192.setTransform(-64.2,0);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#00C231").s().p("EgpVACIIAAkPMBSrAAAIAAEPg");
	this.shape_193.setTransform(-62.9,0);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#00C230").s().p("EgpjACIIAAkPMBTHAAAIAAEPg");
	this.shape_194.setTransform(-61.5,0);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#00C32F").s().p("EgpwACIIAAkPMBThAAAIAAEPg");
	this.shape_195.setTransform(-60.2,0);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#00C32E").s().p("Egp+ACIIAAkPMBT8AAAIAAEPg");
	this.shape_196.setTransform(-58.8,0);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#00C32D").s().p("EgqLACIIAAkPMBUXAAAIAAEPg");
	this.shape_197.setTransform(-57.5,0);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#00C32C").s().p("EgqZACIIAAkPMBUyAAAIAAEPg");
	this.shape_198.setTransform(-56.1,0);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#00C32B").s().p("EgqmACIIAAkPMBVNAAAIAAEPg");
	this.shape_199.setTransform(-54.8,0);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#00C42A").s().p("Egq0ACIIAAkPMBVoAAAIAAEPg");
	this.shape_200.setTransform(-53.4,0);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#00C429").s().p("EgrBACIIAAkPMBWDAAAIAAEPg");
	this.shape_201.setTransform(-52.1,0);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#00C427").s().p("EgrOACIIAAkPMBWdAAAIAAEPg");
	this.shape_202.setTransform(-50.8,0);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#00C426").s().p("EgrcACIIAAkPMBW5AAAIAAEPg");
	this.shape_203.setTransform(-49.4,0);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#00C525").s().p("EgrpACIIAAkPMBXTAAAIAAEPg");
	this.shape_204.setTransform(-48.1,0);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#00C524").s().p("Egr3ACIIAAkPMBXvAAAIAAEPg");
	this.shape_205.setTransform(-46.7,0);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#00C523").s().p("EgsEACIIAAkPMBYJAAAIAAEPg");
	this.shape_206.setTransform(-45.4,0);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#00C522").s().p("EgsSACIIAAkPMBYkAAAIAAEPg");
	this.shape_207.setTransform(-44,0);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#00C521").s().p("EgsfACIIAAkPMBY/AAAIAAEPg");
	this.shape_208.setTransform(-42.7,0);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#00C620").s().p("EgstACIIAAkPMBZbAAAIAAEPg");
	this.shape_209.setTransform(-41.3,0);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#00C61F").s().p("Egs6ACIIAAkPMBZ1AAAIAAEPg");
	this.shape_210.setTransform(-40,0);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#00C61E").s().p("EgtHACIIAAkPMBaPAAAIAAEPg");
	this.shape_211.setTransform(-38.7,0);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#00C61D").s().p("EgtVACIIAAkPMBarAAAIAAEPg");
	this.shape_212.setTransform(-37.3,0);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#00C61C").s().p("EgtiACIIAAkPMBbFAAAIAAEPg");
	this.shape_213.setTransform(-36,0);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#00C71B").s().p("EgtwACIIAAkPMBbhAAAIAAEPg");
	this.shape_214.setTransform(-34.6,0);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#00C71A").s().p("Egt9ACIIAAkPMBb7AAAIAAEPg");
	this.shape_215.setTransform(-33.3,0);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#00C719").s().p("EguLACIIAAkPMBcXAAAIAAEPg");
	this.shape_216.setTransform(-31.9,0);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#00C717").s().p("EguYACIIAAkPMBcxAAAIAAEPg");
	this.shape_217.setTransform(-30.6,0);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#00C816").s().p("EgumACIIAAkPMBdNAAAIAAEPg");
	this.shape_218.setTransform(-29.2,0);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#00C815").s().p("EguzACIIAAkPMBdnAAAIAAEPg");
	this.shape_219.setTransform(-27.9,0);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#00C814").s().p("EgvBACIIAAkPMBeDAAAIAAEPg");
	this.shape_220.setTransform(-26.5,0);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#00C813").s().p("EgvOACIIAAkPMBedAAAIAAEPg");
	this.shape_221.setTransform(-25.2,0);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#00C812").s().p("EgvbACIIAAkPMBe3AAAIAAEPg");
	this.shape_222.setTransform(-23.9,0);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#00C911").s().p("EgvpACIIAAkPMBfTAAAIAAEPg");
	this.shape_223.setTransform(-22.5,0);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#00C910").s().p("Egv2ACIIAAkPMBftAAAIAAEPg");
	this.shape_224.setTransform(-21.2,0);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#00C90F").s().p("EgwEACIIAAkPMBgJAAAIAAEPg");
	this.shape_225.setTransform(-19.8,0);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#00C90E").s().p("EgwRACIIAAkPMBgjAAAIAAEPg");
	this.shape_226.setTransform(-18.5,0);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#00C90D").s().p("EgwfACIIAAkPMBg/AAAIAAEPg");
	this.shape_227.setTransform(-17.1,0);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#00CA0C").s().p("EgwsACIIAAkPMBhZAAAIAAEPg");
	this.shape_228.setTransform(-15.8,0);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#00CA0B").s().p("Egw6ACIIAAkPMBh1AAAIAAEPg");
	this.shape_229.setTransform(-14.4,0);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#00CA0A").s().p("EgxHACIIAAkPMBiPAAAIAAEPg");
	this.shape_230.setTransform(-13.1,0);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#00CA09").s().p("EgxUACIIAAkPMBipAAAIAAEPg");
	this.shape_231.setTransform(-11.8,0);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#00CB07").s().p("EgxiACIIAAkPMBjFAAAIAAEPg");
	this.shape_232.setTransform(-10.4,0);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#00CB06").s().p("EgxvACIIAAkPMBjfAAAIAAEPg");
	this.shape_233.setTransform(-9.1,0);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#00CB05").s().p("Egx9ACIIAAkPMBj7AAAIAAEPg");
	this.shape_234.setTransform(-7.7,0);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#00CB04").s().p("EgyKACIIAAkPMBkVAAAIAAEPg");
	this.shape_235.setTransform(-6.4,0);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#00CB03").s().p("EgyYACIIAAkPMBkxAAAIAAEPg");
	this.shape_236.setTransform(-5,0);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#00CC02").s().p("EgylACIIAAkPMBlLAAAIAAEPg");
	this.shape_237.setTransform(-3.7,0);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#00CC01").s().p("EgyzACIIAAkPMBlnAAAIAAEPg");
	this.shape_238.setTransform(-2.3,0);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#00CC00").s().p("EgzAACIIAAkPMBmBAAAIAAEPg");
	this.shape_239.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mcLoader2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_116 = function() {
		playSound("complete");
	}
	this.frame_120 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(116).call(this.frame_116).wait(4).call(this.frame_120).wait(16));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AgxCIIAAkPIBjAAIAAEPg");
	this.shape.setTransform(-322.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FD").s().p("AhMCIIAAkPICZAAIAAEPg");
	this.shape_1.setTransform(-319.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009AFB").s().p("AhnCIIAAkPIDPAAIAAEPg");
	this.shape_2.setTransform(-317.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009AF9").s().p("AiCCIIAAkPIEFAAIAAEPg");
	this.shape_3.setTransform(-314.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009BF6").s().p("AidCIIAAkPIE7AAIAAEPg");
	this.shape_4.setTransform(-311.7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009BF4").s().p("Ai4CIIAAkPIFxAAIAAEPg");
	this.shape_5.setTransform(-309,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009CF2").s().p("AjTCIIAAkPIGnAAIAAEPg");
	this.shape_6.setTransform(-306.3,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009CF0").s().p("AjuCIIAAkPIHdAAIAAEPg");
	this.shape_7.setTransform(-303.6,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009CEE").s().p("AkJCIIAAkPIITAAIAAEPg");
	this.shape_8.setTransform(-300.9,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009DEC").s().p("AkkCIIAAkPIJJAAIAAEPg");
	this.shape_9.setTransform(-298.2,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009DEA").s().p("Ak/CIIAAkPIJ/AAIAAEPg");
	this.shape_10.setTransform(-295.5,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009EE7").s().p("AlaCIIAAkPIK1AAIAAEPg");
	this.shape_11.setTransform(-292.8,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009EE5").s().p("Al1CIIAAkPILrAAIAAEPg");
	this.shape_12.setTransform(-290.1,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009FE3").s().p("AmQCIIAAkPIMhAAIAAEPg");
	this.shape_13.setTransform(-287.4,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009FE1").s().p("AmrCIIAAkPINXAAIAAEPg");
	this.shape_14.setTransform(-284.7,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009FDF").s().p("AnGCIIAAkPIONAAIAAEPg");
	this.shape_15.setTransform(-282,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A0DD").s().p("AnhCIIAAkPIPDAAIAAEPg");
	this.shape_16.setTransform(-279.3,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A0DB").s().p("An8CIIAAkPIP5AAIAAEPg");
	this.shape_17.setTransform(-276.6,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A1D8").s().p("AoXCIIAAkPIQvAAIAAEPg");
	this.shape_18.setTransform(-273.9,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A1D6").s().p("AoyCIIAAkPIRlAAIAAEPg");
	this.shape_19.setTransform(-271.2,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A2D4").s().p("ApNCIIAAkPISbAAIAAEPg");
	this.shape_20.setTransform(-268.5,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A2D2").s().p("ApoCIIAAkPITRAAIAAEPg");
	this.shape_21.setTransform(-265.8,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A2D0").s().p("AqDCIIAAkPIUHAAIAAEPg");
	this.shape_22.setTransform(-263.1,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A3CE").s().p("AqfCIIAAkPIU+AAIAAEPg");
	this.shape_23.setTransform(-260.3,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A3CC").s().p("Aq6CIIAAkPIV0AAIAAEPg");
	this.shape_24.setTransform(-257.6,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A4C9").s().p("ArVCIIAAkPIWqAAIAAEPg");
	this.shape_25.setTransform(-254.9,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00A4C7").s().p("ArwCIIAAkPIXgAAIAAEPg");
	this.shape_26.setTransform(-252.2,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00A5C5").s().p("AsLCIIAAkPIYWAAIAAEPg");
	this.shape_27.setTransform(-249.5,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00A5C3").s().p("AsmCIIAAkPIZMAAIAAEPg");
	this.shape_28.setTransform(-246.8,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00A5C1").s().p("AtBCIIAAkPIaCAAIAAEPg");
	this.shape_29.setTransform(-244.1,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00A6BF").s().p("AtcCIIAAkPIa4AAIAAEPg");
	this.shape_30.setTransform(-241.4,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00A6BD").s().p("At3CIIAAkPIbuAAIAAEPg");
	this.shape_31.setTransform(-238.7,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00A7BA").s().p("AuSCIIAAkPIckAAIAAEPg");
	this.shape_32.setTransform(-236,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00A7B8").s().p("AutCIIAAkPIdaAAIAAEPg");
	this.shape_33.setTransform(-233.3,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00A8B6").s().p("AvICIIAAkPIeQAAIAAEPg");
	this.shape_34.setTransform(-230.6,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00A8B4").s().p("AvjCIIAAkPIfGAAIAAEPg");
	this.shape_35.setTransform(-227.9,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00A8B2").s().p("Av+CIIAAkPIf8AAIAAEPg");
	this.shape_36.setTransform(-225.2,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00A9B0").s().p("AwZCIIAAkPMAgzAAAIAAEPg");
	this.shape_37.setTransform(-222.5,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00A9AE").s().p("Aw0CIIAAkPMAhoAAAIAAEPg");
	this.shape_38.setTransform(-219.8,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00AAAB").s().p("AxPCIIAAkPMAifAAAIAAEPg");
	this.shape_39.setTransform(-217.1,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00AAA9").s().p("AxqCIIAAkPMAjVAAAIAAEPg");
	this.shape_40.setTransform(-214.4,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00ABA7").s().p("AyFCIIAAkPMAkLAAAIAAEPg");
	this.shape_41.setTransform(-211.7,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00ABA5").s().p("AygCIIAAkPMAlBAAAIAAEPg");
	this.shape_42.setTransform(-209,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00ABA3").s().p("Ay7CIIAAkPMAl3AAAIAAEPg");
	this.shape_43.setTransform(-206.3,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00ACA1").s().p("AzWCIIAAkPMAmtAAAIAAEPg");
	this.shape_44.setTransform(-203.6,0);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00AC9F").s().p("AzxCIIAAkPMAnjAAAIAAEPg");
	this.shape_45.setTransform(-200.9,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00AD9C").s().p("A0MCIIAAkPMAoZAAAIAAEPg");
	this.shape_46.setTransform(-198.2,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00AD9A").s().p("A0nCIIAAkPMApPAAAIAAEPg");
	this.shape_47.setTransform(-195.5,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00AE98").s().p("A1CCIIAAkPMAqFAAAIAAEPg");
	this.shape_48.setTransform(-192.8,0);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00AE96").s().p("A1dCIIAAkPMAq7AAAIAAEPg");
	this.shape_49.setTransform(-190.1,0);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00AE94").s().p("A14CIIAAkPMArxAAAIAAEPg");
	this.shape_50.setTransform(-187.4,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00AF92").s().p("A2TCIIAAkPMAsnAAAIAAEPg");
	this.shape_51.setTransform(-184.7,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00AF90").s().p("A2uCIIAAkPMAtdAAAIAAEPg");
	this.shape_52.setTransform(-182,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00B08D").s().p("A3JCIIAAkPMAuTAAAIAAEPg");
	this.shape_53.setTransform(-179.3,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00B08B").s().p("A3kCIIAAkPMAvJAAAIAAEPg");
	this.shape_54.setTransform(-176.6,0);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00B189").s().p("A3/CIIAAkPMAv/AAAIAAEPg");
	this.shape_55.setTransform(-173.9,0);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00B187").s().p("A4aCIIAAkPMAw1AAAIAAEPg");
	this.shape_56.setTransform(-171.2,0);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00B185").s().p("A41CIIAAkPMAxrAAAIAAEPg");
	this.shape_57.setTransform(-168.5,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00B283").s().p("A5QCIIAAkPMAyhAAAIAAEPg");
	this.shape_58.setTransform(-165.8,0);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00B281").s().p("A5rCIIAAkPMAzXAAAIAAEPg");
	this.shape_59.setTransform(-163.1,0);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00B37E").s().p("A6GCIIAAkPMA0NAAAIAAEPg");
	this.shape_60.setTransform(-160.4,0);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00B37C").s().p("A6hCIIAAkPMA1DAAAIAAEPg");
	this.shape_61.setTransform(-157.7,0);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00B47A").s().p("A68CIIAAkPMA15AAAIAAEPg");
	this.shape_62.setTransform(-155,0);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00B478").s().p("A7XCIIAAkPMA2vAAAIAAEPg");
	this.shape_63.setTransform(-152.3,0);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00B476").s().p("A7yCIIAAkPMA3lAAAIAAEPg");
	this.shape_64.setTransform(-149.6,0);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00B574").s().p("A8NCIIAAkPMA4bAAAIAAEPg");
	this.shape_65.setTransform(-146.9,0);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00B572").s().p("A8oCIIAAkPMA5RAAAIAAEPg");
	this.shape_66.setTransform(-144.2,0);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00B66F").s().p("A9DCIIAAkPMA6HAAAIAAEPg");
	this.shape_67.setTransform(-141.5,0);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00B66D").s().p("A9eCIIAAkPMA69AAAIAAEPg");
	this.shape_68.setTransform(-138.8,0);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00B76B").s().p("A95CIIAAkPMA7zAAAIAAEPg");
	this.shape_69.setTransform(-136.1,0);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00B769").s().p("A+UCIIAAkPMA8pAAAIAAEPg");
	this.shape_70.setTransform(-133.4,0);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00B767").s().p("A+vCIIAAkPMA9fAAAIAAEPg");
	this.shape_71.setTransform(-130.7,0);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00B865").s().p("A/KCIIAAkPMA+VAAAIAAEPg");
	this.shape_72.setTransform(-128,0);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00B863").s().p("A/lCIIAAkPMA/LAAAIAAEPg");
	this.shape_73.setTransform(-125.3,0);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00B960").s().p("EggAACIIAAkPMBABAAAIAAEPg");
	this.shape_74.setTransform(-122.6,0);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#00B95E").s().p("EggbACIIAAkPMBA3AAAIAAEPg");
	this.shape_75.setTransform(-119.9,0);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#00BA5C").s().p("Egg2ACIIAAkPMBBtAAAIAAEPg");
	this.shape_76.setTransform(-117.2,0);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#00BA5A").s().p("EghRACIIAAkPMBCjAAAIAAEPg");
	this.shape_77.setTransform(-114.5,0);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#00BA58").s().p("EghsACIIAAkPMBDZAAAIAAEPg");
	this.shape_78.setTransform(-111.8,0);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00BB56").s().p("EgiHACIIAAkPMBEPAAAIAAEPg");
	this.shape_79.setTransform(-109.1,0);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#00BB54").s().p("EgiiACIIAAkPMBFFAAAIAAEPg");
	this.shape_80.setTransform(-106.4,0);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00BC51").s().p("Egi+ACIIAAkPMBF9AAAIAAEPg");
	this.shape_81.setTransform(-103.6,0);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00BC4F").s().p("EgjYACIIAAkPMBGxAAAIAAEPg");
	this.shape_82.setTransform(-101,0);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00BD4D").s().p("Egj0ACIIAAkPMBHpAAAIAAEPg");
	this.shape_83.setTransform(-98.2,0);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#00BD4B").s().p("EgkPACIIAAkPMBIfAAAIAAEPg");
	this.shape_84.setTransform(-95.5,0);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00BD49").s().p("EgkqACIIAAkPMBJVAAAIAAEPg");
	this.shape_85.setTransform(-92.8,0);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00BE47").s().p("EglFACIIAAkPMBKLAAAIAAEPg");
	this.shape_86.setTransform(-90.1,0);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#00BE45").s().p("EglgACIIAAkPMBLBAAAIAAEPg");
	this.shape_87.setTransform(-87.4,0);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00BF42").s().p("Egl7ACIIAAkPMBL3AAAIAAEPg");
	this.shape_88.setTransform(-84.7,0);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00BF40").s().p("EgmWACIIAAkPMBMtAAAIAAEPg");
	this.shape_89.setTransform(-82,0);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00C03E").s().p("EgmxACIIAAkPMBNjAAAIAAEPg");
	this.shape_90.setTransform(-79.3,0);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00C03C").s().p("EgnMACIIAAkPMBOZAAAIAAEPg");
	this.shape_91.setTransform(-76.6,0);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#00C03A").s().p("EgnnACIIAAkPMBPPAAAIAAEPg");
	this.shape_92.setTransform(-73.9,0);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#00C138").s().p("EgoCACIIAAkPMBQFAAAIAAEPg");
	this.shape_93.setTransform(-71.2,0);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#00C136").s().p("EgodACIIAAkPMBQ7AAAIAAEPg");
	this.shape_94.setTransform(-68.5,0);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#00C233").s().p("Ego4ACIIAAkPMBRxAAAIAAEPg");
	this.shape_95.setTransform(-65.8,0);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#00C231").s().p("EgpTACIIAAkPMBSnAAAIAAEPg");
	this.shape_96.setTransform(-63.1,0);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#00C32F").s().p("EgpuACIIAAkPMBTdAAAIAAEPg");
	this.shape_97.setTransform(-60.4,0);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#00C32D").s().p("EgqJACIIAAkPMBUTAAAIAAEPg");
	this.shape_98.setTransform(-57.7,0);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00C32B").s().p("EgqkACIIAAkPMBVJAAAIAAEPg");
	this.shape_99.setTransform(-55,0);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#00C429").s().p("Egq/ACIIAAkPMBV/AAAIAAEPg");
	this.shape_100.setTransform(-52.3,0);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#00C427").s().p("EgraACIIAAkPMBW1AAAIAAEPg");
	this.shape_101.setTransform(-49.6,0);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#00C524").s().p("Egr1ACIIAAkPMBXrAAAIAAEPg");
	this.shape_102.setTransform(-46.9,0);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#00C522").s().p("EgsQACIIAAkPMBYhAAAIAAEPg");
	this.shape_103.setTransform(-44.2,0);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#00C620").s().p("EgsrACIIAAkPMBZXAAAIAAEPg");
	this.shape_104.setTransform(-41.5,0);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#00C61E").s().p("EgtGACIIAAkPMBaNAAAIAAEPg");
	this.shape_105.setTransform(-38.8,0);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#00C61C").s().p("EgthACIIAAkPMBbDAAAIAAEPg");
	this.shape_106.setTransform(-36.1,0);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#00C71A").s().p("Egt8ACIIAAkPMBb5AAAIAAEPg");
	this.shape_107.setTransform(-33.4,0);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#00C718").s().p("EguXACIIAAkPMBcvAAAIAAEPg");
	this.shape_108.setTransform(-30.7,0);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#00C815").s().p("EguyACIIAAkPMBdlAAAIAAEPg");
	this.shape_109.setTransform(-28,0);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#00C813").s().p("EgvNACIIAAkPMBebAAAIAAEPg");
	this.shape_110.setTransform(-25.3,0);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#00C911").s().p("EgvoACIIAAkPMBfRAAAIAAEPg");
	this.shape_111.setTransform(-22.6,0);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#00C90F").s().p("EgwDACIIAAkPMBgHAAAIAAEPg");
	this.shape_112.setTransform(-19.9,0);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#00C90D").s().p("EgweACIIAAkPMBg9AAAIAAEPg");
	this.shape_113.setTransform(-17.2,0);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#00CA0B").s().p("Egw5ACIIAAkPMBhzAAAIAAEPg");
	this.shape_114.setTransform(-14.5,0);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#00CA09").s().p("EgxUACIIAAkPMBipAAAIAAEPg");
	this.shape_115.setTransform(-11.8,0);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#00CB06").s().p("EgxvACIIAAkPMBjfAAAIAAEPg");
	this.shape_116.setTransform(-9.1,0);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#00CB04").s().p("EgyKACIIAAkPMBkVAAAIAAEPg");
	this.shape_117.setTransform(-6.4,0);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#00CC02").s().p("EgylACIIAAkPMBlLAAAIAAEPg");
	this.shape_118.setTransform(-3.7,0);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00CC00").s().p("EgzAACIIAAkPMBmBAAAIAAEPg");
	this.shape_119.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[]},1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.btnVazo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.adam();
	this.instance.parent = this;
	this.instance.setTransform(-287,-205,1.04,1.519);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AsPeqMAAAg9TIYfAAMAAAA9Tg");
	this.shape.setTransform(-231.7,-41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-287,-205,99.9,340.3);


(lib.btnSaat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bambi();
	this.instance.parent = this;
	this.instance.setTransform(14,-49,1.002,1.002);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ArFLFIAAzAIAnAAIAAjJIVkAAIAANrIgVAAIAAFjIgkAAIAAC7g");
	this.shape.setTransform(56.8,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14,-49,98.2,116.2);


(lib.btnKomidin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cadıryeni();
	this.instance.parent = this;
	this.instance.setTransform(-296,59,0.998,0.998);

	this.instance_1 = new lib.cadir();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-296,59,0.998,0.998);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ASqPqQhWAYhtAAQhtAAhWgYQgwgCgogEQhTgIAAgMQAAgKBDgHIgUgNQjnATkNAAQpAAAmYhZQi+gqhmgyQh8A8ipgBQi9ABiGhLQiGhKAAhqIAAgCQgggMgbgTQhHgxAAhGQAAhFBHgxQBHgyBkAAIARABQAAhzBKhRQBKhQBpAAIAUAAQAcg2A4gtQA7gvBHgXIAAgHQAAhiBNhFQA+g4BRgLQAVg+AwgxQBVhYB4AAQAdAAAbAFQAJgiATgcQAJgNAKgKQgTgkAAgqQAAhZBUg/QBVg/B4ABQBnAABNAtQCqhTDaAAQEeAADKCOIAOAKQCpAjCQBeQCPiBCzAAQEHAAC6EWQC6EWAAGJQAAGKi6EWQi6EWkHAAQhNAAhHgYgAv0GiIgRAPQAkAZAXAdQBIgXBegUQDJgsDxgXQhVisAAjNQAAifA0iMQgVgZgQgaIgPALIABAXQAAA8gUA0QAVAiAAAoQAABNhNA2QhMA2hsAAIACAJQAgA0AABBQAABihKBFQhJBGhoAAQgeAAgbgGIggAGg");
	this.shape.setTransform(-124.2,148.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-296,59,349.3,163.7);


(lib.btnIsik = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tilki();
	this.instance.parent = this;
	this.instance.setTransform(-38,2,0.985,0.985);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AqDHlIAAvJIUGAAIAAPJg");
	this.shape.setTransform(10.7,33.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,2,76.8,63);


(lib.btnCerceve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.agacyeni();
	this.instance.parent = this;
	this.instance.setTransform(-104,-132,1.066,1.066);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Av3YMMAAAgwXIfvAAMAAAAwXg");
	this.shape.setTransform(-12.6,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-132,174.9,237.8);


(lib.btnYeniden = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.retry();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.539,0.539);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,275.8,275.8);


(lib.btnBaslaDiyor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.button1();
	this.instance.parent = this;

	this.instance_1 = new lib.button2();
	this.instance_1.parent = this;

	this.instance_2 = new lib.button3();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,610,525);


(lib.btnObj33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.denizkabugu();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("At+LzIAA3lIb9AAIAAXlg");
	this.shape.setTransform(51.5,41.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,82);


(lib.btnObj22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.palyaco();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("At1JeIAAy7IbrAAIAAS7g");
	this.shape.setTransform(48.7,27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112,56);


(lib.btnObj11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.balik();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AtiJCIAAyDIbFAAIAASDg");
	this.shape.setTransform(57.5,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,73);


(lib.btnObj3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kutukyeni();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ap5HcIAAu3ITzAAIAAO3g");
	this.shape.setTransform(45.9,20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86,47);


(lib.btnObj2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sincapyeni();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AocJLIAAyVIQ5AAIAASVg");
	this.shape.setTransform(28.8,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61,72);


(lib.btnObj1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mantaryeni();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AqMI5IAAxxIUZAAIAARxg");
	this.shape.setTransform(47.6,29.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95,58);


(lib.mcTickMeyveSuyu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mcTickYildiz = new lib.mcTickYildiz();
	this.mcTickYildiz.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mcTickYildiz).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcTickMeyveSuyu, new cjs.Rectangle(-31.8,-31.8,63.7,63.7), null);


(lib.mcTickBot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mcTickMeyveSuyu = new lib.mcTickMeyveSuyu();
	this.mcTickMeyveSuyu.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mcTickMeyveSuyu).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcTickBot, new cjs.Rectangle(-31.8,-31.8,63.7,63.7), null);


(lib.mcTickTop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mcTickBot = new lib.mcTickBot();
	this.mcTickBot.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mcTickBot).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcTickTop, new cjs.Rectangle(-31.8,-31.8,63.7,63.7), null);


(lib.mcTickTas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mcTickTop = new lib.mcTickTop();
	this.mcTickTop.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mcTickTop).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcTickTas, new cjs.Rectangle(-31.8,-31.8,63.7,63.7), null);


(lib.mcTickGunes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mcTickTas = new lib.mcTickTas();
	this.mcTickTas.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mcTickTas).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcTickGunes, new cjs.Rectangle(-31.8,-31.8,63.7,63.7), null);


// stage content:
(lib.visualDiscrimination_level3v1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var canvas = document.getElementById("canvas");
		
		canvas.innerHTML = "<application><storySelection></storySelection><duration></duration></application>";
		
		//Btn Decleration
		btnStart = this.btnStart;
		btn2sn = this.btn2sn;
		btn4sn = this.btn4sn;
		btn6sn = this.btn6sn;
		btn8sn = this.btn8sn;
		btn2snAfter = this.btn2snAfter;
		btn4snAfter = this.btn4snAfter;
		btn6snAfter = this.btn6snAfter;
		btn8snAfter = this.btn8snAfter;
		
		btnSelectOda = this.btnSelectOda;
		btnSelectPlaj = this.btnSelectPlaj;
		btnSelectOdaAfter = this.btnSelectOdaAfter;
		btnSelectPlajAfter = this.btnSelectPlajAfter;
		
		var afterObjectsTime = [btn2snAfter,btn4snAfter,btn6snAfter,btn8snAfter];
		var afterObjectsStory = [btnSelectOdaAfter,btnSelectPlajAfter];
		
		var btnTime = [btn2sn,btn4sn,btn6sn,btn8sn];
		var btnStory = [btnSelectOda,btnSelectPlaj];
		
		//Events
		btnStart.addEventListener("click", btnStart_Click.bind(this));
		btn2sn.addEventListener("click", btn2sn_Click.bind(this));
		btn4sn.addEventListener("click", btn4sn_Click.bind(this));
		btn6sn.addEventListener("click", btn6sn_Click.bind(this));
		btn8sn.addEventListener("click", btn8sn_Click.bind(this));
		btnSelectOda.addEventListener("click", btnSelectOda_Click.bind(this));
		btnSelectPlaj.addEventListener("click", btnSelectPlaj_Click.bind(this));
		
		function btn2sn_Click(event){
			allVisible(1);
			allHide(1);
			btn2sn.visible = false;
			btn2snAfter.visible = true;
			generateDurationHTMl(2);
		}
		
		function btn4sn_Click(event){
			allVisible(1);
			allHide(1);
			btn4sn.visible = false;
			btn4snAfter.visible = true;
			generateDurationHTMl(4);
		}
		
		function btn6sn_Click(event){
			allVisible(1);
			allHide(1);
			btn6sn.visible = false;
			btn6snAfter.visible = true;
			generateDurationHTMl(6);
		}
		
		function btn8sn_Click(event){
			allVisible(1);
			allHide(1);
			btn8sn.visible = false;
			btn8snAfter.visible = true;
			generateDurationHTMl(8);
		}
		
		function btnSelectOda_Click(event){
			allVisible(2);
			allHide(2);
			btnSelectOda.visible = false;
			btnSelectOdaAfter.visible = true;
			generateStorySelectionHTMl(2);
		}
		
		function btnSelectPlaj_Click(event){
			allVisible(2);
			allHide(2);
			btnSelectPlaj.visible = false;
			btnSelectPlajAfter.visible = true;
			generateStorySelectionHTMl(1);
		}
		
		
		
		function generateStorySelectionHTMl(storySelection) {
			document.getElementsByTagName("storyselection").value = storySelection;
		}
		
		function generateDurationHTMl(duration){
			document.getElementsByTagName("duration").value = duration;
		}
		
		
		function allHide(type){
			if(type==1){
				//hide after Time objects
				var arrLength = afterObjectsTime.length;
				for(var i = 0; i< arrLength; i++){
					
					afterObjectsTime[i].visible = false;
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
				var arrLength = btnTime.length;
				for(var i = 0; i< arrLength; i++){
					
					btnTime[i].visible = true;
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
		
		var btnTop = this.btnTop;
		var btnBot = this.btnBot;
		var btnGunes = this.btnGunes;
		var btnTas = this.btnTas;
		var btnMeyveSuyu = this.btnMeyveSuyu;
		var btnYildiz = this.btnYildiz;
		var btnObj11 = this.btnObj11;
		var btnObj22 = this.btnObj22;
		var btnObj33= this.btnObj33;
		
		var mcTickTop = this.mcTickTop;
		var mcTickBot = this.mcTickBot;
		var mcTickGunes = this.mcTickGunes;
		var mcTickTas = this.mcTickTas;
		var mcTickMeyveSuyu = this.mcTickMeyveSuyu;
		var mcTickYildiz = this.mcTickYildiz;
		var mcTickObj1 = this.mcTickObj1;
		var mcTickObj2 = this.mcTickObj2;
		var mcTickObj3 = this.mcTickObj3;
		
		var mcLoader2 = this.mcLoader2;
		var mcLoader4 = this.mcLoader4;
		var mcLoader6 = this.mcLoader6;
		var mcLoader8 = this.mcLoader8;
		
		var mouseOverTime,isMouseOut, tickerTime, currentObject, currentObjectIndex, currentLoader;
		
		
		var duration = document.getElementsByTagName("duration").value;
		var storySelection = document.getElementsByTagName("storyselection").value;
		
		if (storySelection == 2)
			this.gotoAndStop(2);
		
		
		var objectArray = [btnTop, btnGunes, btnTas, btnMeyveSuyu, btnYildiz,btnObj11,btnObj22,btnObj33];
		//var objectArray = [btnTop];
		var tickArray = [mcTickTop, mcTickGunes, mcTickTas, mcTickMeyveSuyu, mcTickYildiz,mcTickObj1,mcTickObj2,mcTickObj3];
		var loaderArray = [mcLoader2,mcLoader4,mcLoader6,mcLoader8];
		
		
		
		// Main
		addingEventListeners();
		startTicker();
		allObjectsVisible(false, "tick");
		prepareLoader();
		startAttempt();
		// Functions
		
		function prepareLoader(){
			allObjectsVisible(false, "loader");
			if(duration == 2)
				currentLoader = loaderArray[0];
			else if(duration == 4)
				currentLoader = loaderArray[1];
			else if(duration == 6)
				currentLoader = loaderArray[2];
			else if(duration == 8)
				currentLoader = loaderArray[3];
		}
		
		function allObjectsVisible(status, objectType){
			if(objectType == "objects"){
				for(var i = 0;i<objectArray.length;i++)
					objectArray[i].visible = status;
			}else if(objectType == "tick"){
				for(var i = 0;i<tickArray.length;i++)
					tickArray[i].visible = status;
			}else if(objectType == "loader"){
				for(var i = 0;i<loaderArray.length;i++)
					loaderArray[i].visible = status;
			}
		}
		
		function findIndex(){
			for(var i = 0;i<objectArray.length;i++){
				if(currentObject == objectArray[i])
					currentObjectIndex = i;
			}
		}
		
		
		function addingEventListeners(){
			for(var i = 0;i<objectArray.length;i++){
				//console.log("objectArray->",objectArray);
				objectArray[i].addEventListener("mouseout", object_MouseOut.bind(objectArray[i]));
				objectArray[i].addEventListener("mouseover", object_MouseOver.bind(objectArray[i]));
			}
		}
		var count = 0;
		function eventTickerForObjects(event){
			if(!isMouseOut){
				tickerTime = createjs.Ticker.getTime()/1000;
				var diff = tickerTime - mouseOverTime;
				//console.log("diff->",diff);
				if(diff>duration){
					mouseOverTime = tickerTime;
					findIndex();
					tickArray[currentObjectIndex].visible = true;
					currentObject.mouseEnabled = false;
					count++;
					if(count==8){
						object_MouseOut();
						localThis.gotoAndStop(3);
					}
					
				}
			}
			
		}
		
		function object_MouseOut(event){
			createjs.Ticker.removeEventListener("tick", eventTickerForObjects);
			isMouseOut = true;
			currentLoader.visible = false;
			currentLoader.gotoAndStop(0);
		}
		
		
		
		function object_MouseOver(event){
			mouseOverTime = createjs.Ticker.getTime()/1000;
			createjs.Ticker.addEventListener("tick", eventTickerForObjects);
			currentObject = this;
			isMouseOut = false;
			//console.log("-->",this);
			//mcLoader2.visible = true;
			//mcLoader2.gotoAndPlay(0);
			
			currentLoader.visible = true;
			currentLoader.gotoAndPlay(1);
			
		}
		
		function startTicker(){
			
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
			createjs.Ticker.setFPS(60);
			
		}
		
		
		
		/*
		
		function eventTicker2(event){
			//console.log(createjs.Ticker.getTime()/1000,stage.mouseX,stage.mouseY);
			 //sendData("","kutu"+ count, true, stage.mouseX,stage.mouseY);
			sendData(stage.mouseX,stage.mouseY,createjs.Ticker.getTime()/1000,true);
				
		}
		
		function sendMousePointerLocation(){
			createjs.Ticker.addEventListener("tick", eventTicker2);
			
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
			createjs.Ticker.setFPS(60);
			
		}
		
		//sendMousePointerLocation();
		
		
		function sendData(mouseX = 0, mouseY = 0, time = 0,isMousePointer = false){
			var siteURL = "http://parkintech.com/flash/visualDiscrimination/";
			if(!isMousePointer){
				siteURL += "data.php?type=";
				siteURL += type;
				siteURL += "&kutuNo=";
				siteURL += value;
				//console.log(siteURL);
				
			}
			else{
				siteURL += "dataSend.php?x=";
				siteURL += mouseX;
				siteURL += "&y=";
				siteURL += mouseY;
				siteURL += "&time=";
				siteURL += time;
				//console.log(siteURL);
			}
			
			var queue = new createjs.LoadQueue(true);
			queue.on('complete',completeF,this);
			queue.loadFile(siteURL);
			function completeF(e){
				//console.log(queue._loadedResults);
			}
		}
		*/
		
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
	}
	this.frame_2 = function() {
		this.stop();
		
		/* Definitions */
		var localThis = this;
		
		var btnCerceve = this.btnCerceve;
		var btnIsik = this.btnIsik;
		var btnKomidin = this.btnKomidin;
		var btnSaat = this.btnSaat;
		var btnVazo = this.btnVazo;
		var btnObj1 = this.btnObj1;
		var btnObj2 = this.btnObj2;
		var btnObj3 = this.btnObj3;
		
		var mcTickTop = this.mcTickTop;
		var mcTickGunes = this.mcTickGunes;
		var mcTickTas = this.mcTickTas;
		var mcTickMeyveSuyu = this.mcTickMeyveSuyu;
		var mcTickYildiz = this.mcTickYildiz;
		var mcTickObj1 = this.mcTickObj1;
		var mcTickObj2 = this.mcTickObj2;
		var mcTickObj3 = this.mcTickObj3;
		
		var mcLoader2 = this.mcLoader2;
		var mcLoader4 = this.mcLoader4;
		var mcLoader6 = this.mcLoader6;
		var mcLoader8 = this.mcLoader8;
		
		
		var mouseOverTime,isMouseOut, tickerTime, currentObject, currentObjectIndex, currentLoader;
		
		
		var duration = document.getElementsByTagName("duration").value;
		var storySelection = document.getElementsByTagName("storyselection").value;
		
		
		var objectArray = [btnVazo, btnCerceve,  btnIsik, btnSaat, btnKomidin,btnObj1,btnObj2,btnObj3];
		//var objectArray = [btnTop];
		var tickArray = [mcTickMeyveSuyu, mcTickGunes, mcTickTas, mcTickYildiz, mcTickTop,mcTickObj1,mcTickObj2,mcTickObj3];
		var loaderArray = [mcLoader2,mcLoader4,mcLoader6,mcLoader8];
		
		
		
		// Main
		addingEventListeners();
		startTicker();
		allObjectsVisible(false, "tick");
		prepareLoader();
		startAttempt();
		// Functions
		
		function prepareLoader(){
			allObjectsVisible(false, "loader");
			if(duration == 2)
				currentLoader = loaderArray[0];
			else if(duration == 4)
				currentLoader = loaderArray[1];
			else if(duration == 6)
				currentLoader = loaderArray[2];
			else if(duration == 8)
				currentLoader = loaderArray[3];
		}
		
		function allObjectsVisible(status, objectType){
			if(objectType == "objects"){
				for(var i = 0;i<objectArray.length;i++)
					objectArray[i].visible = status;
			}else if(objectType == "tick"){
				for(var i = 0;i<tickArray.length;i++)
					tickArray[i].visible = status;
			}else if(objectType == "loader"){
				for(var i = 0;i<loaderArray.length;i++)
					loaderArray[i].visible = status;
			}
		}
		
		function findIndex(){
			for(var i = 0;i<objectArray.length;i++){
				if(currentObject == objectArray[i])
					currentObjectIndex = i;
			}
		}
		
		
		function addingEventListeners(){
			for(var i = 0;i<objectArray.length;i++){
				//console.log("objectArray->",objectArray);
				objectArray[i].addEventListener("mouseout", object_MouseOut.bind(objectArray[i]));
				objectArray[i].addEventListener("mouseover", object_MouseOver.bind(objectArray[i]));
			}
		}
		var count = 0;
		function eventTickerForObjects(event){
			if(!isMouseOut){
				tickerTime = createjs.Ticker.getTime()/1000;
				var diff = tickerTime - mouseOverTime;
				//console.log("diff->",diff);
				if(diff>duration){
					mouseOverTime = tickerTime;
					findIndex();
					tickArray[currentObjectIndex].visible = true;
					currentObject.mouseEnabled = false;
					count++;
					if(count==8){
						object_MouseOut();
						localThis.gotoAndStop(3);
					}
				}
			}
			
		}
		
		function object_MouseOut(event){
			createjs.Ticker.removeEventListener("tick", eventTickerForObjects);
			isMouseOut = true;
			currentLoader.visible = false;
			currentLoader.gotoAndStop(0);
		}
		
		
		
		function object_MouseOver(event){
			mouseOverTime = createjs.Ticker.getTime()/1000;
			createjs.Ticker.addEventListener("tick", eventTickerForObjects);
			currentObject = this;
			isMouseOut = false;
			//console.log("-->",this);
			//mcLoader2.visible = true;
			//mcLoader2.gotoAndPlay(0);
			
			currentLoader.visible = true;
			currentLoader.gotoAndPlay(1);
			
		}
		
		function startTicker(){
			
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
			createjs.Ticker.setFPS(60);
			
		}
		
		/*
		
		function eventTicker2(event){
			//console.log(createjs.Ticker.getTime()/1000,stage.mouseX,stage.mouseY);
			 //sendData("","kutu"+ count, true, stage.mouseX,stage.mouseY);
			sendData(stage.mouseX,stage.mouseY,createjs.Ticker.getTime()/1000,true);
				
		}
		
		function sendMousePointerLocation(){
			createjs.Ticker.addEventListener("tick", eventTicker2);
			
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
			createjs.Ticker.setFPS(60);
			
		}
		
		sendMousePointerLocation();
		
		
		function sendData(mouseX = 0, mouseY = 0, time = 0,isMousePointer = false){
			var siteURL = "http://parkintech.com/flash/visualDiscrimination/";
			if(!isMousePointer){
				siteURL += "data.php?type=";
				siteURL += type;
				siteURL += "&kutuNo=";
				siteURL += value;
				//console.log(siteURL);
				
			}
			else{
				siteURL += "dataSend.php?x=";
				siteURL += mouseX;
				siteURL += "&y=";
				siteURL += mouseY;
				siteURL += "&time=";
				siteURL += time;
				//console.log(siteURL);
			}
			
			var queue = new createjs.LoadQueue(true);
			queue.on('complete',completeF,this);
			queue.loadFile(siteURL);
			function completeF(e){
				//console.log(queue._loadedResults);
			}
		}
		
		*/
		
		
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
	}
	this.frame_3 = function() {
		this.stop();
		var localThis = this;
		stopAttempt();
		var btnYeniden = this.btnYeniden;
		
		btnYeniden.addEventListener("click", btnYeniden_Click.bind(this));
		
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
		
		
		function btnYeniden_Click(event){
			location.reload();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(2));

	// mcLoader8
	this.mcLoader8 = new lib.mcLoader8();
	this.mcLoader8.parent = this;
	this.mcLoader8.setTransform(341.5,41.7);
	this.mcLoader8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcLoader8).wait(1).to({_off:false},0).wait(1).to({_off:true},1).wait(2));

	// mcLoader6
	this.mcLoader6 = new lib.mcLoader6();
	this.mcLoader6.parent = this;
	this.mcLoader6.setTransform(341.5,41.7);
	this.mcLoader6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcLoader6).wait(1).to({_off:false},0).wait(1).to({_off:true},1).wait(2));

	// mcLoader4
	this.mcLoader4 = new lib.mcLoader4();
	this.mcLoader4.parent = this;
	this.mcLoader4.setTransform(341.5,41.7);
	this.mcLoader4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcLoader4).wait(1).to({_off:false},0).wait(1).to({_off:true},1).wait(2));

	// mcLoader2
	this.mcLoader2 = new lib.mcLoader2();
	this.mcLoader2.parent = this;
	this.mcLoader2.setTransform(341.5,41.7);
	this.mcLoader2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcLoader2).wait(1).to({_off:false},0).wait(1).to({_off:true},1).wait(2));

	// btnKomidin
	this.btnKomidin = new lib.btnKomidin();
	this.btnKomidin.parent = this;
	this.btnKomidin.setTransform(614.8,531.4);
	this.btnKomidin._off = true;
	new cjs.ButtonHelper(this.btnKomidin, 0, 1, 2, false, new lib.btnKomidin(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnKomidin).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// btnSaat
	this.btnSaat = new lib.btnSaat();
	this.btnSaat.parent = this;
	this.btnSaat.setTransform(508.3,486.7);
	this.btnSaat._off = true;
	new cjs.ButtonHelper(this.btnSaat, 0, 1, 2, false, new lib.btnSaat(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnSaat).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// btnIsik
	this.btnIsik = new lib.btnIsik();
	this.btnIsik.parent = this;
	this.btnIsik.setTransform(353.1,496);
	this.btnIsik._off = true;
	new cjs.ButtonHelper(this.btnIsik, 0, 1, 2, false, new lib.btnIsik(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnIsik).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// btnCerceve
	this.btnCerceve = new lib.btnCerceve();
	this.btnCerceve.parent = this;
	this.btnCerceve.setTransform(129.2,342.8);
	this.btnCerceve._off = true;
	new cjs.ButtonHelper(this.btnCerceve, 0, 1, 2, false, new lib.btnCerceve(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnCerceve).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// btnObj3
	this.btnObj3 = new lib.btnObj3();
	this.btnObj3.parent = this;
	this.btnObj3.setTransform(262,641.5,1,1,0,0,0,43,23.5);
	this.btnObj3._off = true;
	new cjs.ButtonHelper(this.btnObj3, 0, 1, 2, false, new lib.btnObj3(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnObj3).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// btnObj2
	this.btnObj2 = new lib.btnObj2();
	this.btnObj2.parent = this;
	this.btnObj2.setTransform(447.5,400,1,1,0,0,0,30.5,36);
	this.btnObj2._off = true;
	new cjs.ButtonHelper(this.btnObj2, 0, 1, 2, false, new lib.btnObj2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnObj2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// btnObj1
	this.btnObj1 = new lib.btnObj1();
	this.btnObj1.parent = this;
	this.btnObj1.setTransform(296.5,409,1,1,0,0,0,47.5,29);
	this.btnObj1._off = true;
	new cjs.ButtonHelper(this.btnObj1, 0, 1, 2, false, new lib.btnObj1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnObj1).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// btnVazo
	this.btnVazo = new lib.btnVazo();
	this.btnVazo.parent = this;
	this.btnVazo.setTransform(338.3,700.6,1,0.661,0,0,0,0.1,69.1);
	this.btnVazo._off = true;
	new cjs.ButtonHelper(this.btnVazo, 0, 1, 2, false, new lib.btnVazo(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnVazo).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// mcTickMeyveSuyu
	this.mcTickMeyveSuyu = new lib.mcTickMeyveSuyu();
	this.mcTickMeyveSuyu.parent = this;
	this.mcTickMeyveSuyu.setTransform(773.2,624.3);
	this.mcTickMeyveSuyu._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTickMeyveSuyu).wait(1).to({_off:false},0).wait(1).to({x:778,y:641.6},0).to({_off:true},1).wait(2));

	// mcTickGunes
	this.mcTickGunes = new lib.mcTickGunes();
	this.mcTickGunes.parent = this;
	this.mcTickGunes.setTransform(1251.1,83.1);
	this.mcTickGunes._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTickGunes).wait(1).to({_off:false},0).wait(1).to({x:778,y:416.7},0).to({_off:true},1).wait(2));

	// mcTickTas
	this.mcTickTas = new lib.mcTickTas();
	this.mcTickTas.parent = this;
	this.mcTickTas.setTransform(1260.3,560.6);
	this.mcTickTas._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTickTas).wait(1).to({_off:false},0).wait(1).to({x:1012.4,y:522.1},0).to({_off:true},1).wait(2));

	// mcTickYildiz
	this.mcTickYildiz = new lib.mcTickYildiz();
	this.mcTickYildiz.parent = this;
	this.mcTickYildiz.setTransform(800.6,207.7);
	this.mcTickYildiz._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTickYildiz).wait(1).to({_off:false},0).wait(1).to({x:1271.7,y:522.1},0).to({_off:true},1).wait(2));

	// mcTickTop
	this.mcTickTop = new lib.mcTickTop();
	this.mcTickTop.parent = this;
	this.mcTickTop.setTransform(752.7,432.5);
	this.mcTickTop._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTickTop).wait(1).to({_off:false},0).wait(1).to({x:1195,y:660.2},0).to({_off:true},1).wait(2));

	// mcTickObj3
	this.mcTickObj3 = new lib.mcTickObj3();
	this.mcTickObj3.parent = this;
	this.mcTickObj3.setTransform(1024.3,609.8,1,1,0,0,0,31.9,31.9);
	this.mcTickObj3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTickObj3).wait(1).to({_off:false},0).wait(1).to({x:917.4,y:633.2},0).to({_off:true},1).wait(2));

	// mcTickObj2
	this.mcTickObj2 = new lib.mcTickObj2();
	this.mcTickObj2.parent = this;
	this.mcTickObj2.setTransform(1070.3,153.9,1,1,0,0,0,31.9,31.9);
	this.mcTickObj2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTickObj2).wait(1).to({_off:false},0).wait(1).to({x:1118.8,y:404.2},0).to({_off:true},1).wait(2));

	// mcTickObj1
	this.mcTickObj1 = new lib.mcTickObj1();
	this.mcTickObj1.parent = this;
	this.mcTickObj1.setTransform(986.6,273.9,1,1,0,0,0,31.9,31.9);
	this.mcTickObj1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTickObj1).wait(1).to({_off:false},0).wait(1).to({x:937.4,y:411.9},0).to({_off:true},1).wait(2));

	// saribalik
	this.btnObj11 = new lib.btnObj11();
	this.btnObj11.parent = this;
	this.btnObj11.setTransform(292,279.5,1,1,0,0,0,52,36.5);
	this.btnObj11._off = true;
	new cjs.ButtonHelper(this.btnObj11, 0, 1, 2, false, new lib.btnObj11(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnObj11).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// btnObj3
	this.btnObj33 = new lib.btnObj33();
	this.btnObj33.parent = this;
	this.btnObj33.setTransform(339,612,1,1,0,0,0,51,41);
	this.btnObj33._off = true;
	new cjs.ButtonHelper(this.btnObj33, 0, 1, 2, false, new lib.btnObj33(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnObj33).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// btnObj2
	this.btnObj22 = new lib.btnObj22();
	this.btnObj22.parent = this;
	this.btnObj22.setTransform(357,149,1,1,0,0,0,56,28);
	this.btnObj22._off = true;
	new cjs.ButtonHelper(this.btnObj22, 0, 1, 2, false, new lib.btnObj22(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnObj22).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// gunes
	this.btnGunes = new lib.btnGunes();
	this.btnGunes.parent = this;
	this.btnGunes.setTransform(534.3,115.7,1.019,1.019);
	this.btnGunes._off = true;
	new cjs.ButtonHelper(this.btnGunes, 0, 1, 2, false, new lib.btnGunes(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnGunes).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// meyvesuyu
	this.btnMeyveSuyu = new lib.btnMeyveSuyu();
	this.btnMeyveSuyu.parent = this;
	this.btnMeyveSuyu.setTransform(70.5,621.6);
	this.btnMeyveSuyu._off = true;
	new cjs.ButtonHelper(this.btnMeyveSuyu, 0, 1, 2, false, new lib.btnMeyveSuyu(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnMeyveSuyu).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// towel
	this.btnTas = new lib.btnTas();
	this.btnTas.parent = this;
	this.btnTas.setTransform(500.7,590.8);
	this.btnTas._off = true;
	new cjs.ButtonHelper(this.btnTas, 0, 1, 2, false, new lib.btnTas(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnTas).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// cloud
	this.btnYildiz = new lib.btnYildiz();
	this.btnYildiz.parent = this;
	this.btnYildiz.setTransform(166.5,110.2);
	this.btnYildiz._off = true;
	new cjs.ButtonHelper(this.btnYildiz, 0, 1, 2, false, new lib.btnYildiz(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnYildiz).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// top
	this.btnTop = new lib.btnTop();
	this.btnTop.parent = this;
	this.btnTop.setTransform(85.5,397);
	this.btnTop._off = true;
	new cjs.ButtonHelper(this.btnTop, 0, 1, 2, false, new lib.btnTop(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnTop).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// btnYeniden
	this.btnYeniden = new lib.btnYeniden();
	this.btnYeniden.parent = this;
	this.btnYeniden.setTransform(676.9,510.9,1,1,0,0,0,137.9,137.9);
	this.btnYeniden._off = true;
	new cjs.ButtonHelper(this.btnYeniden, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnYeniden).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// text
	this.text = new cjs.Text("OYUN BAŞARILI BİR ŞEKİLDE BİTTİ", "bold 110px 'BourgeoisTRUBol'", "#FFFF00");
	this.text.lineHeight = 96;
	this.text.lineWidth = 814;
	this.text.parent = this;
	this.text.setTransform(291.9,132.6);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,7);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// btn
	this.btnStart = new lib.btnBaslaDiyor();
	this.btnStart.parent = this;
	this.btnStart.setTransform(605.9,282.9,0.717,0.717,0,0,0,219,99);
	new cjs.ButtonHelper(this.btnStart, 0, 1, 2, false, new lib.btnBaslaDiyor(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnStart).to({_off:true},1).wait(4));

	// kitap_t.png
	this.btnSelectPlajAfter = new lib.btnPlajAfter();
	this.btnSelectPlajAfter.parent = this;
	this.btnSelectPlajAfter.setTransform(248,258,1,1,0,0,0,203,87);

	this.timeline.addTween(cjs.Tween.get(this.btnSelectPlajAfter).to({_off:true},1).wait(4));

	// oda_t.png
	this.btnSelectOdaAfter = new lib.btnOdaAfter();
	this.btnSelectOdaAfter.parent = this;
	this.btnSelectOdaAfter.setTransform(248,511,1,1,0,0,0,203,87);

	this.timeline.addTween(cjs.Tween.get(this.btnSelectOdaAfter).to({_off:true},1).wait(4));

	// 8sn_t.png
	this.btn8snAfter = new lib.btn8snAfter();
	this.btn8snAfter.parent = this;
	this.btn8snAfter.setTransform(1250,511,1,1,0,0,0,64,48);

	this.timeline.addTween(cjs.Tween.get(this.btn8snAfter).to({_off:true},1).wait(4));

	// 6sn_t.png
	this.btn6snAfter = new lib.btn6snAfter();
	this.btn6snAfter.parent = this;
	this.btn6snAfter.setTransform(1054,511,1,1,0,0,0,64,48);

	this.timeline.addTween(cjs.Tween.get(this.btn6snAfter).to({_off:true},1).wait(4));

	// 4sn_t.png
	this.btn4snAfter = new lib.btn4snAfter();
	this.btn4snAfter.parent = this;
	this.btn4snAfter.setTransform(1242,246,1,1,0,0,0,64,48);

	this.timeline.addTween(cjs.Tween.get(this.btn4snAfter).to({_off:true},1).wait(4));

	// 2sn_t.png
	this.btn2snAfter = new lib.btn2snAfter();
	this.btn2snAfter.parent = this;
	this.btn2snAfter.setTransform(1054,246,1,1,0,0,0,64,48);

	this.timeline.addTween(cjs.Tween.get(this.btn2snAfter).to({_off:true},1).wait(4));

	// oda_n.png
	this.btnSelectOda = new lib.btnSelectOda();
	this.btnSelectOda.parent = this;
	this.btnSelectOda.setTransform(181,522.5,1,1,0,0,0,118,75.5);
	new cjs.ButtonHelper(this.btnSelectOda, 0, 1, 2, false, new lib.btnSelectOda(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnSelectOda).to({_off:true},1).wait(4));

	// 8sn_n.png
	this.btn8sn = new lib.btn8sn();
	this.btn8sn.parent = this;
	this.btn8sn.setTransform(1250,511,1,1,0,0,0,48,64);
	new cjs.ButtonHelper(this.btn8sn, 0, 1, 2, false, new lib.btn8sn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn8sn).to({_off:true},1).wait(4));

	// 6sn_n.png
	this.btn6sn = new lib.btn6sn();
	this.btn6sn.parent = this;
	this.btn6sn.setTransform(1054,511,1,1,0,0,0,48,64);
	new cjs.ButtonHelper(this.btn6sn, 0, 1, 2, false, new lib.btn6sn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn6sn).to({_off:true},1).wait(4));

	// 4sn_n.png
	this.btn4sn = new lib.btn4sn();
	this.btn4sn.parent = this;
	this.btn4sn.setTransform(1242,246,1,1,0,0,0,48,64);
	new cjs.ButtonHelper(this.btn4sn, 0, 1, 2, false, new lib.btn4sn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn4sn).to({_off:true},1).wait(4));

	// 2sn_n.png
	this.btn2sn = new lib.btn2sn();
	this.btn2sn.parent = this;
	this.btn2sn.setTransform(1054,246,1,1,0,0,0,48,64);
	new cjs.ButtonHelper(this.btn2sn, 0, 1, 2, false, new lib.btn2sn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn2sn).to({_off:true},1).wait(4));

	// kitap_n.png
	this.btnSelectPlaj = new lib.btnSelectPlaj();
	this.btnSelectPlaj.parent = this;
	this.btnSelectPlaj.setTransform(181,257.5,1,1,0,0,0,118,75.5);
	new cjs.ButtonHelper(this.btnSelectPlaj, 0, 1, 2, false, new lib.btnSelectPlaj(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnSelectPlaj).to({_off:true},1).wait(4));

	// background
	this.instance = new lib.orjinalarkaplan();
	this.instance.parent = this;
	this.instance.setTransform(1,0);

	this.instance_1 = new lib.deniz2();
	this.instance_1.parent = this;

	this.instance_2 = new lib.ormanyeni();
	this.instance_2.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#94EFF2").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	this.shape.setTransform(683,384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(684,384,1366,778);
// library properties:
lib.properties = {
	width: 1366,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
        {src:assetAddres + "images/visualDiscrimination_level3v1_atlas_.png", id:"visualDiscrimination_level3v1_atlas_"},
        {src:assetAddres + "sounds/complete.mp3", id:"complete"},
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;