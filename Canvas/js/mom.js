/**
 * Created by Moon7 on 16/12/22.
 */
var momObj = function () {
    this.x;
    this.y;
    this.angle;
    this.bigEye = new Image();
    this.bigBody = new Image();
    this.bigTail = new Image();

};

momObj.prototype.init = function(){
    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;
    this.angle = 0;
    this.bigEye.src = "./src/bigEye0.png";
    this.bigBody.src = "./src/bigSwim0.png";
    this.bigTail.src = "./src/bigTail0.png"
}

momObj.prototype.draw = function () {

    // lerp 趋向于鼠标的坐标 x,y
    this.x = lerpDistance(mx, this.x- 1, 0.98);
    this.y = lerpDistance(my, this.y- 1, 0.98);
    // console.log(this.y)

    // delta angle 每一帧都需要计算角度
    var deltaY = my -this.y;
    var deltaX = mx - this.x;
    var beta = Math.atan2(deltaY,deltaX) + Math.PI; //-PI ~ PI 之间

    // 趋向于鼠标的角度
    this.angle = lerpAngle(beta , this.angle, 0.6);


    ctx1.save();
    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.bigBody,-this.bigBody.width * 0.5, -this.bigBody.height * 0.5);
    ctx1.drawImage(this.bigTail,-this.bigTail.width * 0.5 + 35, -this.bigTail.height * 0.5);
    ctx1.drawImage(this.bigEye,-this.bigEye.width * 0.5-2, -this.bigEye.height * 0.5);

    ctx1.restore();

}