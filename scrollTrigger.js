
gsap.from("#page2 img",{
    width:"40%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -20%",
        pin:true,
        scrub:2
    }

})

gsap.from("#page1 img",{
rotate:-360,
delay:0.5,
duration:2,
opacity:0

})