document.addEventListener("DOMContentLoaded", () => {
    const whatsappPopup = document.getElementById("whatsapp-popup");
    const openPopupBtn = document.getElementById("open-popup");
    const buttonImage = openPopupBtn.querySelector("img");

    // Open WhatsApp Popup
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

    // Close WhatsApp Popup when clicking outside
    window.addEventListener("click", (event) => {
        if (!whatsappPopup.contains(event.target) && event.target !== openPopupBtn) {
            whatsappPopup.classList.add("d-none");
            buttonImage.src = "./Asstes/img/whatsapp.png";
        }
    });

    // Prevent clicks inside the popup from closing it
    whatsappPopup.addEventListener("click", (event) => {
        event.stopPropagation();
    });
});
