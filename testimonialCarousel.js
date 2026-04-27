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