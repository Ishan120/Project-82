var mouseEvent ="empty";
var lastPositionOfX, lastPositionOfY;

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext('2d');

color="black";
width_of_line=1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseEvent="mousedown";
    
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseup";    
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_position_of_mouse_X=e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y=e.clientY - canvas.offsetTop;  

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        
console.log("last position of X and Y coordinates= ");
console.log("x = "+ lastPositionOfX + "y = " + lastPositionOfY);
ctx.moveTo(lastPositionOfX, lastPositionOfY);

console.log("current position of X and Y coordinates= ");
console.log("x = "+ current_position_of_mouse_X + "y = " + current_position_of_mouse_Y);
ctx.lineTo(current_position_of_mouse_X, current_position_of_mouse_Y);
ctx.stroke();
    }

    lastPositionOfX = current_position_of_mouse_X;
    lastPositionOfY = current_position_of_mouse_Y;
}

function clearArea(){
    ctx.clearRect(0 , 0, ctx.canvas.width, ctx.canvas.height);
}

function circle(mouse_x, mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=5;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
    ctx.stroke();
    }