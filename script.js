function showMessage() {
    alert('Hello from TypeScript!');
}
function drawHeart(a, n) {
    var canvas = document.getElementById('heartCanvas');
    var ctx = canvas.getContext('2d');
    var width = 400;
    var height = 400;
    var scale = 80; // Adjust scale for visibility
    ctx.clearRect(0, 0, width, height); // Clear canvas
    ctx.save(); // Save current state
    // Translate context to center of canvas
    ctx.translate(width / 2, height / 2);
    ctx.beginPath();
    for (var x = -Math.sqrt(3.3); x <= Math.sqrt(3.3); x += 0.01) {
        var y = Math.pow(Math.abs(x), 2 / 3) + 0.9 * Math.sqrt(Math.max(0, 3.3 - x * x)) * Math.sin(a * n * x);
        ctx.lineTo(x * scale, -y * scale); // Scale and invert y axis
    }
    ctx.strokeStyle = '#8B0000';
    ctx.stroke();
    ctx.restore(); // Restore saved state
}
function clickYes() {
    var boxDivs = document.getElementsByClassName('box');
    for (var i = 0; i < boxDivs.length; i++) {
        var element = boxDivs[i];
        element.style.display = 'none';
    }
    var loveDiv = document.getElementById('love-box');
    loveDiv.style.display = 'none';
    var fireworkDiv = document.getElementById('fireworks');
    fireworkDiv.style.display = 'block';
}
function clickNo() {
    var yesScale = Math.random() * 0.4;
    var noScale = Math.random() * 0.3;
    var verdictDiv = document.getElementById('verdict-buttons');
    var verdictRect = verdictDiv.getBoundingClientRect();
    var yesButton = document.getElementById('yes-button');
    var yesRect = yesButton.getBoundingClientRect();
    yesButton.style.width = Math.min(Math.floor(yesRect.width * (1 + yesScale)), verdictRect.width * 0.8) + 'px';
    yesButton.style.height = Math.min(Math.floor(yesRect.height * (1 + yesScale)), verdictRect.height) + 'px';
    var yesButtonFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = Math.floor(yesButtonFontSize * (1 + noScale)) + 'px';
    var noButton = document.getElementById('no-button');
    var noRect = noButton.getBoundingClientRect();
    noButton.style.width = Math.max(Math.floor(noRect.width * (1 - noScale)), 0) + 'px';
    noButton.style.height = Math.max(Math.floor(noRect.height * (1 - noScale)), 0) + 'px';
    var noButtonFontSize = parseFloat(window.getComputedStyle(noButton).fontSize);
    noButton.style.fontSize = Math.max(Math.floor(noButtonFontSize * (1 - noScale)), 0) + 'px';
    if (yesRect.width >= verdictRect.width * 0.75) {
        noButton.style.display = 'none';
    }
    var aNumber = Math.max(Math.random() * 11, 5);
    var nNumber = Math.max(Math.random() * 10, 3);
    drawHeart(aNumber, nNumber);
}
drawHeart(4, 5);
