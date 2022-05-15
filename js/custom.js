!function(e){jQuery.scrollSpeed=function(n,o){var t=e(document),i=e(window),l=e("html, body"),r=i.height(),u=0,a=!1;return window.navigator.msPointerEnabled?!1:void i.on("mousewheel DOMMouseScroll",function(e){return a=!0,(e.originalEvent.wheelDeltaY<0||e.originalEvent.detail>0)&&(u=u+r>=t.height()?u:u+=n),(e.originalEvent.wheelDeltaY>0||e.originalEvent.detail<0)&&(u=0>=u?0:u-=n),l.stop().animate({scrollTop:u},o,"default",function(){a=!1}),!1}).on("scroll",function(){a||(u=i.scrollTop())}).on("resize",function(){r=i.height()})},jQuery.easing["default"]=function(e,n,o,t,i){return-t*((n=n/i-1)*n*n*n-1)+o}}(jQuery);

 $(document).ready(function(){ 
        $(window).scroll(function(){  // make a button in bottom fixed for jump upper //
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        }); 
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
    });
	$(function() {  
    jQuery.scrollSpeed(100, 800);  // page mouse scrolling //
});


$(function() {
    //caches a jQuery object containing the header element
    var header = $(".anim-from-left");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            header.removeClass('clearHeader').addClass("animated bounceInLeft");
        } else {
            header.removeClass("animated bounceInLeft").addClass('clearHeader');
        }
    });
	var header2 = $(".anim-from-right");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            header2.removeClass('clearHeader').addClass("animated bounceInRight");
        } else {
            header2.removeClass("animated bounceInRight").addClass('clearHeader');
        }
    });
});

$(function() {

    var $sidebar   = $("#left-fixed1"), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 0;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });
        }
    });
    
});


$(function(){ // document ready
 
  if (!!$('#left-fixed').offset()) { // make sure ".sticky" element exists
 
    var stickyTop = $('#left-fixed').offset().top; // returns number 
 
    $(window).scroll(function(){ // scroll event
 
      var windowTop = $(window).scrollTop(); // returns number 
 
      if (stickyTop < windowTop){
        $('#left-fixed').css({ position: 'fixed', top: 0 });
      }
      else {
        $('#left-fixed').css('position','static');
      }
 
    });
 
  }
 
});