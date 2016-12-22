/**
 * Created by Moon7 on 16/12/22.
 */
var babyObj;
babyObj = function () {
    this.x;
    this.y;
    this.angle;

    this.babyEye = new Image();
    this.babyBody = new Image();
    this.babyTail = new Image();

};

babyObj.prototype.init = function () {
    this.x = canWidth * 0.5 - 30;
    this.y = canHeight * 0.5 + 30;
    this.angle = 0;

    this.babyEye.src = "./src/babyEye0.png";
    this.babyBody.src = "./src/babyFade0.png";
    this.babyTail.src = "./src/babyTail0.png";

};

babyObj.prototype.draw = function () {

    // lerp  趋向mom 坐标
    this.x = lerpDistance(mom.x, this.x, 0.985)
    this.y = lerpDistance(mom.y, this.y, 0.985)

    // lerp mom
    var deltaY = mom.y -this.y;
    var deltaX = mom.x - this.x;
    var beta = Math.atan2(deltaY,deltaX) + Math.PI;

    this.angle = lerpAngle(beta , this.angle, 0.6);   // 趋向 mom角度

    ctx1.save();

    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.babyBody, -this.babyBody.width * 0.5, -this.babyBody.height * 0.5);
    ctx1.drawImage(this.babyTail, -this.babyTail.width * 0.5 + 27, -this.babyTail.height * 0.5);
    ctx1.drawImage(this.babyEye, -this.babyEye.width * 0.5, -this.babyEye.height * 0.5);

    ctx1.restore();
}