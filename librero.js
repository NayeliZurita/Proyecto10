
var sketchProc = function(processingInstance){
	with(processingInstance){
		size(420,420);
		frameRate(65);
		background(0, 0, 0);
		var drawlibros=function(){
    	for (var x=0; x<352; x+=143){
        noStroke();
        fill(32, 190, 247);
        for (var y=3; y<300; y+=120){
            rect(x+10,y,113,107);
            }
        }
    };
drawlibros();
//esta funcion dibuja el librero
var drawlibrero=function(){
    for (var x=-2; x<500; x+=408){
        fill(173, 117, 33);
        for(var y=94; y<405; y+=120){
        rect(x+2, y, width, 16);
        }
    }
};
drawlibrero();
//funcion para titulos
var tl= function(titulo,x,y){
    this.titulo=titulo;
    this.x=x;
    this.y=y;
};
var f=createFont("monospace");
tl.prototype.draw= function() {
    fill(255, 250, 255);
    textFont(f);
    textSize(13);
    var txt=this.titulo;
    text(txt,this.x+2,this.y+28);
};
var estre=function(titu,x,y){
	this.titu=titu;
	this.x=x;
	this.y=y;
};
estre.prototype.draw=function(){
    fill(247, 228, 17);
    var txt=this.titu;
    textSize(31);
    text(txt,this.x+3,this.y+29);
};
// asignamos titulo
var tl1=new tl("ESPAÑOL I",10,-2);
var estre1= new estre("* " , 9,66);
var tl2=new tl("ESPAÑOL II",153,-4);
var estre2= new estre("* * " , 150,66);
var tl3=new tl("ESPAÑOL III",296,-4);
var estre3= new estre("* * *" , 290,66);
var tl4=new tl("MATEMATICAS I",10,117);
var estre4= new estre("* *" , 10,187);
var tl5=new tl("MATEMATICAS II",150,115);
var estre5= new estre("* * *" , 150,187);
var tl6=new tl("MATEMATICAS III",292,113);
var estre6= new estre("* * *" , 292,187);
var tl7=new tl("ALGEBRA I",12,234);
var estre7= new estre("* * " , 8,304);
var tl8=new tl("ALGEBRA II",155,238);
var estre8= new estre("* * *" , 147,304);
var tl9=new tl("ALGEBRA III",299,237);
var estre9= new estre("* * *" , 299,304);
// llamamos a la funcion tl
tl1.draw();
estre1.draw();
tl2.draw();
estre2.draw();
tl3.draw();
estre3.draw();
tl4.draw();
estre4.draw();
tl5.draw();
estre5.draw();
tl6.draw();
estre6.draw();
tl7.draw();
estre7.draw();
tl8.draw();
estre8.draw();
tl9.draw();
estre9.draw();
	}
};
var canvas = document.getElementById("mycanvas");
var processing = new Processing(canvas, sketchProc);
