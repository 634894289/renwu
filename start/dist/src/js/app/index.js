define(["jquery","com/goTop","com/stickup","com/fullPage","com/lazywater","com/LazyShow","com/exposure"],function(e,o,c,n,i,t){new GoTop(e("body")),new stickup(e(".setting-back")),new FullScreen(e(".wheel")),new LazyWater(e(".water-items"));var a=e(".lazyShow").find("li");a.each(function(){exposure.init(e(this))})});