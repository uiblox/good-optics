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


// This causes the parallax to began prior to images enters view port
// scrollTop + window.innerHeight / 2) > target.offsetTop

// This causes the parallax to begin only once half of the image enters viewport
// ((scrollTop + window.innerHeight) - target.clientHeight / 2) > target.offsetTop)

function calcParallax () {
  const scrollTop = window.scrollY;
  parallaxTarget.forEach(target => {
    
    const heroText = target.nextElementSibling

    if (((scrollTop + window.innerHeight) - target.clientHeight / 2) > target.offsetTop) {
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


// import "./styles.scss";

// // Here we are using intersectional observer to identify when our target is in view
// window.onload = () => {
//     // const targetElement = document.querySelector('.test-subject');
   
//     // // Intersection will occur when target intersects the middle of the page
//     // // const observer = new IntersectionObserver(getLocation, { root: null, threshold: 0, rootMargin: '-50% 0% -50% 0%' });

//     // // Intersection will occur when entire target is in view
//     // const observer = new IntersectionObserver(getLocation, { root: null, threshold: 1 });
//     // function getLocation(entry) {
//     //     if (entry[0].isIntersecting) {
//     //         entry[0].target.style.backgroundColor = "red"
//     //     } else {
//     //         entry[0].target.style.backgroundColor = "cyan"
//     //     }
//     // }
//     // observer.observe(targetElement); 
// }

// window.addEventListener("scroll", watchTarget)

// function watchTarget() {
//     const targetElement = document.querySelector('.test-subject');

   

//     // const bottom 
//     const imageBottom = targetElement.offsetTop + targetElement.clientHeight
    
//     const isScrolledPast = window.scrollY > imageBottom

//     // this is the same as our intersectional observer
//     if (((window.innerHeight + window.scrollY) - targetElement.clientHeight) > targetElement.offsetTop && !isScrolledPast) {
//         console.log("Target is in view port")
//     } else {
//         console.log("out of view")
//     }


// }
















