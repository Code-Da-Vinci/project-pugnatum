const inputSearch = document.querySelector(".nav__serch__input");
const clean = document.querySelector(".nav__search__trash");
const allCards = document.querySelectorAll(".card");

let cards = [];
let valorInput;

function searchWork() {
   valorInput = inputSearch.value.trim().toLowerCase();

   if (!valorInput) {
      inputSearch.value = "";
      inputSearch.focus();
      showCard();
      return;

   };

   match();
   
};

function match() {
   allCards.forEach(card => {
      card.style.display = null;
      
      let title = card.querySelector(".card__title");
   
      if (title.textContent.toLowerCase().includes(valorInput)) {
         card.style.display = null;
         
      } else {
         card.style.display = "none";
   
      };
   });
};

function showCard() {
   allCards.forEach(card => {
      card.style.display = null;
      
   });

   inputSearch.value = "";
   inputSearch.focus();

};

inputSearch.addEventListener("input", searchWork);
clean.addEventListener("click", showCard);


