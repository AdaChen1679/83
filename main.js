var lpx , lpy;

var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');
var color = "blue";
var width = 3;

var n_width = screen.width;
var n_height = screen.height;

nw = n_width - 300;
nh = n_height - 200;

if (nw<992) 
{
    document.getElementById("myCanvas").width = nw;
    document.getElementById("myCanvas").height = nh;
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) 
{
lpx = e.touches[0].clientX - canvas.offsetLeft;
lpy = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    cpx = e.touches[0].clientX - canvas.offsetLeft;
    cpy = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(lpx, lpy);
    ctx.lineTo(cpx, cpy);
    ctx.stroke();

    lpx = cpx;
    lpy = cpy;
}