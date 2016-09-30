/**
 * Created by Moon7 on 16/9/21.
 */
function LazyShow(node) {
    this.$node = node;
    this.$liChil = this.$node.find('li');
    this.$windHeight = $(window).height();
    this.$scollHeight = $(window).scrollTop();
    this.$liTop = this.$liChil.offset().top;
    console.log(this.$windHeight);

    this.bind();
}

LazyShow.prototype = {
    bind:function () {
      var me =this;
        me.$liChil.each(function () {
            me.showMore($(this));
        })
    },
    showMore: function () {
        var me = this;

        $(window).on('scroll',function () {
            if (me.$liTop < me.$windHeight + me.$scollHeight) {
               me.$liChil.animate({'opacity':1},1500)
            }
        })

    }
};