document.addEventListener("DOMContentLoaded", () => {
    const whatsappPopup = document.getElementById("whatsapp-popup");
    const openPopupBtn = document.getElementById("open-popup");
    const buttonImage = openPopupBtn.querySelector("img");


    openPopupBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        const isPopupVisible = !whatsappPopup.classList.contains("d-none");

        if (isPopupVisible) {
            whatsappPopup.classList.add("d-none");
            buttonImage.src = "../Asstes/img/whatsapp.png";
            buttonImage.style.transition = "opacity 0.5s ease-in-out";
        } else {
            whatsappPopup.classList.remove("d-none");
            buttonImage.src = "../Asstes/img/close.png";
            buttonImage.style.transition = "opacity 0.5s ease-in-out";
        }
    });


    window.addEventListener("click", (event) => {
        if (!whatsappPopup.contains(event.target) && event.target !== openPopupBtn) {
            whatsappPopup.classList.add("d-none");
            buttonImage.src = "./Asstes/img/whatsapp.png";
        }
    });

    whatsappPopup.addEventListener("click", (event) => {
        event.stopPropagation();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const serviceCards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('slide-in-left')) {
                    entry.target.classList.add('animate-left');
                } else {
                    entry.target.classList.add('animate-right');
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    serviceCards.forEach((card, index) => {
        if (index % 2 === 0) {
            card.classList.add('slide-in-left');
        } else {
            card.classList.add('slide-in-right');
        }
        observer.observe(card);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".gallery-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.3 } //
    );

    items.forEach((item) => observer.observe(item));
});

document.addEventListener("DOMContentLoaded", () => {
    const faqSection = document.querySelector(".faq-section");
    const contentBox = document.querySelector(".faq-section .content-box");
    const texts = document.querySelectorAll(".faq-section h1, .faq-section p");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    contentBox.classList.add("visible");
                    texts.forEach((text) => text.classList.add("visible"));
                }
            });
        },
        { threshold: 0.3 }
    );

    observer.observe(faqSection);
});








$(document).ready(function () {
    $('.logo-area').slick({
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2,
                    autoplay: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1,
                    autoplay: true,
                }
            }
        ]
    });
});