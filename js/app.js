const rate = document.getElementById("rate");
const rating= document.getElementById("rating");
const ratingButtons = rating.children;
const submit = document.getElementById("submit");
const thank = document.getElementById("thank");
let ratedCurrent = 0;


function addEffectButton(button){
    button.classList.remove("hover:bg-lightGrey");
    button.classList.remove("bg-mediumGrey");
    button.children[0].classList.remove("opacity-50");
    button.children[0].classList.add("opacity-100");
    button.classList.add("bg-orange");
}
function removeEffectButton(button){
    button.classList.add("hover:bg-lightGrey");
    button.classList.add("bg-mediumGrey");
    button.children[0].classList.add("opacity-50");
    button.children[0].classList.remove("opacity-100");
    button.classList.remove("bg-orange");
}

function updateRating(newRating, button){
    ratedCurrent = newRating;
    for (let index = 0; index < ratingButtons.length; index++) {
        const element = ratingButtons[index];
        removeEffectButton(element);
        
    }
    addEffectButton(button);
    
}
function getIndex(el, array){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element == el){
            return index;
        }
    }
}

for (let index = 0; index < ratingButtons.length; index++) {
    const element = ratingButtons[index];
    element.addEventListener('click', function(event){
        let button = event.target;
        if(button.nodeName == "SPAN"){
            button = button.parentElement;
        }
        updateRating(getIndex(button, ratingButtons)+1, button);
    });
    
    
}

submit.addEventListener('click', function(event){
    const ratingText = document.getElementById("textRating");
    rate.classList.add("hidden");
    thank.classList.remove("hidden");
    ratingText.innerText = ratedCurrent;
});