import "./styles.scss";

// Here we are using intersectional observer to identify when our target is in view
window.onload = () => {
    // const targetElement = document.querySelector('.test-subject');
   
    // // Intersection will occur when target intersects the middle of the page
    // // const observer = new IntersectionObserver(getLocation, { root: null, threshold: 0, rootMargin: '-50% 0% -50% 0%' });

    // // Intersection will occur when entire target is in view
    // const observer = new IntersectionObserver(getLocation, { root: null, threshold: 1 });
    // function getLocation(entry) {
    //     if (entry[0].isIntersecting) {
    //         entry[0].target.style.backgroundColor = "red"
    //     } else {
    //         entry[0].target.style.backgroundColor = "cyan"
    //     }
    // }
    // observer.observe(targetElement); 
}

window.addEventListener("scroll", watchTarget)

function watchTarget() {
    const targetElement = document.querySelector('.test-subject');

   

    // const bottom 
    const imageBottom = targetElement.offsetTop + targetElement.clientHeight
    
    const isScrolledPast = window.scrollY > imageBottom

    // this is the same as our intersectional observer
    if (((window.innerHeight + window.scrollY) - targetElement.clientHeight) > targetElement.offsetTop && !isScrolledPast) {
        console.log("Target is in view port")
    } else {
        console.log("out of view")
    }


}
















