// Adds black background to navbar when user starts scrolling
const collapseNavBar = () => {
    const mainNav = document.getElementById('main-nav');
    if (window.pageYOffset > 0) {
        mainNav.classList.remove("bg-transparent");
        mainNav.classList.add("bg-black");
    } else if (window.pageYOffset === 0) {
        mainNav.classList.remove("bg-black");
        mainNav.classList.add("bg-transparent");
    }
}



// Event handler when window scrolls
window.onscroll = () => {
    collapseNavBar();
};