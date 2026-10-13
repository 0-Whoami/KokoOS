import "./components.js";

const header = document.querySelector("header");

let position = 0;
let lastScrollY = window.scrollY;
let headerHeight = header.offsetHeight;

window.addEventListener("scroll", () => {
    const currentY = window.scrollY;
    const delta = currentY - lastScrollY;

    position = Math.max(
        -headerHeight,
        Math.min(0, position - delta)
    );

    header.style.transform = `translateY(${position}px)`;
    lastScrollY = currentY;
}, { passive: true });