import './style.css'
import "./styles.scss"
import throttle from 'lodash.throttle'

const parallaxTarget = document.querySelectorAll('.tsw-parallax')
console.log(parallaxTarget)

const calculateRangeValue = (oldMin, oldMax, newMin, newMax, oldValue) => {
  const oldRange = oldMax - oldMin;
  const newRange = newMax - newMin;

  return ((oldValue - oldMin) * newRange/oldRange) + newMin
}

function calcParallax () {
  const scrollTop = window.scrollY;
  parallaxTarget.forEach(target => {
    const heroText = target.nextElementSibling
    if ((scrollTop + window.innerHeight / 2) > target.offsetTop) {
      const oldMin = (target.offsetTop < window.innerHeight / 2) ? target.offsetTop : target.offsetTop - window.innerHeight / 2;
      const oldMax = oldMin + target.offsetHeight;
      const yPosition = calculateRangeValue(oldMin, oldMax, 0, -50, scrollTop)
      target.style.backgroundPosition = `center ${yPosition}px`
      heroText.style.transform = `translateY(${-yPosition/2}px)`
    }
  })

}

window.addEventListener('scroll', throttle(calcParallax, 50))

// transform: translate3d(0px, 13.8365%, 0px)