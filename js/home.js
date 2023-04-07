// FLYING PAPER PLANE
const flightPath = {
    curviness: 1.25, 
    autoRotate: true,
    values: [
        { x: 100, y: 0 },
        { x: 300, y: 10 },
        { x: 500, y: 200 },
        { x: 500, y: -200 },
        { x: 350, y: -50 },
        { x: 600, y: 10 },
        { x: 700, y: -20 },
        { x: 800, y: 10 },
        { x: 900, y: 200 },
        { x: 900, y: -200 },
        { x: 700, y: -50 },
        { x: window.innerWidth, y: -150 },
    ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".paper-plane", 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".main",
    duration: 4000,
    triggerHook: 0
})
.setTween(tween)
.addTo(controller);

// Scroll hidden & visible Plane
const heightLose = 4000;
const plane = document.querySelector('.main .plane');

window.addEventListener('scroll', function(){
    let layar = window.pageYOffset;
    const planeHidden = 3700;
    const plane = document.querySelector('.main .plane');
    
    if(layar >= planeHidden) {
        plane.style.opacity = 0;
        plane.style.visibility = "hidden";
    } else if(layar <= 100) {
        plane.style.opacity = 1;
        plane.style.visibility = "visible";
    }
});