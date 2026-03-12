window.HELP_IMPROVE_VIDEOJS = false;

function getMoreWorksElements() {
  return {
    container: document.querySelector(".more-works-container"),
    dropdown: document.getElementById("moreWorksDropdown"),
    button: document.querySelector(".more-works-btn"),
  };
}

function setMoreWorksState(isOpen) {
  const { dropdown, button } = getMoreWorksElements();

  if (!dropdown || !button) {
    return;
  }

  dropdown.classList.toggle("show", isOpen);
  button.classList.toggle("active", isOpen);
  button.setAttribute("aria-expanded", String(isOpen));
}

function toggleMoreWorks() {
  const { dropdown } = getMoreWorksElements();

  if (!dropdown) {
    return;
  }

  setMoreWorksState(!dropdown.classList.contains("show"));
}

function copyBibTeX() {
  const bibtexElement = document.getElementById("bibtex-code");
  const button = document.querySelector(".copy-bibtex-btn");

  if (!bibtexElement || !button) {
    return;
  }

  const copyText = button.querySelector(".copy-text");
  const bibtexText = bibtexElement.textContent;

  const showCopiedState = () => {
    button.classList.add("copied");
    if (copyText) {
      copyText.textContent = "Cop";
    }

    window.setTimeout(() => {
      button.classList.remove("copied");
      if (copyText) {
        copyText.textContent = "Copy";
      }
    }, 2000);
  };

  const fallbackCopy = () => {
    const textArea = document.createElement("textarea");
    textArea.value = bibtexText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    showCopiedState();
  };

  if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
    navigator.clipboard.writeText(bibtexText).then(showCopiedState).catch(fallbackCopy);
    return;
  }

  fallbackCopy();
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function updateScrollButton() {
  const scrollButton = document.querySelector(".scroll-to-top");

  if (!scrollButton) {
    return;
  }

  scrollButton.classList.toggle("visible", window.pageYOffset > 300);
}

function setupVideoCarouselAutoplay() {
  const carouselVideos = document.querySelectorAll(".results-carousel video");

  if (carouselVideos.length === 0 || typeof IntersectionObserver !== "function") {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;

        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.5 },
  );

  carouselVideos.forEach((video) => {
    observer.observe(video);
  });
}

document.addEventListener("click", (event) => {
  const { container, dropdown } = getMoreWorksElements();

  if (!container || !dropdown) {
    return;
  }

  if (!container.contains(event.target)) {
    setMoreWorksState(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMoreWorksState(false);
  }
});

window.addEventListener("scroll", updateScrollButton);

document.addEventListener("DOMContentLoaded", () => {
  if (window.bulmaCarousel && typeof window.bulmaCarousel.attach === "function") {
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

  setupVideoCarouselAutoplay();
  updateScrollButton();
});
