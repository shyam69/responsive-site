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
let i=0;
var topDistance = 0;
var transformDegree = 0;
$(window).scroll(function () {
    var top = $(this).scrollTop()
    var screenHeight = window.innerHeight
    // console.log(top)

    // if(top<550){
    //     $('.noparallax').css({ 'position': 'fixed','top':'9vh'})
    //     var displace = Math.min(100,top/5.5)
    //     $('.part1').css({'transform':`translateX(-${100-displace}px`})
    //     $('.part2').css({'font-size':`${200-displace}px`})
    //     $('.part3').css({ 'transform': `translateX(${100 - displace}px` })
    //     if(displace >97 ){
    //         $('.noparallax').css({ 'position': 'absolute', 'top': `9vh` })
    //         $('.noparallax').css({ 'position': 'absolute','top':`${top}px` })
    //     }
    //
    // }

    if (top > screenHeight) {
      topDistance = ($('.noparallax').offset().top - top)
      console.log('passed', (90 - topDistance / (Math.PI/2))/90, topDistance / (Math.PI/2))
      $('.noparallax').css({ 'position': 'absolute','bottom':'150px'})
      if ((90 - topDistance / (Math.PI/2)) > 90)
        transformDegree = 90
      else if ((90 - topDistance / (Math.PI/2)) < 0)
        transformDegree = 0
      else
        transformDegree = 90 - topDistance / (Math.PI/2)
      // var rotateDeg = Math.min(90,($('.noparallax').offset().top - top)/3.2*-1)
      // var deg = ((($('.noparallax').offset().top + top)/Math.PI/4.9)%100)*5
      // var rotateDeg = deg > 90 ? 90 : deg
      $('.noparallax').css({'transform':`rotate(${transformDegree}deg)`})
    } else {
      // console.log(top)
      $('.noparallax').css({'transform':`rotate(0deg)`})
      $('.noparallax').css({ 'position': 'fixed','bottom':'150px'})
          var displace = Math.min(100,top/5.5)
          $('.part1').css({'transform':`translateX(-${100-displace}px`})
          $('.part2').css({'font-size':`${200-displace}px`})
          $('.part3').css({ 'transform': `translateX(${100 - displace}px` })
    }

    // if(top>550 && top< 560){
    //     console.log('hurray')
    //     $('.noparallax').css({'position':'absolute',
    //                             'top':`${550}px`})
    // }
    //
    // if (top > $('.profile').offset().top - $(window).height() / 3.2) {
    //     $('.profile h4').css({ 'transform': 'translateY(0%)' })
    // }
    //
    // if (top > $('.works').offset().top - $(window).height()) {
    //     var offset = (Math.min(0, top - $('.works').offset().top + $(window).height() - 400)).toFixed();
    //
    //     $('.works a:nth-child(1)').css({ 'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.2) + 'px)' });
    //
    //     $('.works a:nth-child(3)').css({ 'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.2) + 'px)' });
    // }

    if (top > 190) {
        $('.hampopup').removeClass('hamactive')
    }
})
