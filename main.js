var mouseEvent ="empty";
var last_position_of_x,last_position_of_y;
canvas  = document.getElementById('canvas');
ctx =canvas.getElementById("2d");

color = "black";
width_of_line = 1;
canvas.addEventLIstener("mousedown",My_mousedown);
function My_mousedown(e)
{
    color=document.getElementById("color").Value;
    width_of_line.getElementById(width_of_line).Value;

    mouseEvent ="mousedown";
}
canvas.addEventLIstener.getElementById("mousemove",My_mousemove);
function My_mousemove(e);
{
    current_positon_of_mouse_x = e.ClientX - canvas.offsetLeft;
    current_positon_of_mouse_y = e.ClientY - canvas.offsetTop;

    if(mouseEvent == My_mousedown){
        ctx.beginpath();
        ctx.strokestyle = color;
        ctx.lineWidth = width_of_line;

        console.log("last_position_of_x_and_y_cordinates =");
        console.log("x =" + last_position_of_x + "y =" + last_position_of_y);
        ctx.moveTo("last_position_of_x,last_position_of_y");

        console.log("current_positon_of_mousex,current_positon_of_mousey =");
        console.log("x =" + current_positon_of_mouse_x + "y =" +current_positon_of_mouse_y);
        ctx.lineTo(current_positon_of_mouse_x,current_positon_of_mouse_y);
        ctx.stroke();

        last_position_of_x = current_positon_of_mouse_x;
        last_position_of_y = current_positon_of_mouse_y;
    }
    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }


function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

}
