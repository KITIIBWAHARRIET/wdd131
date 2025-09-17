// Update copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Update last modified date
document.getElementById("last-modified").textContent = document.lastModified;

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
        hamburger.innerHTML = "&#9776;"; // hamburger icon
    } else {
        navMenu.style.display = "flex";
        hamburger.innerHTML = "&times;"; // X icon
    }
});
