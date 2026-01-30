document.addEventListener("DOMContentLoaded", () => {
  // Initialisation menu burger
  initBurgerMenu();

  // Initialisation carrousel (Sur accueil)
  if (document.querySelector(".carousel")) {
    initCarousel();
  }

  // Initialisation Map (Sur accueil)
  if (document.getElementById("map")) {
    initMap();
  }

  // Lien actif dans navigation
  setActiveNavLink();
});
