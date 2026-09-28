// =========================================
// Aqvirox Labs
// JavaScript
// =========================================


// Wait until the page is fully loaded

document.addEventListener("DOMContentLoaded", function () {


    // =====================================
    // SMOOTH SCROLLING
    // =====================================

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            const targetSection =
                document.querySelector(targetId);

            if (targetSection) {

                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    // =====================================
    // SIMPLE SCROLL ANIMATION
    // =====================================

    const elements = document.querySelectorAll(
        "#services article, #projects article"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    elements.forEach(function (element) {

        element.classList.add("hidden");

        observer.observe(element);

    });


    // =====================================
    // CONSOLE MESSAGE
    // =====================================

    console.log(
        "Aqvirox Labs | AI • Web • Data • Automation"
    );

        // =====================================
    // MOBILE MENU
    // =====================================

    const menuButton =
        document.getElementById("menuButton");

    const navLinks =
        document.getElementById("navLinks");


    if (menuButton && navLinks) {

        menuButton.addEventListener("click", function () {

            navLinks.classList.toggle("active");

        });


        // Close menu after clicking a link

        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

            });

        });

    }
});