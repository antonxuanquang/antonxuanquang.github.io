function showMessage() {
    alert('Hello from TypeScript!');
}

function drawHeart(a: number, n: number): void {
    const canvas: HTMLCanvasElement = document.getElementById('heartCanvas') as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

    const width: number = 400;
    const height: number = 400;
    const scale: number = 80; // Adjust scale for visibility

    ctx.clearRect(0, 0, width, height); // Clear canvas
    ctx.save(); // Save current state

    // Translate context to center of canvas
    ctx.translate(width / 2, height / 2);

    ctx.beginPath();
    for (let x = -Math.sqrt(3.3); x <= Math.sqrt(3.3); x += 0.01) {
        const y: number = Math.pow(Math.abs(x), 2/3) + 0.9 * Math.sqrt(Math.max(0, 3.3 - x * x)) * Math.sin(a * n * x);
        ctx.lineTo(x * scale, -y * scale); // Scale and invert y axis
    }

    ctx.strokeStyle = '#8B0000';
    ctx.stroke();
    ctx.restore(); // Restore saved state
}

function clickYes() {
    const boxDivs = document.getElementsByClassName('box');
    for (let i = 0; i < boxDivs.length; i++) {
        const element = boxDivs[i] as HTMLDivElement;
        element.style.display = 'none';
    }

    const loveDiv = document.getElementById('love-box') as HTMLDivElement;
    loveDiv.style.display = 'none';

    const fireworkDiv = document.getElementById('fireworks') as HTMLDivElement;
    fireworkDiv.style.display = 'block';
}

function clickNo() {
    const yesScale = Math.random() * 0.4;
    const noScale = Math.random() * 0.3;

    const verdictDiv = document.getElementById('verdict-buttons') as HTMLDivElement;
    const verdictRect = verdictDiv.getBoundingClientRect();

    const yesButton = document.getElementById('yes-button') as HTMLButtonElement;
    const yesRect = yesButton.getBoundingClientRect();
    yesButton.style.width = Math.min(Math.floor(yesRect.width * (1 + yesScale)), verdictRect.width * 0.8) + 'px';
    yesButton.style.height = Math.min(Math.floor(yesRect.height * (1 + yesScale)), verdictRect.height) + 'px';

    const yesButtonFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = Math.floor(yesButtonFontSize * (1 + noScale)) + 'px';

    const noButton = document.getElementById('no-button') as HTMLButtonElement;
    const noRect = noButton.getBoundingClientRect();
    noButton.style.width = Math.max(Math.floor(noRect.width * (1 - noScale)), 0) + 'px';
    noButton.style.height = Math.max(Math.floor(noRect.height * (1 - noScale)), 0) + 'px';

    const noButtonFontSize = parseFloat(window.getComputedStyle(noButton).fontSize);
    noButton.style.fontSize = Math.max(Math.floor(noButtonFontSize * (1 - noScale)), 0) + 'px';

    if (yesRect.width >= verdictRect.width * 0.75) {
        noButton.style.display = 'none';
    }

    const aNumber = Math.max(Math.random() * 11, 5);
    const nNumber = Math.max(Math.random() * 10, 3);
    drawHeart(aNumber, nNumber);
}

drawHeart(4, 5);
