let timer;
let canvas = document.getElementById('canv');
let context = canvas.getContext('2d');
let color;
function aa(){
let rad = document.getElementsByName('r');
let sel;
for (let i = 0; i < rad.length; i++)//перебор функций
{
if (rad[i].checked)
sel = rad[i].value;
}
let colorNum = document.getElementById("select1").options.selectedIndex;
let color1 = document.getElementById("select1").options[colorNum].value;
switch(color1){
	case '1': color = "black"; break;
	case '2': color = "red"; break;
	case '3': color = "blue"; break;
	case '4': color = "green"; break;
}
switch(sel){
	case '1': return (Math.pow(x,2)*(-1)); break;
	case '2': return (Math.pow(x,3)*(-1)); break;
	case '3': return (Math.sin(x)*(-1)); break;
	case '4': return (Math.cos(x)*(-1)); break;
}
}
$("#curve").click(function(e){
timer=setInterval(draw, 5);
});
function draw(){
let y = aa();
context.fillStyle = color;
context.fillRect(4*x+11, y*5+129, 1, 1);//рисование прямоугольника(координата х,у и высота и ширина)
if (x >= 150) {
x=0;
} else {
x+=0.05; 
}
}
$("#curveclear").click(function(e){
context.clearRect(0, 0, 150, 150);
clearInterval(timer);
x=0;
});