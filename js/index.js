const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

/*function createCircle(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let xPositionCircle = 250;
    let yPositionCircle = 100;
    let radio = 100;

    ctx.beginPath();
    ctx.arc(xPositionCircle, yPositionCircle, radio, 0, 2 * Math.PI);
    ctx.fillStyle = 'purple';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}*/

class circleMeasures {
    constructor(xPositionCircle, yPositionCircle, xSpeedCircle, ySpeedCircle, radio){
    this.xPositionCircle = xPositionCircle;
    this.yPositionCircle = yPositionCircle;
    this.xSpeedCircle = xSpeedCircle;
    this.ySpeedCircle = ySpeedCircle;
    this.radio = radio;
    }

    movement(){}

    features(){
        return ctx.beginPath(),
        ctx.arc(xPositionCircle, yPositionCircle, radio, 0, 2 * Math.PI),
        ctx.fillStyle = 'purple',
        ctx.fill(),
        ctx.stroke(),
        ctx.closePath();
        }
    }

let circleInstance = new circleMeasures('250','100','5','7','100');

/*if(xPositionCircle > canvas.width - radio || xPositionCircle < radio){
    xSpeedCircle =- xSpeedCircle;
}

if(yPositionCircle > canvas.height - radio || yPositionCircle < radio){
    ySpeedCircle =- ySpeedCircle;
}

xPositionCircle += xSpeedCircle;
yPositionCircle += ySpeedCircle;*/