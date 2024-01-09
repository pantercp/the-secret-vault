
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });


function setupToggleButtons(sectionClass) {
  const toggleBtns = document.querySelectorAll(`.${sectionClass} .toggle-button`);

  for (let toggleBtn of toggleBtns) {
    toggleBtn.parentElement.addEventListener('click', (event) => {
      console.log("Click");

      const clickedElement = event.target;
      const hasOpenClass = clickedElement.classList.contains("open") ||
        clickedElement.parentElement.classList.contains("open");

      const openElements = document.querySelectorAll(`.${sectionClass} .open`);
      for (let openElement of openElements) {
        openElement.classList.remove("open");
      }

      if (!hasOpenClass) {
        toggleBtn.classList.toggle("open");
        toggleBtn.parentElement.parentElement.classList.toggle("open");
      }
    });
  }
}

// Call the function for the first section
setupToggleButtons("team-section");

// Call the function for the second section
setupToggleButtons("about-section");



