const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//círculo 
let xPositionCircle = 250;
let yPositionCircle = 100;
let xSpeedCircle = 5;
let ySpeedCircle = 7;
let radio = 100;

//cuadrado azul
let xPositionSquare = 250;
let yPositionSquare = 100;
let xSpeedSquare = 4;
let ySpeedSquare = 6;
let squa = 150;

//animación
function createDraw(){ 
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(xPositionCircle > canvas.width - radio || xPositionCircle < radio){
        xSpeedCircle =- xSpeedCircle;
    }

    if(yPositionCircle > canvas.height - radio || yPositionCircle < radio){
        ySpeedCircle =- ySpeedCircle;
    }
    
    xPositionCircle += xSpeedCircle;
    yPositionCircle += ySpeedCircle;

    //círculo
    ctx.beginPath();
    ctx.arc(xPositionCircle, yPositionCircle, radio, 0, 2 * Math.PI);
    ctx.fillStyle = 'purple';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    //cuadrado
    
    ctx.fillStyle = "blue";
    ctx.fillRect(75, 75, 150, 150);


    if(xPositionSquare > canvas.width - squa || xPositionSquare < squa ) {
        xSpeedSquare =- xSpeedSquare;
    }
    if(yPositionSquare > canvas.height - squa || yPositionSquare < squa){
        ySpeedSquare =- ySpeedSquare;;
    }
    xPositionSquare += xSpeedSquare;
    yPositionSquare += ySpeedSquare;

    window.requestAnimationFrame(createDraw);
}
/*createDraw();
setInterval(createDraw, 10);*/
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
window.requestAnimationFrame(createDraw);