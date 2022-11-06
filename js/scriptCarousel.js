// Bilder Carousel

const slides = document.getElementsByClassName("portfolioBilder");
const nextButton = document.getElementById("portfolioBilderButtonsNext");
const prevButton = document.getElementById("portfolioBilderButtonsPrev");
let position = 0;
const numberOfSlides = slides.length;

function hideAllSlides() {
    for (const slide of slides) {
        slide.classList.remove("portfolioVisible");
        slide.classList.add("portfolioHidden");
    }
}

const handleMoveToNextSlide = function(e) {
    hideAllSlides();
    if (position === numberOfSlides - 1) {
        position = 0;
    } else {
        position++;
    }
    slides[position].classList.add("portfolioVisible");
}

const handleMoveToPrevSlide = function(e) {
    hideAllSlides();
    if (position === 0) {
        position = numberOfSlides - 1;
    } else {
        position--;
    }
    slides[position].classList.add("portfolioVisible");
}

nextButton.addEventListener("click", handleMoveToNextSlide);
prevButton.addEventListener("click", handleMoveToPrevSlide);