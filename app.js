$('.ham span').on('click',function(){
    $('.hampopup').toggleClass('hamactive')
    return false
})

$(document).on('click', function () {
    $('.hampopup').removeClass('hamactive')
    return false
})

$(window).scroll(function(){
    var top = $(this).scrollTop()
    var rotateDeg = Math.min(90,top*0.7)
    $('.img1').css({'transform':`rotateZ(${rotateDeg}deg)`})
    
    if (top > $('.profile').offset().top - $(window).height() / 3.2) {
        $('.profile h4').css({ 'transform': 'translateY(0%)' })
    }

    if (top > $('.works').offset().top - $(window).height()) {
        var offset = (Math.min(0, top - $('.works').offset().top + $(window).height() - 400)).toFixed();

        $('.works a:nth-child(1)').css({ 'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.2) + 'px)' });

        $('.works a:nth-child(3)').css({ 'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.2) + 'px)' });
    }
})


