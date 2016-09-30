/**
 * stickup粘贴组件
 */

    function stickup(node){
        this.$node = node;
        this.$curH = this.$node.height();
        this.$curW = this.$node.width();
        this.offsetTop = this.$node.offset().top;
        this.offsetLeft= this.$node.offset().left;
        this.$cloneNode = this.$node.clone()
                                .css('opacity',0)
                                .insertBefore(this.$node)
                                .hide();
        this.auto();
        this.creatDiv();

    }
    stickup.prototype = {
        creatDiv:function () {
            var me = this;
            $(window).on('scroll',function () {
                var windTop =$(window).scrollTop();
                if (windTop>me.offsetTop){
                    if (!me.isFixed()){
                        me.setFixed();
                    }
                }else {
                    if(me.isFixed()){
                        me.unFixed();
                    }
                }
            })
        },
        isFixed:function () {
            var me = this;
          return !!me.$node.attr('data-fixed');
        },
        setFixed:function () {
            var me = this;
            me.$node.attr('data-fixed',true)
                .css({
                    'position':'fixed',
                    'top':0,
                    'left':me.offsetLeft,
                    'width':me.$curW,
                    'height':me.$curH,
                    'margin':0,
                    'opacity':0.8
                });
            me.$cloneNode.show();
        },
        unFixed:function () {
            var me = this;
            me.$node.removeAttr('data-fixed').removeAttr('style');
            me.$cloneNode.hide();
        },
        auto:function () {
            var me = this;
            $(window).on('resize',function () {
                me.creatDiv();
            })
        }

    };
