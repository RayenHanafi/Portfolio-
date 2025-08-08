const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentCardIndex = 0;
const totalNbCards = slider.children.length;

const cardWidth = document.querySelector(".projectCard").offsetWidth;

function updateBtn (){
    if(currentCardIndex === 0){
        prevBtn.classList.add("hidden");
    }else{
        prevBtn.classList.remove("hidden");
    }
    if(currentCardIndex === totalNbCards - 1){
        nextBtn.classList.add("hidden");
    }else{
        nextBtn.classList.remove("hidden");
    }
}

nextBtn.addEventListener("click", () => {
    if(currentCardIndex < totalNbCards - 1){
        currentCardIndex++;
         slider.style.transform = `translateX(-${currentCardIndex * cardWidth}px)`;
        updateBtn();
    }
});

prevBtn.addEventListener("click", () => {
    if(currentCardIndex > 0){
        currentCardIndex--;
        slider.style.transform = `translateX(-${currentCardIndex * cardWidth }px)`;
        updateBtn();
    }
});

updateBtn(); // Initial call to set button visibility