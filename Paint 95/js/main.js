color = "black";
size = "10";
radius = "";

document.getElementById('canvas').addEventListener("mousedown", function (e) {
    pressedMouse = true;
    document.getElementById('canvas').onmousemove = function (e) {
        if (pressedMouse == true) {
            var dot = document.createElement('div');
            dot.style.zIndex = 1;
            dot.style.position = 'absolute';
            dot.style.top = e.clientY + 'px';
            dot.style.left = e.clientX + 'px';
            dot.style.height = size + "px";
            dot.style.width = size + "px";
            dot.style.border = color + " 1px"
            dot.style.borderRadius = radius + "px";
            dot.style.backgroundColor = color



            this.appendChild(dot);
        }
        document.getElementById('clear').addEventListener('click', function remove() {
            document.getElementById("canvas").removeChild(dot)
        });

    }

});
document.getElementById('canvas').addEventListener("mouseup", function (e) {
    pressedMouse = false;
});

