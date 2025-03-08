

//send money button animation 

const outerCircle = document.getElementById("outerCircle");
const fillLayer = document.getElementById("fillLayer");


let holdTimeout;

// Animation end listener
fillLayer.addEventListener('animationend', (event) => {
    if (event.animationName === 'fillAnimation') {
        console.log("Hello World");
        
    }
});

// Start the animation after a certain hold time (e.g., 200ms)
outerCircle.addEventListener("mousedown", () => {
    holdTimeout = setTimeout(() => {
        fillLayer.classList.add("animate-fill");
    }, 200);  // Delay before animation starts (200ms)
});

// Reset if the mouse is released early
outerCircle.addEventListener("mouseup", () => {
    clearTimeout(holdTimeout);  // Cancel the timeout if released early
    fillLayer.classList.remove("animate-fill");  // Reset animation
});

// Reset if mouse leaves the element
outerCircle.addEventListener("mouseleave", () => {
    clearTimeout(holdTimeout);  // Cancel the timeout if mouse leaves
    fillLayer.classList.remove("animate-fill");  // Reset animation
});




