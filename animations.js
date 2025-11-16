$(document).ready(function() { 

    setTimeout(function() {
        
        var percent = $('.cms').attr('title');
        $('.cms').css('width', '0').animate({width: percent}, 1500);
        
        var percent = $('.seo').attr('title');
        $('.seo').css('width', '0').animate({width: percent}, 1500);
        
        var percent = $('.php').attr('title');
        $('.php').css('width', '0').animate({width: percent}, 1500);
        
        var percent = $('.html').attr('title');
        $('.html').css('width', '0').animate({width: percent}, 1500);
        
        var percent = $('.css').attr('title');
        $('.css').css('width', '0').animate({width: percent}, 1500);
        
        var percent = $('.progress_bar').attr('title');
        $('.progress_bar').css('width', '0').animate({width: percent}, 1500);
        
        var percent = $('.flash').attr('title');
        $('.flash').css('width', '0').animate({width: percent}, 1500);
        
        var percent = $('.java').attr('title');
        $('.java').css('width', '0').animate({width: percent}, 1500);
        
    }, 200);
    
    if (typeof $.fn.tipsy !== 'undefined') {
        $('.tip').tipsy({gravity: 's', fade: true});
    }

    if (typeof $.fn.lightBox !== 'undefined') {
        $('#gallery a').lightBox();
    }
    
    $("#gallery img").fadeTo("fast", 0.8);
    $("#gallery img").hover(
        function() {
            $(this).fadeTo("fast", 1.0);
        },
        function() {
            $(this).fadeTo("fast", 0.8);
        }
    );
    
    var $elem = $('.container_24');
    
    $('#nav_up').fadeIn('slow');
    $('#nav_down').fadeIn('slow');  
    
    $('#nav_down').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: $elem.height()}, 800);
    });
    
    $('#nav_up').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: '0px'}, 800);
    });
    
    if (typeof $(window).bind === 'function') {
        $(window).bind('scrollstart', function() {
            $('#nav_up, #nav_down').stop().animate({'opacity': '0.2'});
        });
        
        $(window).bind('scrollstop', function() {
            $('#nav_up, #nav_down').stop().animate({'opacity': '1'});
        });
    }
    
    $('.floatLeft').on('click', function() {
        var $this = $(this);
        $this.css('transition', 'none');
        $this.css('transform', 'rotate(360deg) scale(1.1)');
        
        setTimeout(function() {
            $this.css('transition', 'transform 0.5s ease');
            $this.css('transform', 'rotate(0deg) scale(1)');
        }, 10);
    });
    
    $('.ribbon2').on('click', function() {
        var $section = $(this).parent();
        $('html, body').animate({
            scrollTop: $section.offset().top - 20
        }, 600);
    });
    
    $('.work_list h1, .work_list h2').hover(
        function() {
            $(this).css('transform', 'scale(1.05)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );
    
    if ($('#scroll-progress').length === 0) {
        $('body').prepend('<div id="scroll-progress" style="position:fixed;top:0;left:0;width:0;height:3px;background:linear-gradient(90deg,#667eea,#764ba2);z-index:9999;transition:width 0.1s;"></div>');
    }
    
    $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop();
        var docHeight = $(document).height();
        var winHeight = $(window).height();
        var scrollPercent = (scrollTop) / (docHeight - winHeight);
        var scrollPercentRounded = Math.round(scrollPercent * 100);
        
        $('#scroll-progress').css('width', scrollPercentRounded + '%');
    });
    
    console.log('Animations.js loaded successfully');
    console.log('Dynamic effects initialized');
    
});