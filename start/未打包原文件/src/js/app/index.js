/**
 * 首页功能
 */
// define(id,['jquery'],function($){$(' ')})


define(['jquery','com/goTop','com/stickup','com/fullPage','com/lazywater','com/LazyShow','com/exposure'],function ($, goTop , stickup2 , fullPage,waterFall,lazywater) {

    new GoTop($('body'));

    new stickup($('.setting-back'));
    new FullScreen($('.wheel'));
    new LazyWater($('.water-items'));

    var $item = $('.lazyShow').find('li');
    $item.each(function(){
        exposure.init($(this))
    });
    // new LazyShow($('.lazyShow'));

});