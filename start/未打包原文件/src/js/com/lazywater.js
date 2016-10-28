/**
 * Created by Moon7 on 16/9/20.
 */



    function LazyWater(el) {
        this.pageN = 1;
        this.perPageCount = 8;
        this.$more = $('.more');

        this.$node = el;
        this.$nodeWidth = this.$node.outerWidth(true);
        this.$fatherWidth = this.$node.parent().outerWidth(true);
        this.$amount = parseInt(this.$fatherWidth /this.$nodeWidth);

        this.$sumHeight = [];
        for (var i=0;i< this.$amount;i++){
            this.$sumHeight.push(0);
        }

        this.getData();
        this.isShow();


    }

    LazyWater.prototype = {

        isShow:function () {
            var me = this;
           me.$more.on('click',function () {
                me.getData();
           })
        },

        getData:function () {
            var me = this;
            $.ajax({
                url: 'http://platform.sina.com.cn/slide/album_tech',
                type: 'get',
                dataType: 'jsonp',
                jsonp: 'jsoncallback',
                data:{
                    app_key:'1271687855',
                    page: me.pageN,
                    num: me.perPageCount
                },

                success: function(ret){
                    if (ret.status.code === '0') {
                        var $nodes = me.jointDom(ret.data);
                        // me.joint($nodes);
                        me.pageN++;
                    }else {
                        alert('数据不在服务区..')
                    }
                }
            })
        },

        jointDom:function (node) {
            var me = this;
            var lazyDom = '';
            for (var i = 0; i< node.length;i++){
                lazyDom +='<li class="water-items">';
                lazyDom +='<a class="link" href="' +node[i].url+ '"> <img src="' + node[i].img_url +'" alt="新闻图 "/><h4 class = "header">' +node[i].short_name +'</h4></a>';
                lazyDom +='<p class="desp">' +node[i].short_intro+ '</p>';
                lazyDom +='</li>';
            }
            var $dom = $(lazyDom);
            me.$node.parent().append($dom);
            return $dom;
        }
        // //瀑布流
        // joint:function (waterN) {
        //     var me = this;
        //     waterN.each(function () {
        //
        //         var $cur = $(this);
        //         $cur.find('img').on('load',function () {
        //             var idx  =0 ,
        //                 minSumHeight = me.$sumHeight[0];
        //             console.log(minSumHeight);
        //             for (var i =0;i< me.$sumHeight.length;i++){
        //                 if (me.$sumHeight[i]< minSumHeight){
        //                     idx = i;
        //                     minSumHeight = me.$sumHeight[i];
        //                 }
        //             }
        //             $cur.css({
        //                 left:me.$nodeWidth*idx,
        //                 top:minSumHeight,
        //                 opacity:1
        //             });
        //             me.$sumHeight[idx] += $cur.outerHeight(true);
        //
        //         })
        //
        //     })
        // }
    }

