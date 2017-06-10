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
		{name:"saccade_level1v1_atlas_", frames: [[1059,2744,108,113],[1228,4005,104,82],[0,0,1366,768],[1436,4005,102,69],[457,3447,96,99],[1540,3939,73,71],[1059,2859,123,95],[1401,3461,227,110],[457,3646,307,148],[1228,3855,307,148],[892,3646,428,207],[1322,3755,183,97],[1507,3755,183,97],[1059,3461,340,180],[1322,3643,227,110],[892,3855,334,162],[766,3646,113,115],[1368,602,600,600],[1368,1204,600,600],[1059,3010,455,449],[457,3346,109,99],[1614,4012,72,71],[0,1540,600,600],[0,2744,600,600],[602,3195,455,449],[1368,0,600,600],[602,2142,600,600],[602,2744,455,449],[1334,4005,100,78],[602,1540,600,600],[1204,2408,600,600],[0,3346,455,449],[1540,4012,72,71],[446,3797,444,202],[0,3797,444,202],[457,3548,104,82],[1204,1746,98,53],[0,770,1366,768],[1204,1540,96,99],[1204,1806,600,600],[0,2142,600,600],[1516,3010,455,449],[1537,3854,79,83],[1615,3939,84,55],[1204,1641,87,103],[1293,1641,55,101]]}
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



(lib.annekanguru = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.aslan = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.background = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bahce = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.canta = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ekmek = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.gazak = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.hikayebutton = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.hikayebutton2 = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hikayebutton2tıklandığında = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.hikayebutton2üzerinegelindiğindevetıklandığında = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.hikayebutton3 = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.hikayebutton3tıklandığında = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hikayebutton3üzerinegelindiğindevetıklandığında = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.hikayebuttontıklandığında = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.hikayebuttonüzerinegelindiğindevetıklandığında = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.kanguru = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.mavi = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.mavitıklandığında = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.maviüzerinegelindiğinde = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.maymun = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.meyvesuyu = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.mor = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.mortıklandığında = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.morüzerindegelindiğinde = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.pembe = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.pembetıklandığında = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.pembeüzerinegelindiğinde = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.sapka = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.sari = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.sarıtıklandığında = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.sarıüzerinegelindiğinde = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.sosis = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.startbutton = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.startbuttonüzerinegelindiğinde = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.suaygiri = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.tekokul = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.uygulamabitiş3 = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.yavruk = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.yesil = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.yeşiltıklandığında = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.yeşilüzerinegelindiğinde = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.yilan = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.yumurta = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.zebra = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.zurafayeni = function() {
	this.spriteSheet = ss["saccade_level1v1_atlas_"];
	this.gotoAndStop(45);
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


(lib.mcLoader8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_480 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(480).call(this.frame_480).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AgxCIIAAkPIBjAAIAAEPg");
	this.shape.setTransform(-322.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FE").s().p("Ag/CIIAAkPIB/AAIAAEPg");
	this.shape_1.setTransform(-321.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FE").s().p("AhNCIIAAkPICbAAIAAEPg");
	this.shape_2.setTransform(-319.7,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FD").s().p("AhbCJIAAkRIC3AAIAAERg");
	this.shape_3.setTransform(-318.3,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0099FD").s().p("AhqCJIAAkRIDVAAIAAERg");
	this.shape_4.setTransform(-316.9,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009AFC").s().p("Ah4CJIAAkRIDxAAIAAERg");
	this.shape_5.setTransform(-315.5,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009AFC").s().p("AiGCKIAAkTIENAAIAAETg");
	this.shape_6.setTransform(-314.1,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009AFB").s().p("AiUCKIAAkTIEpAAIAAETg");
	this.shape_7.setTransform(-312.7,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009AFB").s().p("AiiCLIAAkUIFFAAIAAEUg");
	this.shape_8.setTransform(-311.4,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009AFA").s().p("AiwCLIAAkVIFhAAIAAEVg");
	this.shape_9.setTransform(-310,0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009AFA").s().p("Ai/CLIAAkVIF/AAIAAEVg");
	this.shape_10.setTransform(-308.6,0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009AF9").s().p("AjNCMIAAkWIGbAAIAAEWg");
	this.shape_11.setTransform(-307.2,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009AF9").s().p("AjbCMIAAkXIG3AAIAAEXg");
	this.shape_12.setTransform(-305.8,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009AF8").s().p("AjpCMIAAkXIHTAAIAAEXg");
	this.shape_13.setTransform(-304.4,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009AF8").s().p("Aj3CMIAAkXIHvAAIAAEXg");
	this.shape_14.setTransform(-303,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009BF7").s().p("AkFCNIAAkZIILAAIAAEZg");
	this.shape_15.setTransform(-301.6,0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009BF6").s().p("AkTCNIAAkZIInAAIAAEZg");
	this.shape_16.setTransform(-300.2,0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009BF6").s().p("AkhCNIAAkZIJDAAIAAEZg");
	this.shape_17.setTransform(-298.8,0.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#009BF5").s().p("AkwCNIAAkZIJhAAIAAEZg");
	this.shape_18.setTransform(-297.4,0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009BF5").s().p("Ak+COIAAkbIJ9AAIAAEbg");
	this.shape_19.setTransform(-296,0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009BF4").s().p("AlMCOIAAkbIKZAAIAAEbg");
	this.shape_20.setTransform(-294.6,0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009BF4").s().p("AlaCPIAAkcIK1AAIAAEcg");
	this.shape_21.setTransform(-293.3,0.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009BF3").s().p("AloCPIAAkdILRAAIAAEdg");
	this.shape_22.setTransform(-291.9,0.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009BF3").s().p("Al3CPIAAkdILuAAIAAEdg");
	this.shape_23.setTransform(-290.5,0.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#009CF2").s().p("AmFCQIAAkeIMLAAIAAEeg");
	this.shape_24.setTransform(-289.1,0.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#009CF2").s().p("AmTCQIAAkfIMnAAIAAEfg");
	this.shape_25.setTransform(-287.7,0.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#009CF1").s().p("AmhCQIAAkfINDAAIAAEfg");
	this.shape_26.setTransform(-286.3,0.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#009CF1").s().p("AmvCQIAAkfINfAAIAAEfg");
	this.shape_27.setTransform(-284.9,0.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#009CF0").s().p("Am9CRIAAkhIN7AAIAAEhg");
	this.shape_28.setTransform(-283.5,0.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#009CF0").s().p("AnMCRIAAkhIOZAAIAAEhg");
	this.shape_29.setTransform(-282.1,0.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#009CEF").s().p("AnaCRIAAkhIO1AAIAAEhg");
	this.shape_30.setTransform(-280.7,0.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#009CEE").s().p("AnoCRIAAkhIPRAAIAAEhg");
	this.shape_31.setTransform(-279.4,1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#009CEE").s().p("An2CSIAAkjIPtAAIAAEjg");
	this.shape_32.setTransform(-277.9,1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#009DED").s().p("AoECSIAAkjIQJAAIAAEjg");
	this.shape_33.setTransform(-276.6,1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#009DED").s().p("AoSCSIAAkjIQlAAIAAEjg");
	this.shape_34.setTransform(-275.2,1.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#009DEC").s().p("AogCTIAAklIRCAAIAAElg");
	this.shape_35.setTransform(-273.8,1.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#009DEC").s().p("AouCTIAAklIRdAAIAAElg");
	this.shape_36.setTransform(-272.4,1.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#009DEB").s().p("Ao9CUIAAkmIR7AAIAAEmg");
	this.shape_37.setTransform(-271,1.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#009DEB").s().p("ApLCUIAAknISXAAIAAEng");
	this.shape_38.setTransform(-269.6,1.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#009DEA").s().p("ApZCUIAAknISzAAIAAEng");
	this.shape_39.setTransform(-268.2,1.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#009DEA").s().p("ApnCVIAAkoITPAAIAAEog");
	this.shape_40.setTransform(-266.8,1.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#009DE9").s().p("Ap1CVIAAkpITrAAIAAEpg");
	this.shape_41.setTransform(-265.4,1.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#009DE9").s().p("AqECVIAAkpIUIAAIAAEpg");
	this.shape_42.setTransform(-264,1.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#009EE8").s().p("AqSCVIAAkpIUkAAIAAEpg");
	this.shape_43.setTransform(-262.6,1.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#009EE8").s().p("AqgCVIAAkpIVBAAIAAEpg");
	this.shape_44.setTransform(-261.3,1.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#009EE7").s().p("AquCWIAAkrIVdAAIAAErg");
	this.shape_45.setTransform(-259.8,1.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#009EE7").s().p("Aq8CWIAAkrIV5AAIAAErg");
	this.shape_46.setTransform(-258.5,1.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#009EE6").s().p("ArKCWIAAkrIWVAAIAAErg");
	this.shape_47.setTransform(-257.1,1.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#009EE5").s().p("ArZCXIAAktIWyAAIAAEtg");
	this.shape_48.setTransform(-255.7,1.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#009EE5").s().p("ArnCXIAAktIXPAAIAAEtg");
	this.shape_49.setTransform(-254.3,1.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#009EE4").s().p("Ar1CYIAAkuIXrAAIAAEug");
	this.shape_50.setTransform(-252.9,1.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#009EE4").s().p("AsDCYIAAkvIYHAAIAAEvg");
	this.shape_51.setTransform(-251.5,1.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#009FE3").s().p("AsRCYIAAkvIYjAAIAAEvg");
	this.shape_52.setTransform(-250.1,1.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#009FE3").s().p("AsfCZIAAkwIY/AAIAAEwg");
	this.shape_53.setTransform(-248.7,1.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#009FE2").s().p("AstCZIAAkxIZcAAIAAExg");
	this.shape_54.setTransform(-247.3,1.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#009FE2").s().p("As7CZIAAkxIZ4AAIAAExg");
	this.shape_55.setTransform(-245.9,1.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#009FE1").s().p("AtKCZIAAkxIaVAAIAAExg");
	this.shape_56.setTransform(-244.6,1.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#009FE1").s().p("AtYCaIAAkzIaxAAIAAEzg");
	this.shape_57.setTransform(-243.2,1.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#009FE0").s().p("AtmCaIAAkzIbNAAIAAEzg");
	this.shape_58.setTransform(-241.8,1.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#009FE0").s().p("At0CaIAAkzIbpAAIAAEzg");
	this.shape_59.setTransform(-240.4,1.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#009FDF").s().p("AuCCaIAAkzIcFAAIAAEzg");
	this.shape_60.setTransform(-239,1.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#009FDF").s().p("AuRCbIAAk1IciAAIAAE1g");
	this.shape_61.setTransform(-237.6,1.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00A0DE").s().p("AufCbIAAk1Ic+AAIAAE1g");
	this.shape_62.setTransform(-236.2,1.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00A0DD").s().p("AutCbIAAk1IdbAAIAAE1g");
	this.shape_63.setTransform(-234.8,2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00A0DD").s().p("Au7CcIAAk3Id3AAIAAE3g");
	this.shape_64.setTransform(-233.4,2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00A0DC").s().p("AvJCcIAAk3IeTAAIAAE3g");
	this.shape_65.setTransform(-232,2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00A0DC").s().p("AvXCdIAAk4IevAAIAAE4g");
	this.shape_66.setTransform(-230.6,2.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00A0DB").s().p("AvmCdIAAk5IfMAAIAAE5g");
	this.shape_67.setTransform(-229.2,2.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00A0DB").s().p("Av0CdIAAk5IfoAAIAAE5g");
	this.shape_68.setTransform(-227.8,2.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00A0DA").s().p("AwCCdIAAk5MAgFAAAIAAE5g");
	this.shape_69.setTransform(-226.5,2.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00A0DA").s().p("AwQCeIAAk7MAghAAAIAAE7g");
	this.shape_70.setTransform(-225.1,2.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00A1D9").s().p("AweCeIAAk7MAg9AAAIAAE7g");
	this.shape_71.setTransform(-223.7,2.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00A1D9").s().p("AwsCeIAAk7MAhZAAAIAAE7g");
	this.shape_72.setTransform(-222.3,2.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00A1D8").s().p("Aw6CeIAAk7MAh1AAAIAAE7g");
	this.shape_73.setTransform(-220.9,2.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00A1D8").s().p("AxICfIAAk9MAiSAAAIAAE9g");
	this.shape_74.setTransform(-219.5,2.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#00A1D7").s().p("AxXCfIAAk9MAivAAAIAAE9g");
	this.shape_75.setTransform(-218.1,2.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#00A1D7").s().p("AxlCfIAAk9MAjLAAAIAAE9g");
	this.shape_76.setTransform(-216.7,2.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#00A1D6").s().p("AxzCgIAAk/MAjnAAAIAAE/g");
	this.shape_77.setTransform(-215.3,2.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#00A1D5").s().p("AyBCgIAAk/MAkDAAAIAAE/g");
	this.shape_78.setTransform(-213.9,2.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00A1D5").s().p("AyPChIAAlAMAkfAAAIAAFAg");
	this.shape_79.setTransform(-212.5,2.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#00A2D4").s().p("AydChIAAlBMAk7AAAIAAFBg");
	this.shape_80.setTransform(-211.2,2.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00A2D4").s().p("AysChIAAlBMAlZAAAIAAFBg");
	this.shape_81.setTransform(-209.7,2.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00A2D3").s().p("Ay6CiIAAlCMAl1AAAIAAFCg");
	this.shape_82.setTransform(-208.4,2.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00A2D3").s().p("AzICiIAAlDMAmRAAAIAAFDg");
	this.shape_83.setTransform(-207,2.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#00A2D2").s().p("AzWCiIAAlDMAmtAAAIAAFDg");
	this.shape_84.setTransform(-205.6,2.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00A2D2").s().p("AzkCiIAAlDMAnJAAAIAAFDg");
	this.shape_85.setTransform(-204.2,2.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00A2D1").s().p("AzyCiIAAlDMAnlAAAIAAFDg");
	this.shape_86.setTransform(-202.8,2.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#00A2D1").s().p("A0ACjIAAlFMAoBAAAIAAFFg");
	this.shape_87.setTransform(-201.4,2.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00A2D0").s().p("A0PCjIAAlFMAofAAAIAAFFg");
	this.shape_88.setTransform(-200,2.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00A2D0").s().p("A0dCjIAAlFMAo7AAAIAAFFg");
	this.shape_89.setTransform(-198.6,2.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00A3CF").s().p("A0rCkIAAlHMApXAAAIAAFHg");
	this.shape_90.setTransform(-197.2,2.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00A3CF").s().p("A05CkIAAlHMApzAAAIAAFHg");
	this.shape_91.setTransform(-195.8,2.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#00A3CE").s().p("A1HCkIAAlHMAqPAAAIAAFHg");
	this.shape_92.setTransform(-194.5,2.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#00A3CD").s().p("A1VClIAAlJMAqrAAAIAAFJg");
	this.shape_93.setTransform(-193.1,2.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#00A3CD").s().p("A1kClIAAlJMArJAAAIAAFJg");
	this.shape_94.setTransform(-191.7,2.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#00A3CC").s().p("A1yCmIAAlKMArlAAAIAAFKg");
	this.shape_95.setTransform(-190.3,3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#00A3CC").s().p("A2ACmIAAlLMAsBAAAIAAFLg");
	this.shape_96.setTransform(-188.9,3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#00A3CB").s().p("A2OCmIAAlLMAsdAAAIAAFLg");
	this.shape_97.setTransform(-187.5,3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#00A3CB").s().p("A2cCmIAAlLMAs5AAAIAAFLg");
	this.shape_98.setTransform(-186.1,3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00A4CA").s().p("A2qCnIAAlNMAtVAAAIAAFNg");
	this.shape_99.setTransform(-184.7,3.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#00A4CA").s().p("A24CnIAAlNMAtxAAAIAAFNg");
	this.shape_100.setTransform(-183.3,3.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#00A4C9").s().p("A3HCnIAAlNMAuPAAAIAAFNg");
	this.shape_101.setTransform(-181.9,3.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#00A4C9").s().p("A3VCnIAAlNMAuqAAAIAAFNg");
	this.shape_102.setTransform(-180.5,3.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#00A4C8").s().p("A3jCoIAAlPMAvHAAAIAAFPg");
	this.shape_103.setTransform(-179.1,3.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#00A4C8").s().p("A3xCoIAAlPMAvjAAAIAAFPg");
	this.shape_104.setTransform(-177.7,3.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#00A4C7").s().p("A3/CoIAAlPMAv/AAAIAAFPg");
	this.shape_105.setTransform(-176.4,3.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#00A4C7").s().p("A4NCpIAAlRMAwbAAAIAAFRg");
	this.shape_106.setTransform(-175,3.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#00A4C6").s().p("A4cCpIAAlRMAw5AAAIAAFRg");
	this.shape_107.setTransform(-173.6,3.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#00A4C6").s().p("A4pCqIAAlSMAxUAAAIAAFSg");
	this.shape_108.setTransform(-172.2,3.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#00A5C5").s().p("A44CqIAAlTMAxxAAAIAAFTg");
	this.shape_109.setTransform(-170.8,3.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#00A5C4").s().p("A5GCqIAAlTMAyNAAAIAAFTg");
	this.shape_110.setTransform(-169.4,3.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#00A5C4").s().p("A5UCqIAAlTMAypAAAIAAFTg");
	this.shape_111.setTransform(-168,3.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#00A5C3").s().p("A5iCrIAAlVMAzFAAAIAAFVg");
	this.shape_112.setTransform(-166.6,3.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#00A5C3").s().p("A5xCrIAAlVMAzjAAAIAAFVg");
	this.shape_113.setTransform(-165.2,3.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#00A5C2").s().p("A5/CrIAAlVMAz/AAAIAAFVg");
	this.shape_114.setTransform(-163.8,3.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#00A5C2").s().p("A6NCrIAAlVMA0bAAAIAAFVg");
	this.shape_115.setTransform(-162.4,3.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#00A5C1").s().p("A6bCsIAAlXMA03AAAIAAFXg");
	this.shape_116.setTransform(-161,3.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#00A5C1").s().p("A6pCsIAAlXMA1TAAAIAAFXg");
	this.shape_117.setTransform(-159.6,3.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#00A6C0").s().p("A63CsIAAlXMA1vAAAIAAFXg");
	this.shape_118.setTransform(-158.3,3.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00A6C0").s().p("A7FCtIAAlZMA2LAAAIAAFZg");
	this.shape_119.setTransform(-156.9,3.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00A6BF").s().p("A7UCtIAAlZMA2pAAAIAAFZg");
	this.shape_120.setTransform(-155.5,3.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00A6BF").s().p("A7iCtIAAlZMA3EAAAIAAFZg");
	this.shape_121.setTransform(-154.1,3.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#00A6BE").s().p("A7wCuIAAlbMA3hAAAIAAFbg");
	this.shape_122.setTransform(-152.7,3.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00A6BE").s().p("A7+CuIAAlbMA39AAAIAAFbg");
	this.shape_123.setTransform(-151.3,3.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00A6BD").s().p("A8MCvIAAlcMA4ZAAAIAAFcg");
	this.shape_124.setTransform(-149.9,3.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#00A6BC").s().p("A8aCvIAAldMA41AAAIAAFdg");
	this.shape_125.setTransform(-148.5,3.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#00A6BC").s().p("A8oCvIAAldMA5RAAAIAAFdg");
	this.shape_126.setTransform(-147.1,3.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#00A7BB").s().p("A82CvIAAldMA5tAAAIAAFdg");
	this.shape_127.setTransform(-145.7,3.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#00A7BB").s().p("A9FCwIAAleMA6LAAAIAAFeg");
	this.shape_128.setTransform(-144.3,4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#00A7BA").s().p("A9TCwIAAlfMA6nAAAIAAFfg");
	this.shape_129.setTransform(-142.9,4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#00A7BA").s().p("A9hCwIAAlfMA7DAAAIAAFfg");
	this.shape_130.setTransform(-141.6,4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#00A7B9").s().p("A9vCwIAAlfMA7fAAAIAAFfg");
	this.shape_131.setTransform(-140.2,4.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#00A7B9").s().p("A9+CxIAAlhMA78AAAIAAFhg");
	this.shape_132.setTransform(-138.8,4.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#00A7B8").s().p("A+MCxIAAlhMA8ZAAAIAAFhg");
	this.shape_133.setTransform(-137.4,4.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#00A7B8").s().p("A+aCxIAAlhMA81AAAIAAFhg");
	this.shape_134.setTransform(-136,4.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#00A7B7").s().p("A+oCyIAAljMA9RAAAIAAFjg");
	this.shape_135.setTransform(-134.6,4.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#00A7B7").s().p("A+2CyIAAljMA9tAAAIAAFjg");
	this.shape_136.setTransform(-133.2,4.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#00A8B6").s().p("A/ECzIAAlkMA+JAAAIAAFkg");
	this.shape_137.setTransform(-131.8,4.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#00A8B6").s().p("A/SCzIAAllMA+lAAAIAAFlg");
	this.shape_138.setTransform(-130.4,4.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#00A8B5").s().p("A/hCzIAAllMA/DAAAIAAFlg");
	this.shape_139.setTransform(-129,4.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#00A8B4").s().p("A/vCzIAAllMA/fAAAIAAFlg");
	this.shape_140.setTransform(-127.6,4.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#00A8B4").s().p("A/9C0IAAlnMA/7AAAIAAFng");
	this.shape_141.setTransform(-126.3,4.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#00A8B3").s().p("EggLAC0IAAlnMBAXAAAIAAFng");
	this.shape_142.setTransform(-124.9,4.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#00A8B3").s().p("EggZAC0IAAlnMBAzAAAIAAFng");
	this.shape_143.setTransform(-123.5,4.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#00A8B2").s().p("EggnAC1IAAloMBBPAAAIAAFog");
	this.shape_144.setTransform(-122.1,4.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#00A8B2").s().p("Egg1AC1IAAlpMBBrAAAIAAFpg");
	this.shape_145.setTransform(-120.7,4.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#00A9B1").s().p("EghDAC1IAAlpMBCHAAAIAAFpg");
	this.shape_146.setTransform(-119.3,4.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#00A9B1").s().p("EghSAC1IAAlpMBClAAAIAAFpg");
	this.shape_147.setTransform(-117.9,4.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#00A9B0").s().p("EghgAC2IAAlrMBDBAAAIAAFrg");
	this.shape_148.setTransform(-116.5,4.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#00A9B0").s().p("EghuAC2IAAlrMBDdAAAIAAFrg");
	this.shape_149.setTransform(-115.1,4.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#00A9AF").s().p("Egh8AC2IAAlrMBD5AAAIAAFrg");
	this.shape_150.setTransform(-113.7,4.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#00A9AF").s().p("EgiLAC3IAAltMBEWAAAIAAFtg");
	this.shape_151.setTransform(-112.3,4.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#00A9AE").s().p("EgiZAC3IAAltMBEyAAAIAAFtg");
	this.shape_152.setTransform(-110.9,4.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#00A9AE").s().p("EginAC3IAAltMBFPAAAIAAFtg");
	this.shape_153.setTransform(-109.6,4.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#00A9AD").s().p("Egi1AC4IAAlvMBFrAAAIAAFvg");
	this.shape_154.setTransform(-108.2,4.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#00AAAC").s().p("EgjDAC4IAAlvMBGHAAAIAAFvg");
	this.shape_155.setTransform(-106.8,4.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#00AAAC").s().p("EgjRAC4IAAlvMBGjAAAIAAFvg");
	this.shape_156.setTransform(-105.4,4.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#00AAAB").s().p("EgjfAC5IAAlwMBG/AAAIAAFwg");
	this.shape_157.setTransform(-104,4.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#00AAAB").s().p("EgjuAC5IAAlxMBHdAAAIAAFxg");
	this.shape_158.setTransform(-102.6,4.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#00AAAA").s().p("Egj8AC5IAAlxMBH5AAAIAAFxg");
	this.shape_159.setTransform(-101.2,4.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#00AAAA").s().p("EgkKAC5IAAlxMBIVAAAIAAFxg");
	this.shape_160.setTransform(-99.8,5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#00AAA9").s().p("EgkYAC6IAAlzMBIxAAAIAAFzg");
	this.shape_161.setTransform(-98.4,5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#00AAA9").s().p("EgkmAC6IAAlzMBJNAAAIAAFzg");
	this.shape_162.setTransform(-97,5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#00AAA8").s().p("Egk0AC6IAAlzMBJpAAAIAAFzg");
	this.shape_163.setTransform(-95.6,5.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#00AAA8").s().p("EglCAC7IAAl1MBKGAAAIAAF1g");
	this.shape_164.setTransform(-94.2,5.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#00ABA7").s().p("EglQAC7IAAl1MBKiAAAIAAF1g");
	this.shape_165.setTransform(-92.8,5.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#00ABA7").s().p("EglfAC8IAAl2MBK/AAAIAAF2g");
	this.shape_166.setTransform(-91.5,5.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#00ABA6").s().p("EgltAC8IAAl3MBLbAAAIAAF3g");
	this.shape_167.setTransform(-90.1,5.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#00ABA6").s().p("Egl7AC8IAAl3MBL3AAAIAAF3g");
	this.shape_168.setTransform(-88.7,5.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#00ABA5").s().p("EgmJAC8IAAl3MBMTAAAIAAF3g");
	this.shape_169.setTransform(-87.3,5.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#00ABA4").s().p("EgmXAC9IAAl4MBMvAAAIAAF4g");
	this.shape_170.setTransform(-85.9,5.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#00ABA4").s().p("EgmmAC9IAAl5MBNMAAAIAAF5g");
	this.shape_171.setTransform(-84.5,5.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#00ABA3").s().p("Egm0AC9IAAl5MBNpAAAIAAF5g");
	this.shape_172.setTransform(-83.1,5.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#00ABA3").s().p("EgnCAC9IAAl5MBOFAAAIAAF5g");
	this.shape_173.setTransform(-81.7,5.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#00ACA2").s().p("EgnQAC+IAAl7MBOhAAAIAAF7g");
	this.shape_174.setTransform(-80.3,5.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#00ACA2").s().p("EgneAC+IAAl7MBO9AAAIAAF7g");
	this.shape_175.setTransform(-78.9,5.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#00ACA1").s().p("EgnsAC+IAAl7MBPZAAAIAAF7g");
	this.shape_176.setTransform(-77.5,5.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#00ACA1").s().p("Egn7AC/IAAl9MBP2AAAIAAF9g");
	this.shape_177.setTransform(-76.1,5.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#00ACA0").s().p("EgoJAC/IAAl9MBQSAAAIAAF9g");
	this.shape_178.setTransform(-74.7,5.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#00ACA0").s().p("EgoXAC/IAAl9MBQvAAAIAAF9g");
	this.shape_179.setTransform(-73.4,5.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#00AC9F").s().p("EgolADAIAAl/MBRLAAAIAAF/g");
	this.shape_180.setTransform(-72,5.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#00AC9F").s().p("EgozADAIAAl/MBRnAAAIAAF/g");
	this.shape_181.setTransform(-70.6,5.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#00AC9E").s().p("EgpBADAIAAl/MBSDAAAIAAF/g");
	this.shape_182.setTransform(-69.2,5.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#00AC9E").s().p("EgpPADBIAAmBMBSfAAAIAAGBg");
	this.shape_183.setTransform(-67.8,5.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#00AD9D").s().p("EgpdADBIAAmBMBS8AAAIAAGBg");
	this.shape_184.setTransform(-66.4,5.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#00AD9D").s().p("EgpsADBIAAmBMBTYAAAIAAGBg");
	this.shape_185.setTransform(-65,5.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#00AD9C").s().p("Egp6ADCIAAmCMBT1AAAIAAGCg");
	this.shape_186.setTransform(-63.6,5.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#00AD9B").s().p("EgqIADCIAAmDMBURAAAIAAGDg");
	this.shape_187.setTransform(-62.2,5.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#00AD9B").s().p("EgqWADCIAAmDMBUtAAAIAAGDg");
	this.shape_188.setTransform(-60.8,5.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#00AD9A").s().p("EgqkADCIAAmDMBVJAAAIAAGDg");
	this.shape_189.setTransform(-59.5,5.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#00AD9A").s().p("EgqyADDIAAmFMBVlAAAIAAGFg");
	this.shape_190.setTransform(-58.1,5.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#00AD99").s().p("EgrAADDIAAmFMBWBAAAIAAGFg");
	this.shape_191.setTransform(-56.7,5.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#00AD99").s().p("EgrPADDIAAmFMBWfAAAIAAGFg");
	this.shape_192.setTransform(-55.3,6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#00AE98").s().p("EgrdADEIAAmHMBW7AAAIAAGHg");
	this.shape_193.setTransform(-53.9,6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#00AE98").s().p("EgrrADEIAAmHMBXXAAAIAAGHg");
	this.shape_194.setTransform(-52.5,6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#00AE97").s().p("Egr5ADEIAAmHMBXzAAAIAAGHg");
	this.shape_195.setTransform(-51.1,6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#00AE97").s().p("EgsHADFIAAmJMBYPAAAIAAGJg");
	this.shape_196.setTransform(-49.7,6.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#00AE96").s().p("EgsVADFIAAmJMBYrAAAIAAGJg");
	this.shape_197.setTransform(-48.3,6.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#00AE96").s().p("EgskADFIAAmJMBZJAAAIAAGJg");
	this.shape_198.setTransform(-46.9,6.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#00AE95").s().p("EgsyADGIAAmKMBZlAAAIAAGKg");
	this.shape_199.setTransform(-45.5,6.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#00AE95").s().p("EgtAADGIAAmLMBaBAAAIAAGLg");
	this.shape_200.setTransform(-44.1,6.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#00AE94").s().p("EgtOADGIAAmLMBadAAAIAAGLg");
	this.shape_201.setTransform(-42.7,6.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#00AF93").s().p("EgtcADHIAAmMMBa5AAAIAAGMg");
	this.shape_202.setTransform(-41.4,6.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#00AF93").s().p("EgtqADHIAAmNMBbVAAAIAAGNg");
	this.shape_203.setTransform(-40,6.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#00AF92").s().p("Egt5ADHIAAmNMBbyAAAIAAGNg");
	this.shape_204.setTransform(-38.6,6.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#00AF92").s().p("EguHADHIAAmNMBcPAAAIAAGNg");
	this.shape_205.setTransform(-37.2,6.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#00AF91").s().p("EguVADIIAAmPMBcrAAAIAAGPg");
	this.shape_206.setTransform(-35.8,6.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#00AF91").s().p("EgujADIIAAmPMBdHAAAIAAGPg");
	this.shape_207.setTransform(-34.4,6.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#00AF90").s().p("EguxADIIAAmPMBdjAAAIAAGPg");
	this.shape_208.setTransform(-33,6.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#00AF90").s().p("Egu/ADJIAAmRMBd/AAAIAAGRg");
	this.shape_209.setTransform(-31.6,6.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#00AF8F").s().p("EgvNADJIAAmRMBebAAAIAAGRg");
	this.shape_210.setTransform(-30.2,6.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#00AF8F").s().p("EgvcADJIAAmRMBe5AAAIAAGRg");
	this.shape_211.setTransform(-28.8,6.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#00B08E").s().p("EgvpADKIAAmSMBfTAAAIAAGSg");
	this.shape_212.setTransform(-27.4,6.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#00B08E").s().p("Egv4ADKIAAmTMBfxAAAIAAGTg");
	this.shape_213.setTransform(-26,6.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#00B08D").s().p("EgwGADKIAAmTMBgNAAAIAAGTg");
	this.shape_214.setTransform(-24.6,6.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#00B08D").s().p("EgwUADLIAAmUMBgpAAAIAAGUg");
	this.shape_215.setTransform(-23.3,6.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#00B08C").s().p("EgwiADLIAAmVMBhFAAAIAAGVg");
	this.shape_216.setTransform(-21.9,6.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#00B08B").s().p("EgwwADLIAAmVMBhiAAAIAAGVg");
	this.shape_217.setTransform(-20.5,6.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#00B08B").s().p("Egw+ADLIAAmVMBh+AAAIAAGVg");
	this.shape_218.setTransform(-19.1,6.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#00B08A").s().p("EgxNADMIAAmXMBibAAAIAAGXg");
	this.shape_219.setTransform(-17.7,6.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#00B08A").s().p("EgxbADMIAAmXMBi3AAAIAAGXg");
	this.shape_220.setTransform(-16.3,6.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#00B189").s().p("EgxpADMIAAmXMBjTAAAIAAGXg");
	this.shape_221.setTransform(-14.9,6.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#00B189").s().p("Egx3ADNIAAmZMBjvAAAIAAGZg");
	this.shape_222.setTransform(-13.5,6.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#00B188").s().p("EgyGADNIAAmZMBkNAAAIAAGZg");
	this.shape_223.setTransform(-12.1,6.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#00B188").s().p("EgyUADNIAAmZMBkpAAAIAAGZg");
	this.shape_224.setTransform(-10.7,6.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#00B187").s().p("EgyiADOIAAmbMBlFAAAIAAGbg");
	this.shape_225.setTransform(-9.4,7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#00B187").s().p("EgywADOIAAmbMBlhAAAIAAGbg");
	this.shape_226.setTransform(-7.9,7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#00B186").s().p("Egy+ADOIAAmbMBl9AAAIAAGbg");
	this.shape_227.setTransform(-6.6,7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#00B186").s().p("EgzMADPIAAmcMBmZAAAIAAGcg");
	this.shape_228.setTransform(-5.2,7.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#00B185").s().p("EgzaADPIAAmdMBm2AAAIAAGdg");
	this.shape_229.setTransform(-3.8,7.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#00B185").s().p("EgzoADPIAAmdMBnRAAAIAAGdg");
	this.shape_230.setTransform(-2.4,7.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#00B284").s().p("Egz2ADPIAAmdMBntAAAIAAGdg");
	this.shape_231.setTransform(-1,7.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#00B283").s().p("Eg0FADQIAAmfMBoLAAAIAAGfg");
	this.shape_232.setTransform(0.4,7.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#00B283").s().p("Eg0TADQIAAmfMBonAAAIAAGfg");
	this.shape_233.setTransform(1.8,7.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#00B282").s().p("Eg0hADQIAAmfMBpDAAAIAAGfg");
	this.shape_234.setTransform(3.2,7.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#00B282").s().p("Eg0vADRIAAmhMBpfAAAIAAGhg");
	this.shape_235.setTransform(4.6,7.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#00B281").s().p("Eg09ADRIAAmhMBp7AAAIAAGhg");
	this.shape_236.setTransform(6,7.3);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#00B281").s().p("Eg1LADRIAAmhMBqXAAAIAAGhg");
	this.shape_237.setTransform(7.4,7.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#00B280").s().p("Eg1aADSIAAmjMBq1AAAIAAGjg");
	this.shape_238.setTransform(8.7,7.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#00B280").s().p("Eg1oADSIAAmjMBrRAAAIAAGjg");
	this.shape_239.setTransform(10.2,7.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#00B37F").s().p("Eg12ADSIAAmkMBrtAAAIAAGkg");
	this.shape_240.setTransform(11.5,7.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#00B37F").s().p("Eg2EADTIAAmlMBsJAAAIAAGlg");
	this.shape_241.setTransform(12.9,7.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#00B37E").s().p("Eg2TADTIAAmlMBsnAAAIAAGlg");
	this.shape_242.setTransform(14.3,7.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#00B37E").s().p("Eg2hADTIAAmmMBtDAAAIAAGmg");
	this.shape_243.setTransform(15.7,7.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#00B37D").s().p("Eg2vADUIAAmnMBtfAAAIAAGng");
	this.shape_244.setTransform(17.1,7.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#00B37D").s().p("Eg29ADUIAAmnMBt7AAAIAAGng");
	this.shape_245.setTransform(18.5,7.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#00B37C").s().p("Eg3LADVIAAmpMBuXAAAIAAGpg");
	this.shape_246.setTransform(19.9,7.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#00B37C").s().p("Eg3ZADVIAAmpMBuzAAAIAAGpg");
	this.shape_247.setTransform(21.3,7.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#00B37B").s().p("Eg3nADVIAAmpMBvQAAAIAAGpg");
	this.shape_248.setTransform(22.7,7.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#00B47A").s().p("Eg31ADVIAAmpMBvsAAAIAAGpg");
	this.shape_249.setTransform(24.1,7.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#00B47A").s().p("Eg4DADWIAAmrMBwHAAAIAAGrg");
	this.shape_250.setTransform(25.5,7.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#00B479").s().p("Eg4SADWIAAmrMBwlAAAIAAGrg");
	this.shape_251.setTransform(26.8,7.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#00B479").s().p("Eg4gADWIAAmrMBxBAAAIAAGrg");
	this.shape_252.setTransform(28.2,7.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#00B478").s().p("Eg4uADXIAAmtMBxdAAAIAAGtg");
	this.shape_253.setTransform(29.6,7.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#00B478").s().p("Eg48ADXIAAmtMBx5AAAIAAGtg");
	this.shape_254.setTransform(31,7.8);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#00B477").s().p("Eg5KADXIAAmtMByVAAAIAAGtg");
	this.shape_255.setTransform(32.4,7.9);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#00B477").s().p("Eg5YADXIAAmuMByxAAAIAAGug");
	this.shape_256.setTransform(33.8,7.9);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#00B476").s().p("Eg5nADYIAAmvMBzPAAAIAAGvg");
	this.shape_257.setTransform(35.2,7.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#00B476").s().p("Eg51ADYIAAmvMBzrAAAIAAGvg");
	this.shape_258.setTransform(36.6,8);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#00B575").s().p("Eg6DADYIAAmwMB0HAAAIAAGwg");
	this.shape_259.setTransform(38,8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#00B575").s().p("Eg6RADZIAAmxMB0jAAAIAAGxg");
	this.shape_260.setTransform(39.4,8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#00B574").s().p("Eg6gADZIAAmxMB1AAAAIAAGxg");
	this.shape_261.setTransform(40.8,8.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#00B574").s().p("Eg6uADZIAAmxMB1cAAAIAAGxg");
	this.shape_262.setTransform(42.2,8.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#00B573").s().p("Eg68ADaIAAmzMB15AAAIAAGzg");
	this.shape_263.setTransform(43.5,8.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#00B572").s().p("Eg7KADaIAAmzMB2VAAAIAAGzg");
	this.shape_264.setTransform(44.9,8.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#00B572").s().p("Eg7YADaIAAmzMB2xAAAIAAGzg");
	this.shape_265.setTransform(46.3,8.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#00B571").s().p("Eg7mADbIAAm1MB3NAAAIAAG1g");
	this.shape_266.setTransform(47.7,8.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#00B571").s().p("Eg70ADbIAAm1MB3qAAAIAAG1g");
	this.shape_267.setTransform(49.1,8.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#00B670").s().p("Eg8CADbIAAm1MB4FAAAIAAG1g");
	this.shape_268.setTransform(50.5,8.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#00B670").s().p("Eg8QADbIAAm2MB4iAAAIAAG2g");
	this.shape_269.setTransform(51.9,8.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#00B66F").s().p("Eg8fADcIAAm3MB4/AAAIAAG3g");
	this.shape_270.setTransform(53.3,8.3);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#00B66F").s().p("Eg8tADcIAAm3MB5bAAAIAAG3g");
	this.shape_271.setTransform(54.7,8.4);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#00B66E").s().p("Eg87ADcIAAm4MB53AAAIAAG4g");
	this.shape_272.setTransform(56.1,8.4);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#00B66E").s().p("Eg9JADdIAAm5MB6TAAAIAAG5g");
	this.shape_273.setTransform(57.5,8.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#00B66D").s().p("Eg9XADdIAAm5MB6vAAAIAAG5g");
	this.shape_274.setTransform(58.8,8.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#00B66D").s().p("Eg9lADdIAAm5MB7MAAAIAAG5g");
	this.shape_275.setTransform(60.3,8.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#00B66C").s().p("Eg90ADeIAAm7MB7pAAAIAAG7g");
	this.shape_276.setTransform(61.6,8.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#00B66C").s().p("Eg+CADeIAAm7MB8FAAAIAAG7g");
	this.shape_277.setTransform(63,8.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#00B76B").s().p("Eg+QADeIAAm7MB8hAAAIAAG7g");
	this.shape_278.setTransform(64.4,8.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#00B76A").s().p("Eg+eADfIAAm9MB89AAAIAAG9g");
	this.shape_279.setTransform(65.8,8.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#00B76A").s().p("Eg+sADfIAAm9MB9ZAAAIAAG9g");
	this.shape_280.setTransform(67.2,8.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#00B769").s().p("Eg+6ADfIAAm9MB91AAAIAAG9g");
	this.shape_281.setTransform(68.6,8.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#00B769").s().p("Eg/JADfIAAm+MB+TAAAIAAG+g");
	this.shape_282.setTransform(70,8.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#00B768").s().p("Eg/XADgIAAm/MB+vAAAIAAG/g");
	this.shape_283.setTransform(71.4,8.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#00B768").s().p("Eg/lADgIAAm/MB/LAAAIAAG/g");
	this.shape_284.setTransform(72.8,8.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#00B767").s().p("Eg/zADgIAAnAMB/nAAAIAAHAg");
	this.shape_285.setTransform(74.2,8.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#00B767").s().p("EhABADhIAAnBMCADAAAIAAHBg");
	this.shape_286.setTransform(75.5,8.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#00B866").s().p("EhAPADhIAAnBMCAfAAAIAAHBg");
	this.shape_287.setTransform(76.9,8.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#00B866").s().p("EhAdADhIAAnCMCA8AAAIAAHCg");
	this.shape_288.setTransform(78.4,8.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#00B865").s().p("EhAsADiIAAnDMCBZAAAIAAHDg");
	this.shape_289.setTransform(79.7,8.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#00B865").s().p("EhA6ADiIAAnDMCB1AAAIAAHDg");
	this.shape_290.setTransform(81.1,9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#00B864").s().p("EhBIADiIAAnDMCCRAAAIAAHDg");
	this.shape_291.setTransform(82.5,9);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#00B864").s().p("EhBWADjIAAnFMCCtAAAIAAHFg");
	this.shape_292.setTransform(83.9,9);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#00B863").s().p("EhBkADjIAAnFMCDJAAAIAAHFg");
	this.shape_293.setTransform(85.3,9.1);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#00B862").s().p("EhByADjIAAnFMCDmAAAIAAHFg");
	this.shape_294.setTransform(86.7,9.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#00B862").s().p("EhCBADkIAAnHMCECAAAIAAHHg");
	this.shape_295.setTransform(88.1,9.1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#00B961").s().p("EhCPADkIAAnHMCEfAAAIAAHHg");
	this.shape_296.setTransform(89.5,9.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#00B961").s().p("EhCdADkIAAnHMCE7AAAIAAHHg");
	this.shape_297.setTransform(90.9,9.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#00B960").s().p("EhCrADkIAAnIMCFXAAAIAAHIg");
	this.shape_298.setTransform(92.3,9.2);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#00B960").s().p("EhC5ADlIAAnJMCFzAAAIAAHJg");
	this.shape_299.setTransform(93.6,9.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#00B95F").s().p("EhDHADlIAAnJMCGPAAAIAAHJg");
	this.shape_300.setTransform(95,9.3);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#00B95F").s().p("EhDVADlIAAnKMCGsAAAIAAHKg");
	this.shape_301.setTransform(96.4,9.3);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#00B95E").s().p("EhDjADmIAAnLMCHIAAAIAAHLg");
	this.shape_302.setTransform(97.8,9.3);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#00B95E").s().p("EhDyADmIAAnLMCHlAAAIAAHLg");
	this.shape_303.setTransform(99.2,9.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#00B95D").s().p("EhEAADmIAAnLMCIBAAAIAAHLg");
	this.shape_304.setTransform(100.6,9.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#00B95D").s().p("EhEOADnIAAnNMCIdAAAIAAHNg");
	this.shape_305.setTransform(102,9.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#00BA5C").s().p("EhEcADnIAAnNMCI5AAAIAAHNg");
	this.shape_306.setTransform(103.4,9.5);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#00BA5C").s().p("EhEqADnIAAnNMCJVAAAIAAHNg");
	this.shape_307.setTransform(104.8,9.5);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#00BA5B").s().p("EhE5ADoIAAnPMCJzAAAIAAHPg");
	this.shape_308.setTransform(106.2,9.5);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#00BA5B").s().p("EhFHADoIAAnPMCKPAAAIAAHPg");
	this.shape_309.setTransform(107.6,9.6);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#00BA5A").s().p("EhFVADoIAAnPMCKrAAAIAAHPg");
	this.shape_310.setTransform(109,9.6);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#00BA59").s().p("EhFjADoIAAnQMCLHAAAIAAHQg");
	this.shape_311.setTransform(110.4,9.6);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#00BA59").s().p("EhFxADpIAAnRMCLjAAAIAAHRg");
	this.shape_312.setTransform(111.7,9.6);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#00BA58").s().p("EhF/ADpIAAnRMCL/AAAIAAHRg");
	this.shape_313.setTransform(113.1,9.7);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#00BA58").s().p("EhGOADpIAAnSMCMcAAAIAAHSg");
	this.shape_314.setTransform(114.5,9.7);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#00BB57").s().p("EhGcADqIAAnTMCM4AAAIAAHTg");
	this.shape_315.setTransform(115.9,9.7);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#00BB57").s().p("EhGqADqIAAnTMCNVAAAIAAHTg");
	this.shape_316.setTransform(117.3,9.8);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#00BB56").s().p("EhG4ADqIAAnTMCNxAAAIAAHTg");
	this.shape_317.setTransform(118.7,9.8);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#00BB56").s().p("EhHGADrIAAnVMCONAAAIAAHVg");
	this.shape_318.setTransform(120.1,9.8);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#00BB55").s().p("EhHUADrIAAnVMCOpAAAIAAHVg");
	this.shape_319.setTransform(121.5,9.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#00BB55").s().p("EhHiADrIAAnVMCPFAAAIAAHVg");
	this.shape_320.setTransform(122.9,9.9);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#00BB54").s().p("EhHwADsIAAnXMCPhAAAIAAHXg");
	this.shape_321.setTransform(124.3,9.9);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#00BB54").s().p("EhH/ADsIAAnXMCP/AAAIAAHXg");
	this.shape_322.setTransform(125.7,10);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#00BB53").s().p("EhINADsIAAnXMCQbAAAIAAHXg");
	this.shape_323.setTransform(127,10);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#00BB53").s().p("EhIbADtIAAnZMCQ3AAAIAAHZg");
	this.shape_324.setTransform(128.4,10);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#00BC52").s().p("EhIpADtIAAnZMCRTAAAIAAHZg");
	this.shape_325.setTransform(129.8,10);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#00BC51").s().p("EhI3ADtIAAnZMCRvAAAIAAHZg");
	this.shape_326.setTransform(131.2,10.1);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#00BC51").s().p("EhJGADtIAAnaMCSNAAAIAAHag");
	this.shape_327.setTransform(132.6,10.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#00BC50").s().p("EhJUADuIAAnbMCSpAAAIAAHbg");
	this.shape_328.setTransform(134,10.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#00BC50").s().p("EhJiADuIAAnbMCTFAAAIAAHbg");
	this.shape_329.setTransform(135.4,10.2);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#00BC4F").s().p("EhJwADuIAAncMCThAAAIAAHcg");
	this.shape_330.setTransform(136.8,10.2);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#00BC4F").s().p("EhJ+ADvIAAndMCT9AAAIAAHdg");
	this.shape_331.setTransform(138.2,10.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#00BC4E").s().p("EhKMADvIAAndMCUZAAAIAAHdg");
	this.shape_332.setTransform(139.6,10.3);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#00BC4E").s().p("EhKbADvIAAndMCU3AAAIAAHdg");
	this.shape_333.setTransform(141,10.3);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#00BD4D").s().p("EhKpADwIAAnfMCVSAAAIAAHfg");
	this.shape_334.setTransform(142.4,10.3);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#00BD4D").s().p("EhK3ADwIAAnfMCVvAAAIAAHfg");
	this.shape_335.setTransform(143.7,10.4);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#00BD4C").s().p("EhLFADwIAAnfMCWLAAAIAAHfg");
	this.shape_336.setTransform(145.1,10.4);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#00BD4C").s().p("EhLTADxIAAnhMCWnAAAIAAHhg");
	this.shape_337.setTransform(146.5,10.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#00BD4B").s().p("EhLhADxIAAnhMCXDAAAIAAHhg");
	this.shape_338.setTransform(147.9,10.4);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#00BD4B").s().p("EhLvADxIAAnhMCXfAAAIAAHhg");
	this.shape_339.setTransform(149.3,10.5);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#00BD4A").s().p("EhL9ADxIAAniMCX7AAAIAAHig");
	this.shape_340.setTransform(150.7,10.5);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#00BD49").s().p("EhMMADyIAAnjMCYZAAAIAAHjg");
	this.shape_341.setTransform(152.1,10.5);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#00BD49").s().p("EhMaADyIAAnjMCY1AAAIAAHjg");
	this.shape_342.setTransform(153.5,10.6);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#00BE48").s().p("EhMoADyIAAnkMCZRAAAIAAHkg");
	this.shape_343.setTransform(154.9,10.6);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#00BE48").s().p("EhM2ADzIAAnlMCZtAAAIAAHlg");
	this.shape_344.setTransform(156.3,10.6);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#00BE47").s().p("EhNEADzIAAnlMCaJAAAIAAHlg");
	this.shape_345.setTransform(157.7,10.7);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#00BE47").s().p("EhNTADzIAAnlMCamAAAIAAHlg");
	this.shape_346.setTransform(159.1,10.7);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#00BE46").s().p("EhNhAD0IAAnnMCbDAAAIAAHng");
	this.shape_347.setTransform(160.5,10.7);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#00BE46").s().p("EhNvAD0IAAnnMCbfAAAIAAHng");
	this.shape_348.setTransform(161.8,10.8);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#00BE45").s().p("EhN9AD0IAAnnMCb7AAAIAAHng");
	this.shape_349.setTransform(163.2,10.8);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#00BE45").s().p("EhOLAD1IAAnpMCcXAAAIAAHpg");
	this.shape_350.setTransform(164.6,10.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#00BE44").s().p("EhOZAD1IAAnpMCczAAAIAAHpg");
	this.shape_351.setTransform(166,10.9);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#00BE44").s().p("EhOoAD1IAAnpMCdRAAAIAAHpg");
	this.shape_352.setTransform(167.4,10.9);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#00BF43").s().p("EhO2AD2IAAnrMCdtAAAIAAHrg");
	this.shape_353.setTransform(168.8,10.9);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#00BF43").s().p("EhPEAD2IAAnrMCeJAAAIAAHrg");
	this.shape_354.setTransform(170.2,10.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#00BF42").s().p("EhPSAD2IAAnrMCelAAAIAAHrg");
	this.shape_355.setTransform(171.6,11);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#00BF41").s().p("EhPgAD2IAAnsMCfBAAAIAAHsg");
	this.shape_356.setTransform(173,11);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#00BF41").s().p("EhPuAD3IAAntMCfdAAAIAAHtg");
	this.shape_357.setTransform(174.4,11);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#00BF40").s().p("EhP8AD3IAAntMCf6AAAIAAHtg");
	this.shape_358.setTransform(175.8,11.1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#00BF40").s().p("EhQKAD3IAAntMCgVAAAIAAHtg");
	this.shape_359.setTransform(177.2,11.1);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#00BF3F").s().p("EhQZAD4IAAnvMCgzAAAIAAHvg");
	this.shape_360.setTransform(178.5,11.1);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#00BF3F").s().p("EhQnAD4IAAnvMChPAAAIAAHvg");
	this.shape_361.setTransform(179.9,11.2);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#00C03E").s().p("EhQ1AD4IAAnvMChrAAAIAAHvg");
	this.shape_362.setTransform(181.3,11.2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#00C03E").s().p("EhRDAD5IAAnxMCiHAAAIAAHxg");
	this.shape_363.setTransform(182.7,11.2);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#00C03D").s().p("EhRRAD5IAAnxMCijAAAIAAHxg");
	this.shape_364.setTransform(184.1,11.3);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#00C03D").s().p("EhRgAD5IAAnxMCjAAAAIAAHxg");
	this.shape_365.setTransform(185.5,11.3);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#00C03C").s().p("EhRuAD6IAAnzMCjcAAAIAAHzg");
	this.shape_366.setTransform(186.9,11.3);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#00C03C").s().p("EhR8AD6IAAnzMCj5AAAIAAHzg");
	this.shape_367.setTransform(188.3,11.3);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#00C03B").s().p("EhSKAD6IAAnzMCkVAAAIAAHzg");
	this.shape_368.setTransform(189.7,11.4);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#00C03B").s().p("EhSYAD7IAAn1MCkxAAAIAAH1g");
	this.shape_369.setTransform(191.1,11.4);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#00C03A").s().p("EhSmAD7IAAn1MClNAAAIAAH1g");
	this.shape_370.setTransform(192.5,11.4);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#00C139").s().p("EhS1AD7IAAn1MClqAAAIAAH1g");
	this.shape_371.setTransform(193.9,11.5);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#00C139").s().p("EhTCAD7IAAn2MCmFAAAIAAH2g");
	this.shape_372.setTransform(195.2,11.5);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#00C138").s().p("EhTRAD8IAAn3MCmjAAAIAAH3g");
	this.shape_373.setTransform(196.6,11.5);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#00C138").s().p("EhTfAD8IAAn3MCm/AAAIAAH3g");
	this.shape_374.setTransform(198,11.6);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#00C137").s().p("EhTtAD8IAAn3MCnbAAAIAAH3g");
	this.shape_375.setTransform(199.4,11.6);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#00C137").s().p("EhT7AD8IAAn4MCn3AAAIAAH4g");
	this.shape_376.setTransform(200.8,11.6);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#00C136").s().p("EhUJAD9IAAn5MCoUAAAIAAH5g");
	this.shape_377.setTransform(202.2,11.7);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#00C136").s().p("EhUXAD9IAAn5MCovAAAIAAH5g");
	this.shape_378.setTransform(203.6,11.7);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#00C135").s().p("EhUmAD+IAAn7MCpNAAAIAAH7g");
	this.shape_379.setTransform(205,11.7);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#00C135").s().p("EhU0AD+IAAn7MCppAAAIAAH7g");
	this.shape_380.setTransform(206.4,11.7);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#00C234").s().p("EhVCAD+IAAn7MCqFAAAIAAH7g");
	this.shape_381.setTransform(207.8,11.8);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#00C234").s().p("EhVQAD/IAAn9MCqhAAAIAAH9g");
	this.shape_382.setTransform(209.2,11.8);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#00C233").s().p("EhVeAD/IAAn9MCq9AAAIAAH9g");
	this.shape_383.setTransform(210.5,11.8);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#00C233").s().p("EhVsAD/IAAn9MCrZAAAIAAH9g");
	this.shape_384.setTransform(211.9,11.9);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#00C232").s().p("EhV6AD/IAAn+MCr1AAAIAAH+g");
	this.shape_385.setTransform(213.3,11.9);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#00C232").s().p("EhWJAEAIAAn/MCsTAAAIAAH/g");
	this.shape_386.setTransform(214.7,11.9);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#00C231").s().p("EhWXAEAIAAn/MCsvAAAIAAH/g");
	this.shape_387.setTransform(216.1,12);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#00C230").s().p("EhWlAEAIAAn/MCtLAAAIAAH/g");
	this.shape_388.setTransform(217.5,12);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#00C230").s().p("EhWzAEBIAAoBMCtnAAAIAAIBg");
	this.shape_389.setTransform(218.9,12);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#00C32F").s().p("EhXBAEBIAAoBMCuDAAAIAAIBg");
	this.shape_390.setTransform(220.3,12.1);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#00C32F").s().p("EhXPAEBIAAoBMCufAAAIAAIBg");
	this.shape_391.setTransform(221.7,12.1);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#00C32E").s().p("EhXeAECIAAoDMCu9AAAIAAIDg");
	this.shape_392.setTransform(223.1,12.1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#00C32E").s().p("EhXsAECIAAoDMCvZAAAIAAIDg");
	this.shape_393.setTransform(224.5,12.2);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#00C32D").s().p("EhX6AECIAAoDMCv1AAAIAAIDg");
	this.shape_394.setTransform(225.9,12.2);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#00C32D").s().p("EhYIAEDIAAoFMCwRAAAIAAIFg");
	this.shape_395.setTransform(227.3,12.2);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#00C32C").s().p("EhYWAEDIAAoFMCwtAAAIAAIFg");
	this.shape_396.setTransform(228.6,12.2);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#00C32C").s().p("EhYkAEDIAAoFMCxJAAAIAAIFg");
	this.shape_397.setTransform(230,12.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#00C32B").s().p("EhYzAEEIAAoHMCxmAAAIAAIHg");
	this.shape_398.setTransform(231.4,12.3);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#00C32B").s().p("EhZBAEEIAAoHMCyDAAAIAAIHg");
	this.shape_399.setTransform(232.8,12.3);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#00C42A").s().p("EhZPAEEIAAoHMCyfAAAIAAIHg");
	this.shape_400.setTransform(234.2,12.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#00C42A").s().p("EhZdAEEIAAoHMCy7AAAIAAIHg");
	this.shape_401.setTransform(235.6,12.4);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#00C429").s().p("EhZrAEFIAAoJMCzXAAAIAAIJg");
	this.shape_402.setTransform(237,12.4);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#00C428").s().p("EhZ5AEFIAAoJMCzzAAAIAAIJg");
	this.shape_403.setTransform(238.4,12.5);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#00C428").s().p("EhaHAEFIAAoJMC0PAAAIAAIJg");
	this.shape_404.setTransform(239.8,12.5);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#00C427").s().p("EhaWAEFIAAoKMC0sAAAIAAIKg");
	this.shape_405.setTransform(241.2,12.5);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#00C427").s().p("EhakAEGIAAoLMC1JAAAIAAILg");
	this.shape_406.setTransform(242.6,12.6);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#00C426").s().p("EhayAEGIAAoLMC1lAAAIAAILg");
	this.shape_407.setTransform(244,12.6);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#00C426").s().p("EhbAAEHIAAoNMC2BAAAIAAINg");
	this.shape_408.setTransform(245.4,12.6);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#00C525").s().p("EhbOAEHIAAoNMC2dAAAIAAINg");
	this.shape_409.setTransform(246.7,12.6);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#00C525").s().p("EhbcAEHIAAoNMC25AAAIAAINg");
	this.shape_410.setTransform(248.1,12.7);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#00C524").s().p("EhbqAEIIAAoPMC3WAAAIAAIPg");
	this.shape_411.setTransform(249.5,12.7);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#00C524").s().p("Ehb4AEIIAAoPMC3yAAAIAAIPg");
	this.shape_412.setTransform(250.9,12.7);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#00C523").s().p("EhcHAEIIAAoPMC4PAAAIAAIPg");
	this.shape_413.setTransform(252.3,12.8);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#00C523").s().p("EhcVAEIIAAoQMC4rAAAIAAIQg");
	this.shape_414.setTransform(253.7,12.8);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#00C522").s().p("EhcjAEJIAAoRMC5HAAAIAAIRg");
	this.shape_415.setTransform(255.1,12.8);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#00C522").s().p("EhcxAEJIAAoRMC5jAAAIAAIRg");
	this.shape_416.setTransform(256.5,12.9);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#00C521").s().p("EhdAAEJIAAoRMC6BAAAIAAIRg");
	this.shape_417.setTransform(257.9,12.9);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#00C620").s().p("EhdOAEJIAAoSMC6cAAAIAAISg");
	this.shape_418.setTransform(259.3,12.9);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#00C620").s().p("EhdcAEKIAAoTMC65AAAIAAITg");
	this.shape_419.setTransform(260.6,13);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#00C61F").s().p("EhdqAEKIAAoTMC7VAAAIAAITg");
	this.shape_420.setTransform(262.1,13);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#00C61F").s().p("Ehd4AELIAAoVMC7xAAAIAAIVg");
	this.shape_421.setTransform(263.4,13);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#00C61E").s().p("EheGAELIAAoVMC8NAAAIAAIVg");
	this.shape_422.setTransform(264.8,13);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#00C61E").s().p("EheUAELIAAoVMC8pAAAIAAIVg");
	this.shape_423.setTransform(266.2,13.1);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#00C61D").s().p("EhejAEMIAAoXMC9GAAAIAAIXg");
	this.shape_424.setTransform(267.6,13.1);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#00C61D").s().p("EhexAEMIAAoXMC9iAAAIAAIXg");
	this.shape_425.setTransform(269,13.1);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#00C61C").s().p("Ehe/AEMIAAoXMC9/AAAIAAIXg");
	this.shape_426.setTransform(270.4,13.2);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#00C61C").s().p("EhfNAEMIAAoYMC+bAAAIAAIYg");
	this.shape_427.setTransform(271.8,13.2);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#00C71B").s().p("EhfbAENIAAoZMC+3AAAIAAIZg");
	this.shape_428.setTransform(273.2,13.2);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#00C71B").s().p("EhfpAENIAAoZMC/TAAAIAAIZg");
	this.shape_429.setTransform(274.6,13.3);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#00C71A").s().p("Ehf3AENIAAoZMC/vAAAIAAIZg");
	this.shape_430.setTransform(276,13.3);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#00C71A").s().p("EhgFAEOIAAobMDAMAAAIAAIbg");
	this.shape_431.setTransform(277.4,13.3);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#00C719").s().p("EhgUAEOIAAobMDApAAAIAAIbg");
	this.shape_432.setTransform(278.7,13.4);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#00C718").s().p("EhgiAEOIAAobMDBFAAAIAAIbg");
	this.shape_433.setTransform(280.1,13.4);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#00C718").s().p("EhgwAEOIAAocMDBhAAAIAAIcg");
	this.shape_434.setTransform(281.5,13.4);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#00C717").s().p("Ehg+AEPIAAodMDB9AAAIAAIdg");
	this.shape_435.setTransform(282.9,13.5);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#00C717").s().p("EhhNAEPIAAodMDCbAAAIAAIdg");
	this.shape_436.setTransform(284.3,13.5);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#00C816").s().p("EhhbAEQIAAofMDC3AAAIAAIfg");
	this.shape_437.setTransform(285.7,13.5);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#00C816").s().p("EhhpAEQIAAofMDDTAAAIAAIfg");
	this.shape_438.setTransform(287.1,13.5);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#00C815").s().p("Ehh3AEQIAAofMDDvAAAIAAIfg");
	this.shape_439.setTransform(288.5,13.6);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#00C815").s().p("EhiFAERIAAohMDELAAAIAAIhg");
	this.shape_440.setTransform(289.9,13.6);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#00C814").s().p("EhiTAERIAAohMDEnAAAIAAIhg");
	this.shape_441.setTransform(291.3,13.6);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#00C814").s().p("EhihAERIAAohMDFDAAAIAAIhg");
	this.shape_442.setTransform(292.7,13.7);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#00C813").s().p("EhiwAERIAAohMDFgAAAIAAIhg");
	this.shape_443.setTransform(294.1,13.7);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#00C813").s().p("Ehi+AESIAAojMDF8AAAIAAIjg");
	this.shape_444.setTransform(295.5,13.7);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#00C812").s().p("EhjMAESIAAojMDGZAAAIAAIjg");
	this.shape_445.setTransform(296.8,13.8);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#00C812").s().p("EhjaAESIAAojMDG1AAAIAAIjg");
	this.shape_446.setTransform(298.2,13.8);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#00C911").s().p("EhjoAESIAAokMDHRAAAIAAIkg");
	this.shape_447.setTransform(299.6,13.8);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#00C911").s().p("Ehj2AETIAAolMDHtAAAIAAIlg");
	this.shape_448.setTransform(301,13.9);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#00C910").s().p("EhkEAETIAAolMDIJAAAIAAIlg");
	this.shape_449.setTransform(302.4,13.9);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#00C90F").s().p("EhkSAEUIAAonMDIlAAAIAAIng");
	this.shape_450.setTransform(303.8,13.9);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#00C90F").s().p("EhkhAEUIAAonMDJDAAAIAAIng");
	this.shape_451.setTransform(305.2,13.9);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#00C90E").s().p("EhkvAEUIAAonMDJfAAAIAAIng");
	this.shape_452.setTransform(306.6,14);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#00C90E").s().p("Ehk9AEVIAAopMDJ7AAAIAAIpg");
	this.shape_453.setTransform(308,14);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#00C90D").s().p("EhlLAEVIAAopMDKXAAAIAAIpg");
	this.shape_454.setTransform(309.4,14);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#00C90D").s().p("EhlZAEVIAAopMDKzAAAIAAIpg");
	this.shape_455.setTransform(310.7,14.1);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#00CA0C").s().p("EhloAEVIAAoqMDLRAAAIAAIqg");
	this.shape_456.setTransform(312.2,14.1);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#00CA0C").s().p("Ehl2AEWIAAorMDLtAAAIAAIrg");
	this.shape_457.setTransform(313.5,14.1);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#00CA0B").s().p("EhmEAEWIAAorMDMJAAAIAAIrg");
	this.shape_458.setTransform(314.9,14.2);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#00CA0B").s().p("EhmSAEWIAAorMDMlAAAIAAIrg");
	this.shape_459.setTransform(316.3,14.2);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#00CA0A").s().p("EhmgAEWIAAosMDNBAAAIAAIsg");
	this.shape_460.setTransform(317.7,14.2);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#00CA0A").s().p("EhmuAEXIAAotMDNdAAAIAAItg");
	this.shape_461.setTransform(319.1,14.3);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#00CA09").s().p("Ehm9AEXIAAotMDN7AAAIAAItg");
	this.shape_462.setTransform(320.5,14.3);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#00CA09").s().p("EhnLAEXIAAouMDOXAAAIAAIug");
	this.shape_463.setTransform(321.9,14.3);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#00CA08").s().p("EhnZAEYIAAovMDOzAAAIAAIvg");
	this.shape_464.setTransform(323.3,14.3);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#00CB07").s().p("EhnnAEYIAAovMDPPAAAIAAIvg");
	this.shape_465.setTransform(324.7,14.4);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#00CB07").s().p("Ehn1AEZIAAoxMDPrAAAIAAIxg");
	this.shape_466.setTransform(326.1,14.4);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#00CB06").s().p("EhoDAEZIAAoxMDQHAAAIAAIxg");
	this.shape_467.setTransform(327.5,14.4);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#00CB06").s().p("EhoRAEZIAAoxMDQjAAAIAAIxg");
	this.shape_468.setTransform(328.8,14.5);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#00CB05").s().p("EhofAEaIAAozMDQ/AAAIAAIzg");
	this.shape_469.setTransform(330.3,14.5);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#00CB05").s().p("EhouAEaIAAozMDRdAAAIAAIzg");
	this.shape_470.setTransform(331.6,14.5);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#00CB04").s().p("Eho8AEaIAAozMDR5AAAIAAIzg");
	this.shape_471.setTransform(333,14.6);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#00CB04").s().p("EhpKAEaIAAozMDSVAAAIAAIzg");
	this.shape_472.setTransform(334.4,14.6);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#00CB03").s().p("EhpYAEbIAAo1MDSxAAAIAAI1g");
	this.shape_473.setTransform(335.8,14.6);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#00CB03").s().p("EhpmAEbIAAo1MDTNAAAIAAI1g");
	this.shape_474.setTransform(337.2,14.7);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#00CC02").s().p("Ehp1AEbIAAo1MDTqAAAIAAI1g");
	this.shape_475.setTransform(338.6,14.7);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#00CC02").s().p("EhqDAEbIAAo2MDUHAAAIAAI2g");
	this.shape_476.setTransform(340,14.7);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#00CC01").s().p("EhqRAEcIAAo3MDUjAAAIAAI3g");
	this.shape_477.setTransform(341.4,14.8);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#00CC01").s().p("EhqfAEcIAAo3MDU/AAAIAAI3g");
	this.shape_478.setTransform(342.8,14.8);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#00CC00").s().p("EgzAACIIAAkPMBmBAAAIAAEPg");
	this.shape_479.setTransform(344.2,14.8,2.092,2.094);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mcLoader6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_360 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(360).call(this.frame_360).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AgxCIIAAkPIBjAAIAAEPg");
	this.shape.setTransform(-322.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FE").s().p("AhECIIAAkPICJAAIAAEPg");
	this.shape_1.setTransform(-320.6,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FE").s().p("AhXCJIAAkRICvAAIAAERg");
	this.shape_2.setTransform(-318.8,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FD").s().p("AhqCJIAAkRIDVAAIAAERg");
	this.shape_3.setTransform(-316.9,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009AFC").s().p("Ah9CKIAAkTID7AAIAAETg");
	this.shape_4.setTransform(-315.1,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009AFB").s().p("AiQCKIAAkTIEhAAIAAETg");
	this.shape_5.setTransform(-313.2,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009AFB").s().p("AiiCLIAAkUIFFAAIAAEUg");
	this.shape_6.setTransform(-311.4,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009AFA").s().p("Ai1CLIAAkVIFrAAIAAEVg");
	this.shape_7.setTransform(-309.5,0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009AF9").s().p("AjICLIAAkVIGRAAIAAEVg");
	this.shape_8.setTransform(-307.6,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009AF9").s().p("AjbCMIAAkXIG3AAIAAEXg");
	this.shape_9.setTransform(-305.8,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009AF8").s().p("AjuCMIAAkXIHdAAIAAEXg");
	this.shape_10.setTransform(-303.9,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009BF7").s().p("AkBCMIAAkXIIDAAIAAEXg");
	this.shape_11.setTransform(-302.1,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009BF6").s().p("AkUCNIAAkZIIpAAIAAEZg");
	this.shape_12.setTransform(-300.2,0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009BF6").s().p("AkmCNIAAkZIJNAAIAAEZg");
	this.shape_13.setTransform(-298.3,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009BF5").s().p("Ak6COIAAkbIJ0AAIAAEbg");
	this.shape_14.setTransform(-296.5,0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009BF4").s().p("AlMCOIAAkbIKZAAIAAEbg");
	this.shape_15.setTransform(-294.6,0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009BF4").s().p("AlfCPIAAkcIK/AAIAAEcg");
	this.shape_16.setTransform(-292.8,0.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009BF3").s().p("AlyCPIAAkdILlAAIAAEdg");
	this.shape_17.setTransform(-290.9,0.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#009CF2").s().p("AmFCQIAAkeIMLAAIAAEeg");
	this.shape_18.setTransform(-289.1,0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009CF2").s().p("AmYCQIAAkfIMxAAIAAEfg");
	this.shape_19.setTransform(-287.2,0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009CF1").s().p("AmrCQIAAkfINXAAIAAEfg");
	this.shape_20.setTransform(-285.4,0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009CF0").s().p("Am9CRIAAkhIN7AAIAAEhg");
	this.shape_21.setTransform(-283.5,0.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009CEF").s().p("AnRCRIAAkhIOjAAIAAEhg");
	this.shape_22.setTransform(-281.6,0.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009CEF").s().p("AnjCRIAAkhIPHAAIAAEhg");
	this.shape_23.setTransform(-279.8,1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#009CEE").s().p("An2CSIAAkjIPtAAIAAEjg");
	this.shape_24.setTransform(-277.9,1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#009DED").s().p("AoJCSIAAkjIQTAAIAAEjg");
	this.shape_25.setTransform(-276.1,1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#009DED").s().p("AocCTIAAklIQ5AAIAAElg");
	this.shape_26.setTransform(-274.2,1.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#009DEC").s().p("AovCTIAAklIRfAAIAAElg");
	this.shape_27.setTransform(-272.3,1.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#009DEB").s().p("ApCCUIAAkmISFAAIAAEmg");
	this.shape_28.setTransform(-270.5,1.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#009DEA").s().p("ApVCUIAAknISrAAIAAEng");
	this.shape_29.setTransform(-268.6,1.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#009DEA").s().p("ApoCVIAAkoITRAAIAAEog");
	this.shape_30.setTransform(-266.8,1.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#009DE9").s().p("Ap7CVIAAkpIT2AAIAAEpg");
	this.shape_31.setTransform(-264.9,1.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#009EE8").s().p("AqNCVIAAkpIUbAAIAAEpg");
	this.shape_32.setTransform(-263.1,1.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#009EE8").s().p("AqgCWIAAkrIVBAAIAAErg");
	this.shape_33.setTransform(-261.2,1.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#009EE7").s().p("AqzCWIAAkrIVnAAIAAErg");
	this.shape_34.setTransform(-259.3,1.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#009EE6").s().p("ArGCWIAAkrIWNAAIAAErg");
	this.shape_35.setTransform(-257.5,1.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#009EE5").s().p("ArZCXIAAktIWzAAIAAEtg");
	this.shape_36.setTransform(-255.6,1.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#009EE5").s().p("ArsCXIAAktIXZAAIAAEtg");
	this.shape_37.setTransform(-253.8,1.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#009EE4").s().p("Ar/CYIAAkvIX/AAIAAEvg");
	this.shape_38.setTransform(-251.9,1.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#009FE3").s().p("AsSCYIAAkvIYlAAIAAEvg");
	this.shape_39.setTransform(-250.1,1.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#009FE3").s().p("AskCZIAAkwIZJAAIAAEwg");
	this.shape_40.setTransform(-248.2,1.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#009FE2").s().p("As3CZIAAkxIZwAAIAAExg");
	this.shape_41.setTransform(-246.3,1.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#009FE1").s().p("AtKCZIAAkxIaVAAIAAExg");
	this.shape_42.setTransform(-244.5,1.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#009FE0").s().p("AtdCaIAAkzIa7AAIAAEzg");
	this.shape_43.setTransform(-242.6,1.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#009FE0").s().p("AtwCaIAAkzIbhAAIAAEzg");
	this.shape_44.setTransform(-240.8,1.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#009FDF").s().p("AuDCaIAAkzIcHAAIAAEzg");
	this.shape_45.setTransform(-238.9,1.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00A0DE").s().p("AuWCbIAAk1IctAAIAAE1g");
	this.shape_46.setTransform(-237.1,1.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00A0DE").s().p("AupCbIAAk1IdTAAIAAE1g");
	this.shape_47.setTransform(-235.2,2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00A0DD").s().p("Au8CcIAAk3Id4AAIAAE3g");
	this.shape_48.setTransform(-233.3,2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00A0DC").s().p("AvOCcIAAk3IeeAAIAAE3g");
	this.shape_49.setTransform(-231.5,2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00A0DB").s().p("AviCdIAAk5IfEAAIAAE5g");
	this.shape_50.setTransform(-229.6,2.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00A0DB").s().p("Av0CdIAAk5IfpAAIAAE5g");
	this.shape_51.setTransform(-227.8,2.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00A0DA").s().p("AwHCeIAAk6MAgPAAAIAAE6g");
	this.shape_52.setTransform(-225.9,2.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00A1D9").s().p("AwaCeIAAk7MAg1AAAIAAE7g");
	this.shape_53.setTransform(-224.1,2.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00A1D9").s().p("AwtCeIAAk7MAhbAAAIAAE7g");
	this.shape_54.setTransform(-222.2,2.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00A1D8").s().p("AxACfIAAk9MAiBAAAIAAE9g");
	this.shape_55.setTransform(-220.4,2.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00A1D7").s().p("AxSCfIAAk9MAimAAAIAAE9g");
	this.shape_56.setTransform(-218.5,2.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00A1D7").s().p("AxmCfIAAk9MAjMAAAIAAE9g");
	this.shape_57.setTransform(-216.6,2.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00A1D6").s().p("Ax4CgIAAk/MAjxAAAIAAE/g");
	this.shape_58.setTransform(-214.8,2.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00A1D5").s().p("AyLCgIAAk/MAkXAAAIAAE/g");
	this.shape_59.setTransform(-212.9,2.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00A2D4").s().p("AyeChIAAlBMAk9AAAIAAFBg");
	this.shape_60.setTransform(-211.1,2.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00A2D4").s().p("AyxChIAAlBMAljAAAIAAFBg");
	this.shape_61.setTransform(-209.2,2.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00A2D3").s().p("AzECiIAAlCMAmJAAAIAAFCg");
	this.shape_62.setTransform(-207.4,2.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00A2D2").s().p("AzXCiIAAlDMAmvAAAIAAFDg");
	this.shape_63.setTransform(-205.5,2.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00A2D2").s().p("AzpCiIAAlDMAnUAAAIAAFDg");
	this.shape_64.setTransform(-203.6,2.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00A2D1").s().p("Az9CjIAAlFMAn6AAAIAAFFg");
	this.shape_65.setTransform(-201.8,2.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00A2D0").s().p("A0PCjIAAlFMAogAAAIAAFFg");
	this.shape_66.setTransform(-199.9,2.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00A3CF").s().p("A0iCkIAAlHMApFAAAIAAFHg");
	this.shape_67.setTransform(-198.1,2.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00A3CF").s().p("A01CkIAAlHMAprAAAIAAFHg");
	this.shape_68.setTransform(-196.2,2.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00A3CE").s().p("A1ICkIAAlHMAqRAAAIAAFHg");
	this.shape_69.setTransform(-194.4,2.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00A3CD").s().p("A1bClIAAlJMAq3AAAIAAFJg");
	this.shape_70.setTransform(-192.5,2.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00A3CD").s().p("A1uClIAAlJMArdAAAIAAFJg");
	this.shape_71.setTransform(-190.6,2.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00A3CC").s().p("A2BCmIAAlLMAsDAAAIAAFLg");
	this.shape_72.setTransform(-188.8,3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00A3CB").s().p("A2TCmIAAlLMAsnAAAIAAFLg");
	this.shape_73.setTransform(-186.9,3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00A4CA").s().p("A2nCnIAAlMMAtPAAAIAAFMg");
	this.shape_74.setTransform(-185.1,3.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#00A4CA").s().p("A25CnIAAlNMAtzAAAIAAFNg");
	this.shape_75.setTransform(-183.2,3.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#00A4C9").s().p("A3MCnIAAlNMAuZAAAIAAFNg");
	this.shape_76.setTransform(-181.4,3.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#00A4C8").s().p("A3fCoIAAlPMAu/AAAIAAFPg");
	this.shape_77.setTransform(-179.5,3.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#00A4C8").s().p("A3yCoIAAlPMAvlAAAIAAFPg");
	this.shape_78.setTransform(-177.6,3.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00A4C7").s().p("A4FCoIAAlPMAwLAAAIAAFPg");
	this.shape_79.setTransform(-175.8,3.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#00A4C6").s().p("A4YCpIAAlRMAwxAAAIAAFRg");
	this.shape_80.setTransform(-173.9,3.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00A5C5").s().p("A4rCqIAAlSMAxXAAAIAAFSg");
	this.shape_81.setTransform(-172.1,3.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00A5C5").s().p("A4+CqIAAlTMAx9AAAIAAFTg");
	this.shape_82.setTransform(-170.2,3.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00A5C4").s().p("A5RCqIAAlTMAyjAAAIAAFTg");
	this.shape_83.setTransform(-168.3,3.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#00A5C3").s().p("A5jCrIAAlVMAzHAAAIAAFVg");
	this.shape_84.setTransform(-166.5,3.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00A5C3").s().p("A52CrIAAlVMAztAAAIAAFVg");
	this.shape_85.setTransform(-164.7,3.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00A5C2").s().p("A6JCrIAAlVMA0TAAAIAAFVg");
	this.shape_86.setTransform(-162.8,3.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#00A5C1").s().p("A6cCsIAAlXMA05AAAIAAFXg");
	this.shape_87.setTransform(-160.9,3.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00A6C0").s().p("A6vCsIAAlXMA1fAAAIAAFXg");
	this.shape_88.setTransform(-159.1,3.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00A6C0").s().p("A7CCtIAAlZMA2FAAAIAAFZg");
	this.shape_89.setTransform(-157.2,3.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00A6BF").s().p("A7VCtIAAlZMA2rAAAIAAFZg");
	this.shape_90.setTransform(-155.4,3.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00A6BE").s().p("A7oCtIAAlZMA3RAAAIAAFZg");
	this.shape_91.setTransform(-153.5,3.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#00A6BE").s().p("A76CuIAAlbMA31AAAIAAFbg");
	this.shape_92.setTransform(-151.6,3.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#00A6BD").s().p("A8OCvIAAlcMA4dAAAIAAFcg");
	this.shape_93.setTransform(-149.8,3.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#00A6BC").s().p("A8gCvIAAldMA5BAAAIAAFdg");
	this.shape_94.setTransform(-147.9,3.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#00A6BC").s().p("A8zCvIAAldMA5nAAAIAAFdg");
	this.shape_95.setTransform(-146.1,3.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#00A7BB").s().p("A9GCwIAAlfMA6NAAAIAAFfg");
	this.shape_96.setTransform(-144.2,4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#00A7BA").s().p("A9ZCwIAAlfMA6zAAAIAAFfg");
	this.shape_97.setTransform(-142.4,4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#00A7B9").s().p("A9sCwIAAlfMA7ZAAAIAAFfg");
	this.shape_98.setTransform(-140.5,4.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00A7B9").s().p("A9/CxIAAlhMA7/AAAIAAFhg");
	this.shape_99.setTransform(-138.7,4.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#00A7B8").s().p("A+SCxIAAlhMA8lAAAIAAFhg");
	this.shape_100.setTransform(-136.8,4.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#00A7B7").s().p("A+kCyIAAljMA9KAAAIAAFjg");
	this.shape_101.setTransform(-134.9,4.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#00A7B7").s().p("A+3CyIAAljMA9vAAAIAAFjg");
	this.shape_102.setTransform(-133.1,4.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#00A8B6").s().p("A/KCzIAAlkMA+VAAAIAAFkg");
	this.shape_103.setTransform(-131.2,4.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#00A8B5").s().p("A/dCzIAAllMA+7AAAIAAFlg");
	this.shape_104.setTransform(-129.4,4.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#00A8B4").s().p("A/wCzIAAllMA/hAAAIAAFlg");
	this.shape_105.setTransform(-127.5,4.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#00A8B4").s().p("EggDAC0IAAlnMBAHAAAIAAFng");
	this.shape_106.setTransform(-125.7,4.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#00A8B3").s().p("EggWAC0IAAlnMBAtAAAIAAFng");
	this.shape_107.setTransform(-123.8,4.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#00A8B2").s().p("EggpAC1IAAloMBBTAAAIAAFog");
	this.shape_108.setTransform(-121.9,4.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#00A8B2").s().p("Egg7AC1IAAlpMBB3AAAIAAFpg");
	this.shape_109.setTransform(-120.1,4.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#00A9B1").s().p("EghPAC1IAAlpMBCfAAAIAAFpg");
	this.shape_110.setTransform(-118.2,4.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#00A9B0").s().p("EghhAC2IAAlrMBDDAAAIAAFrg");
	this.shape_111.setTransform(-116.4,4.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#00A9AF").s().p("Egh0AC2IAAlrMBDpAAAIAAFrg");
	this.shape_112.setTransform(-114.5,4.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#00A9AF").s().p("EgiHAC3IAAltMBEPAAAIAAFtg");
	this.shape_113.setTransform(-112.6,4.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#00A9AE").s().p("EgiaAC3IAAltMBE1AAAIAAFtg");
	this.shape_114.setTransform(-110.8,4.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#00A9AD").s().p("EgitAC4IAAluMBFbAAAIAAFug");
	this.shape_115.setTransform(-108.9,4.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#00A9AD").s().p("EgjAAC4IAAlvMBGBAAAIAAFvg");
	this.shape_116.setTransform(-107.1,4.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#00AAAC").s().p("EgjTAC4IAAlvMBGnAAAIAAFvg");
	this.shape_117.setTransform(-105.2,4.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#00AAAB").s().p("EgjmAC5IAAlxMBHNAAAIAAFxg");
	this.shape_118.setTransform(-103.4,4.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00AAAA").s().p("Egj5AC5IAAlxMBHzAAAIAAFxg");
	this.shape_119.setTransform(-101.5,4.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00AAAA").s().p("EgkLAC5IAAlxMBIXAAAIAAFxg");
	this.shape_120.setTransform(-99.7,5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00AAA9").s().p("EgkeAC6IAAlzMBI9AAAIAAFzg");
	this.shape_121.setTransform(-97.8,5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#00AAA8").s().p("EgkxAC6IAAlzMBJjAAAIAAFzg");
	this.shape_122.setTransform(-95.9,5.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00AAA8").s().p("EglEAC7IAAl1MBKJAAAIAAF1g");
	this.shape_123.setTransform(-94.1,5.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00ABA7").s().p("EglXAC7IAAl1MBKvAAAIAAF1g");
	this.shape_124.setTransform(-92.2,5.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#00ABA6").s().p("EglqAC8IAAl2MBLVAAAIAAF2g");
	this.shape_125.setTransform(-90.4,5.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#00ABA6").s().p("Egl9AC8IAAl3MBL7AAAIAAF3g");
	this.shape_126.setTransform(-88.5,5.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#00ABA5").s().p("EgmPAC9IAAl4MBMgAAAIAAF4g");
	this.shape_127.setTransform(-86.6,5.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#00ABA4").s().p("EgmjAC9IAAl5MBNGAAAIAAF5g");
	this.shape_128.setTransform(-84.8,5.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#00ABA3").s().p("Egm1AC9IAAl5MBNrAAAIAAF5g");
	this.shape_129.setTransform(-83,5.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#00ABA3").s().p("EgnIAC+IAAl7MBORAAAIAAF7g");
	this.shape_130.setTransform(-81.1,5.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#00ACA2").s().p("EgnbAC+IAAl7MBO3AAAIAAF7g");
	this.shape_131.setTransform(-79.2,5.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#00ACA1").s().p("EgnuAC+IAAl7MBPdAAAIAAF7g");
	this.shape_132.setTransform(-77.4,5.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#00ACA1").s().p("EgoBAC/IAAl9MBQDAAAIAAF9g");
	this.shape_133.setTransform(-75.5,5.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#00ACA0").s().p("EgoUAC/IAAl9MBQpAAAIAAF9g");
	this.shape_134.setTransform(-73.7,5.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#00AC9F").s().p("EgomADAIAAl/MBROAAAIAAF/g");
	this.shape_135.setTransform(-71.8,5.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#00AC9E").s().p("Ego6ADAIAAl/MBR0AAAIAAF/g");
	this.shape_136.setTransform(-69.9,5.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#00AC9E").s().p("EgpMADBIAAmAMBSaAAAIAAGAg");
	this.shape_137.setTransform(-68.1,5.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#00AD9D").s().p("EgpfADBIAAmBMBS/AAAIAAGBg");
	this.shape_138.setTransform(-66.2,5.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#00AD9C").s().p("EgpyADCIAAmCMBTlAAAIAAGCg");
	this.shape_139.setTransform(-64.4,5.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#00AD9C").s().p("EgqFADCIAAmDMBULAAAIAAGDg");
	this.shape_140.setTransform(-62.5,5.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#00AD9B").s().p("EgqYADCIAAmDMBUxAAAIAAGDg");
	this.shape_141.setTransform(-60.6,5.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#00AD9A").s().p("EgqrADDIAAmFMBVXAAAIAAGFg");
	this.shape_142.setTransform(-58.8,5.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#00AD99").s().p("Egq+ADDIAAmFMBV8AAAIAAGFg");
	this.shape_143.setTransform(-56.9,5.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#00AD99").s().p("EgrQADDIAAmFMBWhAAAIAAGFg");
	this.shape_144.setTransform(-55.1,6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#00AE98").s().p("EgrkADEIAAmHMBXJAAAIAAGHg");
	this.shape_145.setTransform(-53.2,6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#00AE97").s().p("Egr2ADEIAAmHMBXtAAAIAAGHg");
	this.shape_146.setTransform(-51.4,6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#00AE97").s().p("EgsJADFIAAmJMBYTAAAIAAGJg");
	this.shape_147.setTransform(-49.5,6.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#00AE96").s().p("EgscADFIAAmJMBY5AAAIAAGJg");
	this.shape_148.setTransform(-47.7,6.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#00AE95").s().p("EgsvADGIAAmKMBZfAAAIAAGKg");
	this.shape_149.setTransform(-45.8,6.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#00AE94").s().p("EgtCADGIAAmLMBaFAAAIAAGLg");
	this.shape_150.setTransform(-43.9,6.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#00AE94").s().p("EgtVADGIAAmLMBaqAAAIAAGLg");
	this.shape_151.setTransform(-42.1,6.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#00AF93").s().p("EgtoADHIAAmNMBbRAAAIAAGNg");
	this.shape_152.setTransform(-40.2,6.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#00AF92").s().p("Egt7ADHIAAmNMBb2AAAIAAGNg");
	this.shape_153.setTransform(-38.4,6.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#00AF92").s().p("EguNADHIAAmNMBcbAAAIAAGNg");
	this.shape_154.setTransform(-36.5,6.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#00AF91").s().p("EgugADIIAAmPMBdBAAAIAAGPg");
	this.shape_155.setTransform(-34.7,6.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#00AF90").s().p("EguzADIIAAmPMBdnAAAIAAGPg");
	this.shape_156.setTransform(-32.8,6.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#00AF8F").s().p("EgvGADJIAAmRMBeNAAAIAAGRg");
	this.shape_157.setTransform(-30.9,6.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#00AF8F").s().p("EgvZADJIAAmRMBezAAAIAAGRg");
	this.shape_158.setTransform(-29.1,6.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#00B08E").s().p("EgvsADKIAAmTMBfZAAAIAAGTg");
	this.shape_159.setTransform(-27.2,6.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#00B08D").s().p("Egv/ADKIAAmTMBf/AAAIAAGTg");
	this.shape_160.setTransform(-25.4,6.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#00B08D").s().p("EgwSADLIAAmUMBglAAAIAAGUg");
	this.shape_161.setTransform(-23.5,6.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#00B08C").s().p("EgwkADLIAAmVMBhJAAAIAAGVg");
	this.shape_162.setTransform(-21.7,6.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#00B08B").s().p("Egw3ADLIAAmVMBhvAAAIAAGVg");
	this.shape_163.setTransform(-19.8,6.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#00B08B").s().p("EgxKADMIAAmXMBiVAAAIAAGXg");
	this.shape_164.setTransform(-18,6.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#00B08A").s().p("EgxdADMIAAmXMBi7AAAIAAGXg");
	this.shape_165.setTransform(-16.1,6.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#00B189").s().p("EgxwADMIAAmXMBjhAAAIAAGXg");
	this.shape_166.setTransform(-14.2,6.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#00B188").s().p("EgyDADNIAAmZMBkHAAAIAAGZg");
	this.shape_167.setTransform(-12.4,6.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#00B188").s().p("EgyWADOIAAmaMBktAAAIAAGag");
	this.shape_168.setTransform(-10.5,7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#00B187").s().p("EgypADOIAAmbMBlTAAAIAAGbg");
	this.shape_169.setTransform(-8.7,7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#00B186").s().p("Egy7ADOIAAmbMBl3AAAIAAGbg");
	this.shape_170.setTransform(-6.8,7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#00B186").s().p("EgzPADPIAAmcMBmfAAAIAAGcg");
	this.shape_171.setTransform(-4.9,7.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#00B185").s().p("EgzhADPIAAmdMBnEAAAIAAGdg");
	this.shape_172.setTransform(-3.1,7.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#00B284").s().p("Egz0ADPIAAmdMBnpAAAIAAGdg");
	this.shape_173.setTransform(-1.2,7.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#00B283").s().p("Eg0HADQIAAmfMBoPAAAIAAGfg");
	this.shape_174.setTransform(0.6,7.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#00B283").s().p("Eg0aADQIAAmfMBo1AAAIAAGfg");
	this.shape_175.setTransform(2.5,7.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#00B282").s().p("Eg0tADRIAAmhMBpbAAAIAAGhg");
	this.shape_176.setTransform(4.3,7.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#00B281").s().p("Eg1AADRIAAmhMBqBAAAIAAGhg");
	this.shape_177.setTransform(6.2,7.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#00B281").s().p("Eg1TADRIAAmhMBqnAAAIAAGhg");
	this.shape_178.setTransform(8,7.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#00B280").s().p("Eg1mADSIAAmjMBrNAAAIAAGjg");
	this.shape_179.setTransform(9.9,7.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#00B37F").s().p("Eg14ADSIAAmkMBrxAAAIAAGkg");
	this.shape_180.setTransform(11.8,7.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#00B37E").s().p("Eg2LADTIAAmlMBsXAAAIAAGlg");
	this.shape_181.setTransform(13.6,7.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#00B37E").s().p("Eg2eADTIAAmmMBs9AAAIAAGmg");
	this.shape_182.setTransform(15.5,7.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#00B37D").s().p("Eg2xADUIAAmnMBtjAAAIAAGng");
	this.shape_183.setTransform(17.3,7.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#00B37C").s().p("Eg3EADUIAAmnMBuJAAAIAAGng");
	this.shape_184.setTransform(19.2,7.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#00B37C").s().p("Eg3XADVIAAmpMBuvAAAIAAGpg");
	this.shape_185.setTransform(21,7.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#00B37B").s().p("Eg3qADVIAAmpMBvVAAAIAAGpg");
	this.shape_186.setTransform(22.9,7.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#00B47A").s().p("Eg38ADWIAAmrMBv5AAAIAAGrg");
	this.shape_187.setTransform(24.8,7.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#00B479").s().p("Eg4QADWIAAmrMBwgAAAIAAGrg");
	this.shape_188.setTransform(26.6,7.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#00B479").s().p("Eg4jADWIAAmrMBxHAAAIAAGrg");
	this.shape_189.setTransform(28.5,7.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#00B478").s().p("Eg41ADXIAAmtMBxrAAAIAAGtg");
	this.shape_190.setTransform(30.3,7.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#00B477").s().p("Eg5IADXIAAmtMByRAAAIAAGtg");
	this.shape_191.setTransform(32.2,7.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#00B477").s().p("Eg5bADXIAAmuMBy3AAAIAAGug");
	this.shape_192.setTransform(34.1,7.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#00B476").s().p("Eg5uADYIAAmvMBzdAAAIAAGvg");
	this.shape_193.setTransform(35.9,8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#00B575").s().p("Eg6BADYIAAmvMB0DAAAIAAGvg");
	this.shape_194.setTransform(37.8,8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#00B574").s().p("Eg6UADZIAAmxMB0pAAAIAAGxg");
	this.shape_195.setTransform(39.6,8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#00B574").s().p("Eg6nADZIAAmxMB1PAAAIAAGxg");
	this.shape_196.setTransform(41.5,8.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#00B573").s().p("Eg66ADaIAAmzMB11AAAIAAGzg");
	this.shape_197.setTransform(43.3,8.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#00B572").s().p("Eg7MADaIAAmzMB2ZAAAIAAGzg");
	this.shape_198.setTransform(45.2,8.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#00B572").s().p("Eg7fADbIAAm1MB2/AAAIAAG1g");
	this.shape_199.setTransform(47,8.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#00B571").s().p("Eg7yADbIAAm1MB3lAAAIAAG1g");
	this.shape_200.setTransform(48.9,8.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#00B670").s().p("Eg8FADbIAAm1MB4LAAAIAAG1g");
	this.shape_201.setTransform(50.8,8.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#00B670").s().p("Eg8YADcIAAm3MB4xAAAIAAG3g");
	this.shape_202.setTransform(52.6,8.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#00B66F").s().p("Eg8rADcIAAm3MB5XAAAIAAG3g");
	this.shape_203.setTransform(54.5,8.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#00B66E").s().p("Eg8+ADcIAAm4MB59AAAIAAG4g");
	this.shape_204.setTransform(56.3,8.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#00B66D").s().p("Eg9RADdIAAm5MB6jAAAIAAG5g");
	this.shape_205.setTransform(58.2,8.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#00B66D").s().p("Eg9jADdIAAm5MB7IAAAIAAG5g");
	this.shape_206.setTransform(60.1,8.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#00B66C").s().p("Eg92ADeIAAm7MB7tAAAIAAG7g");
	this.shape_207.setTransform(61.9,8.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#00B76B").s().p("Eg+JADeIAAm7MB8UAAAIAAG7g");
	this.shape_208.setTransform(63.8,8.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#00B76B").s().p("Eg+cADfIAAm9MB85AAAIAAG9g");
	this.shape_209.setTransform(65.6,8.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#00B76A").s().p("Eg+vADfIAAm9MB9fAAAIAAG9g");
	this.shape_210.setTransform(67.5,8.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#00B769").s().p("Eg/CADfIAAm+MB+FAAAIAAG+g");
	this.shape_211.setTransform(69.3,8.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#00B768").s().p("Eg/VADgIAAm/MB+rAAAIAAG/g");
	this.shape_212.setTransform(71.2,8.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#00B768").s().p("Eg/oADgIAAm/MB/RAAAIAAG/g");
	this.shape_213.setTransform(73,8.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#00B767").s().p("Eg/7ADgIAAnAMB/2AAAIAAHAg");
	this.shape_214.setTransform(74.9,8.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#00B866").s().p("EhANADhIAAnBMCAbAAAIAAHBg");
	this.shape_215.setTransform(76.8,8.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#00B866").s().p("EhAhADhIAAnCMCBDAAAIAAHCg");
	this.shape_216.setTransform(78.6,8.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#00B865").s().p("EhAzADiIAAnDMCBnAAAIAAHDg");
	this.shape_217.setTransform(80.5,8.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#00B864").s().p("EhBGADiIAAnDMCCNAAAIAAHDg");
	this.shape_218.setTransform(82.3,9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#00B863").s().p("EhBZADjIAAnFMCCzAAAIAAHFg");
	this.shape_219.setTransform(84.2,9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#00B863").s().p("EhBsADjIAAnFMCDZAAAIAAHFg");
	this.shape_220.setTransform(86,9.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#00B862").s().p("EhB/ADkIAAnHMCD/AAAIAAHHg");
	this.shape_221.setTransform(87.9,9.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#00B961").s().p("EhCSADkIAAnHMCEkAAAIAAHHg");
	this.shape_222.setTransform(89.8,9.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#00B961").s().p("EhCkADkIAAnHMCFKAAAIAAHHg");
	this.shape_223.setTransform(91.6,9.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#00B960").s().p("EhC4ADlIAAnJMCFwAAAIAAHJg");
	this.shape_224.setTransform(93.5,9.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#00B95F").s().p("EhDKADlIAAnJMCGVAAAIAAHJg");
	this.shape_225.setTransform(95.3,9.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#00B95E").s().p("EhDdADlIAAnKMCG7AAAIAAHKg");
	this.shape_226.setTransform(97.2,9.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#00B95E").s().p("EhDwADmIAAnLMCHhAAAIAAHLg");
	this.shape_227.setTransform(99,9.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#00B95D").s().p("EhEDADnIAAnNMCIHAAAIAAHNg");
	this.shape_228.setTransform(100.9,9.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#00BA5C").s().p("EhEWADnIAAnNMCItAAAIAAHNg");
	this.shape_229.setTransform(102.7,9.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#00BA5C").s().p("EhEpADnIAAnNMCJTAAAIAAHNg");
	this.shape_230.setTransform(104.6,9.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#00BA5B").s().p("EhE8ADoIAAnPMCJ5AAAIAAHPg");
	this.shape_231.setTransform(106.5,9.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#00BA5A").s().p("EhFPADoIAAnPMCKeAAAIAAHPg");
	this.shape_232.setTransform(108.3,9.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#00BA59").s().p("EhFhADoIAAnQMCLDAAAIAAHQg");
	this.shape_233.setTransform(110.2,9.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#00BA59").s().p("EhF0ADpIAAnRMCLpAAAIAAHRg");
	this.shape_234.setTransform(112,9.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#00BA58").s().p("EhGHADpIAAnRMCMPAAAIAAHRg");
	this.shape_235.setTransform(113.9,9.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#00BB57").s().p("EhGaADqIAAnTMCM1AAAIAAHTg");
	this.shape_236.setTransform(115.8,9.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#00BB57").s().p("EhGtADqIAAnTMCNbAAAIAAHTg");
	this.shape_237.setTransform(117.6,9.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#00BB56").s().p("EhHAADqIAAnUMCOBAAAIAAHUg");
	this.shape_238.setTransform(119.5,9.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#00BB55").s().p("EhHTADrIAAnVMCOnAAAIAAHVg");
	this.shape_239.setTransform(121.3,9.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#00BB55").s().p("EhHlADrIAAnVMCPLAAAIAAHVg");
	this.shape_240.setTransform(123.2,9.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#00BB54").s().p("EhH4ADsIAAnXMCPxAAAIAAHXg");
	this.shape_241.setTransform(125.1,9.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#00BB53").s().p("EhILADsIAAnXMCQXAAAIAAHXg");
	this.shape_242.setTransform(126.9,10);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#00BC52").s().p("EhIeADtIAAnZMCQ9AAAIAAHZg");
	this.shape_243.setTransform(128.7,10);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#00BC52").s().p("EhIxADtIAAnZMCRjAAAIAAHZg");
	this.shape_244.setTransform(130.6,10.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#00BC51").s().p("EhJEADtIAAnaMCSJAAAIAAHag");
	this.shape_245.setTransform(132.5,10.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#00BC50").s().p("EhJXADuIAAnbMCSvAAAIAAHbg");
	this.shape_246.setTransform(134.3,10.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#00BC50").s().p("EhJqADuIAAnbMCTVAAAIAAHbg");
	this.shape_247.setTransform(136.2,10.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#00BC4F").s().p("EhJ9ADvIAAndMCT7AAAIAAHdg");
	this.shape_248.setTransform(138,10.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#00BC4E").s().p("EhKPADvIAAndMCUfAAAIAAHdg");
	this.shape_249.setTransform(139.9,10.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#00BD4D").s().p("EhKjADwIAAnfMCVHAAAIAAHfg");
	this.shape_250.setTransform(141.8,10.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#00BD4D").s().p("EhK1ADwIAAnfMCVrAAAIAAHfg");
	this.shape_251.setTransform(143.6,10.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#00BD4C").s().p("EhLIADwIAAnfMCWRAAAIAAHfg");
	this.shape_252.setTransform(145.5,10.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#00BD4B").s().p("EhLbADxIAAnhMCW3AAAIAAHhg");
	this.shape_253.setTransform(147.3,10.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#00BD4B").s().p("EhLuADxIAAnhMCXdAAAIAAHhg");
	this.shape_254.setTransform(149.2,10.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#00BD4A").s().p("EhMBADxIAAniMCYDAAAIAAHig");
	this.shape_255.setTransform(151,10.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#00BD49").s().p("EhMUADyIAAnjMCYpAAAIAAHjg");
	this.shape_256.setTransform(152.9,10.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#00BE48").s().p("EhMnADyIAAnkMCZPAAAIAAHkg");
	this.shape_257.setTransform(154.7,10.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#00BE48").s().p("EhM5ADzIAAnlMCZzAAAIAAHlg");
	this.shape_258.setTransform(156.6,10.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#00BE47").s().p("EhNNADzIAAnlMCaaAAAIAAHlg");
	this.shape_259.setTransform(158.5,10.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#00BE46").s().p("EhNfADzIAAnmMCa/AAAIAAHmg");
	this.shape_260.setTransform(160.3,10.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#00BE46").s().p("EhNyAD0IAAnnMCblAAAIAAHng");
	this.shape_261.setTransform(162.2,10.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#00BE45").s().p("EhOFAD1IAAnpMCcLAAAIAAHpg");
	this.shape_262.setTransform(164,10.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#00BE44").s().p("EhOYAD1IAAnpMCcxAAAIAAHpg");
	this.shape_263.setTransform(165.9,10.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#00BF43").s().p("EhOrAD1IAAnpMCdXAAAIAAHpg");
	this.shape_264.setTransform(167.8,10.9);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#00BF43").s().p("EhO+AD2IAAnrMCd9AAAIAAHrg");
	this.shape_265.setTransform(169.6,10.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#00BF42").s().p("EhPQAD2IAAnrMCehAAAIAAHrg");
	this.shape_266.setTransform(171.5,11);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#00BF41").s().p("EhPkAD2IAAnsMCfJAAAIAAHsg");
	this.shape_267.setTransform(173.3,11);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#00BF41").s().p("EhP2AD3IAAntMCftAAAIAAHtg");
	this.shape_268.setTransform(175.2,11.1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#00BF40").s().p("EhQJAD3IAAntMCgTAAAIAAHtg");
	this.shape_269.setTransform(177,11.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#00BF3F").s().p("EhQcAD4IAAnvMCg5AAAIAAHvg");
	this.shape_270.setTransform(178.9,11.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#00BF3F").s().p("EhQvAD4IAAnvMChfAAAIAAHvg");
	this.shape_271.setTransform(180.8,11.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#00C03E").s().p("EhRCAD5IAAnxMCiFAAAIAAHxg");
	this.shape_272.setTransform(182.6,11.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#00C03D").s().p("EhRVAD5IAAnxMCirAAAIAAHxg");
	this.shape_273.setTransform(184.5,11.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#00C03C").s().p("EhRoAD6IAAnzMCjRAAAIAAHzg");
	this.shape_274.setTransform(186.3,11.3);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#00C03C").s().p("EhR7AD6IAAnzMCj3AAAIAAHzg");
	this.shape_275.setTransform(188.2,11.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#00C03B").s().p("EhSNAD6IAAnzMCkbAAAIAAHzg");
	this.shape_276.setTransform(190,11.4);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#00C03A").s().p("EhSgAD7IAAn1MClBAAAIAAH1g");
	this.shape_277.setTransform(191.9,11.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#00C03A").s().p("EhSzAD7IAAn1MClnAAAIAAH1g");
	this.shape_278.setTransform(193.7,11.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#00C139").s().p("EhTGAD7IAAn2MCmNAAAIAAH2g");
	this.shape_279.setTransform(195.6,11.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#00C138").s().p("EhTZAD8IAAn3MCmzAAAIAAH3g");
	this.shape_280.setTransform(197.5,11.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#00C137").s().p("EhTsAD8IAAn3MCnZAAAIAAH3g");
	this.shape_281.setTransform(199.3,11.6);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#00C137").s().p("EhT/AD9IAAn5MCn/AAAIAAH5g");
	this.shape_282.setTransform(201.2,11.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#00C136").s().p("EhUSAD9IAAn5MColAAAIAAH5g");
	this.shape_283.setTransform(203,11.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#00C135").s().p("EhUlAD+IAAn7MCpLAAAIAAH7g");
	this.shape_284.setTransform(204.9,11.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#00C135").s().p("EhU4AD+IAAn7MCpwAAAIAAH7g");
	this.shape_285.setTransform(206.8,11.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#00C234").s().p("EhVKAD+IAAn7MCqWAAAIAAH7g");
	this.shape_286.setTransform(208.6,11.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#00C233").s().p("EhVdAD/IAAn9MCq7AAAIAAH9g");
	this.shape_287.setTransform(210.5,11.8);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#00C232").s().p("EhVwAD/IAAn9MCrhAAAIAAH9g");
	this.shape_288.setTransform(212.3,11.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#00C232").s().p("EhWDAD/IAAn+MCsHAAAIAAH+g");
	this.shape_289.setTransform(214.2,11.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#00C231").s().p("EhWWAEAIAAn/MCstAAAIAAH/g");
	this.shape_290.setTransform(216,12);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#00C230").s().p("EhWpAEAIAAoAMCtTAAAIAAIAg");
	this.shape_291.setTransform(217.9,12);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#00C230").s().p("EhW8AEBIAAoBMCt5AAAIAAIBg");
	this.shape_292.setTransform(219.7,12);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#00C32F").s().p("EhXPAEBIAAoBMCueAAAIAAIBg");
	this.shape_293.setTransform(221.6,12.1);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#00C32E").s().p("EhXhAECIAAoDMCvEAAAIAAIDg");
	this.shape_294.setTransform(223.5,12.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#00C32D").s().p("EhX1AECIAAoDMCvqAAAIAAIDg");
	this.shape_295.setTransform(225.3,12.2);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#00C32D").s().p("EhYHAEDIAAoFMCwPAAAIAAIFg");
	this.shape_296.setTransform(227.2,12.2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#00C32C").s().p("EhYaAEDIAAoFMCw1AAAIAAIFg");
	this.shape_297.setTransform(229,12.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#00C32B").s().p("EhYtAEDIAAoFMCxbAAAIAAIFg");
	this.shape_298.setTransform(230.9,12.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#00C32B").s().p("EhZAAEEIAAoHMCyBAAAIAAIHg");
	this.shape_299.setTransform(232.7,12.3);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#00C42A").s().p("EhZTAEEIAAoHMCynAAAIAAIHg");
	this.shape_300.setTransform(234.6,12.4);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#00C429").s().p("EhZlAEEIAAoIMCzMAAAIAAIIg");
	this.shape_301.setTransform(236.5,12.4);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#00C428").s().p("EhZ5AEFIAAoJMCzzAAAIAAIJg");
	this.shape_302.setTransform(238.3,12.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#00C428").s().p("EhaMAEFIAAoJMC0YAAAIAAIJg");
	this.shape_303.setTransform(240.2,12.5);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#00C427").s().p("EhaeAEGIAAoLMC09AAAIAAILg");
	this.shape_304.setTransform(242,12.5);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#00C426").s().p("EhaxAEGIAAoLMC1jAAAIAAILg");
	this.shape_305.setTransform(243.9,12.6);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#00C426").s().p("EhbEAEHIAAoNMC2JAAAIAAINg");
	this.shape_306.setTransform(245.8,12.6);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#00C525").s().p("EhbXAEHIAAoNMC2vAAAIAAINg");
	this.shape_307.setTransform(247.6,12.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#00C524").s().p("EhbqAEIIAAoPMC3VAAAIAAIPg");
	this.shape_308.setTransform(249.5,12.7);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#00C524").s().p("Ehb8AEIIAAoPMC36AAAIAAIPg");
	this.shape_309.setTransform(251.3,12.7);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#00C523").s().p("EhcQAEIIAAoPMC4gAAAIAAIPg");
	this.shape_310.setTransform(253.2,12.8);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#00C522").s().p("EhciAEJIAAoRMC5FAAAIAAIRg");
	this.shape_311.setTransform(255,12.8);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#00C521").s().p("Ehc1AEJIAAoRMC5rAAAIAAIRg");
	this.shape_312.setTransform(256.9,12.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#00C521").s().p("EhdIAEJIAAoSMC6RAAAIAAISg");
	this.shape_313.setTransform(258.7,12.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#00C620").s().p("EhdbAEKIAAoTMC63AAAIAAITg");
	this.shape_314.setTransform(260.6,13);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#00C61F").s().p("EhduAEKIAAoTMC7dAAAIAAITg");
	this.shape_315.setTransform(262.5,13);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#00C61F").s().p("EheBAELIAAoVMC8DAAAIAAIVg");
	this.shape_316.setTransform(264.3,13);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#00C61E").s().p("EheUAELIAAoVMC8pAAAIAAIVg");
	this.shape_317.setTransform(266.2,13.1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#00C61D").s().p("EhenAEMIAAoXMC9OAAAIAAIXg");
	this.shape_318.setTransform(268,13.1);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#00C61C").s().p("Ehe6AEMIAAoXMC91AAAIAAIXg");
	this.shape_319.setTransform(269.9,13.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#00C61C").s().p("EhfMAEMIAAoYMC+ZAAAIAAIYg");
	this.shape_320.setTransform(271.7,13.2);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#00C71B").s().p("EhffAENIAAoZMC+/AAAIAAIZg");
	this.shape_321.setTransform(273.6,13.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#00C71A").s().p("EhfyAENIAAoZMC/lAAAIAAIZg");
	this.shape_322.setTransform(275.4,13.3);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#00C71A").s().p("EhgFAEOIAAobMDALAAAIAAIbg");
	this.shape_323.setTransform(277.3,13.3);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#00C719").s().p("EhgYAEOIAAobMDAxAAAIAAIbg");
	this.shape_324.setTransform(279.2,13.4);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#00C718").s().p("EhgrAEOIAAocMDBXAAAIAAIcg");
	this.shape_325.setTransform(281,13.4);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#00C717").s().p("Ehg+AEPIAAodMDB9AAAIAAIdg");
	this.shape_326.setTransform(282.9,13.4);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#00C717").s().p("EhhRAEPIAAodMDCjAAAIAAIdg");
	this.shape_327.setTransform(284.7,13.5);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#00C816").s().p("EhhkAEQIAAofMDDJAAAIAAIfg");
	this.shape_328.setTransform(286.6,13.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#00C815").s().p("Ehh2AEQIAAofMDDtAAAIAAIfg");
	this.shape_329.setTransform(288.4,13.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#00C815").s().p("EhiKAERIAAohMDEUAAAIAAIhg");
	this.shape_330.setTransform(290.3,13.6);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#00C814").s().p("EhicAERIAAohMDE5AAAIAAIhg");
	this.shape_331.setTransform(292.2,13.7);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#00C813").s().p("EhivAERIAAohMDFfAAAIAAIhg");
	this.shape_332.setTransform(294,13.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#00C812").s().p("EhjCAESIAAojMDGFAAAIAAIjg");
	this.shape_333.setTransform(295.9,13.7);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#00C812").s().p("EhjVAESIAAojMDGrAAAIAAIjg");
	this.shape_334.setTransform(297.7,13.8);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#00C911").s().p("EhjoAESIAAokMDHRAAAIAAIkg");
	this.shape_335.setTransform(299.6,13.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#00C910").s().p("Ehj7AETIAAolMDH3AAAIAAIlg");
	this.shape_336.setTransform(301.5,13.9);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#00C910").s().p("EhkNAEUIAAonMDIbAAAIAAIng");
	this.shape_337.setTransform(303.3,13.9);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#00C90F").s().p("EhkhAEUIAAonMDJDAAAIAAIng");
	this.shape_338.setTransform(305.2,13.9);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#00C90E").s().p("EhkzAEUIAAonMDJnAAAIAAIng");
	this.shape_339.setTransform(307,14);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#00C90D").s().p("EhlGAEVIAAopMDKNAAAIAAIpg");
	this.shape_340.setTransform(308.9,14);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#00C90D").s().p("EhlZAEVIAAopMDKzAAAIAAIpg");
	this.shape_341.setTransform(310.7,14.1);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#00CA0C").s().p("EhlsAEVIAAoqMDLZAAAIAAIqg");
	this.shape_342.setTransform(312.6,14.1);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#00CA0B").s().p("Ehl/AEWIAAorMDL/AAAIAAIrg");
	this.shape_343.setTransform(314.4,14.2);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#00CA0B").s().p("EhmSAEWIAAorMDMlAAAIAAIrg");
	this.shape_344.setTransform(316.3,14.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#00CA0A").s().p("EhmlAEXIAAotMDNLAAAIAAItg");
	this.shape_345.setTransform(318.2,14.2);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#00CA09").s().p("Ehm4AEXIAAotMDNxAAAIAAItg");
	this.shape_346.setTransform(320,14.3);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#00CA09").s().p("EhnKAEXIAAouMDOVAAAIAAIug");
	this.shape_347.setTransform(321.9,14.3);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#00CA08").s().p("EhndAEYIAAovMDO7AAAIAAIvg");
	this.shape_348.setTransform(323.7,14.4);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#00CB07").s().p("EhnwAEYIAAovMDPhAAAIAAIvg");
	this.shape_349.setTransform(325.6,14.4);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#00CB06").s().p("EhoDAEZIAAoxMDQHAAAIAAIxg");
	this.shape_350.setTransform(327.5,14.4);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#00CB06").s().p("EhoWAEZIAAoxMDQtAAAIAAIxg");
	this.shape_351.setTransform(329.3,14.5);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#00CB05").s().p("EhopAEaIAAozMDRTAAAIAAIzg");
	this.shape_352.setTransform(331.2,14.5);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#00CB04").s().p("Eho8AEaIAAozMDR5AAAIAAIzg");
	this.shape_353.setTransform(333,14.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#00CB04").s().p("EhpOAEaIAAo0MDSdAAAIAAI0g");
	this.shape_354.setTransform(334.9,14.6);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#00CB03").s().p("EhphAEbIAAo1MDTDAAAIAAI1g");
	this.shape_355.setTransform(336.7,14.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#00CC02").s().p("Ehp0AEbIAAo1MDTpAAAIAAI1g");
	this.shape_356.setTransform(338.6,14.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#00CC01").s().p("EhqHAEcIAAo3MDUPAAAIAAI3g");
	this.shape_357.setTransform(340.4,14.7);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#00CC01").s().p("EhqaAEcIAAo3MDU1AAAIAAI3g");
	this.shape_358.setTransform(342.3,14.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#00CC00").s().p("EhqtAEdIAAo5MDVbAAAIAAI5g");
	this.shape_359.setTransform(344.2,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mcLoader4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_240 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(240).call(this.frame_240).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AgxCIIAAkPIBjAAIAAEPg");
	this.shape.setTransform(-322.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FE").s().p("AhNCIIAAkPICbAAIAAEPg");
	this.shape_1.setTransform(-319.7,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FD").s().p("AhqCJIAAkRIDVAAIAAERg");
	this.shape_2.setTransform(-316.9,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009AFC").s().p("AiGCKIAAkTIENAAIAAETg");
	this.shape_3.setTransform(-314.2,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009AFB").s().p("AijCLIAAkUIFHAAIAAEUg");
	this.shape_4.setTransform(-311.4,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009AFA").s().p("Ai/CLIAAkVIF/AAIAAEVg");
	this.shape_5.setTransform(-308.6,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009AF9").s().p("AjbCMIAAkXIG3AAIAAEXg");
	this.shape_6.setTransform(-305.8,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009AF8").s().p("Aj3CMIAAkXIHwAAIAAEXg");
	this.shape_7.setTransform(-303,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009BF6").s().p("AkUCNIAAkZIIpAAIAAEZg");
	this.shape_8.setTransform(-300.3,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009BF5").s().p("AkxCNIAAkZIJjAAIAAEZg");
	this.shape_9.setTransform(-297.5,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009BF4").s().p("AlNCOIAAkbIKbAAIAAEbg");
	this.shape_10.setTransform(-294.7,0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009BF3").s().p("AlpCPIAAkdILTAAIAAEdg");
	this.shape_11.setTransform(-291.9,0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009CF2").s().p("AmGCQIAAkeIMMAAIAAEeg");
	this.shape_12.setTransform(-289.1,0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009CF1").s().p("AmiCQIAAkfINFAAIAAEfg");
	this.shape_13.setTransform(-286.4,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009CF0").s().p("Am+CRIAAkhIN9AAIAAEhg");
	this.shape_14.setTransform(-283.6,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009CEF").s().p("AnbCRIAAkhIO3AAIAAEhg");
	this.shape_15.setTransform(-280.8,0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009CEE").s().p("An3CSIAAkjIPvAAIAAEjg");
	this.shape_16.setTransform(-278,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009DED").s().p("AoTCSIAAkjIQnAAIAAEjg");
	this.shape_17.setTransform(-275.3,1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#009DEC").s().p("AowCTIAAklIRgAAIAAElg");
	this.shape_18.setTransform(-272.5,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009DEB").s().p("ApMCUIAAknISZAAIAAEng");
	this.shape_19.setTransform(-269.7,1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009DEA").s().p("ApoCVIAAkoITRAAIAAEog");
	this.shape_20.setTransform(-266.9,1.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009DE9").s().p("AqFCVIAAkpIULAAIAAEpg");
	this.shape_21.setTransform(-264.2,1.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009EE8").s().p("AqhCWIAAkrIVDAAIAAErg");
	this.shape_22.setTransform(-261.4,1.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009EE6").s().p("Aq+CWIAAkrIV8AAIAAErg");
	this.shape_23.setTransform(-258.6,1.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#009EE5").s().p("AraCXIAAktIW1AAIAAEtg");
	this.shape_24.setTransform(-255.8,1.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#009EE4").s().p("Ar2CYIAAkuIXtAAIAAEug");
	this.shape_25.setTransform(-253,1.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#009FE3").s().p("AsSCYIAAkvIYmAAIAAEvg");
	this.shape_26.setTransform(-250.3,1.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#009FE2").s().p("AsvCZIAAkxIZfAAIAAExg");
	this.shape_27.setTransform(-247.5,1.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#009FE1").s().p("AtLCZIAAkxIaXAAIAAExg");
	this.shape_28.setTransform(-244.7,1.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#009FE0").s().p("AtoCaIAAkzIbQAAIAAEzg");
	this.shape_29.setTransform(-241.9,1.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#009FDF").s().p("AuECaIAAkzIcJAAIAAEzg");
	this.shape_30.setTransform(-239.1,1.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00A0DE").s().p("AugCbIAAk1IdBAAIAAE1g");
	this.shape_31.setTransform(-236.4,1.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00A0DD").s().p("Au9CcIAAk3Id7AAIAAE3g");
	this.shape_32.setTransform(-233.6,2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00A0DC").s().p("AvZCdIAAk4IezAAIAAE4g");
	this.shape_33.setTransform(-230.8,2.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00A0DB").s().p("Av1CdIAAk5IfrAAIAAE5g");
	this.shape_34.setTransform(-228,2.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00A0DA").s().p("AwSCeIAAk7MAglAAAIAAE7g");
	this.shape_35.setTransform(-225.3,2.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00A1D9").s().p("AwuCeIAAk7MAhdAAAIAAE7g");
	this.shape_36.setTransform(-222.5,2.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00A1D8").s().p("AxLCfIAAk9MAiXAAAIAAE9g");
	this.shape_37.setTransform(-219.7,2.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00A1D6").s().p("AxnCfIAAk9MAjPAAAIAAE9g");
	this.shape_38.setTransform(-216.9,2.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00A1D5").s().p("AyDCgIAAk/MAkHAAAIAAE/g");
	this.shape_39.setTransform(-214.2,2.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00A2D4").s().p("AygChIAAlBMAlBAAAIAAFBg");
	this.shape_40.setTransform(-211.4,2.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00A2D3").s().p("Ay8CiIAAlCMAl5AAAIAAFCg");
	this.shape_41.setTransform(-208.6,2.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00A2D2").s().p("AzZCiIAAlDMAmyAAAIAAFDg");
	this.shape_42.setTransform(-205.8,2.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00A2D1").s().p("Az1CjIAAlFMAnrAAAIAAFFg");
	this.shape_43.setTransform(-203,2.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00A2D0").s().p("A0RCjIAAlFMAojAAAIAAFFg");
	this.shape_44.setTransform(-200.3,2.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00A3CF").s().p("A0tCkIAAlHMApbAAAIAAFHg");
	this.shape_45.setTransform(-197.5,2.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00A3CE").s().p("A1KCkIAAlHMAqVAAAIAAFHg");
	this.shape_46.setTransform(-194.7,2.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00A3CD").s().p("A1mClIAAlJMArNAAAIAAFJg");
	this.shape_47.setTransform(-191.9,2.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00A3CC").s().p("A2DCmIAAlLMAsHAAAIAAFLg");
	this.shape_48.setTransform(-189.2,3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00A3CB").s().p("A2fCnIAAlMMAs/AAAIAAFMg");
	this.shape_49.setTransform(-186.4,3.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00A4CA").s().p("A27CnIAAlNMAt3AAAIAAFNg");
	this.shape_50.setTransform(-183.6,3.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00A4C9").s().p("A3YCoIAAlPMAuxAAAIAAFPg");
	this.shape_51.setTransform(-180.8,3.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00A4C8").s().p("A30CoIAAlPMAvpAAAIAAFPg");
	this.shape_52.setTransform(-178,3.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00A4C6").s().p("A4RCpIAAlRMAwiAAAIAAFRg");
	this.shape_53.setTransform(-175.3,3.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00A5C5").s().p("A4tCqIAAlSMAxbAAAIAAFSg");
	this.shape_54.setTransform(-172.5,3.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00A5C4").s().p("A5JCqIAAlTMAyTAAAIAAFTg");
	this.shape_55.setTransform(-169.7,3.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00A5C3").s().p("A5mCrIAAlVMAzNAAAIAAFVg");
	this.shape_56.setTransform(-166.9,3.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00A5C2").s().p("A6CCrIAAlVMA0FAAAIAAFVg");
	this.shape_57.setTransform(-164.1,3.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00A5C1").s().p("A6eCsIAAlXMA09AAAIAAFXg");
	this.shape_58.setTransform(-161.4,3.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00A6C0").s().p("A67CsIAAlXMA13AAAIAAFXg");
	this.shape_59.setTransform(-158.6,3.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00A6BF").s().p("A7XCtIAAlZMA2vAAAIAAFZg");
	this.shape_60.setTransform(-155.8,3.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00A6BE").s().p("A70CuIAAlbMA3pAAAIAAFbg");
	this.shape_61.setTransform(-153,3.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00A6BD").s().p("A8QCvIAAlcMA4hAAAIAAFcg");
	this.shape_62.setTransform(-150.3,3.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00A6BC").s().p("A8sCvIAAldMA5ZAAAIAAFdg");
	this.shape_63.setTransform(-147.5,3.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00A7BB").s().p("A9JCwIAAlfMA6TAAAIAAFfg");
	this.shape_64.setTransform(-144.7,4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00A7BA").s().p("A9lCwIAAlfMA7LAAAIAAFfg");
	this.shape_65.setTransform(-141.9,4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00A7B9").s().p("A+BCxIAAlhMA8DAAAIAAFhg");
	this.shape_66.setTransform(-139.2,4.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00A7B8").s().p("A+eCxIAAlhMA89AAAIAAFhg");
	this.shape_67.setTransform(-136.4,4.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00A8B6").s().p("A+6CyIAAljMA91AAAIAAFjg");
	this.shape_68.setTransform(-133.6,4.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00A8B5").s().p("A/WCzIAAllMA+tAAAIAAFlg");
	this.shape_69.setTransform(-130.8,4.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00A8B4").s().p("A/zC0IAAlmMA/nAAAIAAFmg");
	this.shape_70.setTransform(-128,4.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00A8B3").s().p("EggPAC0IAAlnMBAfAAAIAAFng");
	this.shape_71.setTransform(-125.3,4.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00A8B2").s().p("EggrAC1IAAlpMBBYAAAIAAFpg");
	this.shape_72.setTransform(-122.5,4.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00A9B1").s().p("EghIAC1IAAlpMBCRAAAIAAFpg");
	this.shape_73.setTransform(-119.7,4.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00A9B0").s().p("EghkAC2IAAlrMBDJAAAIAAFrg");
	this.shape_74.setTransform(-116.9,4.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#00A9AF").s().p("EgiBAC2IAAlrMBECAAAIAAFrg");
	this.shape_75.setTransform(-114.1,4.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#00A9AE").s().p("EgidAC3IAAltMBE7AAAIAAFtg");
	this.shape_76.setTransform(-111.4,4.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#00A9AD").s().p("Egi5AC4IAAlvMBFzAAAIAAFvg");
	this.shape_77.setTransform(-108.6,4.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#00AAAC").s().p("EgjWAC5IAAlwMBGtAAAIAAFwg");
	this.shape_78.setTransform(-105.8,4.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00AAAB").s().p("EgjyAC5IAAlxMBHlAAAIAAFxg");
	this.shape_79.setTransform(-103,4.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#00AAAA").s().p("EgkOAC5IAAlxMBIdAAAIAAFxg");
	this.shape_80.setTransform(-100.2,5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00AAA9").s().p("EgkrAC6IAAlzMBJXAAAIAAFzg");
	this.shape_81.setTransform(-97.5,5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00AAA8").s().p("EglHAC7IAAl1MBKPAAAIAAF1g");
	this.shape_82.setTransform(-94.7,5.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00ABA6").s().p("EgljAC8IAAl2MBLIAAAIAAF2g");
	this.shape_83.setTransform(-91.9,5.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#00ABA5").s().p("EgmAAC8IAAl3MBMBAAAIAAF3g");
	this.shape_84.setTransform(-89.1,5.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00ABA4").s().p("EgmcAC9IAAl5MBM5AAAIAAF5g");
	this.shape_85.setTransform(-86.4,5.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00ABA3").s().p("Egm5AC9IAAl5MBNyAAAIAAF5g");
	this.shape_86.setTransform(-83.6,5.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#00ACA2").s().p("EgnVAC+IAAl7MBOrAAAIAAF7g");
	this.shape_87.setTransform(-80.8,5.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00ACA1").s().p("EgnyAC+IAAl7MBPkAAAIAAF7g");
	this.shape_88.setTransform(-78,5.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00ACA0").s().p("EgoOAC/IAAl9MBQdAAAIAAF9g");
	this.shape_89.setTransform(-75.3,5.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00AC9F").s().p("EgoqADAIAAl/MBRVAAAIAAF/g");
	this.shape_90.setTransform(-72.5,5.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00AC9E").s().p("EgpGADBIAAmAMBSNAAAIAAGAg");
	this.shape_91.setTransform(-69.7,5.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#00AD9D").s().p("EgpjADBIAAmBMBTHAAAIAAGBg");
	this.shape_92.setTransform(-66.9,5.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#00AD9C").s().p("Egp/ADCIAAmDMBT/AAAIAAGDg");
	this.shape_93.setTransform(-64.2,5.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#00AD9B").s().p("EgqcADCIAAmDMBU5AAAIAAGDg");
	this.shape_94.setTransform(-61.4,5.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#00AD9A").s().p("Egq4ADDIAAmFMBVxAAAIAAGFg");
	this.shape_95.setTransform(-58.6,5.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#00AD99").s().p("EgrUADDIAAmFMBWpAAAIAAGFg");
	this.shape_96.setTransform(-55.8,6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#00AE98").s().p("EgrwADEIAAmHMBXhAAAIAAGHg");
	this.shape_97.setTransform(-53,6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#00AE96").s().p("EgsNADFIAAmJMBYbAAAIAAGJg");
	this.shape_98.setTransform(-50.3,6.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00AE95").s().p("EgsqADGIAAmKMBZUAAAIAAGKg");
	this.shape_99.setTransform(-47.5,6.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#00AE94").s().p("EgtGADGIAAmLMBaNAAAIAAGLg");
	this.shape_100.setTransform(-44.7,6.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#00AF93").s().p("EgtiADHIAAmNMBbFAAAIAAGNg");
	this.shape_101.setTransform(-41.9,6.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#00AF92").s().p("Egt/ADHIAAmNMBb/AAAIAAGNg");
	this.shape_102.setTransform(-39.1,6.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#00AF91").s().p("EgubADIIAAmPMBc3AAAIAAGPg");
	this.shape_103.setTransform(-36.4,6.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#00AF90").s().p("Egu3ADIIAAmPMBdwAAAIAAGPg");
	this.shape_104.setTransform(-33.6,6.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#00AF8F").s().p("EgvUADJIAAmRMBepAAAIAAGRg");
	this.shape_105.setTransform(-30.8,6.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#00B08E").s().p("EgvwADKIAAmTMBfhAAAIAAGTg");
	this.shape_106.setTransform(-28,6.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#00B08D").s().p("EgwMADKIAAmTMBgZAAAIAAGTg");
	this.shape_107.setTransform(-25.3,6.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#00B08C").s().p("EgwpADLIAAmVMBhTAAAIAAGVg");
	this.shape_108.setTransform(-22.5,6.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#00B08B").s().p("EgxFADLIAAmVMBiLAAAIAAGVg");
	this.shape_109.setTransform(-19.7,6.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#00B08A").s().p("EgxhADMIAAmXMBjDAAAIAAGXg");
	this.shape_110.setTransform(-16.9,6.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#00B189").s().p("Egx+ADNIAAmZMBj9AAAIAAGZg");
	this.shape_111.setTransform(-14.2,6.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#00B188").s().p("EgyaADOIAAmaMBk1AAAIAAGag");
	this.shape_112.setTransform(-11.4,7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#00B186").s().p("Egy3ADOIAAmbMBlvAAAIAAGbg");
	this.shape_113.setTransform(-8.6,7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#00B185").s().p("EgzTADPIAAmdMBmnAAAIAAGdg");
	this.shape_114.setTransform(-5.8,7.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#00B284").s().p("EgzvADPIAAmdMBngAAAIAAGdg");
	this.shape_115.setTransform(-3,7.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#00B283").s().p("Eg0MADQIAAmfMBoZAAAIAAGfg");
	this.shape_116.setTransform(-0.3,7.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#00B282").s().p("Eg0oADQIAAmfMBpRAAAIAAGfg");
	this.shape_117.setTransform(2.5,7.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#00B281").s().p("Eg1EADRIAAmhMBqKAAAIAAGhg");
	this.shape_118.setTransform(5.3,7.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00B280").s().p("Eg1hADSIAAmjMBrDAAAIAAGjg");
	this.shape_119.setTransform(8.1,7.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00B37F").s().p("Eg19ADTIAAmlMBr7AAAIAAGlg");
	this.shape_120.setTransform(10.8,7.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00B37E").s().p("Eg2ZADTIAAmlMBs0AAAIAAGlg");
	this.shape_121.setTransform(13.6,7.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#00B37D").s().p("Eg22ADUIAAmnMBttAAAIAAGng");
	this.shape_122.setTransform(16.4,7.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00B37C").s().p("Eg3SADVIAAmpMBulAAAIAAGpg");
	this.shape_123.setTransform(19.2,7.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00B37B").s().p("Eg3vADVIAAmpMBvfAAAIAAGpg");
	this.shape_124.setTransform(22,7.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#00B47A").s().p("Eg4LADWIAAmrMBwXAAAIAAGrg");
	this.shape_125.setTransform(24.8,7.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#00B479").s().p("Eg4oADXIAAmtMBxRAAAIAAGtg");
	this.shape_126.setTransform(27.5,7.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#00B477").s().p("Eg5EADXIAAmtMByJAAAIAAGtg");
	this.shape_127.setTransform(30.3,7.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#00B476").s().p("Eg5gADYIAAmvMBzBAAAIAAGvg");
	this.shape_128.setTransform(33.1,7.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#00B575").s().p("Eg58ADYIAAmvMBz5AAAIAAGvg");
	this.shape_129.setTransform(35.9,8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#00B574").s().p("Eg6ZADZIAAmxMB0zAAAIAAGxg");
	this.shape_130.setTransform(38.6,8.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#00B573").s().p("Eg61ADaIAAmzMB1rAAAIAAGzg");
	this.shape_131.setTransform(41.4,8.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#00B572").s().p("Eg7SADaIAAmzMB2lAAAIAAGzg");
	this.shape_132.setTransform(44.2,8.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#00B571").s().p("Eg7uADbIAAm1MB3dAAAIAAG1g");
	this.shape_133.setTransform(47,8.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#00B670").s().p("Eg8KADbIAAm1MB4VAAAIAAG1g");
	this.shape_134.setTransform(49.7,8.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#00B66F").s().p("Eg8mADcIAAm3MB5OAAAIAAG3g");
	this.shape_135.setTransform(52.5,8.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#00B66E").s().p("Eg9DADcIAAm4MB6HAAAIAAG4g");
	this.shape_136.setTransform(55.3,8.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#00B66D").s().p("Eg9gADdIAAm5MB7BAAAIAAG5g");
	this.shape_137.setTransform(58.1,8.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#00B66C").s().p("Eg98ADeIAAm7MB75AAAIAAG7g");
	this.shape_138.setTransform(60.8,8.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#00B76B").s().p("Eg+YADfIAAm9MB8xAAAIAAG9g");
	this.shape_139.setTransform(63.6,8.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#00B76A").s().p("Eg+1ADfIAAm9MB9qAAAIAAG9g");
	this.shape_140.setTransform(66.4,8.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#00B769").s().p("Eg/RADgIAAm/MB+jAAAIAAG/g");
	this.shape_141.setTransform(69.2,8.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#00B767").s().p("Eg/tADgIAAm/MB/bAAAIAAG/g");
	this.shape_142.setTransform(72,8.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#00B866").s().p("EhAKADhIAAnBMCAVAAAIAAHBg");
	this.shape_143.setTransform(74.7,8.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#00B865").s().p("EhAmADhIAAnCMCBNAAAIAAHCg");
	this.shape_144.setTransform(77.5,8.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#00B864").s().p("EhBCADiIAAnDMCCFAAAIAAHDg");
	this.shape_145.setTransform(80.3,9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#00B863").s().p("EhBfADjIAAnFMCC/AAAIAAHFg");
	this.shape_146.setTransform(83.1,9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#00B862").s().p("EhB7ADkIAAnHMCD3AAAIAAHHg");
	this.shape_147.setTransform(85.9,9.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#00B961").s().p("EhCXADkIAAnHMCEwAAAIAAHHg");
	this.shape_148.setTransform(88.6,9.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#00B960").s().p("EhC0ADlIAAnJMCFpAAAIAAHJg");
	this.shape_149.setTransform(91.4,9.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#00B95F").s().p("EhDQADlIAAnJMCGhAAAIAAHJg");
	this.shape_150.setTransform(94.2,9.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#00B95E").s().p("EhDtADmIAAnLMCHaAAAIAAHLg");
	this.shape_151.setTransform(97,9.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#00B95D").s().p("EhEJADnIAAnNMCITAAAIAAHNg");
	this.shape_152.setTransform(99.8,9.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#00BA5C").s().p("EhElADnIAAnNMCJLAAAIAAHNg");
	this.shape_153.setTransform(102.5,9.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#00BA5B").s().p("EhFCADoIAAnPMCKFAAAIAAHPg");
	this.shape_154.setTransform(105.3,9.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#00BA5A").s().p("EhFeADoIAAnQMCK9AAAIAAHQg");
	this.shape_155.setTransform(108.1,9.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#00BA59").s().p("EhF6ADpIAAnRMCL1AAAIAAHRg");
	this.shape_156.setTransform(110.9,9.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#00BB57").s().p("EhGXADqIAAnTMCMvAAAIAAHTg");
	this.shape_157.setTransform(113.6,9.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#00BB56").s().p("EhGzADqIAAnTMCNnAAAIAAHTg");
	this.shape_158.setTransform(116.4,9.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#00BB55").s().p("EhHPADrIAAnVMCOfAAAIAAHVg");
	this.shape_159.setTransform(119.2,9.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#00BB54").s().p("EhHsADsIAAnXMCPZAAAIAAHXg");
	this.shape_160.setTransform(122,9.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#00BB53").s().p("EhIIADsIAAnXMCQRAAAIAAHXg");
	this.shape_161.setTransform(124.7,10);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#00BC52").s().p("EhIlADtIAAnZMCRKAAAIAAHZg");
	this.shape_162.setTransform(127.5,10);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#00BC51").s().p("EhJBADtIAAnZMCSDAAAIAAHZg");
	this.shape_163.setTransform(130.3,10.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#00BC50").s().p("EhJeADuIAAnbMCS8AAAIAAHbg");
	this.shape_164.setTransform(133.1,10.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#00BC4F").s().p("EhJ6ADuIAAncMCT1AAAIAAHcg");
	this.shape_165.setTransform(135.9,10.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#00BC4E").s().p("EhKWADvIAAndMCUtAAAIAAHdg");
	this.shape_166.setTransform(138.6,10.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#00BD4D").s().p("EhKyADwIAAnfMCVmAAAIAAHfg");
	this.shape_167.setTransform(141.4,10.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#00BD4C").s().p("EhLPADxIAAnhMCWfAAAIAAHhg");
	this.shape_168.setTransform(144.2,10.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#00BD4B").s().p("EhLrADxIAAnhMCXXAAAIAAHhg");
	this.shape_169.setTransform(147,10.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#00BD4A").s().p("EhMIADyIAAnjMCYRAAAIAAHjg");
	this.shape_170.setTransform(149.7,10.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#00BD49").s().p("EhMkADyIAAnjMCZJAAAIAAHjg");
	this.shape_171.setTransform(152.5,10.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#00BE47").s().p("EhNAADzIAAnlMCaBAAAIAAHlg");
	this.shape_172.setTransform(155.3,10.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#00BE46").s().p("EhNdADzIAAnmMCa7AAAIAAHmg");
	this.shape_173.setTransform(158.1,10.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#00BE45").s().p("EhN5AD0IAAnnMCbzAAAIAAHng");
	this.shape_174.setTransform(160.9,10.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#00BE44").s().p("EhOVAD1IAAnpMCcrAAAIAAHpg");
	this.shape_175.setTransform(163.6,10.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#00BF43").s().p("EhOyAD2IAAnrMCdlAAAIAAHrg");
	this.shape_176.setTransform(166.4,10.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#00BF42").s().p("EhPOAD2IAAnrMCedAAAIAAHrg");
	this.shape_177.setTransform(169.2,11);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#00BF41").s().p("EhPrAD3IAAntMCfXAAAIAAHtg");
	this.shape_178.setTransform(172,11);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#00BF40").s().p("EhQHAD3IAAntMCgPAAAIAAHtg");
	this.shape_179.setTransform(174.7,11.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#00BF3F").s().p("EhQjAD4IAAnvMChHAAAIAAHvg");
	this.shape_180.setTransform(177.5,11.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#00C03E").s().p("EhRAAD5IAAnxMCiBAAAIAAHxg");
	this.shape_181.setTransform(180.3,11.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#00C03D").s().p("EhRcAD5IAAnxMCi5AAAIAAHxg");
	this.shape_182.setTransform(183.1,11.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#00C03C").s().p("EhR4AD6IAAnzMCjxAAAIAAHzg");
	this.shape_183.setTransform(185.8,11.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#00C03B").s().p("EhSVAD7IAAn1MCkrAAAIAAH1g");
	this.shape_184.setTransform(188.6,11.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#00C03A").s().p("EhSxAD7IAAn1MCljAAAIAAH1g");
	this.shape_185.setTransform(191.4,11.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#00C139").s().p("EhTOAD7IAAn2MCmcAAAIAAH2g");
	this.shape_186.setTransform(194.2,11.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#00C137").s().p("EhTqAD8IAAn3MCnVAAAIAAH3g");
	this.shape_187.setTransform(197,11.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#00C136").s().p("EhUGAD9IAAn5MCoNAAAIAAH5g");
	this.shape_188.setTransform(199.7,11.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#00C135").s().p("EhUjAD+IAAn7MCpHAAAIAAH7g");
	this.shape_189.setTransform(202.5,11.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#00C234").s().p("EhU/AD+IAAn7MCp/AAAIAAH7g");
	this.shape_190.setTransform(205.3,11.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#00C233").s().p("EhVbAD/IAAn9MCq3AAAIAAH9g");
	this.shape_191.setTransform(208.1,11.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#00C232").s().p("EhV4AD/IAAn9MCrxAAAIAAH9g");
	this.shape_192.setTransform(210.8,11.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#00C231").s().p("EhWUAEAIAAn/MCspAAAIAAH/g");
	this.shape_193.setTransform(213.6,12);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#00C230").s().p("EhWwAEAIAAoAMCtiAAAIAAIAg");
	this.shape_194.setTransform(216.4,12);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#00C32F").s().p("EhXNAEBIAAoBMCubAAAIAAIBg");
	this.shape_195.setTransform(219.2,12.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#00C32E").s().p("EhXpAECIAAoDMCvTAAAIAAIDg");
	this.shape_196.setTransform(222,12.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#00C32D").s().p("EhYGAEDIAAoFMCwMAAAIAAIFg");
	this.shape_197.setTransform(224.8,12.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#00C32C").s().p("EhYiAEDIAAoFMCxFAAAIAAIFg");
	this.shape_198.setTransform(227.5,12.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#00C32B").s().p("EhY+AEEIAAoHMCx9AAAIAAIHg");
	this.shape_199.setTransform(230.3,12.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#00C42A").s().p("EhZbAEEIAAoHMCy3AAAIAAIHg");
	this.shape_200.setTransform(233.1,12.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#00C429").s().p("EhZ3AEFIAAoJMCzvAAAIAAIJg");
	this.shape_201.setTransform(235.9,12.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#00C427").s().p("EhaTAEFIAAoKMC0nAAAIAAIKg");
	this.shape_202.setTransform(238.6,12.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#00C426").s().p("EhawAEGIAAoLMC1hAAAIAAILg");
	this.shape_203.setTransform(241.4,12.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#00C525").s().p("EhbMAEHIAAoNMC2ZAAAIAAINg");
	this.shape_204.setTransform(244.2,12.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#00C524").s().p("EhboAEIIAAoPMC3RAAAIAAIPg");
	this.shape_205.setTransform(247,12.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#00C523").s().p("EhcFAEIIAAoPMC4LAAAIAAIPg");
	this.shape_206.setTransform(249.7,12.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#00C522").s().p("EhchAEJIAAoRMC5DAAAIAAIRg");
	this.shape_207.setTransform(252.5,12.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#00C521").s().p("Ehc+AEJIAAoRMC58AAAIAAIRg");
	this.shape_208.setTransform(255.3,12.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#00C620").s().p("EhdaAEKIAAoTMC61AAAIAAITg");
	this.shape_209.setTransform(258.1,13);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#00C61F").s().p("Ehd3AELIAAoVMC7uAAAIAAIVg");
	this.shape_210.setTransform(260.9,13);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#00C61E").s().p("EheTAELIAAoVMC8nAAAIAAIVg");
	this.shape_211.setTransform(263.6,13.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#00C61D").s().p("EhevAEMIAAoXMC9fAAAIAAIXg");
	this.shape_212.setTransform(266.4,13.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#00C61C").s().p("EhfLAEMIAAoXMC+YAAAIAAIXg");
	this.shape_213.setTransform(269.2,13.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#00C71B").s().p("EhfoAENIAAoZMC/RAAAIAAIZg");
	this.shape_214.setTransform(272,13.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#00C71A").s().p("EhgEAENIAAoaMDAJAAAIAAIag");
	this.shape_215.setTransform(274.7,13.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#00C719").s().p("EhghAEOIAAobMDBCAAAIAAIbg");
	this.shape_216.setTransform(277.5,13.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#00C717").s().p("Ehg9AEPIAAodMDB7AAAIAAIdg");
	this.shape_217.setTransform(280.3,13.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#00C816").s().p("EhhZAEQIAAofMDCzAAAIAAIfg");
	this.shape_218.setTransform(283.1,13.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#00C815").s().p("Ehh1AEQIAAofMDDrAAAIAAIfg");
	this.shape_219.setTransform(285.9,13.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#00C814").s().p("EhiSAERIAAohMDElAAAIAAIhg");
	this.shape_220.setTransform(288.6,13.6);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#00C813").s().p("EhivAERIAAohMDFeAAAIAAIhg");
	this.shape_221.setTransform(291.4,13.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#00C812").s().p("EhjLAESIAAojMDGXAAAIAAIjg");
	this.shape_222.setTransform(294.2,13.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#00C911").s().p("EhjnAESIAAokMDHPAAAIAAIkg");
	this.shape_223.setTransform(297,13.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#00C910").s().p("EhkEAETIAAolMDIJAAAIAAIlg");
	this.shape_224.setTransform(299.8,13.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#00C90F").s().p("EhkgAEUIAAonMDJBAAAIAAIng");
	this.shape_225.setTransform(302.5,13.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#00C90E").s().p("Ehk8AEVIAAopMDJ5AAAIAAIpg");
	this.shape_226.setTransform(305.3,14);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#00C90D").s().p("EhlZAEVIAAopMDKyAAAIAAIpg");
	this.shape_227.setTransform(308.1,14.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#00CA0C").s().p("Ehl1AEWIAAorMDLrAAAIAAIrg");
	this.shape_228.setTransform(310.9,14.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#00CA0B").s().p("EhmRAEWIAAorMDMjAAAIAAIrg");
	this.shape_229.setTransform(313.6,14.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#00CA0A").s().p("EhmtAEXIAAotMDNcAAAIAAItg");
	this.shape_230.setTransform(316.4,14.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#00CA09").s().p("EhnKAEXIAAouMDOVAAAIAAIug");
	this.shape_231.setTransform(319.2,14.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#00CB07").s().p("EhnmAEYIAAovMDPOAAAIAAIvg");
	this.shape_232.setTransform(322,14.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#00CB06").s().p("EhoDAEZIAAoxMDQHAAAIAAIxg");
	this.shape_233.setTransform(324.7,14.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#00CB05").s().p("EhofAEaIAAozMDQ/AAAIAAIzg");
	this.shape_234.setTransform(327.5,14.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#00CB04").s().p("Eho8AEaIAAozMDR5AAAIAAIzg");
	this.shape_235.setTransform(330.3,14.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#00CB03").s().p("EhpYAEbIAAo1MDSxAAAIAAI1g");
	this.shape_236.setTransform(333.1,14.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#00CC02").s().p("Ehp0AEbIAAo1MDTqAAAIAAI1g");
	this.shape_237.setTransform(335.9,14.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#00CC01").s().p("EhqRAEcIAAo3MDUjAAAIAAI3g");
	this.shape_238.setTransform(338.6,14.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#00CC00").s().p("EgzAACIIAAkPMBmBAAAIAAEPg");
	this.shape_239.setTransform(341.4,14.8,2.092,2.094);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mcLoader2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_120 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(120).call(this.frame_120).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("AgxCIIAAkPIBjAAIAAEPg");
	this.shape.setTransform(-322.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FD").s().p("AhqCIIAAkPIDVAAIAAEPg");
	this.shape_1.setTransform(-316.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009AFB").s().p("AijCIIAAkPIFHAAIAAEPg");
	this.shape_2.setTransform(-311.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009AF9").s().p("AjcCIIAAkPIG5AAIAAEPg");
	this.shape_3.setTransform(-305.7,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009BF6").s().p("AkVCIIAAkPIIrAAIAAEPg");
	this.shape_4.setTransform(-300.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009BF4").s().p("AlOCIIAAkPIKdAAIAAEPg");
	this.shape_5.setTransform(-294.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009CF2").s().p("AmHCIIAAkPIMPAAIAAEPg");
	this.shape_6.setTransform(-288.9,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009CF0").s().p("AnACIIAAkPIOBAAIAAEPg");
	this.shape_7.setTransform(-283.3,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009CEE").s().p("An5CIIAAkPIPzAAIAAEPg");
	this.shape_8.setTransform(-277.7,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009DEC").s().p("AoyCIIAAkPIRlAAIAAEPg");
	this.shape_9.setTransform(-272.1,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009DEA").s().p("AprCIIAAkPITXAAIAAEPg");
	this.shape_10.setTransform(-266.5,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009EE7").s().p("AqkCIIAAkPIVJAAIAAEPg");
	this.shape_11.setTransform(-260.9,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009EE5").s().p("ArdCIIAAkPIW7AAIAAEPg");
	this.shape_12.setTransform(-255.3,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009FE3").s().p("AsWCIIAAkPIYtAAIAAEPg");
	this.shape_13.setTransform(-249.7,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009FE1").s().p("AtPCIIAAkPIafAAIAAEPg");
	this.shape_14.setTransform(-244.1,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009FDF").s().p("AuICJIAAkRIcRAAIAAERg");
	this.shape_15.setTransform(-238.5,0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A0DD").s().p("AvBCJIAAkRIeDAAIAAERg");
	this.shape_16.setTransform(-232.9,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A0DB").s().p("Av6CJIAAkRIf1AAIAAERg");
	this.shape_17.setTransform(-227.3,0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A1D8").s().p("AwzCJIAAkRMAhmAAAIAAERg");
	this.shape_18.setTransform(-221.6,0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A1D6").s().p("AxsCJIAAkRMAjZAAAIAAERg");
	this.shape_19.setTransform(-216,0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A2D4").s().p("AykCJIAAkRMAlJAAAIAAERg");
	this.shape_20.setTransform(-210.5,0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A2D2").s().p("AzdCJIAAkRMAm8AAAIAAERg");
	this.shape_21.setTransform(-204.8,0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A2D0").s().p("A0WCJIAAkRMAotAAAIAAERg");
	this.shape_22.setTransform(-199.2,0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A3CE").s().p("A1PCJIAAkRMAqfAAAIAAERg");
	this.shape_23.setTransform(-193.6,0.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A3CC").s().p("A2ICJIAAkRMAsRAAAIAAERg");
	this.shape_24.setTransform(-188.1,0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A4C9").s().p("A3CCJIAAkRMAuEAAAIAAERg");
	this.shape_25.setTransform(-182.4,0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00A4C7").s().p("A37CJIAAkRMAv3AAAIAAERg");
	this.shape_26.setTransform(-176.8,0.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00A5C5").s().p("A40CJIAAkRMAxoAAAIAAERg");
	this.shape_27.setTransform(-171.2,0.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00A5C3").s().p("A5sCJIAAkRMAzZAAAIAAERg");
	this.shape_28.setTransform(-165.7,0.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00A5C1").s().p("A6mCJIAAkRMA1MAAAIAAERg");
	this.shape_29.setTransform(-160,0.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00A6BF").s().p("A7eCJIAAkRMA29AAAIAAERg");
	this.shape_30.setTransform(-154.4,0.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00A6BD").s().p("A8XCJIAAkRMA4vAAAIAAERg");
	this.shape_31.setTransform(-148.8,0.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00A7BA").s().p("A9QCJIAAkRMA6hAAAIAAERg");
	this.shape_32.setTransform(-143.2,0.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00A7B8").s().p("A+JCJIAAkRMA8TAAAIAAERg");
	this.shape_33.setTransform(-137.6,0.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00A8B6").s().p("A/CCJIAAkRMA+FAAAIAAERg");
	this.shape_34.setTransform(-132,0.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00A8B4").s().p("A/7CJIAAkRMA/3AAAIAAERg");
	this.shape_35.setTransform(-126.4,0.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00A8B2").s().p("Egg0ACJIAAkRMBBpAAAIAAERg");
	this.shape_36.setTransform(-120.8,0.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00A9B0").s().p("EghtACJIAAkRMBDbAAAIAAERg");
	this.shape_37.setTransform(-115.2,0.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00A9AE").s().p("EgimACJIAAkRMBFNAAAIAAERg");
	this.shape_38.setTransform(-109.6,0.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00AAAB").s().p("EgjfACKIAAkTMBG/AAAIAAETg");
	this.shape_39.setTransform(-104,0.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00AAA9").s().p("EgkYACKIAAkTMBIxAAAIAAETg");
	this.shape_40.setTransform(-98.4,0.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00ABA7").s().p("EglRACKIAAkTMBKjAAAIAAETg");
	this.shape_41.setTransform(-92.8,0.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00ABA5").s().p("EgmKACKIAAkTMBMVAAAIAAETg");
	this.shape_42.setTransform(-87.2,0.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00ABA3").s().p("EgnDACKIAAkTMBOHAAAIAAETg");
	this.shape_43.setTransform(-81.6,0.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00ACA1").s().p("Egn8ACKIAAkTMBP5AAAIAAETg");
	this.shape_44.setTransform(-76,0.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00AC9F").s().p("Ego1ACKIAAkTMBRrAAAIAAETg");
	this.shape_45.setTransform(-70.4,0.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00AD9C").s().p("EgpuACKIAAkTMBTdAAAIAAETg");
	this.shape_46.setTransform(-64.8,0.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00AD9A").s().p("EgqnACKIAAkTMBVPAAAIAAETg");
	this.shape_47.setTransform(-59.2,0.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00AE98").s().p("EgrgACKIAAkTMBXBAAAIAAETg");
	this.shape_48.setTransform(-53.6,0.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00AE96").s().p("EgsZACKIAAkTMBYzAAAIAAETg");
	this.shape_49.setTransform(-48,0.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00AE94").s().p("EgtSACKIAAkTMBalAAAIAAETg");
	this.shape_50.setTransform(-42.4,0.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00AF92").s().p("EguLACKIAAkTMBcXAAAIAAETg");
	this.shape_51.setTransform(-36.8,0.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00AF90").s().p("EgvEACKIAAkTMBeJAAAIAAETg");
	this.shape_52.setTransform(-31.2,0.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00B08D").s().p("Egv9ACKIAAkTMBf7AAAIAAETg");
	this.shape_53.setTransform(-25.6,0.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00B08B").s().p("Egw1ACKIAAkTMBhsAAAIAAETg");
	this.shape_54.setTransform(-20,0.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00B189").s().p("EgxuACKIAAkTMBjdAAAIAAETg");
	this.shape_55.setTransform(-14.4,0.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00B187").s().p("EgynACKIAAkTMBlQAAAIAAETg");
	this.shape_56.setTransform(-8.8,0.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00B185").s().p("EgzgACLIAAkUMBnBAAAIAAEUg");
	this.shape_57.setTransform(-3.2,0.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00B283").s().p("Eg0aACLIAAkUMBo1AAAIAAEUg");
	this.shape_58.setTransform(2.4,0.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00B281").s().p("Eg1TACLIAAkUMBqmAAAIAAEUg");
	this.shape_59.setTransform(8,0.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00B37E").s().p("Eg2MACLIAAkUMBsYAAAIAAEUg");
	this.shape_60.setTransform(13.6,0.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00B37C").s().p("Eg3FACLIAAkUMBuLAAAIAAEUg");
	this.shape_61.setTransform(19.2,0.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00B47A").s().p("Eg3+ACLIAAkUMBv8AAAIAAEUg");
	this.shape_62.setTransform(24.8,0.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00B478").s().p("Eg42ACLIAAkVMBxuAAAIAAEVg");
	this.shape_63.setTransform(30.4,0.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00B476").s().p("Eg5vACLIAAkVMBzfAAAIAAEVg");
	this.shape_64.setTransform(36,0.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00B574").s().p("Eg6oACLIAAkVMB1SAAAIAAEVg");
	this.shape_65.setTransform(41.6,0.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00B572").s().p("Eg7hACLIAAkVMB3DAAAIAAEVg");
	this.shape_66.setTransform(47.2,0.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00B66F").s().p("Eg8aACLIAAkVMB41AAAIAAEVg");
	this.shape_67.setTransform(52.8,0.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00B66D").s().p("Eg9TACLIAAkVMB6nAAAIAAEVg");
	this.shape_68.setTransform(58.4,0.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00B76B").s().p("Eg+MACLIAAkVMB8ZAAAIAAEVg");
	this.shape_69.setTransform(64,0.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00B769").s().p("Eg/FACLIAAkVMB+LAAAIAAEVg");
	this.shape_70.setTransform(69.6,0.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00B767").s().p("Eg/+ACLIAAkVMB/9AAAIAAEVg");
	this.shape_71.setTransform(75.2,0.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00B865").s().p("EhA3ACLIAAkVMCBvAAAIAAEVg");
	this.shape_72.setTransform(80.8,0.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00B863").s().p("EhBwACLIAAkVMCDhAAAIAAEVg");
	this.shape_73.setTransform(86.4,0.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00B960").s().p("EhCpACLIAAkVMCFTAAAIAAEVg");
	this.shape_74.setTransform(92,0.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#00B95E").s().p("EhDiACLIAAkVMCHFAAAIAAEVg");
	this.shape_75.setTransform(97.6,0.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#00BA5C").s().p("EhEbACLIAAkVMCI3AAAIAAEVg");
	this.shape_76.setTransform(103.2,0.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#00BA5A").s().p("EhFUACLIAAkVMCKpAAAIAAEVg");
	this.shape_77.setTransform(108.8,0.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#00BA58").s().p("EhGNACLIAAkVMCMbAAAIAAEVg");
	this.shape_78.setTransform(114.5,0.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00BB56").s().p("EhHGACLIAAkVMCONAAAIAAEVg");
	this.shape_79.setTransform(120.1,0.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#00BB54").s().p("EhH/ACLIAAkVMCP/AAAIAAEVg");
	this.shape_80.setTransform(125.7,0.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00BC51").s().p("EhI4ACMIAAkWMCRxAAAIAAEWg");
	this.shape_81.setTransform(131.3,0.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00BC4F").s().p("EhJxACMIAAkWMCTjAAAIAAEWg");
	this.shape_82.setTransform(136.9,0.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00BD4D").s().p("EhKqACMIAAkWMCVVAAAIAAEWg");
	this.shape_83.setTransform(142.5,0.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#00BD4B").s().p("EhLjACMIAAkWMCXHAAAIAAEWg");
	this.shape_84.setTransform(148.1,0.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00BD49").s().p("EhMcACMIAAkWMCY5AAAIAAEWg");
	this.shape_85.setTransform(153.6,0.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00BE47").s().p("EhNVACMIAAkWMCarAAAIAAEWg");
	this.shape_86.setTransform(159.2,0.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#00BE45").s().p("EhOOACMIAAkXMCcdAAAIAAEXg");
	this.shape_87.setTransform(164.9,0.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#00BF42").s().p("EhPHACMIAAkXMCePAAAIAAEXg");
	this.shape_88.setTransform(170.5,0.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00BF40").s().p("EhQAACMIAAkXMCgBAAAIAAEXg");
	this.shape_89.setTransform(176,0.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#00C03E").s().p("EhQ4ACMIAAkXMChxAAAIAAEXg");
	this.shape_90.setTransform(181.7,0.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00C03C").s().p("EhRyACMIAAkXMCjlAAAIAAEXg");
	this.shape_91.setTransform(187.3,0.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#00C03A").s().p("EhSrACMIAAkXMClWAAAIAAEXg");
	this.shape_92.setTransform(192.9,0.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#00C138").s().p("EhTkACMIAAkXMCnJAAAIAAEXg");
	this.shape_93.setTransform(198.5,0.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#00C136").s().p("EhUdACMIAAkXMCo6AAAIAAEXg");
	this.shape_94.setTransform(204.1,0.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#00C233").s().p("EhVWACMIAAkXMCqtAAAIAAEXg");
	this.shape_95.setTransform(209.7,0.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#00C231").s().p("EhWOACMIAAkXMCsdAAAIAAEXg");
	this.shape_96.setTransform(215.3,0.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#00C32F").s().p("EhXHACMIAAkXMCuQAAAIAAEXg");
	this.shape_97.setTransform(220.9,0.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#00C32D").s().p("EhYAACMIAAkXMCwCAAAIAAEXg");
	this.shape_98.setTransform(226.5,0.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00C32B").s().p("EhY6ACMIAAkXMCx1AAAIAAEXg");
	this.shape_99.setTransform(232.1,0.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#00C429").s().p("EhZzACMIAAkXMCznAAAIAAEXg");
	this.shape_100.setTransform(237.7,0.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#00C427").s().p("EhasACMIAAkXMC1YAAAIAAEXg");
	this.shape_101.setTransform(243.3,0.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#00C524").s().p("EhbkACMIAAkXMC3JAAAIAAEXg");
	this.shape_102.setTransform(248.9,0.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#00C522").s().p("EhcdACMIAAkXMC47AAAIAAEXg");
	this.shape_103.setTransform(254.5,0.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#00C620").s().p("EhdWACMIAAkXMC6tAAAIAAEXg");
	this.shape_104.setTransform(260.1,0.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#00C61E").s().p("EhePACMIAAkXMC8fAAAIAAEXg");
	this.shape_105.setTransform(265.7,0.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#00C61C").s().p("EhfIACMIAAkXMC+RAAAIAAEXg");
	this.shape_106.setTransform(271.3,0.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#00C71A").s().p("EhgBACMIAAkXMDADAAAIAAEXg");
	this.shape_107.setTransform(276.9,0.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#00C718").s().p("Ehg6ACMIAAkXMDB1AAAIAAEXg");
	this.shape_108.setTransform(282.5,0.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#00C815").s().p("EhhzACMIAAkXMDDnAAAIAAEXg");
	this.shape_109.setTransform(288.1,0.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#00C813").s().p("EhisACMIAAkXMDFZAAAIAAEXg");
	this.shape_110.setTransform(293.7,0.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#00C911").s().p("EhjlACNIAAkZMDHLAAAIAAEZg");
	this.shape_111.setTransform(299.3,0.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#00C90F").s().p("EhkeACNIAAkZMDI9AAAIAAEZg");
	this.shape_112.setTransform(304.9,0.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#00C90D").s().p("EhlXACNIAAkZMDKvAAAIAAEZg");
	this.shape_113.setTransform(310.5,0.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#00CA0B").s().p("EhmQACNIAAkZMDMhAAAIAAEZg");
	this.shape_114.setTransform(316.1,0.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#00CA09").s().p("EhnJACNIAAkZMDOTAAAIAAEZg");
	this.shape_115.setTransform(321.7,0.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#00CB06").s().p("EhoCACNIAAkZMDQFAAAIAAEZg");
	this.shape_116.setTransform(327.3,0.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#00CB04").s().p("Eho7ACNIAAkZMDR3AAAIAAEZg");
	this.shape_117.setTransform(332.9,0.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#00CC02").s().p("Ehp0ACNIAAkZMDTpAAAIAAEZg");
	this.shape_118.setTransform(338.5,0.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00CC00").s().p("EhqtACNIAAkZMDVbAAAIAAEZg");
	this.shape_119.setTransform(344.1,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mcYilan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hikayebutton2tıklandığında();
	this.instance.parent = this;
	this.instance.setTransform(-454,-23,0.814,0.814);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcYilan, new cjs.Rectangle(-454,-23,250,120.5), null);


(lib.mcKedi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hikayebuttontıklandığında();
	this.instance.parent = this;
	this.instance.setTransform(-123,-57,1.101,1.101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcKedi, new cjs.Rectangle(-123,-57,250,121.2), null);


(lib.mcHamster = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hikayebutton3tıklandığında();
	this.instance.parent = this;
	this.instance.setTransform(-108,101,1.366,1.366);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcHamster, new cjs.Rectangle(-108,101,250,132.5), null);


(lib.btnYilan_i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hikayebutton2();
	this.instance.parent = this;
	this.instance.setTransform(-131,-59,0.814,0.814);

	this.instance_1 = new lib.hikayebutton2üzerinegelindiğindevetıklandığında();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-165,-89,0.78,0.78);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("A8MN2IAA7rMA4ZAAAIAAbrg");
	this.shape.setTransform(15.5,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131,-59,250,120.6);


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


(lib.btnHamster_i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hikayebutton3();
	this.instance.parent = this;
	this.instance.setTransform(-132,-67,1.366,1.366);

	this.instance_1 = new lib.hikayebutton3üzerinegelindiğindevetıklandığında();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-165,-98);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("A9lPsIAA/XMA7LAAAIAAfXg");
	this.shape.setTransform(24.4,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape},{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132,-67,250,132.5);


(lib.btnBoga_i = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hikayebutton();
	this.instance.parent = this;
	this.instance.setTransform(-124,-58,1.101,1.101);

	this.instance_1 = new lib.hikayebuttonüzerinegelindiğindevetıklandığında();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-162,-72);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("A85OwIAA9fMA5zAAAIAAdfg");
	this.shape.setTransform(26.9,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{x:-162}}]},1).to({state:[{t:this.shape},{t:this.instance_1,p:{x:-140}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124,-58,250,121.2);


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


(lib.btnObj3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bahce();
	this.instance.parent = this;
	this.instance.setTransform(-121.4,-82.1,2.381,2.381);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A5pSsMAAAglXMAzTAAAMAAAAlXg");
	this.shape.setTransform(-7.3,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.4,-82.1,242.9,164.3);


(lib.btnObj3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.meyvesuyu();
	this.instance.parent = this;
	this.instance.setTransform(-85.7,-84.5,2.381,2.381);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AxRRSMAAAgijMAijAAAMAAAAijg");
	this.shape.setTransform(-5.3,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.7,-84.5,171.5,169.1);


(lib.btnObj3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sosis();
	this.instance.parent = this;
	this.instance.setTransform(-85.7,-84.5,2.381,2.381);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AxITKMAAAgmTMAiRAAAMAAAAmTg");
	this.shape.setTransform(0.3,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.7,-84.5,171.5,169.1);


(lib.btnObj3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yumurta();
	this.instance.parent = this;
	this.instance.setTransform(-100,-65.4,2.381,2.381);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A1lP2IAA/rMArLAAAIAAfrg");
	this.shape.setTransform(-0.1,-10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-65.4,200,131);


(lib.btnObj3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ekmek();
	this.instance.parent = this;
	this.instance.setTransform(-75,-72.9,2.055,2.055);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AztRJMAAAgiRMAnbAAAMAAAAiRg");
	this.shape.setTransform(9.6,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-72.9,150,145.9);


(lib.btnObj2_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tekokul();
	this.instance.parent = this;
	this.instance.setTransform(-125,-67.6,2.551,2.552);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A6eQ2MAAAghrMA09AAAMAAAAhrg");
	this.shape.setTransform(-0.4,-6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-67.6,250,135.3);


(lib.btnObj2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.canta();
	this.instance.parent = this;
	this.instance.setTransform(-85,-87.6,1.771,1.771);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyRRuMAAAgjbMAkjAAAMAAAAjbg");
	this.shape.setTransform(-2,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-87.6,170,175.4);


(lib.btnObj2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sapka();
	this.instance.parent = this;
	this.instance.setTransform(-100,-78,2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AxDPjIAAmoIgOAAIAA4dMAijAAAIAAfFg");
	this.shape.setTransform(9.2,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-78,200,156);


(lib.btnObj2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gazak();
	this.instance.parent = this;
	this.instance.setTransform(-108.8,-84,1.77,1.77);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AztQRMAAAgghMAnbAAAMAAAAghg");
	this.shape.setTransform(6.8,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.8,-84,217.7,168.1);


(lib.btnObj2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kanguru();
	this.instance.parent = this;
	this.instance.setTransform(-100,-101.7,1.77,1.77);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("A0SV4MAAAgrwMAolAAAMAAAArwg");
	this.shape.setTransform(16.3,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-101.7,200,203.6);


(lib.btnObj1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.yilan();
	this.instance.parent = this;
	this.instance.setTransform(-75,-78.7,1.899,1.898);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AybRIMAAAgiQMAk2AAAMAAAAiQg");
	this.shape.setTransform(1.3,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-78.7,150,157.6);


(lib.btnObj1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.suaygiri();
	this.instance.parent = this;
	this.instance.setTransform(-75,-59.1,1.442,1.442);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Av2NOIAA6bIftAAIAAabg");
	this.shape.setTransform(-2.7,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-59.1,150,118.3);


(lib.btnObj1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zurafayeni();
	this.instance.parent = this;
	this.instance.setTransform(-60,-110.1,2.182,2.181);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AuPUmMAAAgpLIcfAAMAAAApLg");
	this.shape.setTransform(-2.4,-8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-110.1,120,220.3);


(lib.btnObj1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zebra();
	this.instance.parent = this;
	this.instance.setTransform(-75,-88.8,1.724,1.724);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AwaP/IAA/9MAg1AAAIAAf9g");
	this.shape.setTransform(-3.5,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-88.8,150,177.6);


(lib.btnObj1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.aslan();
	this.instance.parent = this;
	this.instance.setTransform(-75,-59.1,1.442,1.442);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AuiMPIAA4dIdFAAIAAYdg");
	this.shape.setTransform(5.6,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-59.1,150,118.3);


(lib.btnObj1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.maymun();
	this.instance.parent = this;
	this.instance.setTransform(-54.5,-49.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AvZM0IAA5nIezAAIAAZng");
	this.shape.setTransform(-4.4,-15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.5,-49.5,109,99);


// stage content:
(lib.saccade_level1v1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var canvas = document.getElementById("canvas");
		localThis = this;
		canvas.innerHTML = "<application><storySelection></storySelection><duration></duration><color></color></application>";
		
		var globalDuration = 2;
		
		//Btn Decleration
		var btnStart = this.btnStart;
		var btnObj1 = this.btnObj1_i;
		var btnObj2 = this.btnObj2_i;
		var btnObj3 = this.btnObj3_i;
		
		var mcObj1 = this.mcObj1;
		var mcObj2 = this.mcObj2;
		var mcObj3 = this.mcObj3;
		
		
		
		
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
		var afterObjectsStory = [mcObj1,mcObj2,mcObj3];
		
		
		var btnColor = [btnMor,btnMavi,btnSari,btnPembe,btnYesil];
		var btnStory = [btnObj1,btnObj2,btnObj3];
		
		//Events
		btnStart.addEventListener("click", btnStart_Click.bind(this));
		
		btnMor.addEventListener("click", btn4sn_Click.bind(this));
		btnMavi.addEventListener("click", btn2sn_Click.bind(this));
		btnSari.addEventListener("click", btn6sn_Click.bind(this));
		btnPembe.addEventListener("click", btn8sn_Click.bind(this));
		btnYesil.addEventListener("click", btn10sn_Click.bind(this));
		
		btnObj1.addEventListener("click", btnSelectOda_Click.bind(this));
		btnObj2.addEventListener("click", btnSelectPlaj_Click.bind(this));
		btnObj3.addEventListener("click", btnSelectHamster_Click.bind(this));
		
		
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
			btnObj1.visible = false;
			mcObj1.visible = true;
			generateStorySelectionHTMl(1);
		}
		
		function btnSelectPlaj_Click(event){
			allVisible(2);
			allHide(2);
			btnObj2.visible = false;
			mcObj2.visible = true;
			generateStorySelectionHTMl(2);
		}
		
		function btnSelectHamster_Click(event){	
			allVisible(2);
			allHide(2);
			btnObj3.visible = false;
			mcObj3.visible = true;
			generateStorySelectionHTMl(3);
		
		}
		
		
		
		function generateStorySelectionHTMl(storySelection) {
			document.getElementsByTagName("storyselection").value = storySelection;
		}
		
		
		function generateDuration(duration) {
			document.getElementsByTagName("duration").value = duration;
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
			{
				generateDuration(globalDuration)
				if(story == 1)
					this.gotoAndPlay(1);
				else if(story == 2)
					this.gotoAndPlay(7);
				else if(story == 3)
					this.gotoAndPlay(12);
				
			}
				
		}
		
		
		
		
		//MAIN
		allHide(1);
		allHide(2);
		allVisible(1);
		allVisible(2);
	}
	this.frame_1 = function() {
		this.stop();
		var localThis = this;
		var frequency = 3;
		
		var nextStage = 2;
		
		
		var mcLoader2 = this.mcLoader2;
		var mcLoader4 = this.mcLoader4;
		var mcLoader6 = this.mcLoader6;
		var mcLoader8 = this.mcLoader8;
		
		var btnObj1 = this.btnObj1_1;
		
		
		
		var mouseOverTime = 0;
		var storySelection = document.getElementsByTagName("storyselection").value;
		var colorSelection = document.getElementsByTagName("color").value;
		var canvas = document.getElementById("canvas");	
		var duration = document.getElementsByTagName("duration").value;
		var loaderArray = [mcLoader2,mcLoader4,mcLoader6,mcLoader8];
		
		
		//MAIN
		if(controlSelection()){
			if(!checkStory()){
				localThis.gotoAndStop(0);
			}else{
				stage.enableMouseOver(frequency);
				changeColor(colorSelection);
				startAttempt();
			}
		
		}else{
			location.reload();
		}
		
		prepareLoader();
		
		startTicker();
		
		btnObj1.addEventListener("mouseover", fMouseover.bind(this));
		
		
		btnObj1.addEventListener("mouseout", fMouseout.bind(this));
		
		
		//Funtions
		
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
			if(objectType == "loader"){
				for(var i = 0;i<loaderArray.length;i++)
					loaderArray[i].visible = status;
			}
		}
		
		
		function fMouseover (event){
			mouseOverTime = createjs.Ticker.getTime()/1000;
			createjs.Ticker.addEventListener("tick", eventTickerForObjects);
			isMouseOut = false;
			currentLoader.visible = true;
			currentLoader.gotoAndPlay(1);
		}
		
		function fMouseout (event){
			createjs.Ticker.removeEventListener("tick", eventTickerForObjects);
			isMouseOut = true;
			currentLoader.visible = false;
			currentLoader.gotoAndPlay(0);
		}
		
		function startTicker(){
			
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
			createjs.Ticker.setFPS(60);
			
		}
		
		function eventTickerForObjects(event){
			if((!isMouseOut)){
				tickerTime = createjs.Ticker.getTime()/1000;
				var diff = tickerTime - mouseOverTime;
				if(diff>duration){
					mouseOverTime = tickerTime;
					localThis.gotoAndStop(nextStage);
					
					
				}
			}
			
		}
		
		
		function checkStory(){
			if(storySelection == 1)
				return true;
			else
				return false;
		}
		
		function controlSelection(){
			 if(storySelection == undefined)
				 return false;
			 else
				 return true;
				
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
	}
	this.frame_2 = function() {
		this.stop();
		var localThis = this;
		var frequency = 3;
		var duration = 2;
		var nextStage = 3;
		
		
		var mcLoader2 = this.mcLoader2;
		var mcLoader4 = this.mcLoader4;
		var mcLoader6 = this.mcLoader6;
		var mcLoader8 = this.mcLoader8;
		
		var btnObj1 = this.btnObj1_2;
		
		
		
		var mouseOverTime = 0;
		var storySelection = document.getElementsByTagName("storyselection").value;
		var colorSelection = document.getElementsByTagName("color").value;
		var canvas = document.getElementById("canvas");	
		var duration = document.getElementsByTagName("duration").value;
		var loaderArray = [mcLoader2,mcLoader4,mcLoader6,mcLoader8];
		
		//MAIN
		if(controlSelection()){
			if(!checkStory()){
				localThis.gotoAndStop(0);
			}else{
				stage.enableMouseOver(frequency);
				changeColor(colorSelection);
				prepareLoader();
				startTicker();
		
			}
		
		}else{
			location.reload();
		}
		
		
		btnObj1.addEventListener("mouseover", fMouseover.bind(this));
		
		
		btnObj1.addEventListener("mouseout", fMouseout.bind(this));
		
		
		//Funtions
		
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
			if(objectType == "loader"){
				for(var i = 0;i<loaderArray.length;i++)
					loaderArray[i].visible = status;
			}
		}
		
		
		function fMouseover (event){
			mouseOverTime = createjs.Ticker.getTime()/1000;
			createjs.Ticker.addEventListener("tick", eventTickerForObjects);
			isMouseOut = false;
			currentLoader.visible = true;
			currentLoader.gotoAndPlay(1);
		}
		
		function fMouseout (event){
			createjs.Ticker.removeEventListener("tick", eventTickerForObjects);
			isMouseOut = true;
			currentLoader.visible = false;
			currentLoader.gotoAndPlay(0);
		}
		
		function startTicker(){
			
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
			createjs.Ticker.setFPS(60);
			
		}
		
		function eventTickerForObjects(event){
			if((!isMouseOut)){
				tickerTime = createjs.Ticker.getTime()/1000;
				var diff = tickerTime - mouseOverTime;
				if(diff>duration){
					mouseOverTime = tickerTime;
					localThis.gotoAndStop(nextStage);
					
					
				}
			}
			
		}
		
		
		function checkStory(){
			if(storySelection == 1)
				return true;
			else
				return false;
		}
		
		function controlSelection(){
			 if(storySelection == undefined)
				 return false;
			 else
				 return true;
				
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
	}
	this.frame_3 = function() {
		this.stop();
		var localThis = this;
		var frequency = 3;
		var duration = 2;
		var nextStage = 4;
		
		
		var mcLoader2 = this.mcLoader2;
		var mcLoader4 = this.mcLoader4;
		var mcLoader6 = this.mcLoader6;
		var mcLoader8 = this.mcLoader8;
		
		var btnObj1 = this.btnObj1_3;
		
		
		
		var mouseOverTime = 0;
		var storySelection = document.getElementsByTagName("storyselection").value;
		var colorSelection = document.getElementsByTagName("color").value;
		var canvas = document.getElementById("canvas");	
		var duration = document.getElementsByTagName("duration").value;
		var loaderArray = [mcLoader2,mcLoader4,mcLoader6,mcLoader8];
		
		//MAIN
		if(controlSelection()){
			if(!checkStory()){
				localThis.gotoAndStop(0);
			}else{
				stage.enableMouseOver(frequency);
				changeColor(colorSelection);
				prepareLoader();
				startTicker();
		
			}
		
		}else{
			location.reload();
		}
		
		
		btnObj1.addEventListener("mouseover", fMouseover.bind(this));
		
		
		btnObj1.addEventListener("mouseout", fMouseout.bind(this));
		
		
		//Funtions
		
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
			if(objectType == "loader"){
				for(var i = 0;i<loaderArray.length;i++)
					loaderArray[i].visible = status;
			}
		}
		
		
		function fMouseover (event){
			mouseOverTime = createjs.Ticker.getTime()/1000;
			createjs.Ticker.addEventListener("tick", eventTickerForObjects);
			isMouseOut = false;
			currentLoader.visible = true;
			currentLoader.gotoAndPlay(1);
		}
		
		function fMouseout (event){
			createjs.Ticker.removeEventListener("tick", eventTickerForObjects);
			isMouseOut = true;
			currentLoader.visible = false;
			currentLoader.gotoAndPlay(0);
		}
		
		function startTicker(){
			
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
			createjs.Ticker.setFPS(60);
			
		}
		
		function eventTickerForObjects(event){
			if((!isMouseOut)){
				tickerTime = createjs.Ticker.getTime()/1000;
				var diff = tickerTime - mouseOverTime;
				if(diff>duration){
					mouseOverTime = tickerTime;
					localThis.gotoAndStop(nextStage);
					
					
				}
			}
			
		}
		
		
		function checkStory(){
			if(storySelection == 1)
				return true;
			else
				return false;
		}
		
		function controlSelection(){
			 if(storySelection == undefined)
				 return false;
			 else
				 return true;
				
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
	}
	this.frame_4 = function() {
		this.stop();
		var localThis = this;
		var frequency = 3;
		var duration = 2;
		var nextStage = 5;
		
		
		var mcLoader2 = this.mcLoader2;
		var mcLoader4 = this.mcLoader4;
		var mcLoader6 = this.mcLoader6;
		var mcLoader8 = this.mcLoader8;
		
		var btnObj1 = this.btnObj1_4;
		
		
		
		var mouseOverTime = 0;
		var storySelection = document.getElementsByTagName("storyselection").value;
		var colorSelection = document.getElementsByTagName("color").value;
		var canvas = document.getElementById("canvas");	
		var duration = document.getElementsByTagName("duration").value;
		var loaderArray = [mcLoader2,mcLoader4,mcLoader6,mcLoader8];
		
		//MAIN
		if(controlSelection()){
			if(!checkStory()){
				localThis.gotoAndStop(0);
			}else{
				stage.enableMouseOver(frequency);
				changeColor(colorSelection);
				prepareLoader();
				startTicker();
		
			}
		
		}else{
			location.reload();
		}
		
		
		btnObj1.addEventListener("mouseover", fMouseover.bind(this));
		
		
		btnObj1.addEventListener("mouseout", fMouseout.bind(this));
		
		
		//Funtions
		
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
			if(objectType == "loader"){
				for(var i = 0;i<loaderArray.length;i++)
					loaderArray[i].visible = status;
			}
		}
		
		
		function fMouseover (event){
			mouseOverTime = createjs.Ticker.getTime()/1000;
			createjs.Ticker.addEventListener("tick", eventTickerForObjects);
			isMouseOut = false;
			currentLoader.visible = true;
			currentLoader.gotoAndPlay(1);
		}
		
		function fMouseout (event){
			createjs.Ticker.removeEventListener("tick", eventTickerForObjects);
			isMouseOut = true;
			currentLoader.visible = false;
			currentLoader.gotoAndPlay(0);
		}
		
		function startTicker(){
			
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
			createjs.Ticker.setFPS(60);
			
		}
		
		function eventTickerForObjects(event){
			if((!isMouseOut)){
				tickerTime = createjs.Ticker.getTime()/1000;
				var diff = tickerTime - mouseOverTime;
				if(diff>duration){
					mouseOverTime = tickerTime;
					localThis.gotoAndStop(nextStage);
					
					
				}
			}
			
		}
		
		
		function checkStory(){
			if(storySelection == 1)
				return true;
			else
				return false;
		}
		
		function controlSelection(){
			 if(storySelection == undefined)
				 return false;
			 else
				 return true;
				
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
	}
	this.frame_5 = function() {
		this.stop();
		var localThis = this;
		var frequency = 3;
		var duration = 2;
		var nextStage = 6;
		
		
		var mcLoader2 = this.mcLoader2;
		var mcLoader4 = this.mcLoader4;
		var mcLoader6 = this.mcLoader6;
		var mcLoader8 = this.mcLoader8;
		
		var btnObj1 = this.btnObj1_5;
		
		
		
		var mouseOverTime = 0;
		var storySelection = document.getElementsByTagName("storyselection").value;
		var colorSelection = document.getElementsByTagName("color").value;
		var canvas = document.getElementById("canvas");	
		var duration = document.getElementsByTagName("duration").value;
		var loaderArray = [mcLoader2,mcLoader4,mcLoader6,mcLoader8];
		
		//MAIN
		if(controlSelection()){
			if(!checkStory()){
				localThis.gotoAndStop(0);
			}else{
				stage.enableMouseOver(frequency);
				changeColor(colorSelection);
				prepareLoader();
				startTicker();
		
			}
		
		}else{
			location.reload();
		}
		
		
		btnObj1.addEventListener("mouseover", fMouseover.bind(this));
		
		
		btnObj1.addEventListener("mouseout", fMouseout.bind(this));
		
		
		//Funtions
		
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
			if(objectType == "loader"){
				for(var i = 0;i<loaderArray.length;i++)
					loaderArray[i].visible = status;
			}
		}
		
		
		function fMouseover (event){
			mouseOverTime = createjs.Ticker.getTime()/1000;
			createjs.Ticker.addEventListener("tick", eventTickerForObjects);
			isMouseOut = false;
			currentLoader.visible = true;
			currentLoader.gotoAndPlay(1);
		}
		
		function fMouseout (event){
			createjs.Ticker.removeEventListener("tick", eventTickerForObjects);
			isMouseOut = true;
			currentLoader.visible = false;
			currentLoader.gotoAndPlay(0);
		}
		
		function startTicker(){
			
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
			createjs.Ticker.setFPS(60);
			
		}
		
		function eventTickerForObjects(event){
			if((!isMouseOut)){
				tickerTime = createjs.Ticker.getTime()/1000;
				var diff = tickerTime - mouseOverTime;
				if(diff>duration){
					mouseOverTime = tickerTime;
					localThis.gotoAndStop(nextStage);
					
					
				}
			}
			
		}
		
		
		function checkStory(){
			if(storySelection == 1)
				return true;
			else
				return false;
		}
		
		function controlSelection(){
			 if(storySelection == undefined)
				 return false;
			 else
				 return true;
				
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
	}
	this.frame_6 = function() {
		this.stop();
		var localThis = this;
		var frequency = 3;
		
		var nextStage = 17;
		
		
		var mcLoader2 = this.mcLoader2;
		var mcLoader4 = this.mcLoader4;
		var mcLoader6 = this.mcLoader6;
		var mcLoader8 = this.mcLoader8;
		
		var btnObj1 = this.btnObj1_6;
		
		
		
		var mouseOverTime = 0;
		var storySelection = document.getElementsByTagName("storyselection").value;
		var colorSelection = document.getElementsByTagName("color").value;
		var canvas = document.getElementById("canvas");	
		var duration = document.getElementsByTagName("duration").value;
		var loaderArray = [mcLoader2,mcLoader4,mcLoader6,mcLoader8];
		
		//MAIN
		if(controlSelection()){
			if(!checkStory()){
				localThis.gotoAndStop(0);
			}else{
				stage.enableMouseOver(frequency);
				changeColor(colorSelection);
				prepareLoader();
				startTicker();
		
			}
		
		}else{
			location.reload();
		}
		
		
		btnObj1.addEventListener("mouseover", fMouseover.bind(this));
		
		
		btnObj1.addEventListener("mouseout", fMouseout.bind(this));
		
		
		//Funtions
		
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
			if(objectType == "loader"){
				for(var i = 0;i<loaderArray.length;i++)
					loaderArray[i].visible = status;
			}
		}
		
		
		function fMouseover (event){
			mouseOverTime = createjs.Ticker.getTime()/1000;
			createjs.Ticker.addEventListener("tick", eventTickerForObjects);
			isMouseOut = false;
			currentLoader.visible = true;
			currentLoader.gotoAndPlay(1);
		}
		
		function fMouseout (event){
			createjs.Ticker.removeEventListener("tick", eventTickerForObjects);
			isMouseOut = true;
			currentLoader.visible = false;
			currentLoader.gotoAndPlay(0);
		}
		
		function startTicker(){
			
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
			createjs.Ticker.setFPS(60);
			
		}
		
		function eventTickerForObjects(event){
			if((!isMouseOut)){
				tickerTime = createjs.Ticker.getTime()/1000;
				var diff = tickerTime - mouseOverTime;
				if(diff>duration){
					mouseOverTime = tickerTime;
					localThis.gotoAndStop(nextStage);
					
					
				}
			}
			
		}
		
		
		function checkStory(){
			if(storySelection == 1)
				return true;
			else
				return false;
		}
		
		function controlSelection(){
			 if(storySelection == undefined)
				 return false;
			 else
				 return true;
				
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
	}
	this.frame_7 = function() {
		this.stop();
		var localThis = this;
		var frequency = 3;
		
		var nextStage = 8;
		
		
		var mcLoader2 = this.mcLoader2;
		var mcLoader4 = this.mcLoader4;
		var mcLoader6 = this.mcLoader6;
		var mcLoader8 = this.mcLoader8;
		
		var btnObj1 = this.btnObj2_1;
		
		
		
		var mouseOverTime = 0;
		var storySelection = document.getElementsByTagName("storyselection").value;
		var colorSelection = document.getElementsByTagName("color").value;
		var canvas = document.getElementById("canvas");	
		var duration = document.getElementsByTagName("duration").value;
		var loaderArray = [mcLoader2,mcLoader4,mcLoader6,mcLoader8];
		
		
		//MAIN
		if(controlSelection()){
			if(!checkStory()){
				localThis.gotoAndStop(0);
			}else{
				stage.enableMouseOver(frequency);
				changeColor(colorSelection);
				startAttempt();
			}
		
		}else{
			location.reload();
		}
		
		prepareLoader();
		
		startTicker();
		
		btnObj1.addEventListener("mouseover", fMouseover.bind(this));
		
		
		btnObj1.addEventListener("mouseout", fMouseout.bind(this));
		
		
		//Funtions
		
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
			if(objectType == "loader"){
				for(var i = 0;i<loaderArray.length;i++)
					loaderArray[i].visible = status;
			}
		}
		
		
		function fMouseover (event){
			mouseOverTime = createjs.Ticker.getTime()/1000;
			createjs.Ticker.addEventListener("tick", eventTickerForObjects);
			isMouseOut = false;
			currentLoader.visible = true;
			currentLoader.gotoAndPlay(1);
		}
		
		function fMouseout (event){
			createjs.Ticker.removeEventListener("tick", eventTickerForObjects);
			isMouseOut = true;
			currentLoader.visible = false;
			currentLoader.gotoAndPlay(0);
		}
		
		function startTicker(){
			
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
			createjs.Ticker.setFPS(60);
			
		}
		
		function eventTickerForObjects(event){
			if((!isMouseOut)){
				tickerTime = createjs.Ticker.getTime()/1000;
				var diff = tickerTime - mouseOverTime;
				if(diff>duration){
					mouseOverTime = tickerTime;
					localThis.gotoAndStop(nextStage);
					
					
				}
			}
			
		}
		
		
		function checkStory(){
			if(storySelection == 2)
				return true;
			else
				return false;
		}
		
		function controlSelection(){
			 if(storySelection == undefined)
				 return false;
			 else
				 return true;
				
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
	}
	this.frame_8 = function() {
		this.stop();
		var localThis = this;
		var frequency = 3;
		
		var nextStage = 9;
		
		
		var mcLoader2 = this.mcLoader2;
		var mcLoader4 = this.mcLoader4;
		var mcLoader6 = this.mcLoader6;
		var mcLoader8 = this.mcLoader8;
		
		var btnObj1 = this.btnObj2_2;
		
		
		
		var mouseOverTime = 0;
		var storySelection = document.getElementsByTagName("storyselection").value;
		var colorSelection = document.getElementsByTagName("color").value;
		var canvas = document.getElementById("canvas");	
		var duration = document.getElementsByTagName("duration").value;
		var loaderArray = [mcLoader2,mcLoader4,mcLoader6,mcLoader8];
		
		//MAIN
		if(controlSelection()){
			if(!checkStory()){
				localThis.gotoAndStop(0);
			}else{
				stage.enableMouseOver(frequency);
				changeColor(colorSelection);
				prepareLoader();
				startTicker();
		
			}
		
		}else{
			location.reload();
		}
		
		
		btnObj1.addEventListener("mouseover", fMouseover.bind(this));
		
		
		btnObj1.addEventListener("mouseout", fMouseout.bind(this));
		
		
		//Funtions
		
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
			if(objectType == "loader"){
				for(var i = 0;i<loaderArray.length;i++)
					loaderArray[i].visible = status;
			}
		}
		
		
		function fMouseover (event){
			mouseOverTime = createjs.Ticker.getTime()/1000;
			createjs.Ticker.addEventListener("tick", eventTickerForObjects);
			isMouseOut = false;
			currentLoader.visible = true;
			currentLoader.gotoAndPlay(1);
		}
		
		function fMouseout (event){
			createjs.Ticker.removeEventListener("tick", eventTickerForObjects);
			isMouseOut = true;
			currentLoader.visible = false;
			currentLoader.gotoAndPlay(0);
		}
		
		function startTicker(){
			
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
			createjs.Ticker.setFPS(60);
			
		}
		
		function eventTickerForObjects(event){
			if((!isMouseOut)){
				tickerTime = createjs.Ticker.getTime()/1000;
				var diff = tickerTime - mouseOverTime;
				if(diff>duration){
					mouseOverTime = tickerTime;
					localThis.gotoAndStop(nextStage);
					
					
				}
			}
			
		}
		
		
		function checkStory(){
			if(storySelection == 2)
				return true;
			else
				return false;
		}
		
		function controlSelection(){
			 if(storySelection == undefined)
				 return false;
			 else
				 return true;
				
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
	}
	this.frame_9 = function() {
		this.stop();
		var localThis = this;
		var frequency = 3;
		
		var nextStage = 10;
		
		
		var mcLoader2 = this.mcLoader2;
		var mcLoader4 = this.mcLoader4;
		var mcLoader6 = this.mcLoader6;
		var mcLoader8 = this.mcLoader8;
		
		var btnObj1 = this.btnObj2_3;
		
		
		
		var mouseOverTime = 0;
		var storySelection = document.getElementsByTagName("storyselection").value;
		var colorSelection = document.getElementsByTagName("color").value;
		var canvas = document.getElementById("canvas");	
		var duration = document.getElementsByTagName("duration").value;
		var loaderArray = [mcLoader2,mcLoader4,mcLoader6,mcLoader8];
		
		//MAIN
		if(controlSelection()){
			if(!checkStory()){
				localThis.gotoAndStop(0);
			}else{
				stage.enableMouseOver(frequency);
				changeColor(colorSelection);
				prepareLoader();
				startTicker();
		
			}
		
		}else{
			location.reload();
		}
		
		
		btnObj1.addEventListener("mouseover", fMouseover.bind(this));
		
		
		btnObj1.addEventListener("mouseout", fMouseout.bind(this));
		
		
		//Funtions
		
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
			if(objectType == "loader"){
				for(var i = 0;i<loaderArray.length;i++)
					loaderArray[i].visible = status;
			}
		}
		
		
		function fMouseover (event){
			mouseOverTime = createjs.Ticker.getTime()/1000;
			createjs.Ticker.addEventListener("tick", eventTickerForObjects);
			isMouseOut = false;
			currentLoader.visible = true;
			currentLoader.gotoAndPlay(1);
		}
		
		function fMouseout (event){
			createjs.Ticker.removeEventListener("tick", eventTickerForObjects);
			isMouseOut = true;
			currentLoader.visible = false;
			currentLoader.gotoAndPlay(0);
		}
		
		function startTicker(){
			
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
			createjs.Ticker.setFPS(60);
			
		}
		
		function eventTickerForObjects(event){
			if((!isMouseOut)){
				tickerTime = createjs.Ticker.getTime()/1000;
				var diff = tickerTime - mouseOverTime;
				if(diff>duration){
					mouseOverTime = tickerTime;
					localThis.gotoAndStop(nextStage);
					
					
				}
			}
			
		}
		
		
		function checkStory(){
			if(storySelection == 2)
				return true;
			else
				return false;
		}
		
		function controlSelection(){
			 if(storySelection == undefined)
				 return false;
			 else
				 return true;
				
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
	}
	this.frame_10 = function() {
		this.stop();
		var localThis = this;
		var frequency = 3;
		
		var nextStage = 11;
		
		
		var mcLoader2 = this.mcLoader2;
		var mcLoader4 = this.mcLoader4;
		var mcLoader6 = this.mcLoader6;
		var mcLoader8 = this.mcLoader8;
		
		var btnObj1 = this.btnObj2_4;
		
		
		
		var mouseOverTime = 0;
		var storySelection = document.getElementsByTagName("storyselection").value;
		var colorSelection = document.getElementsByTagName("color").value;
		var canvas = document.getElementById("canvas");	
		var duration = document.getElementsByTagName("duration").value;
		var loaderArray = [mcLoader2,mcLoader4,mcLoader6,mcLoader8];
		
		//MAIN
		if(controlSelection()){
			if(!checkStory()){
				localThis.gotoAndStop(0);
			}else{
				stage.enableMouseOver(frequency);
				changeColor(colorSelection);
				prepareLoader();
				startTicker();
		
			}
		
		}else{
			location.reload();
		}
		
		
		btnObj1.addEventListener("mouseover", fMouseover.bind(this));
		
		
		btnObj1.addEventListener("mouseout", fMouseout.bind(this));
		
		
		//Funtions
		
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
			if(objectType == "loader"){
				for(var i = 0;i<loaderArray.length;i++)
					loaderArray[i].visible = status;
			}
		}
		
		
		function fMouseover (event){
			mouseOverTime = createjs.Ticker.getTime()/1000;
			createjs.Ticker.addEventListener("tick", eventTickerForObjects);
			isMouseOut = false;
			currentLoader.visible = true;
			currentLoader.gotoAndPlay(1);
		}
		
		function fMouseout (event){
			createjs.Ticker.removeEventListener("tick", eventTickerForObjects);
			isMouseOut = true;
			currentLoader.visible = false;
			currentLoader.gotoAndPlay(0);
		}
		
		function startTicker(){
			
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
			createjs.Ticker.setFPS(60);
			
		}
		
		function eventTickerForObjects(event){
			if((!isMouseOut)){
				tickerTime = createjs.Ticker.getTime()/1000;
				var diff = tickerTime - mouseOverTime;
				if(diff>duration){
					mouseOverTime = tickerTime;
					localThis.gotoAndStop(nextStage);
					
					
				}
			}
			
		}
		
		
		function checkStory(){
			if(storySelection == 2)
				return true;
			else
				return false;
		}
		
		function controlSelection(){
			 if(storySelection == undefined)
				 return false;
			 else
				 return true;
				
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
	}
	this.frame_11 = function() {
		this.stop();
		var localThis = this;
		var frequency = 3;
		
		var nextStage = 17;
		
		
		var mcLoader2 = this.mcLoader2;
		var mcLoader4 = this.mcLoader4;
		var mcLoader6 = this.mcLoader6;
		var mcLoader8 = this.mcLoader8;
		
		var btnObj1 = this.btnObj2_5;
		
		
		
		var mouseOverTime = 0;
		var storySelection = document.getElementsByTagName("storyselection").value;
		var colorSelection = document.getElementsByTagName("color").value;
		var canvas = document.getElementById("canvas");	
		var duration = document.getElementsByTagName("duration").value;
		var loaderArray = [mcLoader2,mcLoader4,mcLoader6,mcLoader8];
		
		//MAIN
		if(controlSelection()){
			if(!checkStory()){
				localThis.gotoAndStop(0);
			}else{
				stage.enableMouseOver(frequency);
				changeColor(colorSelection);
				prepareLoader();
				startTicker();
		
			}
		
		}else{
			location.reload();
		}
		
		
		btnObj1.addEventListener("mouseover", fMouseover.bind(this));
		
		
		btnObj1.addEventListener("mouseout", fMouseout.bind(this));
		
		
		//Funtions
		
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
			if(objectType == "loader"){
				for(var i = 0;i<loaderArray.length;i++)
					loaderArray[i].visible = status;
			}
		}
		
		
		function fMouseover (event){
			mouseOverTime = createjs.Ticker.getTime()/1000;
			createjs.Ticker.addEventListener("tick", eventTickerForObjects);
			isMouseOut = false;
			currentLoader.visible = true;
			currentLoader.gotoAndPlay(1);
		}
		
		function fMouseout (event){
			createjs.Ticker.removeEventListener("tick", eventTickerForObjects);
			isMouseOut = true;
			currentLoader.visible = false;
			currentLoader.gotoAndPlay(0);
		}
		
		function startTicker(){
			
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
			createjs.Ticker.setFPS(60);
			
		}
		
		function eventTickerForObjects(event){
			if((!isMouseOut)){
				tickerTime = createjs.Ticker.getTime()/1000;
				var diff = tickerTime - mouseOverTime;
				if(diff>duration){
					mouseOverTime = tickerTime;
					localThis.gotoAndStop(nextStage);
					
					
				}
			}
			
		}
		
		
		function checkStory(){
			if(storySelection == 2)
				return true;
			else
				return false;
		}
		
		function controlSelection(){
			 if(storySelection == undefined)
				 return false;
			 else
				 return true;
				
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
	}
	this.frame_12 = function() {
		this.stop();
		var localThis = this;
		var frequency = 3;
		
		var nextStage = 13;
		
		
		var mcLoader2 = this.mcLoader2;
		var mcLoader4 = this.mcLoader4;
		var mcLoader6 = this.mcLoader6;
		var mcLoader8 = this.mcLoader8;
		
		var btnObj1 = this.btnObj3_1;
		
		
		
		var mouseOverTime = 0;
		var storySelection = document.getElementsByTagName("storyselection").value;
		var colorSelection = document.getElementsByTagName("color").value;
		var canvas = document.getElementById("canvas");	
		var duration = document.getElementsByTagName("duration").value;
		var loaderArray = [mcLoader2,mcLoader4,mcLoader6,mcLoader8];
		
		
		//MAIN
		if(controlSelection()){
			if(!checkStory()){
				localThis.gotoAndStop(0);
			}else{
				stage.enableMouseOver(frequency);
				changeColor(colorSelection);
				startAttempt();
			}
		
		}else{
			location.reload();
		}
		
		prepareLoader();
		
		startTicker();
		
		btnObj1.addEventListener("mouseover", fMouseover.bind(this));
		
		
		btnObj1.addEventListener("mouseout", fMouseout.bind(this));
		
		
		//Funtions
		
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
			if(objectType == "loader"){
				for(var i = 0;i<loaderArray.length;i++)
					loaderArray[i].visible = status;
			}
		}
		
		
		function fMouseover (event){
			mouseOverTime = createjs.Ticker.getTime()/1000;
			createjs.Ticker.addEventListener("tick", eventTickerForObjects);
			isMouseOut = false;
			currentLoader.visible = true;
			currentLoader.gotoAndPlay(1);
		}
		
		function fMouseout (event){
			createjs.Ticker.removeEventListener("tick", eventTickerForObjects);
			isMouseOut = true;
			currentLoader.visible = false;
			currentLoader.gotoAndPlay(0);
		}
		
		function startTicker(){
			
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
			createjs.Ticker.setFPS(60);
			
		}
		
		function eventTickerForObjects(event){
			if((!isMouseOut)){
				tickerTime = createjs.Ticker.getTime()/1000;
				var diff = tickerTime - mouseOverTime;
				if(diff>duration){
					mouseOverTime = tickerTime;
					localThis.gotoAndStop(nextStage);
					
					
				}
			}
			
		}
		
		
		function checkStory(){
			if(storySelection == 3)
				return true;
			else
				return false;
		}
		
		function controlSelection(){
			 if(storySelection == undefined)
				 return false;
			 else
				 return true;
				
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
	}
	this.frame_13 = function() {
		this.stop();
		var localThis = this;
		var frequency = 3;
		
		var nextStage = 14;
		
		
		var mcLoader2 = this.mcLoader2;
		var mcLoader4 = this.mcLoader4;
		var mcLoader6 = this.mcLoader6;
		var mcLoader8 = this.mcLoader8;
		
		var btnObj1 = this.btnObj3_2;
		
		
		
		var mouseOverTime = 0;
		var storySelection = document.getElementsByTagName("storyselection").value;
		var colorSelection = document.getElementsByTagName("color").value;
		var canvas = document.getElementById("canvas");	
		var duration = document.getElementsByTagName("duration").value;
		var loaderArray = [mcLoader2,mcLoader4,mcLoader6,mcLoader8];
		
		//MAIN
		if(controlSelection()){
			if(!checkStory()){
				localThis.gotoAndStop(0);
			}else{
				stage.enableMouseOver(frequency);
				changeColor(colorSelection);
				prepareLoader();
				startTicker();
		
			}
		
		}else{
			location.reload();
		}
		
		
		btnObj1.addEventListener("mouseover", fMouseover.bind(this));
		
		
		btnObj1.addEventListener("mouseout", fMouseout.bind(this));
		
		
		//Funtions
		
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
			if(objectType == "loader"){
				for(var i = 0;i<loaderArray.length;i++)
					loaderArray[i].visible = status;
			}
		}
		
		
		function fMouseover (event){
			mouseOverTime = createjs.Ticker.getTime()/1000;
			createjs.Ticker.addEventListener("tick", eventTickerForObjects);
			isMouseOut = false;
			currentLoader.visible = true;
			currentLoader.gotoAndPlay(1);
		}
		
		function fMouseout (event){
			createjs.Ticker.removeEventListener("tick", eventTickerForObjects);
			isMouseOut = true;
			currentLoader.visible = false;
			currentLoader.gotoAndPlay(0);
		}
		
		function startTicker(){
			
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
			createjs.Ticker.setFPS(60);
			
		}
		
		function eventTickerForObjects(event){
			if((!isMouseOut)){
				tickerTime = createjs.Ticker.getTime()/1000;
				var diff = tickerTime - mouseOverTime;
				if(diff>duration){
					mouseOverTime = tickerTime;
					localThis.gotoAndStop(nextStage);
					
					
				}
			}
			
		}
		
		
		function checkStory(){
			if(storySelection == 3)
				return true;
			else
				return false;
		}
		
		function controlSelection(){
			 if(storySelection == undefined)
				 return false;
			 else
				 return true;
				
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
	}
	this.frame_14 = function() {
		this.stop();
		var localThis = this;
		var frequency = 3;
		
		var nextStage = 15;
		
		
		var mcLoader2 = this.mcLoader2;
		var mcLoader4 = this.mcLoader4;
		var mcLoader6 = this.mcLoader6;
		var mcLoader8 = this.mcLoader8;
		
		var btnObj1 = this.btnObj3_3;
		
		
		
		var mouseOverTime = 0;
		var storySelection = document.getElementsByTagName("storyselection").value;
		var colorSelection = document.getElementsByTagName("color").value;
		var canvas = document.getElementById("canvas");	
		var duration = document.getElementsByTagName("duration").value;
		var loaderArray = [mcLoader2,mcLoader4,mcLoader6,mcLoader8];
		
		//MAIN
		if(controlSelection()){
			if(!checkStory()){
				localThis.gotoAndStop(0);
			}else{
				stage.enableMouseOver(frequency);
				changeColor(colorSelection);
				prepareLoader();
				startTicker();
		
			}
		
		}else{
			location.reload();
		}
		
		
		btnObj1.addEventListener("mouseover", fMouseover.bind(this));
		
		
		btnObj1.addEventListener("mouseout", fMouseout.bind(this));
		
		
		//Funtions
		
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
			if(objectType == "loader"){
				for(var i = 0;i<loaderArray.length;i++)
					loaderArray[i].visible = status;
			}
		}
		
		
		function fMouseover (event){
			mouseOverTime = createjs.Ticker.getTime()/1000;
			createjs.Ticker.addEventListener("tick", eventTickerForObjects);
			isMouseOut = false;
			currentLoader.visible = true;
			currentLoader.gotoAndPlay(1);
		}
		
		function fMouseout (event){
			createjs.Ticker.removeEventListener("tick", eventTickerForObjects);
			isMouseOut = true;
			currentLoader.visible = false;
			currentLoader.gotoAndPlay(0);
		}
		
		function startTicker(){
			
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
			createjs.Ticker.setFPS(60);
			
		}
		
		function eventTickerForObjects(event){
			if((!isMouseOut)){
				tickerTime = createjs.Ticker.getTime()/1000;
				var diff = tickerTime - mouseOverTime;
				if(diff>duration){
					mouseOverTime = tickerTime;
					localThis.gotoAndStop(nextStage);
					
					
				}
			}
			
		}
		
		
		function checkStory(){
			if(storySelection == 3)
				return true;
			else
				return false;
		}
		
		function controlSelection(){
			 if(storySelection == undefined)
				 return false;
			 else
				 return true;
				
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
	}
	this.frame_15 = function() {
		this.stop();
		var localThis = this;
		var frequency = 3;
		
		var nextStage = 16;
		
		
		var mcLoader2 = this.mcLoader2;
		var mcLoader4 = this.mcLoader4;
		var mcLoader6 = this.mcLoader6;
		var mcLoader8 = this.mcLoader8;
		
		var btnObj1 = this.btnObj3_4;
		
		
		
		var mouseOverTime = 0;
		var storySelection = document.getElementsByTagName("storyselection").value;
		var colorSelection = document.getElementsByTagName("color").value;
		var canvas = document.getElementById("canvas");	
		var duration = document.getElementsByTagName("duration").value;
		var loaderArray = [mcLoader2,mcLoader4,mcLoader6,mcLoader8];
		
		//MAIN
		if(controlSelection()){
			if(!checkStory()){
				localThis.gotoAndStop(0);
			}else{
				stage.enableMouseOver(frequency);
				changeColor(colorSelection);
				prepareLoader();
				startTicker();
		
			}
		
		}else{
			location.reload();
		}
		
		
		btnObj1.addEventListener("mouseover", fMouseover.bind(this));
		
		
		btnObj1.addEventListener("mouseout", fMouseout.bind(this));
		
		
		//Funtions
		
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
			if(objectType == "loader"){
				for(var i = 0;i<loaderArray.length;i++)
					loaderArray[i].visible = status;
			}
		}
		
		
		function fMouseover (event){
			mouseOverTime = createjs.Ticker.getTime()/1000;
			createjs.Ticker.addEventListener("tick", eventTickerForObjects);
			isMouseOut = false;
			currentLoader.visible = true;
			currentLoader.gotoAndPlay(1);
		}
		
		function fMouseout (event){
			createjs.Ticker.removeEventListener("tick", eventTickerForObjects);
			isMouseOut = true;
			currentLoader.visible = false;
			currentLoader.gotoAndPlay(0);
		}
		
		function startTicker(){
			
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
			createjs.Ticker.setFPS(60);
			
		}
		
		function eventTickerForObjects(event){
			if((!isMouseOut)){
				tickerTime = createjs.Ticker.getTime()/1000;
				var diff = tickerTime - mouseOverTime;
				if(diff>duration){
					mouseOverTime = tickerTime;
					localThis.gotoAndStop(nextStage);
					
					
				}
			}
			
		}
		
		
		function checkStory(){
			if(storySelection == 3)
				return true;
			else
				return false;
		}
		
		function controlSelection(){
			 if(storySelection == undefined)
				 return false;
			 else
				 return true;
				
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
	}
	this.frame_16 = function() {
		this.stop();
		var localThis = this;
		var frequency = 3;
		
		var nextStage = 17;
		
		
		var mcLoader2 = this.mcLoader2;
		var mcLoader4 = this.mcLoader4;
		var mcLoader6 = this.mcLoader6;
		var mcLoader8 = this.mcLoader8;
		
		var btnObj1 = this.btnObj3_5;
		
		
		
		var mouseOverTime = 0;
		var storySelection = document.getElementsByTagName("storyselection").value;
		var colorSelection = document.getElementsByTagName("color").value;
		var canvas = document.getElementById("canvas");	
		var duration = document.getElementsByTagName("duration").value;
		var loaderArray = [mcLoader2,mcLoader4,mcLoader6,mcLoader8];
		
		//MAIN
		if(controlSelection()){
			if(!checkStory()){
				localThis.gotoAndStop(0);
			}else{
				stage.enableMouseOver(frequency);
				changeColor(colorSelection);
				prepareLoader();
				startTicker();
		
			}
		
		}else{
			location.reload();
		}
		
		
		btnObj1.addEventListener("mouseover", fMouseover.bind(this));
		
		
		btnObj1.addEventListener("mouseout", fMouseout.bind(this));
		
		
		//Funtions
		
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
			if(objectType == "loader"){
				for(var i = 0;i<loaderArray.length;i++)
					loaderArray[i].visible = status;
			}
		}
		
		
		function fMouseover (event){
			mouseOverTime = createjs.Ticker.getTime()/1000;
			createjs.Ticker.addEventListener("tick", eventTickerForObjects);
			isMouseOut = false;
			currentLoader.visible = true;
			currentLoader.gotoAndPlay(1);
		}
		
		function fMouseout (event){
			createjs.Ticker.removeEventListener("tick", eventTickerForObjects);
			isMouseOut = true;
			currentLoader.visible = false;
			currentLoader.gotoAndPlay(0);
		}
		
		function startTicker(){
			
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
			createjs.Ticker.setFPS(60);
			
		}
		
		function eventTickerForObjects(event){
			if((!isMouseOut)){
				tickerTime = createjs.Ticker.getTime()/1000;
				var diff = tickerTime - mouseOverTime;
				if(diff>duration){
					mouseOverTime = tickerTime;
					localThis.gotoAndStop(nextStage);
					
					
				}
			}
			
		}
		
		
		function checkStory(){
			if(storySelection == 3)
				return true;
			else
				return false;
		}
		
		function controlSelection(){
			 if(storySelection == undefined)
				 return false;
			 else
				 return true;
				
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
	}
	this.frame_17 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1));

	// btnStart
	this.btnStart = new lib.btnStart();
	this.btnStart.parent = this;
	this.btnStart.setTransform(703,442);
	new cjs.ButtonHelper(this.btnStart, 0, 1, 2, false, new lib.btnStart(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnStart).to({_off:true},1).wait(17));

	// mcLoader8
	this.mcLoader8 = new lib.mcLoader8();
	this.mcLoader8.parent = this;
	this.mcLoader8.setTransform(341.5,41.7);
	this.mcLoader8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcLoader8).wait(1).to({_off:false},0).to({_off:true},16).wait(1));

	// mcLoader6
	this.mcLoader6 = new lib.mcLoader6();
	this.mcLoader6.parent = this;
	this.mcLoader6.setTransform(341.5,41.7);
	this.mcLoader6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcLoader6).wait(1).to({_off:false},0).to({_off:true},16).wait(1));

	// mcLoader4
	this.mcLoader4 = new lib.mcLoader4();
	this.mcLoader4.parent = this;
	this.mcLoader4.setTransform(341.5,41.7);
	this.mcLoader4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcLoader4).wait(1).to({_off:false},0).to({_off:true},16).wait(1));

	// mcLoader2
	this.mcLoader2 = new lib.mcLoader2();
	this.mcLoader2.parent = this;
	this.mcLoader2.setTransform(341.5,41.7);
	this.mcLoader2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcLoader2).wait(1).to({_off:false},0).to({_off:true},16).wait(1));

	// mainChar
	this.instance = new lib.yavruk();
	this.instance.parent = this;
	this.instance.setTransform(73,70,1.563,1.563);
	this.instance._off = true;

	this.instance_1 = new lib.annekanguru();
	this.instance_1.parent = this;
	this.instance_1.setTransform(537,282,1.852,1.852);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({x:386,y:238},0).wait(1).to({x:56,y:586},0).wait(1).to({x:1156,y:82},0).wait(1).to({x:529,y:572},0).wait(1).to({x:103,y:94},0).wait(1).to({_off:true},1).wait(4).to({_off:false,x:608,y:307},0).wait(1).to({x:73,y:566},0).wait(1).to({x:1123,y:587},0).wait(1).to({x:101,y:117},0).wait(1).to({x:1147,y:100},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).wait(1).to({x:15,y:467},0).wait(1).to({x:1078,y:547},0).wait(1).to({x:510,y:62},0).to({_off:true},1).wait(6));

	// nextChar
	this.btnObj1_1 = new lib.btnObj1_1();
	this.btnObj1_1.parent = this;
	this.btnObj1_1.setTransform(449.5,302.5,1.376,1.376);
	new cjs.ButtonHelper(this.btnObj1_1, 0, 1, 2, false, new lib.btnObj1_1(), 3);

	this.btnObj1_2 = new lib.btnObj1_2();
	this.btnObj1_2.parent = this;
	this.btnObj1_2.setTransform(152,661.2);
	new cjs.ButtonHelper(this.btnObj1_2, 0, 1, 2, false, new lib.btnObj1_2(), 3);

	this.btnObj1_3 = new lib.btnObj1_3();
	this.btnObj1_3.parent = this;
	this.btnObj1_3.setTransform(1231,171.1);
	new cjs.ButtonHelper(this.btnObj1_3, 0, 1, 2, false, new lib.btnObj1_3(), 3);

	this.btnObj1_4 = new lib.btnObj1_4();
	this.btnObj1_4.parent = this;
	this.btnObj1_4.setTransform(617,641.2);
	new cjs.ButtonHelper(this.btnObj1_4, 0, 1, 2, false, new lib.btnObj1_4(), 3);

	this.btnObj1_5 = new lib.btnObj1_5();
	this.btnObj1_5.parent = this;
	this.btnObj1_5.setTransform(178,158.9);
	new cjs.ButtonHelper(this.btnObj1_5, 0, 1, 2, false, new lib.btnObj1_5(), 3);

	this.btnObj1_6 = new lib.btnObj1_6();
	this.btnObj1_6.parent = this;
	this.btnObj1_6.setTransform(677,416.8);
	new cjs.ButtonHelper(this.btnObj1_6, 0, 1, 2, false, new lib.btnObj1_6(), 3);

	this.btnObj2_1 = new lib.btnObj2_1();
	this.btnObj2_1.parent = this;
	this.btnObj2_1.setTransform(626,381.8);
	new cjs.ButtonHelper(this.btnObj2_1, 0, 1, 2, false, new lib.btnObj2_1(), 3);

	this.btnObj2_2 = new lib.btnObj2_2();
	this.btnObj2_2.parent = this;
	this.btnObj2_2.setTransform(161.9,592.1);
	new cjs.ButtonHelper(this.btnObj2_2, 0, 1, 2, false, new lib.btnObj2_2(), 3);

	this.btnObj2_3 = new lib.btnObj2_3();
	this.btnObj2_3.parent = this;
	this.btnObj2_3.setTransform(1209,199);
	new cjs.ButtonHelper(this.btnObj2_3, 0, 1, 2, false, new lib.btnObj2_3(), 3);

	this.btnObj2_4 = new lib.btnObj2_4();
	this.btnObj2_4.parent = this;
	this.btnObj2_4.setTransform(648,191.7);
	new cjs.ButtonHelper(this.btnObj2_4, 0, 1, 2, false, new lib.btnObj2_4(), 3);

	this.btnObj2_5 = new lib.btnObj2_5();
	this.btnObj2_5.parent = this;
	this.btnObj2_5.setTransform(651,600.6);
	new cjs.ButtonHelper(this.btnObj2_5, 0, 1, 2, false, new lib.btnObj2_5(), 3);

	this.btnObj3_1 = new lib.btnObj3_1();
	this.btnObj3_1.parent = this;
	this.btnObj3_1.setTransform(148,639);
	new cjs.ButtonHelper(this.btnObj3_1, 0, 1, 2, false, new lib.btnObj3_1(), 3);

	this.btnObj3_2 = new lib.btnObj3_2();
	this.btnObj3_2.parent = this;
	this.btnObj3_2.setTransform(1198,664.5);
	new cjs.ButtonHelper(this.btnObj3_2, 0, 1, 2, false, new lib.btnObj3_2(), 3);

	this.btnObj3_3 = new lib.btnObj3_3();
	this.btnObj3_3.parent = this;
	this.btnObj3_3.setTransform(175.7,201.5);
	new cjs.ButtonHelper(this.btnObj3_3, 0, 1, 2, false, new lib.btnObj3_3(), 3);

	this.btnObj3_4 = new lib.btnObj3_4();
	this.btnObj3_4.parent = this;
	this.btnObj3_4.setTransform(1221.7,184.5);
	new cjs.ButtonHelper(this.btnObj3_4, 0, 1, 2, false, new lib.btnObj3_4(), 3);

	this.btnObj3_5 = new lib.btnObj3_5();
	this.btnObj3_5.parent = this;
	this.btnObj3_5.setTransform(630.4,541.2);
	new cjs.ButtonHelper(this.btnObj3_5, 0, 1, 2, false, new lib.btnObj3_5(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btnObj1_1}]},1).to({state:[{t:this.btnObj1_2}]},1).to({state:[{t:this.btnObj1_3}]},1).to({state:[{t:this.btnObj1_4}]},1).to({state:[{t:this.btnObj1_5}]},1).to({state:[{t:this.btnObj1_6}]},1).to({state:[{t:this.btnObj2_1}]},1).to({state:[{t:this.btnObj2_2}]},1).to({state:[{t:this.btnObj2_3}]},1).to({state:[{t:this.btnObj2_4}]},1).to({state:[{t:this.btnObj2_5}]},1).to({state:[{t:this.btnObj3_1}]},1).to({state:[{t:this.btnObj3_2}]},1).to({state:[{t:this.btnObj3_3}]},1).to({state:[{t:this.btnObj3_4}]},1).to({state:[{t:this.btnObj3_5}]},1).to({state:[]},1).wait(1));

	// btnYesil
	this.mcYesil = new lib.mcYesil();
	this.mcYesil.parent = this;
	this.mcYesil.setTransform(1021.2,588.4);

	this.timeline.addTween(cjs.Tween.get(this.mcYesil).to({_off:true},1).wait(17));

	// btnPembe
	this.mcPembe = new lib.mcPembe();
	this.mcPembe.parent = this;
	this.mcPembe.setTransform(1212,687.8);

	this.timeline.addTween(cjs.Tween.get(this.mcPembe).to({_off:true},1).wait(17));

	// btnSari
	this.mcSari = new lib.mcSari();
	this.mcSari.parent = this;
	this.mcSari.setTransform(1212,436.9,0.333,0.333,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.mcSari).to({_off:true},1).wait(17));

	// btnMor
	this.mcMor = new lib.mcMor();
	this.mcMor.parent = this;
	this.mcMor.setTransform(1212,212);

	this.timeline.addTween(cjs.Tween.get(this.mcMor).to({_off:true},1).wait(17));

	// btnMavi
	this.mcMavi = new lib.mcMavi();
	this.mcMavi.parent = this;
	this.mcMavi.setTransform(1021.2,332);

	this.timeline.addTween(cjs.Tween.get(this.mcMavi).to({_off:true},1).wait(17));

	// btnKedi
	this.mcObj1 = new lib.mcKedi();
	this.mcObj1.parent = this;
	this.mcObj1.setTransform(170.9,211.1);

	this.timeline.addTween(cjs.Tween.get(this.mcObj1).to({_off:true},1).wait(17));

	// btnHamster
	this.mcObj3 = new lib.mcHamster();
	this.mcObj3.parent = this;
	this.mcObj3.setTransform(155.9,435.9);

	this.timeline.addTween(cjs.Tween.get(this.mcObj3).to({_off:true},1).wait(17));

	// btnYilan
	this.mcObj2 = new lib.mcYilan();
	this.mcObj2.parent = this;
	this.mcObj2.setTransform(501.9,359.9);

	this.timeline.addTween(cjs.Tween.get(this.mcObj2).to({_off:true},1).wait(17));

	// btnYesil
	this.btnYesil = new lib.btnYesil();
	this.btnYesil.parent = this;
	this.btnYesil.setTransform(1021.2,588.4);
	new cjs.ButtonHelper(this.btnYesil, 0, 1, 2, false, new lib.btnYesil(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnYesil).to({_off:true},1).wait(17));

	// btnPembe
	this.btnPembe = new lib.btnPembe();
	this.btnPembe.parent = this;
	this.btnPembe.setTransform(1212,678);
	new cjs.ButtonHelper(this.btnPembe, 0, 1, 2, false, new lib.btnPembe(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnPembe).to({_off:true},1).wait(17));

	// btnSari
	this.btnSari = new lib.btnSari();
	this.btnSari.parent = this;
	this.btnSari.setTransform(1212,436.9);
	new cjs.ButtonHelper(this.btnSari, 0, 1, 2, false, new lib.btnSari(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnSari).to({_off:true},1).wait(17));

	// btnMor
	this.btnMor = new lib.btnMor();
	this.btnMor.parent = this;
	this.btnMor.setTransform(1212,208.3);
	new cjs.ButtonHelper(this.btnMor, 0, 1, 2, false, new lib.btnMor(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnMor).to({_off:true},1).wait(17));

	// btnMavi
	this.btnMavi = new lib.btnMavi();
	this.btnMavi.parent = this;
	this.btnMavi.setTransform(1021.2,332);
	new cjs.ButtonHelper(this.btnMavi, 0, 1, 2, false, new lib.btnMavi(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnMavi).to({_off:true},1).wait(17));

	// btnHamster
	this.btnObj3_i = new lib.btnHamster_i();
	this.btnObj3_i.parent = this;
	this.btnObj3_i.setTransform(177.3,599.4);
	new cjs.ButtonHelper(this.btnObj3_i, 0, 1, 2, false, new lib.btnHamster_i(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnObj3_i).to({_off:true},1).wait(17));

	// btnYilan
	this.btnObj2_i = new lib.btnYilan_i();
	this.btnObj2_i.parent = this;
	this.btnObj2_i.setTransform(177.7,397);
	new cjs.ButtonHelper(this.btnObj2_i, 0, 1, 2, false, new lib.btnYilan_i(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnObj2_i).to({_off:true},1).wait(17));

	// btnBoga
	this.btnObj1_i = new lib.btnBoga_i();
	this.btnObj1_i.parent = this;
	this.btnObj1_i.setTransform(170.7,212.1);
	new cjs.ButtonHelper(this.btnObj1_i, 0, 1, 2, false, new lib.btnBoga_i(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnObj1_i).to({_off:true},1).wait(17));

	// background
	this.instance_2 = new lib.background();
	this.instance_2.parent = this;

	this.instance_3 = new lib.uygulamabitiş3();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[]},1).to({state:[{t:this.instance_3}]},16).wait(1));

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
		{src:assetAddres + "images/saccade_level1v1_atlas_.png", id:"saccade_level1v1_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;