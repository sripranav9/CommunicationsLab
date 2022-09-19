var navLinks = document.getElementById("navLinks");

// to show the menu when the hamburger icon is clicked
function showMenu() {
    navLinks.style.right = "0"; //selecting the right element under the style menu of navLinks
}

//to hide the menu when the cross button is clicked
function hideMenu() {
    navLinks.style.right = "-200px" //selecting the right element under the style menu of navLinks
}