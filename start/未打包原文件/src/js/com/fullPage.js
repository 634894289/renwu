


function FullScreen(node) {

        this.$node = $(node);
        this.$ct = this.$node.find('.ct');
        this.$items = this.$ct.children();
        this.$next = this.$node.find('.next');
        this.$pre = this.$node.find('.pre');
        this.imgWidth = $(window).width();
        this.imgNum = this.$ct.children().length;

        this.$ct.prepend(this.$items.last().clone());
        this.$ct.append(this.$items.first().clone());
        this.$ct.find('.item').css('width', this.imgWidth);
        this.$ct.find('.cover').css('width', this.imgWidth);
        this.imgAll = this.$ct.children().length;
        this.$ct.css({left: 0 - this.imgWidth, width: this.imgAll * this.imgWidth});

        this.auto();
        this.call();


    }
        FullScreen.prototype = {
            curIdx :0,
            isAnimate :false,

            call:function () {
                var me= this;
                me.$next.on('click',function(){
                    me.playNext();
                    me.stopMove();
                })
                me.$pre.on('click',function(){
                    me.playPre();
                    me.stopMove();

                })
                me.$next.on('mouseleave',function () {
                    me.Move();
                })
                me.$pre.on('mouseleave',function(){
                    me.Move();
                })
                me.Move();
                me.setBg(1);
            },
            setBg: function (idx){
                var me = this;
                var idx = idx||0,
                        $element = me.$ct.children().eq(idx),
                        $cover   = $element.find('.cover'),
                        imgUrl   = $cover.attr('data-bg-img');
                $cover.css('background-image','url('+ imgUrl+')');
            },

            playNext:function (idx) {
                var me = this,
                    idx= idx ||1;
                if(!me.isAnimate){
                    me.isAnimate = true;
                    me.setBg(me.curIdx+2);
                    me.$ct.animate({left:'-='+ (me.imgWidth*idx)},function(){
                        me.curIdx = (me.curIdx+idx)%me.imgNum;
                        if (me.curIdx === 0){
                            me.$ct.css({left:0-me.imgWidth});
                        }
                        me.isAnimate = false;
                    });
                }
            },

            playPre:function(idx){
                var me = this,
                    idx = idx||1;
                if (!me.isAnimate){
                    me.isAnimate =true;
                    me.setBg(me.curIdx);
                    me.$ct.animate({left:'+=' +(me.imgWidth*idx)},function(){
                        me.curIdx = (me.imgNum+me.curIdx-idx)%me.imgNum;
                        if (me.curIdx === (me.imgNum-1)){
                            me.$ct.css({left:0-me.imgWidth*me.imgNum});
                        }
                        me.isAnimate = false;
                    });
                }
            },
            Move: function(){
                var me = this;
                me.clock=setInterval(function () {
                    me.playNext();
                },5500)
            },
            stopMove:function(){
                var me = this;
                clearInterval(me.clock);
            },
            auto:function () {
                var me =this;
                var delay;

                $(window).on('resize',function () {
                    if(delay){
                        clearTimeout(delay);
                    }
                    delay = setTimeout(function(){
                        me.imgWidth = $(window).width();
                        me.$ct.find('.item').css('width', me.imgWidth);
                        me.$ct.find('.cover').css('width', me.imgWidth);
                        me.imgAll = me.$ct.children().length;
                        me.$ct.css({left: 0 - me.imgWidth, width: me.imgAll * me.imgWidth});
                    },100)


                });
            }

        }



    <!--new FullScreen('.wheel');-->

