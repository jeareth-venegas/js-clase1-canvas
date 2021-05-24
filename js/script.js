const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//círculo rojo
let xPosicionCirculo = 100;
let yPosicionCirculo = 100;
let xVelocidadCirculo = getRandomArbitrary(-10, 10);
let xVelocidadCirculo = getRandomArbitrary(-10, 10);
let radio = 50;

//cuadrado azul
let xPosicionSquare = 200;
let yPosicionSquare = 200;
let xVelocidadSquare = getRandomArbitrary(-10, 10);
let xVelocidadSquare = getRandomArbitrary(-10, 10);
let squa = 50;

//animación
function createDraw(){ 
    ctx.clearRect(0,0, canvas.width, canvas.height);

    //cí rculo
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(xPosicionCirculo, yPosicionCirculo, radio, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    if(xPosicionCirculo + yVelocidadCirculo > canvas.width - radio || xPosicionCirculo + yVelocidadCirculo < radio){
        xVelocidadCirculo =- xVelocidadCirculo;
    }
    if(yPosicionCirculo + yVelocidadCirculo > canvas.height - radio || xPosicionCirculo + yVelocidadCirculo < radio){
        yVelocidadCirculo =- yVelocidadCirculo;
    }

    xPosicionCirculo += xVelocidadCirculo;
    yPosicionCirculo += yVelocidadCirculo;

    //cuadrado

    ctx.fillStyle="blue";
    ctx.fillRect(xPosicionSquare, yPosicionSquare, squa,squa);


    if(xPosicionSquare + xVelocidadSquare > canvas.width - squa || xPosicionSquare + xVelocidadSquare < squa ) {
        xVelocidadSquare =- xVelocidadSquare;
    }
    if(yPosicionSquare + yVelocidadSquare > canvas.height - squa || yPosicionSquare + yVelocidadSquare < canvas.height - squa){
        vVelocidadSquare =- vVelocidadSquare;;
    }
    xPosicionSquare += xVelocidadSquare;
    yPosicionSquare += yVelocidadSquare;

    window.requestAnimationFrame(createDraw);
}
//createDraw();
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
window.requestAnimationFrame(createDraw);