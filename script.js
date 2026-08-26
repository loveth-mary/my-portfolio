const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        menuToggle.setAttribute("aria-label", "Close navigation");
    } else {
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        menuToggle.setAttribute("aria-label", "Open navigation");
    }
});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        menuToggle.setAttribute("aria-label", "Open navigation");
    });
});


// Animations
const heroTitle = document.querySelector("#hero-title");

if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = "";

    let index = 0;

    function typeText() {
        if (index < text.length) {
            heroTitle.textContent += text[index];
            index++;

            setTimeout(typeText, 150);
        }
    }

    typeText();
}


const scrollElements = document.querySelectorAll(".scroll-fly-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

scrollElements.forEach((element) => {
    observer.observe(element);
});



// Toggle dark mode
const themeToggle = document.querySelector(".theme-toggle");

// Check saved theme when page loads
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    themeToggle.setAttribute("aria-label", "Switch to light mode");
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");

        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        themeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
        localStorage.setItem("theme", "light");

        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
    }
});