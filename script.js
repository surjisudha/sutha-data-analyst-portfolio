
// Mobile Navigation
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

// Create mobile menu button
const menuButton = document.createElement("button");
menuButton.className = "menu-toggle";
menuButton.innerHTML = "☰";
menuButton.setAttribute("aria-label", "Toggle navigation");

navbar.insertBefore(menuButton, navLinks);

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuButton.innerHTML =
        navLinks.classList.contains("active") ? "✕" : "☰";
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuButton.innerHTML = "☰";
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .experience-card"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});

// Automatically update footer year
const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent =
        `© ${new Date().getFullYear()} Sutha V | Data Analyst Portfolio`;
}

// Back to Top Button
const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";
backToTop.className = "back-to-top";
backToTop.setAttribute("aria-label", "Back to top");

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 300);
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
