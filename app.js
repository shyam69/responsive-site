$('.ham span').on('click',function(){
    $('.hampopup').toggleClass('hamactive')
    return false
})


console.log($(window).width())


if($(window).width()>768){
    $(window).scroll(function () {
        var top = $(this).scrollTop()
        var rotateDeg = Math.min(90, top * 0.7)
        $('.img1').css({ 'transform': `rotateZ(${rotateDeg}deg)` })

        if (top > $(window).height()) {
            $('.logobig').css('position', 'absolute')
            var h = $(window).height();
            $('.logobig').css({ 'transform': `rotateZ(${Math.min(90, (top - h) * 0.5)}deg)` })

        }
        else {
            $('.logobig').css('position', 'fixed');
            $('.logobig').css({ 'transform': `rotateZ(${0}deg)` })
            var displace = Math.min(100, top / 5.5)
            $('.part1').css({ 'transform': `translateX(-${100 - displace}px` })
            $('.part2').css({ 'font-size': `${200 - displace}px` })
            $('.part3').css({ 'transform': `translateX(${100 - displace}px` })
        }

        if (top > $('.profile').offset().top - $(window).height() / 3.2) {
            $('.profile h4').css({ 'transform': 'translateY(0%)' })
        }

        if (top > $('.works').offset().top - $(window).height()) {
            var offset = (Math.min(0, top - $('.works').offset().top + $(window).height() - 400)).toFixed();

            $('.works a:nth-child(1)').css({ 'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.2) + 'px)' });

            $('.works a:nth-child(3)').css({ 'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.2) + 'px)' });
        }

        if (top > 190) {
            $('.hampopup').removeClass('hamactive')
        }
        if (($('.pic').offset().top - top) < 0) {
            var opa = $('.pic').offset().top - top
            console.log(opa / 100)
            $('.pic').css('opacity', `${1 - Math.abs(opa / 140)}`)
        }
    })
}

else{
    
    $(window).scroll(function () {
        var top = $(this).scrollTop()
        var rotateDeg = Math.min(90, top * 0.7)
        $('.logobig').css({ 'transform': `rotateZ(${rotateDeg}deg)` })

        if (top > $('.profile').offset().top - $(window).height() / 3.2) {
            $('.profile h4').css({ 'transform': 'translateY(0%)' })
        }

        if (top > $('.works').offset().top - $(window).height()) {
            var offset = (Math.min(0, top - $('.works').offset().top + $(window).height() - 400)).toFixed();

            $('.works a:nth-child(1)').css({ 'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.2) + 'px)' });

            $('.works a:nth-child(3)').css({ 'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.2) + 'px)' });
        }

        if (top > 190) {
            $('.hampopup').removeClass('hamactive')
        }
    })
}



