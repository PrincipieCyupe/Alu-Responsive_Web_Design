document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".learn-more");

    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevents the link from opening immediately
            alert("You are opening a new link.");
            window.location.href = this.href; // Redirects to the actual link after the alert
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Select the education text
    const educationText = document.querySelector(".education");

    // Apply animation styles dynamically
    educationText.style.whiteSpace = "nowrap";
    educationText.style.overflow = "hidden";
    educationText.style.display = "block";
    educationText.style.position = "relative";

    let position = window.innerWidth; // Start off-screen
    function marquee() {
        if (position < -educationText.offsetWidth) {
            position = window.innerWidth; // Reset position when text moves out
        } else {
            position -= 2; // Speed of the movement
        }
        educationText.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(marquee); // Keep animation running
    }

    marquee(); // Start the animation
});