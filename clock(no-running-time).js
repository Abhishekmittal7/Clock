function setTime() {


var myCanvas = document.getElementById("clock");
var context = myCanvas.getContext("2d");

// Big circle
context.beginPath();

	context.fillStyle= "black";
	context.arc(250,250,250,0,2*Math.PI);
	context.fill();

//Small circle
	context.beginPath();

	context.fillStyle="white";
	context.arc(250,250,5,0,2*Math.PI);
	context.fill();


// 1-12
context.font= "20px Arial";
context.fillStyle="white";
context.fillText("12",240,30);
context.fillText("1",340,50);
context.fillText("2",420,120);
context.fillText("3",460,240);
context.fillText("4",430,360);
context.fillText("5",350,450);
context.fillText("6",240,480);
context.fillText("7",140,450);
context.fillText("8",55,360);
context.fillText("9",25,240);
context.fillText("10",65,125);
context.fillText("11",140,50);


// date time function




// second minute hour line
context.strokeStyle="white";
context.moveTo(250,250);
context.lineTo(350,460);
context.lineWidth= 5;
context.stroke();

context.moveTo(250,250);
context.lineTo(380,120);
context.lineWidth= 3;
context.stroke();

context.moveTo(250,250);
context.lineTo(150,200);
context.lineWidth= 2;
context.stroke();


}

setInterval(setTime,1000);


