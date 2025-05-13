let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.fillRect(0,0,50,50);
ctx.moveTo(0,0);
ctx.lineTo(150,150);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red'
ctx.fillRect(250,0,50,50);
ctx.moveTo(300,0);
ctx.lineTo(150,150);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.font = '20px Arial'
ctx.fillStyle = 'black'
ctx.textAlign = "Center"
ctx.fillText("Canvas",115,50)
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.moveTo(0,250);
ctx.lineTo(0,300);
ctx.lineTo(50,300);
ctx.lineTo(50,275);
ctx.lineTo(25,275);
ctx.lineTo(25,250);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'black'
ctx.moveTo(300,300);
ctx.lineTo(300,250);
ctx.lineTo(275,250);
ctx.lineTo(275,275);
ctx.lineTo(250,275);
ctx.lineTo(250,300);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'aqua';
ctx.fillRect(0,125,25,50)
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'aqua';
ctx.fillRect(275,130,300,40)
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(0,150);
ctx.lineTo(300,150);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(150, 300, 50, 0, 2 *Math.PI),
ctx.fillStyle = 'aqua'
ctx.fill();
ctx.lineWidth = 2
ctx.strokeStyle = 'green'
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'grey';
ctx.moveTo(150,150);
ctx.lineTo(150,300);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'red';
ctx.fillRect(110,150,40,40);
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green'
ctx.arc(150, 150, 70, 1*Math.PI , 2* Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green'
ctx.arc(150, 150, 90, 1.75*Math.PI , 0* Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green'
ctx.arc(150, 150, 90, 1*Math.PI , 1.25* Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(150, 110, 15, 0, 2 *Math.PI),
ctx.fillStyle = 'aqua'
ctx.fill();
ctx.lineWidth = 2
ctx.strokeStyle = 'blue'
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(70, 220, 15, 0, 2 *Math.PI),
ctx.fillStyle = 'yellow'
ctx.fill();
ctx.lineWidth = 2
ctx.strokeStyle = 'green'
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(230, 220, 15, 0, 2 *Math.PI),
ctx.fillStyle = 'yellow'
ctx.fill();
ctx.lineWidth = 2
ctx.strokeStyle = 'green'
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green'
ctx.arc(150, 300, 70, 1.5*Math.PI , 0* Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = 'green'
ctx.arc(150, 300, 90, 1*Math.PI , 1.5* Math.PI);
ctx.stroke();
ctx.closePath();




let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

ctx2.beginPath();
ctx2.arc(220, 90, 40, 0, 2 *Math.PI),
ctx2.fillStyle = '#FCFF2D'
ctx2.fill();
ctx2.lineWidth = 2
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = '#808080'
ctx2.fillRect(0, 220, 300,300)
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = '#86471A'
ctx2.fillRect(100, 220, 80, -80)
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = '#F5694D'
ctx2.moveTo(100,140)
ctx2.lineTo(140,100)
ctx2.lineTo(180,140 )
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = '#624423'
ctx2.fillRect(130, 180, 20, 40)
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = '#47BDFD'
ctx2.fillRect(110,160,20,20);
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = '#47BDFD'
ctx2.fillRect(150,160,20,20);
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = '#86471A'
ctx2.fillRect(40, 220, 20, -40)
ctx2.closePath()

ctx2.beginPath();
ctx2.arc(50, 165, 25, 0, 2 *Math.PI),
ctx2.fillStyle = '#318A26'
ctx2.fill();
ctx2.lineWidth = 2
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = '#86471A'
ctx2.fillRect(250, 260, 20, -40)
ctx2.closePath()

ctx2.beginPath();
ctx2.arc(260, 200, 25, 0, 2 *Math.PI),
ctx2.fillStyle = '#318A26'
ctx2.fill();
ctx2.lineWidth = 2
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = '#458EFC'
ctx2.fillRect(0, 220, 40, 80)
ctx2.closePath();

ctx2.beginPath();
ctx2.fillStyle = '#458EFC'
ctx2.fillRect(0, 260, 100, 80)
ctx2.closePath();

ctx2.beginPath();
ctx2.arc(0, 220, 40, 0, 2 *Math.PI),
ctx2.fillStyle = '#458EFC'
ctx2.fill();
ctx2.lineWidth = 2
ctx2.closePath();

ctx2.beginPath();
ctx2.arc(100, 300, 40, 0, 2 *Math.PI),
ctx2.fillStyle = '#458EFC'
ctx2.fill();
ctx2.lineWidth = 2
ctx2.closePath();
