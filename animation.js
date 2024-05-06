


var tl = gsap.timeline({  delay:0.3,
    duration:0.6,opacity:0,});

tl.from(" #nav h3, #nav h1,#nav menu",{
    y:-200,
    stagger:0.6,
    opacity:0,
})

tl.from("#menu img",{
x:58,
}) 

tl.from("#page1 h1",{
    x:-75,
    delay:0.3,
    opacity:0,
    }) 

 tl.from("#page1 h2",{
        x:-75,
        opacity:0,
        })  

 tl.from("#page1 h3",{
            x:75,
            opacity:0,
         })   
                     
tl.from("#pic #pic2",{
            x:-45,
           rotate:15,
            opacity:0,
        })  
tl.from("#pic #pic3",{
            x:45,
           rotate:25,
            opacity:0,
        })  
tl.from("#pic #pic4",{
        yoyo:-1,
        stagger:-1,
        repeat:-1,
        y:-30,
            opacity:0
        })    
             


