let cardContainer = document.querySelector('.container-close-class')

let cardCloseButton = document.querySelector(".close-button");

let cardToggle = document.querySelector('.carToggleContainer')

let toggleDisplay = cardContainer.style.display;

cardCloseButton.addEventListener('click', ()=>{
  return cardContainer.style.display = 'none'
});


cardToggle.addEventListener('click', () => toggleDisplay="none" ? toggleDisplay="block !important" : toggleDisplay="none !important"
);

