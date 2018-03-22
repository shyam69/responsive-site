$('.ham span').on('click',function(){
    $('.hampopup').toggleClass('hamactive')
    return false
})


// $(window).scroll(function(){
//     var top = $(this).scrollTop()
//     console.log(top)
//     var rotateDeg = Math.min(90,top*0.7)
//     $('.img1').css({'transform':`rotateZ(${rotateDeg}deg)`})
    
//     if (top > $('.profile').offset().top - $(window).height() / 3.2) {
//         $('.profile h4').css({ 'transform': 'translateY(0%)' })
//     }

//     if (top > $('.works').offset().top - $(window).height()) {
//         var offset = (Math.min(0, top - $('.works').offset().top + $(window).height() - 400)).toFixed();

//         $('.works a:nth-child(1)').css({ 'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.2) + 'px)' });

//         $('.works a:nth-child(3)').css({ 'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.2) + 'px)' });
//     }

//     if(top>190){
//         $('.hampopup').removeClass('hamactive')
//     }
// })

$(window).scroll(function () {
    var top = $(this).scrollTop()
    console.log(top)
    
    if(top<550){
        $('.noparallax').css({ 'position': 'fixed','top':'9vh'})
        var displace = Math.min(100,top/5.5)
        $('.part1').css({'transform':`translateX(-${100-displace}px`})
        $('.part2').css({'font-size':`${200-displace}px`})
        $('.part3').css({ 'transform': `translateX(${100 - displace}px` })
        if(displace >97 ){
            $('.noparallax').css({ 'position': 'absolute', 'top': `9vh` })
            $('.noparallax').css({ 'position': 'absolute','top':`${top}px` })
        }

    }

    // if(top>550 && top< 560){
    //     console.log('hurray')
    //     $('.noparallax').css({'position':'absolute',
    //                             'top':`${550}px`})
    // }

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

