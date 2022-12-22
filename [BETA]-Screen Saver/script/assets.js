var canvas  = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var randomCoordX;
var randomCoordY;
setInterval(function() {
    randomCoordX = Math.round(Math.random() * 1000);
    randomCoordY = Math.round(Math.random() * 1000);
  }, 1000);

function draw(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(draw);

    c.strokeStyle = `${c.createLinearGradient(1, 1, 2, 2)}`;
    c.beginPath();
    c.moveTo(50, 20);
    c.quadraticCurveTo(230, 30, randomCoordX, randomCoordY);
    c.stroke();
    
    // Start and end points
    c.fillStyle = 'blue';
    c.lineWidth = "10";
    c.strokeStyle = `rgba(255,255,255,0)`;
    c.beginPath();
    c.arc(randomCoordX, 20, 5, 0, 2 * Math.PI);
    c.arc(50, randomCoordY, 5, 0, 2 * Math.PI);
    c.fill();
    c.stroke();
}

draw();