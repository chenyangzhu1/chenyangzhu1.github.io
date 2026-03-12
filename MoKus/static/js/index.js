window.HELP_IMPROVE_VIDEOJS = false;

document.addEventListener("DOMContentLoaded", () => {
  const navbarBurgers = Array.from(
    document.querySelectorAll(".navbar-burger"),
  );

  navbarBurgers.forEach((burger) => {
    burger.addEventListener("click", () => {
      const targetId = burger.dataset.target;
      const targetMenu = targetId ? document.getElementById(targetId) : null;
      const isActive = burger.classList.toggle("is-active");

      burger.setAttribute("aria-expanded", String(isActive));

      if (targetMenu) {
        targetMenu.classList.toggle("is-active", isActive);
      }
    });
  });

  if (
    window.bulmaCarousel &&
    typeof window.bulmaCarousel.attach === "function"
  ) {
    window.bulmaCarousel.attach(".carousel", {
      slidesToScroll: 1,
      slidesToShow: 1,
      loop: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
    });
  }

  if (window.bulmaSlider && typeof window.bulmaSlider.attach === "function") {
    window.bulmaSlider.attach();
  }
});
