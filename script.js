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


const heroTitle = document.querySelector("#hero-tittle");

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