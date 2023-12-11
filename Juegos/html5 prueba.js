(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"html5 prueba_atlas_1", frames: [[0,0,5692,5192],[5694,0,432,434],[5694,436,432,434],[5694,872,432,434],[5694,1308,432,434],[5694,1744,432,434],[5694,2180,432,434],[5694,2616,432,434],[5694,3052,432,434],[5694,3488,432,434],[5694,3924,432,434],[5694,4360,432,434],[5694,4796,432,434],[0,5194,432,434]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Web_planeta_montenegro = function() {
	this.initialize(ss["html5 prueba_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Web_planeta_montenegro_Boton_Barco_Pirata = function() {
	this.initialize(ss["html5 prueba_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Web_planeta_montenegro_Boton_Circo = function() {
	this.initialize(ss["html5 prueba_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Web_planeta_montenegro_Boton_El_Molino_de_Franz_Bigotes = function() {
	this.initialize(ss["html5 prueba_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Web_planeta_montenegro_Boton_ElCastillo = function() {
	this.initialize(ss["html5 prueba_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Web_planeta_montenegro_Boton_Estacion_Ferrer = function() {
	this.initialize(ss["html5 prueba_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Web_planeta_montenegro_Boton_La_Cabaña_de_la_Bruja = function() {
	this.initialize(ss["html5 prueba_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Web_planeta_montenegro_Boton_La_Fabrica_de_Pasteles = function() {
	this.initialize(ss["html5 prueba_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Web_planeta_montenegro_Boton_La_Torre_del_Reloj = function() {
	this.initialize(ss["html5 prueba_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Web_planeta_montenegro_Boton_Las_Flores = function() {
	this.initialize(ss["html5 prueba_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Web_planeta_montenegro_Boton_Mision_Espacial = function() {
	this.initialize(ss["html5 prueba_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Web_planeta_montenegro_Boton_Museo_de_Arte = function() {
	this.initialize(ss["html5 prueba_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Web_planeta_montenegro_Boton_Submarino = function() {
	this.initialize(ss["html5 prueba_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Web_planeta_montenegro_Boton_Tienda_de_Souvenirs = function() {
	this.initialize(ss["html5 prueba_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.tren = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Web_planeta_montenegro_Boton_Estacion_Ferrer();
	this.instance.setTransform(0,0,0.1389,0.1382);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,60,60);
p.frameBounds = [rect];


(lib.submarino = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Web_planeta_montenegro_Boton_Submarino();
	this.instance.setTransform(0,0,0.1389,0.1382);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,60,60);
p.frameBounds = [rect];


(lib.souvenirs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Web_planeta_montenegro_Boton_Tienda_de_Souvenirs();
	this.instance.setTransform(0,0,0.1389,0.1382);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,60,60);
p.frameBounds = [rect];


(lib.reloj = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Web_planeta_montenegro_Boton_La_Torre_del_Reloj();
	this.instance.setTransform(0,0,0.1389,0.1382);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,60,60);
p.frameBounds = [rect];


(lib.pirata = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Web_planeta_montenegro_Boton_Barco_Pirata();
	this.instance.setTransform(0,0,0.1389,0.1382);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,60,60);
p.frameBounds = [rect];


(lib.pastel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Web_planeta_montenegro_Boton_La_Fabrica_de_Pasteles();
	this.instance.setTransform(0,0,0.1389,0.1405);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,60,61);
p.frameBounds = [rect];


(lib.nave = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Web_planeta_montenegro_Boton_Mision_Espacial();
	this.instance.setTransform(0,0,0.1389,0.1382);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,60,60);
p.frameBounds = [rect];


(lib.museo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Web_planeta_montenegro_Boton_Museo_de_Arte();
	this.instance.setTransform(0,0,0.1389,0.1382);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,60,60);
p.frameBounds = [rect];


(lib.franz = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Web_planeta_montenegro_Boton_El_Molino_de_Franz_Bigotes();
	this.instance.setTransform(0,0,0.1389,0.1382);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,60,60);
p.frameBounds = [rect];


(lib.flores = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Web_planeta_montenegro_Boton_Las_Flores();
	this.instance.setTransform(0,0,0.1389,0.1382);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,60,60);
p.frameBounds = [rect];


(lib.circo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Web_planeta_montenegro_Boton_Circo();
	this.instance.setTransform(0,0,0.1389,0.1382);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,60,60);
p.frameBounds = [rect];


(lib.castillo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Web_planeta_montenegro_Boton_ElCastillo();
	this.instance.setTransform(0,0,0.1389,0.1382);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,60,60);
p.frameBounds = [rect];


(lib.Bruja = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Web_planeta_montenegro_Boton_La_Cabaña_de_la_Bruja();
	this.instance.setTransform(0,0,0.1389,0.1382);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,60,60);
p.frameBounds = [rect];


// stage content:
(lib.html5prueba = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://montenegroeditores.com.mx/planetamontenegro/act09", "_blank");
		}
		
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.button_2.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("http://montenegroeditores.com.mx/planetamontenegro/act13", "_blank");
		}
		
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.button_3.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("http://montenegroeditores.com.mx/planetamontenegro/act12", "_blank");
		}
		
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.button_4.addEventListener("click", fl_ClickToGoToWebPage_4);
		
		function fl_ClickToGoToWebPage_4() {
			window.open("http://montenegroeditores.com.mx/planetamontenegro/act01", "_blank");
		}
		
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.button_5.addEventListener("click", fl_ClickToGoToWebPage_5);
		
		function fl_ClickToGoToWebPage_5() {
			window.open("http://montenegroeditores.com.mx/planetamontenegro/act05", "_blank");
		}
		
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.button_6.addEventListener("click", fl_ClickToGoToWebPage_6);
		
		function fl_ClickToGoToWebPage_6() {
			window.open("http://montenegroeditores.com.mx/planetamontenegro/act07", "_blank");
		}
		
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.button_7.addEventListener("click", fl_ClickToGoToWebPage_7);
		
		function fl_ClickToGoToWebPage_7() {
			window.open("http://montenegroeditores.com.mx/planetamontenegro/act10", "_blank");
		}
		
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.button_8.addEventListener("click", fl_ClickToGoToWebPage_8);
		
		function fl_ClickToGoToWebPage_8() {
			window.open("http://montenegroeditores.com.mx/planetamontenegro/act06", "_blank");
		}
		
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.button_9.addEventListener("click", fl_ClickToGoToWebPage_9);
		
		function fl_ClickToGoToWebPage_9() {
			window.open("http://montenegroeditores.com.mx/planetamontenegro/act04", "_blank");
		}
		
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.button_10.addEventListener("click", fl_ClickToGoToWebPage_10);
		
		function fl_ClickToGoToWebPage_10() {
			window.open("http://montenegroeditores.com.mx/planetamontenegro/act03", "_blank");
		}
		
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.button_11.addEventListener("click", fl_ClickToGoToWebPage_11);
		
		function fl_ClickToGoToWebPage_11() {
			window.open("http://montenegroeditores.com.mx/planetamontenegro/act11", "_blank");
		}
		
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.button_12.addEventListener("click", fl_ClickToGoToWebPage_12);
		
		function fl_ClickToGoToWebPage_12() {
			window.open("http://montenegroeditores.com.mx/planetamontenegro/act08", "_blank");
		}
		
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.button_13.addEventListener("click", fl_ClickToGoToWebPage_13);
		
		function fl_ClickToGoToWebPage_13() {
			window.open("http://montenegroeditores.com.mx/planetamontenegro/act02", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35));

	// Estacion
	this.button_13 = new lib.tren();
	this.button_13.name = "button_13";
	this.button_13.setTransform(391,235.9,1,1,0,0,0,30,29.9);
	new cjs.ButtonHelper(this.button_13, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_13).wait(25).to({regX:30.1,regY:27.6,scaleX:1.0833,scaleY:1.0842,x:393.55},0).wait(10));

	// Reloj
	this.button_12 = new lib.reloj();
	this.button_12.name = "button_12";
	this.button_12.setTransform(498,395,1,1,0,0,0,30,30);
	new cjs.ButtonHelper(this.button_12, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_12).wait(25).to({regY:27.7,scaleX:1.0833,scaleY:1.0833,x:500.5},0).wait(10));

	// franz
	this.button_11 = new lib.franz();
	this.button_11.name = "button_11";
	this.button_11.setTransform(374,440,1,1,0,0,0,30,30);
	new cjs.ButtonHelper(this.button_11, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_11).wait(25).to({regX:30.1,regY:27.7,scaleX:1.0833,scaleY:1.0833,x:376.55},0).wait(10));

	// pastel
	this.button_10 = new lib.pastel();
	this.button_10.name = "button_10";
	this.button_10.setTransform(262,406.5,1,1,0,0,0,30,30.5);
	new cjs.ButtonHelper(this.button_10, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_10).wait(25).to({regX:30.1,regY:28.7,scaleX:1.0833,scaleY:1.0656,x:264.55,y:406.55},0).wait(10));

	// submarino
	this.button_9 = new lib.submarino();
	this.button_9.name = "button_9";
	this.button_9.setTransform(252,307,1,1,0,0,0,30,30);
	new cjs.ButtonHelper(this.button_9, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_9).wait(25).to({regY:27.8,scaleX:1.0833,scaleY:1.0833,x:254.5,y:307.05},0).wait(10));

	// Souvenirs
	this.button_8 = new lib.souvenirs();
	this.button_8.name = "button_8";
	this.button_8.setTransform(143,500,1,1,0,0,0,30,30);
	new cjs.ButtonHelper(this.button_8, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_8).wait(25).to({regX:30.1,regY:27.7,scaleX:1.0833,scaleY:1.0833,x:145.55},0).wait(10));

	// flores
	this.button_7 = new lib.flores();
	this.button_7.name = "button_7";
	this.button_7.setTransform(340,513,1,1,0,0,0,30,30);
	new cjs.ButtonHelper(this.button_7, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_7).wait(25).to({regX:30.1,regY:27.8,scaleX:1.0833,scaleY:1.0833,x:342.55,y:513.05},0).wait(10));

	// pirata
	this.button_6 = new lib.pirata();
	this.button_6.name = "button_6";
	this.button_6.setTransform(390,536,1,1,0,0,0,30,30);
	new cjs.ButtonHelper(this.button_6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_6).wait(25).to({regY:27.8,scaleX:1.0833,scaleY:1.0833,x:392.5,y:536.1},0).wait(10));

	// museo
	this.button_5 = new lib.museo();
	this.button_5.name = "button_5";
	this.button_5.setTransform(529,455,1,1,0,0,0,30,30);
	new cjs.ButtonHelper(this.button_5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_5).wait(25).to({regX:30.1,regY:27.7,scaleX:1.0833,scaleY:1.0833,x:531.55},0).wait(10));

	// nave
	this.button_4 = new lib.nave();
	this.button_4.name = "button_4";
	this.button_4.setTransform(567,245,1,1,0,0,0,30,30);
	new cjs.ButtonHelper(this.button_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_4).wait(25).to({regY:27.7,scaleX:1.0833,scaleY:1.0833,x:569.5},0).wait(10));

	// castillo
	this.button_3 = new lib.castillo();
	this.button_3.name = "button_3";
	this.button_3.setTransform(465,185,1,1,0,0,0,30,30);
	new cjs.ButtonHelper(this.button_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_3).wait(25).to({regY:27.7,scaleX:1.0833,scaleY:1.0833,x:467.5},0).wait(10));

	// circo
	this.button_2 = new lib.circo();
	this.button_2.name = "button_2";
	this.button_2.setTransform(397,156,1,1,0,0,0,30,30);
	new cjs.ButtonHelper(this.button_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_2).wait(25).to({regX:29.1,regY:27.8,scaleX:1.0833,scaleY:1.0833,x:398.55,y:156.05},0).wait(10));

	// bruja
	this.button_1 = new lib.Bruja();
	this.button_1.name = "button_1";
	this.button_1.setTransform(262,161,1,1,0,0,0,30,30);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(25).to({regX:30.1,regY:27.7,scaleX:1.0833,scaleY:1.0833,x:264.55},0).wait(10));

	// Capa_1
	this.instance = new lib.Web_planeta_montenegro();
	this.instance.setTransform(0,0,0.1357,0.1357);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(386,352,772.5,704.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];
// library properties:
lib.properties = {
	id: '221881877C37C04DB8255BD3C0317989',
	width: 772,
	height: 704,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/html5 prueba_atlas_1.png?1702061835588", id:"html5 prueba_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['221881877C37C04DB8255BD3C0317989'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
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
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;