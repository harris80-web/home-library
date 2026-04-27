new Swiper('.card-wrapper', {
  // Optional parameters
  loop: true,
  spaceBetween: 5,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
        slidesPerView: 1
    },
    360: {
        slidesPerView: 2
    },
    600: {
        slidesPerView: 2
    },
    728: {
        slidesPerView: 3
    },
    1024: {
        slidesPerView: 4
    },
    1200: {
        slidesPerView: 4
    },

  }
});


function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

document.querySelectorAll(".see-more-btn").forEach(button => {
  button.addEventListener("click", () => {
    const category = button.closest(".category");
    const swiper = category.querySelector(".swiper");
    const grid = category.querySelector(".product-grid");

    const isExpanded = grid.style.display === "flex";

    if (!isExpanded) {
      swiper.style.display = "none";
      grid.style.display = "flex";
      button.textContent = "See Less";
    } else {
      grid.style.display = "none";
      swiper.style.display = "block";
      button.textContent = "See More";
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 600) {
    document.querySelectorAll(".category").forEach(category => {
      const swiper = category.querySelector(".swiper");
      const grid = category.querySelector(".product-grid");
      const button = category.querySelector(".see-more-btn");

      if (grid && swiper && button) {
        // Reset to default: swiper visible, grid hidden
        grid.style.display = "none";
        swiper.style.display = "block";
        button.textContent = "See More";
      }
    });
  }
});