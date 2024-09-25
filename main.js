gsap.registerPlugin(ScrollTrigger)
const cursor = document.querySelector('.cursor')
function lerp(a, b,t) {
    return (1-t)*a + t*b
}
window.addEventListener('mousemove',function(e){
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        duration:.5,
    })
})
function scaleCursor(size){
    gsap.to(cursor,{
        scale:size,
        duration:.3,
    })
}
function resetCursor(){
    gsap.to(cursor,{
        scale:1,
        duration:.3,
    })
}
gsap.from('.line-content',{
    rotation:12,
    duration:1,
    opacity:0
})
gsap.from('.header-text p',{
    duration:1,
    opacity:0,
    delay:.6
})
const logo = document.querySelector('.logo')
const links = [...document.querySelectorAll('.links p')]
const menu = document.querySelector('.menu')

logo.addEventListener('mousemove',function(){
    scaleCursor(4)
})
logo.addEventListener('mouseleave',function(){
    resetCursor()
})

links.forEach(link=>{
    link.addEventListener('mousemove',function(){
        scaleCursor(2)
    })
    link.addEventListener('mouseleave',function(){
        resetCursor()
    })
})

gsap.to('.line1',{
    x:100,
    filter:'blur(5px)',
    opacity:.4,
    scrollTrigger:{
        trigger:'.head-wrapper',
        scrub:2,
        start:'top top',
        end:'50% 40%',
    }
})
gsap.to('.line2',{
    x:-100,
    filter:'blur(5px)',
    opacity:.4,
    scrollTrigger:{
        trigger:'.head-wrapper',
        scrub:2,
        start:'top top',
        end:'50% 40%',
    }
})
gsap.to('header p',{
    filter:'blur(5px)',
    scrollTrigger:{
        trigger:'.head-wrapper',
        scrub:2,
        start:'top top',
        end:'50% 40%',
    }
})
gsap.to('.intro',{
    scale:1,
    y:'-40%',
    scrollTrigger:{
        trigger:'.head-wrapper',
        scrub:2,
        start:'top top',
        end:'50% 40%',
    }
})
document.querySelectorAll('.down').forEach(item=>{
    gsap.to(item,{
        y:-200,
        scrollTrigger:{
            trigger:item,
            scrub:2,
        }
    })
})

ScrollTrigger.create({
    trigger: ".about-right",
    start: "top bottom",
    onEnter: () => document.querySelector("html").classList.add("dark"),
    onLeaveBack: () => document.querySelector("html").classList.remove("dark"),
});
// ScrollTrigger.create({
//     trigger: ".work-wrapper",
//     start: "top bottom",
//     onEnter: () => document.querySelector("html").classList.add("dark"),
//     onLeave: () => document.querySelector("html").classList.remove("dark"),
//     onEnterBack: () => document.querySelector("html").classList.add("dark"),
//     onLeaveBack: () => document.querySelector("html").classList.remove("dark"),
// });

const span = document.querySelector('.cursor span');

document.querySelector('.about-right img').addEventListener('mousemove',function(){
    span.innerText = 'Discover'
    cursor.classList.add('active')
})
document.querySelector('.about-right img').addEventListener('mouseleave',function(){
    span.innerText = ''
    cursor.classList.remove('active')
})

document.querySelectorAll('.work-img img').forEach(img=>{
    img.addEventListener('mousemove',function(){
        span.innerText = 'View'
        cursor.classList.add('active')
    })
    img.addEventListener('mouseleave',function(){
        span.innerText = ''
        cursor.classList.remove('active')
    })
})
