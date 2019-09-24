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
// Debounce if user clicks too fast
let debounce = false;
const handleContactClick = () => {
    const contact = [
        document.getElementById('github-icon'),
        document.getElementById('linkedin-icon'),
        document.getElementById('email-icon')
    ];

    // Debounce user if animation is still in progress
    if (!debounce) {
        debounce = true;
        // Apply animation styling
        contact.forEach((node, index) => {
            if (index > 0) {
                node.className += ` animated heartBeat fast delay-${index}s`; 
            } else {
                node.className += ` animated heartBeat fast`; 
            }
        });

        setTimeout(() => {
            // Remove animation styling
            contact.forEach((node) => {
                node.classList.remove("animated");
                node.classList.remove("heartBeat");
            });
            // End debounce 
            debounce = false;
        }, 3000)
    }

}
