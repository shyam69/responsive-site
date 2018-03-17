$('.ham span').on('click',function(){
    $('.hampopup').toggleClass('hamactive')
    return false
})

$(window).scroll(function(){
    var top = $(this).scrollTop()
    var rotateDeg = Math.min(90,top*0.7)
    $('.img1').css({'transform':`rotateZ(${rotateDeg}deg)`})
    
})


