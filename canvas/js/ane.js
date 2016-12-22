/**
 * Created by Moon7 on 16/12/21.
 */
//背景 静态海葵

var aneObj = function () {
    this.x=[];
    this.len =[]; //高度
}
aneObj.prototype.num = 50;  //海葵的个数
aneObj.prototype.init = function () {
    for(var i=0;i<this.num;i++){
        this.x[i] = i*15 +Math.random() *20; //海葵随机摆放的间距
        this.len[i] = 100 + Math.random()*50; //海葵高度随机
    }
}

aneObj.prototype.draw = function () {
//    画海葵
    ctx2.save();
    ctx2.globalAlpha= 0.6;
    ctx2.lineWidth= 16 ;
    ctx2.lineCap = "round";
    ctx2.strokeStyle = "#3b154e";

    for (var i =0; i<this.num;i++){
        //用到canvas API: beginPath开始路径, moveTo起始点, lineTo另一个点, stroke绘制, strokeStyle给样式, lineWidth设宽度 lineCap结尾样式, globalAlpha给个透明度
        ctx2.beginPath();
        ctx2.moveTo(this.x[i], canHeight);
        ctx2.lineTo(this.x[i],canHeight-this.len[i]);
        ctx2.stroke();                                   //写在最后.表示按上述条件绘制完成

    }
    ctx2.restore();         // save() 和 restore 表示告诉画布.这两个api中间定义的样式只在这一段生效.

}