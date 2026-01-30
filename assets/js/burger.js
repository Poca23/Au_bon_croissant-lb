// Gestion menu burger
function initBurgerMenu() {
  const burger = document.querySelector(".header__burger");
  const burgerMenu = document.querySelector(".burger-menu");
  const overlay = document.querySelector(".overlay");
  const closeBtn = document.querySelector(".burger-menu__close");
  const menuLinks = document.querySelectorAll(".burger-menu__link");

  // Ouvrir menu
  burger.addEventListener("click", () => {
    burger.classList.add("active");
    burgerMenu.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  // Fermer menu
  const closeMenu = () => {
    burger.classList.remove("active");
    burgerMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  // Fermer menu clic
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

// Lien actif navigation
function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(
    ".header__nav-link, .burger-menu__link",
  );

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });
}
