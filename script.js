// ==============================
// MOBILE NAVIGATION
// ==============================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuToggle.innerHTML = "✕";
            menuToggle.setAttribute("aria-label", "Close menu");
        } else {
            menuToggle.innerHTML = "☰";
            menuToggle.setAttribute("aria-label", "Open menu");
        }

    });


    // Close mobile menu when a link is clicked

    const links = navLinks.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.innerHTML = "☰";

            menuToggle.setAttribute("aria-label", "Open menu");

        });

    });

}


// ==============================
// ACTIVE NAVIGATION LINK
// ==============================

const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


// ==============================
// SCROLL REVEAL ANIMATION
// ==============================

const elementsToAnimate = document.querySelectorAll(
    ".section, .skill-card, .project-card, .about-card, .contact-item"
);

const observer = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal");
                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);

elementsToAnimate.forEach(element => {
    observer.observe(element);
});


// ==============================
// BACK TO TOP BUTTON
// ==============================

const backToTop = document.getElementById("back-to-top");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            backToTop.classList.add("visible");

        } else {

            backToTop.classList.remove("visible");

        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ==============================
// CURRENT YEAR
// ==============================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


// ==============================
// WHATSAPP CONTACT FORM
// ==============================

const whatsappForm = document.getElementById("whatsapp-form");

if (whatsappForm) {

    whatsappForm.addEventListener("submit", function (event) {

        // Stop the form from refreshing the page
        event.preventDefault();


        // Get user's information

        const nameInput =
            document.getElementById("whatsapp-name");

        const messageInput =
            document.getElementById("whatsapp-message");


        const name = nameInput.value.trim();

        const message = messageInput.value.trim();


        // Check that both fields have information

        if (name === "" || message === "") {

            alert("Please enter your name and message.");

            return;

        }


        // ==============================
        // YOUR WHATSAPP NUMBER
        // ==============================

        // Kenya country code is 254.
        // Do NOT put + or spaces here.

        const phoneNumber = "254704169421";


        // Create the message

        const whatsappMessage =
            `Hello Nchipai, my name is ${name}.\n\n${message}`;


        // Convert message into a URL-friendly format

        const encodedMessage =
            encodeURIComponent(whatsappMessage);


        // Create WhatsApp URL

        const whatsappURL =
            `https://wa.me/${phoneNumber}?text=${encodedMessage}`;


        // Open WhatsApp

        window.open(whatsappURL, "_blank");


        // Clear the form

        whatsappForm.reset();

    });

}
