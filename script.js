// =========================
// AUTOMATIC FOOTER YEAR
// =========================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// =========================
// NAVBAR ON SCROLL
// =========================

const header = document.querySelector("header");

function updateNavbar() {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background = "rgba(21, 25, 22, 0.92)";
        header.style.backdropFilter = "blur(10px)";
        header.style.webkitBackdropFilter = "blur(10px)";

    } else {

        header.style.background = "transparent";
        header.style.backdropFilter = "none";
        header.style.webkitBackdropFilter = "none";

    }

}


// Run once when page loads
updateNavbar();


// Run when scrolling
window.addEventListener("scroll", updateNavbar, {
    passive: true
});


// =========================
// SCROLL REVEAL ANIMATIONS
// =========================

const revealElements = document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                // Stop watching after animation happens
                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
    }
);


// Start observing every reveal element

revealElements.forEach(element => {
    observer.observe(element);
});