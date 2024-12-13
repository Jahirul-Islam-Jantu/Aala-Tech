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