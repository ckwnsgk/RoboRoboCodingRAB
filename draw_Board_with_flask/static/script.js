const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let drawing = false;

canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mouseout", () => drawing = false);

canvas.addEventListener("mousemove", draw);

function draw(e) {
    if (!drawing) return;

    ctx.lineWidth = document.getElementById("brushSize").value;
    ctx.strokeStyle = document.getElementById("colorPicker").value;
    ctx.lineCap = "round";

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveCanvas() {
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'my_drawing.png';
    link.click();
}
