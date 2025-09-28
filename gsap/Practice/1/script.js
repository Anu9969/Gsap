// gsap.to("#box", {
//     x:600,
//     duration:2,
//     delay:1,
//     rotate:360,
//     scale:0.5,
//     backgroundColor:"#ff0000",
//     borderRadius:"50%",
//     ease:"bounce.out"
// })

// gsap.to("#box", {
//     x:600,
//     duration:2,
//     delay:1,
//     rotate:360,
//     scale:0.5,
//     borderRadius:"50%",
//     repeat:-1,
//     yoyo:true
// })


// var tl = gsap.timeline()

// tl.from("h2", {
//     y:-100,
//     duration:1,
//     ease:"bounce.out",
// })

// tl.from("a", {
//     y:-100,
//     duration:1,
//     ease:"bounce.out",
//     stagger:0.2
// })

gsap.to("#page2 h2",{
    transform:"translateX(-250%)",
    duration:3,
    scrollTrigger:{
        trigger:"#page2 ",
        start:"top top",
        end:"bottom center",
        
        scrub:true,
        markers:true,
        pin:true
    }
})