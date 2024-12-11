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

$(document).ready(function () {
    $('.logo-area').slick({
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
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