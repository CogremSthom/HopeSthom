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
