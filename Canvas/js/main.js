/**
 * Created by Moon7 on 16/12/21.
 */

var can1;
var can2;

var canWidth;
var canHeight;

var ctx1;
var ctx2;

var lastTime;
var deltaTime;

var bgPic =new Image();

var ane;
var fruit;

var mom;
var baby;

var mx;   //鼠标移动的变量
var my;

document.body.onload=game;
function game(){

    init();
    lastTime = Date.now();
    deltaTime =0;
    gameloop()

}

function init() {

    // 获得canvas画布和画布范围
    can1 = document.getElementById('canvas1');   //鱼, dust ,UI ,特效
    ctx1 = can1.getContext("2d");
    can2 = document.getElementById('canvas2'); // 背景, 海葵 ,果实
    ctx2 = can2.getContext("2d");

    can1.addEventListener('mousemove', onMouseMove, false);


    bgPic.src ="./src/background.jpg";

    canWidth = can1.width;
    canHeight = can1.height;

    ane = new aneObj();
    ane.init();

    fruit = new fruitObj();
    fruit.init()

    mom = new momObj();
    mom.init();

    baby = new babyObj();
    baby.init();

    mx = canWidth *0.5;
    my = canHeight *0.5;
}

function gameloop() {
    requestAnimationFrame(gameloop);  // 帧与帧加起来循环
    var now =Date.now();
    deltaTime =now - lastTime;
    lastTime = now;
    if(deltaTime > 40)  deltaTime = 40;

    drawBackground();
    ane.draw();
    fruitMonitor();
    fruit.draw();

    ctx1.clearRect(0,0,canWidth, canHeight)
    mom.draw();
    momFruitsCollision();

    baby.draw();
}

function onMouseMove(e) {
    if (e.offsetX || e.layerX){
        mx = e.offsetX == undefined? e.layerX : e.offsetX;
        my = e.offsetY == undefined? e.layerY : e.layerY;



    }
}