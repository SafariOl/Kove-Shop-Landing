const container = document.querySelector('.container')
let section = container.querySelectorAll('section')

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: container,
        scrub: 1,
        pin: true,
        start: 'top top',
        end: '+=1300'
    }
}).to(container,{
    x: () => -(container.scrollWidth - document.documentElement.clientWidth - 95) + 'px',
    ease: 'none',
    duration: 1
})
.to({}, {duration: 1 / (section.length + 1)})


gsap.to('.col-1', {
    y: -250,
    duration: 2,
    scrollTrigger: {
        trigger: '.image-gallery',
        start: 'top center',
        scrub: true,
    }
})
gsap.to('.col-2', {
    y: 250,
    duration: 2,
    scrollTrigger: {
        trigger: '.image-gallery',
        start: 'top center',
        end: '+=3000',
        scrub: true,
    }
})
gsap.to('.col-3', {
    y: -250,
    duration: 2,
    scrollTrigger: {
        trigger: '.image-gallery',
        start: 'top center',
        end: '+=3000',
        scrub: true,
    }
})

gsap.to('.num', {
    x: '100vh',
    duration: 1,
    scrollTrigger: {
        trigger: '.num',
        start: 'right left',
    }
}, '-=.5')

gsap.from('.row2', {
    height: '0%',
    duration: 1,
    delay: .5,
    scrollTrigger: {
        trigger: '.sec-3',
        start: '40% center',
        toggleActions: 'play pause reverse reverse'
    }
})

gsap.from('.row li', {
    y: 200,
    opacity: 0,
    delay: 1,
    duration: 1,
    stagger: {
        amount: 1,
    },
    scrollTrigger: {
        trigger: '.row li',
        toggleActions: 'play pause reverse reverse'
    },
})

