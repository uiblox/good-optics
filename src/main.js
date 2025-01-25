import "./styles.scss";

// Here we are using intersectional observer to identify when our target is in view
window.onload = () => {
    const targetElement = document.querySelector('.test-subject');
   
    // Intersection will occur when target intersects the middle of the page
    // const observer = new IntersectionObserver(getLocation, { root: null, threshold: 0, rootMargin: '-50% 0% -50% 0%' });

    // Intersection will occur when entire target is in view
    const observer = new IntersectionObserver(getLocation, { root: null, threshold: 1 });
    function getLocation(entry) {
        if (entry[0].isIntersecting) {
            entry[0].target.style.backgroundColor = "red"
        } else {
            entry[0].target.style.backgroundColor = "cyan"
        }
    }
    observer.observe(targetElement); 
}

















