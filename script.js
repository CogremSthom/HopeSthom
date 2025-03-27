const buttons = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");


// Tableau d'image : [0, 1, 2]

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calcNextSlide = e.target.id === "next" ? 1 : -1;
    const slideActive = document.querySelector(".active");

    newIndex = calcNextSlide + [...slides].indexOf(slideActive);

    if (newIndex < 0) newIndex = [...slides].length - 1;
    if (newIndex >= [...slides].length) newIndex = 0;
    slides[newIndex].classList.add("active");

    slideActive.classList.remove("active");
  });
});
// Sélection des éléments
const openMenuButton = document.getElementById("open-menu");
const closeMenuButton = document.getElementById("close-menu");
const menu = document.getElementById("menu");

// Fonction pour ouvrir le menu
openMenuButton.addEventListener("click", () => {
	openMenuButton.style.display="none";
    menu.classList.add("open");
});

// Fonction pour fermer le menu
closeMenuButton.addEventListener("click", () => {
	openMenuButton.style.display="block";
    menu.classList.remove("open");
});
