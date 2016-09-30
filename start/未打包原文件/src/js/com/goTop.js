/**
 * Created by Moon7 on 16/9/17.
 */


    function GoTop(el){
        this.ct = el;
        this.target = $('<div class="go">客官回头</div>');
        this.createNode();
        this.bindEvent();
    }

    GoTop.prototype.bindEvent = function(){
        var me = this;
        me.target.on('click',function(){
            $(window).scrollTop(0);
        })
    };
    GoTop.prototype.createNode = function(){
        var me = this;
        me.ct.append(me.target);
        me.target.css({
            position: 'fixed',
            width:'60px',
            height:'60px',
            bottom: '10px',
            right: '10px',
            padding: '10px',
            textAlign:'center',
            border: '1px solid #313266',
            borderRadius:'5px',
            background: '#fed136',
            opacity:'0.9',
            display:'none',
            cursor:'pointer'
        });
        me.target.on('mouseenter',function () {
            me.target.css({
                color:'#fff',
                opacity:'0.75'
            }).on('mouseleave',function () {
            me.target.css({
                color:'#222',
                opacity:'0.9'
            })
            })
        });
        $(window).on('scroll',function(){
            var clock;
            var scroll = $(window).scrollTop();
            if (scroll > 300) {
                if (clock) {
                    clearTimeout(clock);
                }
                me.clock = setTimeout(function () {
                    me.target.show();
                }, 100)
            } else {
                if (clock) {
                    clearTimeout(clock);
                }
                me.clock = setTimeout(function () {
                    me.target.hide();
                }, 50)
            }
        })
    };
