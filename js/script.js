const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//círculo 
let xPosicionCirculo = 250;
let yPosicionCirculo = 100;
let xVelocidadCirculo = 5;
let yVelocidadCirculo = 7;
let radio = 100;

//cuadrado azul
let xPosicionSquare = 250;
let yPosicionSquare = 100;
let xVelocidadSquare = 4;
let yVelocidadSquare = 6;
let squa = 150;

//animación
function createDraw(){ 
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(xPosicionCirculo > canvas.width - radio || xPosicionCirculo < radio){
        xVelocidadCirculo =- xVelocidadCirculo;
    }

    if(yPosicionCirculo > canvas.height - radio || yPosicionCirculo < radio){
        yVelocidadCirculo =- yVelocidadCirculo;
    }
    
    xPosicionCirculo += xVelocidadCirculo;
    yPosicionCirculo += yVelocidadCirculo;

    //círculo
    ctx.beginPath();
    ctx.arc(xPosicionCirculo, yPosicionCirculo, radio, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    //cuadrado

    ctx.fillStyle="blue";
    ctx.fillRect(75, 75, 150, 150);


    if(xPosicionSquare + xVelocidadSquare > canvas.width - squa || xPosicionSquare + xVelocidadSquare < squa ) {
        xVelocidadSquare =- xVelocidadSquare;
    }
    if(yPosicionSquare + yVelocidadSquare > canvas.height - squa || yPosicionSquare + yVelocidadSquare < canvas.height - squa){
        yVelocidadSquare =- yVelocidadSquare;;
    }
    xPosicionSquare += xVelocidadSquare;
    yPosicionSquare += yVelocidadSquare;

    window.requestAnimationFrame(createDraw);
}
/*createDraw();
setInterval(createDraw, 10);*/
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
window.requestAnimationFrame(createDraw);