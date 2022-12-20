document.oncontextmenu = new Function("event.returnValue=false;");
document.onselectstart = new Function("event.returnValue=false;");
window.onload = function () {
    var canvas = document.getElementById("xf_dmy");
    var context = canvas.getContext("2d");
    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    var fontSize = 16;
    var colunms = Math.floor(W / fontSize);
    var drops = [];
    for (var i = 0; i < colunms; i++) {
        drops.push(0);
    }
    var str = "01";
    function draw() {
        context.fillStyle = "rgba(0,0,0,0.05)";
        context.fillRect(0, 0, W, H);
        context.font = fontSize + 'px 微软雅黑';
        context.fillStyle = randColor();
        for (var i = 0; i < colunms; i++) {
            var index = Math.floor(Math.random() * str.length);
            var x = i * fontSize;
            var y = drops[i] * fontSize;
            context.fillText(str[index], x, y);
            if (y >= canvas.height && Math.random() > 0.92) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    };
    function randColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
    }
    draw();
    setInterval(draw, 33);
};