window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");

  if (loader) {
    loader.classList.add("hidden");

    // Wait until loader is fully hidden
    setTimeout(() => {
      loader.style.display = "none";
      document.body.classList.remove("loading");

      // ✅ Now run the tab logic after loader
      const hash = window.location.hash;

      // Trigger books tab if hash says so
      if (hash === "#books" || hash === "#booksSection") {
        const booksBtn = document.getElementById("booksTabBtn");
        if (booksBtn) {
          openTab({ currentTarget: booksBtn }, "books");
        }
      } else {
        // Default to food tab
        const foodBtn = document.getElementById("defaultOpen");
        if (foodBtn) {
          foodBtn.click();
        }
      }
    }, 500); // match loader fade-out
  } else {
    document.body.classList.remove("loading");

    // Fallback: open food tab if no loader
    const foodBtn = document.getElementById("defaultOpen");
    if (foodBtn) {
      foodBtn.click();
    }
  }
});

const menuBtn = document.getElementById("hamburger");
const navLinks = document.getElementById("off-screen-menu");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBtn.classList.toggle("active");
  document.body.classList.toggle('no-scroll');

  // const isOpen = navLinks.classList.contains("open");
  // menuBtnIcon.setAttribute(
  //   "class",
  //   isOpen ? "ri-close-line" : "ri-menu-3-line"
  // );
});

// navLinks.addEventListener("click", (e) => {
//   navLinks.classList.remove("open");
//   menuBtnIcon.setAttribute("class", "ri-menu-3-line");
// });

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content > div", {
  ...scrollRevealOption,
  delay: 1000,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 1, // Default to 1 slide per view
  spaceBetween: 20, // Space between slides
  loop: true, // Enable infinite loop
  autoplay: {
    delay: 3000, // Auto-slide every 3 seconds
  },
  pagination: {
    el: ".swiper-pagination", // Add pagination
    clickable: true,
  },
  //navigation: {
   // nextEl: ".swiper-button-next", // Add next button
   // prevEl: ".swiper-button-prev", // Add previous button
  //},
  breakpoints: {
    640: {
      slidesPerView: 2, // Show 2 slides on screens >= 640px
    },
    1024: {
      slidesPerView: 3, // Show 3 slides on screens >= 1024px
    },
  },
});




// document.getElementById("dropdown-about").addEventListener("click", function() {
//   document.getElementById("about-dropdown-content").classList.toggle("show");
// })

function dropdownAbout() {
  document.getElementById("about-dropdown-content").classList.toggle("show");
  document.getElementById("about-dropdownIcon").classList.toggle("rotate");
}

function dropdownHome() {
  document.getElementById("home-dropdown-content").classList.toggle("show");
  document.getElementById("home-dropdownIcon").classList.toggle("rotate");

}

function dropdownProducts() {
  document.getElementById("products-dropdown-content").classList.toggle("show");
  document.getElementById("products-dropdownIcon").classList.toggle("rotate");

}

function dropdownContacts() {
  document.getElementById("contacts-dropdown-content").classList.toggle("show");
  document.getElementById("contacts-dropdownIcon").classList.toggle("rotate");

}


// let mybutton = document.getElementById("go-up-btn");

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (mybutton && window.innerWidth >= 600) {
//     if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
//       mybutton.style.display = "block";
//     } else {
//       mybutton.style.display = "none";
//     }
//   }
// }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}


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


window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.classList.add("hidden");
    setTimeout(() => {
      loader.style.display = "none";

      // ✅ Run tab logic AFTER loader finishes
      const hash = window.location.hash;
      if (hash === "#books" || hash === "#booksSection") {
        const btn = document.getElementById("booksTabBtn");
        if (btn) {
          openTab({ currentTarget: btn }, "books");
        }
      } else {
        document.getElementById("defaultOpen").click();
      }

    }, 500);
  }

  document.body.classList.remove("loading");
});



function toggleReadMore(link) {
    const parent = link.parentElement;
    const dots = parent.querySelector(".dots");
    const moreText = parent.querySelector(".more-text");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      moreText.style.display = "none";
      link.textContent = "Read More";
    } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
      link.textContent = "Read Less";
    }
  }


