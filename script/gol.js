const goalkeeper = document.querySelector('.goalkeeper');
const ball = document.querySelector('.ball');
const shootButton = document.querySelector('.shoot-button');
const resultDiv = document.querySelector('.result');

let score = 0;

shootButton.addEventListener('click', () => {
    const randomGoalkeeperPosition = Math.random() * 100;
    const randomBallPosition = Math.random() * 100;

    goalkeeper.style.left = `${randomGoalkeeperPosition}%`;
    ball.style.left = `${randomBallPosition}%`;

    if (Math.abs(randomGoalkeeperPosition - randomBallPosition) < 20) {
        resultDiv.textContent = 'Bramka!';
        score++;
    } else {
        resultDiv.textContent = 'Niecelny!';
    }

    resultDiv.textContent += ` Wynik: ${score}`;
});