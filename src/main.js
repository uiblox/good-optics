import './style.css'
import "./styles.scss"
import throttle from 'lodash.throttle'

// const parallaxTarget = document.querySelectorAll('.tsw-parallax')
// console.log(parallaxTarget)

// const calculateRangeValue = (oldMin, oldMax, newMin, newMax, oldValue) => {
//   const oldRange = oldMax - oldMin;
//   const newRange = newMax - newMin;

//   return ((oldValue - oldMin) * newRange/oldRange) + newMin
// }

// function calcParallax () {
//   const scrollTop = window.scrollY;
//   parallaxTarget.forEach(target => {
//     const heroText = target.nextElementSibling
//     if ((scrollTop + window.innerHeight / 2) > target.offsetTop) {
//       const oldMin = (target.offsetTop < window.innerHeight / 2) ? target.offsetTop : target.offsetTop - window.innerHeight / 2;
//       const oldMax = oldMin + target.offsetHeight;
//       const yPosition = calculateRangeValue(oldMin, oldMax, 0, -50, scrollTop)
//       target.style.backgroundPosition = `center ${yPosition}px`
//       heroText.style.transform = `translateY(${-yPosition/2}px)`
//     }
//   })

// }

// window.addEventListener('scroll', throttle(calcParallax, 50))

// transform: translate3d(0px, 13.8365%, 0px)
// Images peices
// data-speed="-0.25"
// data-speed="-0.2"
// data-speed="0.4"
// data-speed="0.3"
// data-speed="0.5"

//Headline
// data-speed="0.1"

const moving = document.querySelectorAll('.tsw-move')

const headLine = document.querySelector('headline')
const header = document.querySelector('header')

let headerHeight = header.offsetHeight

let scroll = window.scrollY;

moving.forEach((el) => {
    let speed = el.dataset.speed

    el.computedStyleMap.transform = `translateY(${scroll * speed}px)`

})

headLine.style.opacity = -scroll / (headerHeight / 2) + 1
