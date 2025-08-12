const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentCardIndex = 0;
const totalNbCards = slider.children.length;

function getCardWidth() {
    return document.querySelector(".projectCard").offsetWidth + 12; // +12 for gap-3 (0.75rem * 16px)
}

function updateSlider() {
    const cardWidth = getCardWidth();
    slider.style.transform = `translateX(-${currentCardIndex * cardWidth}px)`;
}

function updateBtn() {
    if(currentCardIndex === 0){
        prevBtn.classList.add("hidden");
    } else {
        prevBtn.classList.remove("hidden");
    }
    if(currentCardIndex === totalNbCards - 1){
        nextBtn.classList.add("hidden");
    } else {
        nextBtn.classList.remove("hidden");
    }
}

nextBtn.addEventListener("click", () => {
    if(currentCardIndex < totalNbCards - 1){
        currentCardIndex++;
        updateSlider();
        updateBtn();
    }
});

prevBtn.addEventListener("click", () => {
    if(currentCardIndex > 0){
        currentCardIndex--;
        updateSlider();
        updateBtn();
    }
});

const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
});

// Handle window resize
window.addEventListener('resize', updateSlider);

updateBtn(); // Initial call to set button visibility