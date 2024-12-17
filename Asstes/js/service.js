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
            buttonImage.src = "../Asstes/img/whatsapp.png";
        }
    });

    whatsappPopup.addEventListener("click", (event) => {
        event.stopPropagation();
    });
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
    }, {threshold: 0.2});

    serviceCards.forEach((card, index) => {
        if (index % 2 === 0) {
            card.classList.add('slide-in-left');
        } else {
            card.classList.add('slide-in-right');
        }
        observer.observe(card);
    });
})

    // Toggle "see more" functionality
document.querySelectorAll('.see-more-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const cardBody = event.target.closest('.card-body');
        const shortText = cardBody.querySelector('.short-text');
        const fullText = cardBody.querySelector('.full-text');

        // Toggle visibility of both short and full text
        fullText.classList.toggle('display-none');
        shortText.classList.toggle('display-none');

        // Update button text based on visibility of full-text
        event.target.textContent = fullText.classList.contains('display-none') ? 'See More' : 'See Less';
    });
});
