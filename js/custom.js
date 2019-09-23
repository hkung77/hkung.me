// Adds black background to navbar when user starts scrolling
const collapseNavBar = () => {
    const mainNav = document.getElementById('main-nav');
    // If the page is scrolled past the top
    // Add a black background to the navbar
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

// Handler for dropdown being clicked
// Adds animation styling to the drop down
const handleDropDownClick = (id) => {
    const frontEndList = document.getElementById(id);

    // Check for current applied styles to determine the outcome
    if (frontEndList.classList.contains('animate-dropup')) {
        frontEndList.classList.remove("animate-dropup");
        frontEndList.classList.add("animate-dropdown");
    } else {
        frontEndList.classList.remove("animate-dropdown");
        frontEndList.classList.add("animate-dropup");
    }
}

// Handler for when contact is clicked on the nav bar
// TODO:
const handleContactClick = () => {
    const githubIcon = document.getElementById('github-icon');
    const linkedinIcon = document.getElementById('linkedin-icon');
    const emailIcon = document.getElementById('email-icon');


}