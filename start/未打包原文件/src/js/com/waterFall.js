/**
 * Created by Moon7 on 16/9/20.
 */
function waterFall(node) {
    this.$node = node;
    this.$nodeWidth = this.$node.outerWidth(true);
    this.$fatherWidth = this.$node.parent().outerWidth(true);
    this.$amount = parseInt(this.$fatherWidth /this.$nodeWidth);

    this.$sumHeight = [];
    for (var i=0;i< this.$amount;i++){
        this.$sumHeight.push(0);
    }

    this.joint();
}

waterFall.prototype = {
    joint:function () {
        var me = this;
        me.$node.each(function () {

            var $cur = $(this);
            $cur.find('img').on('load',function () {
                var idx  =0 ,
                    minSumHeight = me.$sumHeight[0];
                for (var i =0;i< me.$sumHeight.length;i++){
                    if (me.$sumHeight[i]< minSumHeight){
                        idx = i;
                        minSumHeight = me.$sumHeight[i];
                    }
                }
                $cur.css({
                    left:me.$nodeWidth*idx,
                    top:minSumHeight,
                    opacity:1
                });
                me.$sumHeight[idx] += $cur.outerHeight(true);
            })

        })
    }
};