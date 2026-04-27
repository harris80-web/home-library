
// function openCity(evt, tabName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(tabName).style.display = "block";
//   evt.currentTarget.className += " active";
// }

// document.getElementById("defaultOpen").click();

//   const hamMenu = document.querySelector('hamburger');
//   const offScreenMenu = document.querySelector('off-screen-menu');

// document.addEventListener("DOMContentLoaded", () => {

//   hamMenu.addEventListener('click', () => {
//     hamMenu.classList.toggle('active');
//     offScreenMenu.classList.toggle('active');
//   }, true);
// });

// function hamburgerAct(){
//   hamMenu.classList.toggle('active');
//   offScreenMenu.classList.toggle('active');
// }

// Carousel functionality
// function initializeCarousel(sliderElement) {
//   const list = sliderElement.querySelector('.list');
//   const items = sliderElement.querySelectorAll('.item');
//   const prevBtn = sliderElement.querySelector('.prev');
//   const nextBtn = sliderElement.querySelector('.next');
//   let currentIndex = 0;
//   let itemsPerView = 5; // Changed to 5
//   const gap = 20;

//   function getItemWidth() {
//       return items[0].offsetWidth + gap;
//   }

//   function calculateItemsPerView() {
//       if (window.innerWidth <= 480) {
//           itemsPerView = 2;
//       } else if (window.innerWidth <= 768) {
//           itemsPerView = 3;
//       } else {
//           itemsPerView = 5;
//       }
//       return getItemWidth();
//   }

//   function slideTo(index) {
//       const itemWidth = calculateItemsPerView();
//       currentIndex = index;
//       const offset = -(currentIndex * itemWidth);
//       list.style.transform = `translateX(${offset}px)`; 
//   }

//   prevBtn.addEventListener('click', () => {
//       currentIndex = currentIndex - 1;
//       if (currentIndex < 0) {
//           currentIndex = items.length - itemsPerView;
//       }
//       slideTo(currentIndex);
//   });

//   nextBtn.addEventListener('click', () => {
//       currentIndex = currentIndex + 1;
//       if (currentIndex > items.length - itemsPerView) {
//           currentIndex = 0;
//       }
//       slideTo(currentIndex);
//   });

//   function updateLayout() {
//       calculateItemsPerView();
//       slideTo(currentIndex);
//   }

//   window.addEventListener('resize', updateLayout);
//   updateLayout();
// }

// // Apply carousel to all sliders
// document.querySelectorAll('.slider').forEach(slider => {
//   initializeCarousel(slider);
// });



// window.addEventListener("load", function () {
//   const swiperConfigs = {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     loop: true,
//     loopAdditionalSlides: 5,
//     observer: true,
//     observeParents: true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     breakpoints: {
//       480: {
//         slidesPerView: 2
//       },
//       768: {
//         slidesPerView: 3
//       },
//       1024: {
//         slidesPerView: 5
//       }
//     }
//   };
  
//   window.addEventListener("load", function () {
//   // your Swiper initializations
//   new Swiper(".hotCoffeeSwiper", swiperConfigs);
//   new Swiper(".icedCoffeeSwiper", swiperConfigs);
//   new Swiper(".nonCoffeeSwiper", swiperConfigs);
//   new Swiper(".fruitSodaSwiper", swiperConfigs);
//   new Swiper(".foodsSwiper", swiperConfigs);
//   new Swiper(".fictionSwiper", swiperConfigs);
//   new Swiper(".nonFictionSwiper", swiperConfigs);
  
// });

  
// });







function searchProducts() {
  const input = document.getElementById("productSearch").value.toLowerCase();
  const allProducts = [
    {
      name: "The friendship book 2016",
      image: "./assets/books/THEFRIENDSHIPBOOK2016-SELFHELP-NONFICTION.jpg",
      price: "₱199",
      link: "https://shopee.ph/00185-HOME-LIBRARY-THE-FRIENDSHIP-BOOK-2016-SELF-HELP-NON-FICTION-i.64819058.24035701794?sp_atk=7e3ff7d5-2ad0-43ce-b695-06f8335f1768&xptdk=7e3ff7d5-2ad0-43ce-b695-06f8335f1768"
    },
    {
      name: "How to succeed at modern dating",
      image: "./assets/books/SWIPELEFT-HOWTOSUCCEEDATMODERNDATING-SELFHELPBOOK.jpg",
      price: "₱180",
      link: "https://shopee.ph/00109-HOME-LIBRARY-SWIPE-LEFT-HOW-TO-SUCCEED-AT-MODERN-DATING-SELF-HELP-BOOK-i.64819058.28005817218?sp_atk=9f634682-c09c-4804-9904-22b4bd4e26a3&xptdk=9f634682-c09c-4804-9904-22b4bd4e26a3"
    },
    {
      name: "The joy of work",
      image: "./assets/books/THEJOYOFWORK-SELF HELP-NONFICTION.jpg",
      price: "₱199",
      link: "https://shopee.ph/00171-HOME-LIBRARY-THE-JOY-OF-WORK-SELF-HELP-NON-FICTION-i.64819058.25335651874?sp_atk=ef356398-8fff-495e-8e41-fb93ddcddfbf&xptdk=ef356398-8fff-495e-8e41-fb93ddcddfbf"
    },
    {
      name: "The thing about calories",
      image: "./assets/books/THETHINGABOUTCALORIES-SELF-HELP-BOOK.jpg",
      price: "₱99",
      link: "https://shopee.ph/00134-HOME-LIBRARY-THE-THING-ABOUT-CALORIES-PB-SELF-HELP-BOOK-i.64819058.27505824840?sp_atk=97a469b8-7e07-4903-a6b2-a27976d744d8&xptdk=97a469b8-7e07-4903-a6b2-a27976d744d8"
    },
    {
      name: "What would Charlie Sheen do",
      image: "./assets/books/WHATWOULDCHARLIESHEENDO-SELFHELP-NONFICTION.jpg",
      price: "₱149",
      link: "https://shopee.ph/00174-HOME-LIBRARY-WHAT-WOULD-CHARLIE-SHEEN-DO-SELF-HELP-NON-FICTION-i.64819058.29360212237?sp_atk=bb83f45e-0701-4ac2-a92b-ca5291311048&xptdk=bb83f45e-0701-4ac2-a92b-ca5291311048"
    },
    {
      name: "Codependent no more",
      image: "./assets/books/CODEPENDENTNOMORE-SELFHELP-NONFICTION.jpg",
      price: "₱149",
      link: "https://shopee.ph/001667-HOME-LIBRARY-CODEPENDENT-NO-MORE-SELF-HELP-NON-FICTION-i.64819058.27410188008?sp_atk=dd8a4d19-79e8-4513-9e9c-2779b9ea17bc&xptdk=dd8a4d19-79e8-4513-9e9c-2779b9ea17bc"
    },
    {
      name: "Making the bridge groom's speech",
      image: "./assets/books/MAKINGTHEBRIDEGROOM'SSPEECH-SELFHELP-NONFICTION.jpg",
      price: "₱149",
      link: "https://shopee.ph/00169-HOME-LIBRARY-MAKING-THE-BRIDEGROOM'S-SPEECH-SELF-HELP-NON-FICTION-i.64819058.25835651378?sp_atk=f8c0a920-6d09-417c-a2ef-a97e12829c0e&xptdk=f8c0a920-6d09-417c-a2ef-a97e12829c0e"
    },
    {
      name: "Recovery",
      image: "./assets/books/RECOVERY-RUSSELLBRAND-SELFHELP-NONFICTION.jpg",
      price: "₱249",
      link: "https://shopee.ph/00183-HOME-LIBRARY-RECOVERY-RUSSELL-BRAND-SELF-HELP-NON-FICTION-i.64819058.27110328422?sp_atk=f8d7e3f1-8a4e-48ae-83ce-a90f48eface6&xptdk=f8d7e3f1-8a4e-48ae-83ce-a90f48eface6"
    },
    {
      name: "1001 little health miracles",
      image: "./assets/books/1001LITTLEHEALTHMIRACLES-NONFICTION.jpg",
      price: "₱149",
      link: "https://shopee.ph/00168-HOME-LIBRARY-1001-LITTLE-HEALTH-MIRACLES-SELF-HELP-NON-FICTION-i.64819058.28760193403?sp_atk=21ce5fbc-cc37-4ca0-bb15-e23284909e04&xptdk=21ce5fbc-cc37-4ca0-bb15-e23284909e04"
    },
    {
      name: "3-day energy fast",
      image: "./assets/books/3-DAYENERGYFAST-NON FICTION.jpg",
      price: "₱149",
      link: "https://shopee.ph/00175-HOME-LIBRARY-3-DAY-ENERGY-FAST-HEALTH-NON-FICTION-i.64819058.27460209392?sp_atk=e3a25dd3-f0d4-40f1-b1a6-40128d530e45&xptdk=e3a25dd3-f0d4-40f1-b1a6-40128d530e45"
    },
    {
      name: "American hedge fund",
      image: "./assets/books/ANAMERICANHEDGEFUND-BUSINESS-NONFICTION.jpg",
      price: "₱149",
      link: "https://shopee.ph/00181-HOME-LIBRARY-AN-AMERICAN-HEDGE-FUND-BUSINESS-NON-FICTION-i.64819058.26260333303?sp_atk=bffa4fc9-5f76-4792-88b1-6e098859350e&xptdk=bffa4fc9-5f76-4792-88b1-6e098859350e"
    },
    {
      name: "Eating for England",
      image: "./assets/books/EATINGFORENGLANDOOD-NON FICTION.jpg",
      price: "₱149",
      link: "https://shopee.ph/00176-HOME-LIBRARY-EATING-FOR-ENGLAND-FOOD-HISTORY-NON-FICTION-i.64819058.26760214505?sp_atk=9221292f-c5fc-4a68-b7b0-a26b964881fa&xptdk=9221292f-c5fc-4a68-b7b0-a26b964881fa"
    },
    {
      name: "Chasing the dram finding spirit whisky",
      image: "./assets/books/CHASINGTHEDRAMFINDINGSPIRITWHISKY-FOOD&DRINK-NON-FICTION.jpg",
      price: "₱149",
      link: "https://shopee.ph/00172-HOME-LIBRARY-CHASING-THE-DRAM-FINDING-SPIRIT-WHISKY-FOOD-DRINK-NON-FICTION-i.64819058.26360205403?sp_atk=3b644098-8f18-49d4-8a08-f07ad9116bf1&xptdk=3b644098-8f18-49d4-8a08-f07ad9116bf1"
    },
    {
      name: "Defensive rapture",
      image: "./assets/books/DEFENSIVERAPTURE-POETRY-NONFICTION.jpg",
      price: "₱149",
      link: "https://shopee.ph/00170-HOME-LIBRARY-DEFENSIVE-RAPTURE-POETRY-NON-FICTION-i.64819058.25735651495?sp_atk=26cc0ed5-d9dd-4675-876c-b6e7f1d542ab&xptdk=26cc0ed5-d9dd-4675-876c-b6e7f1d542ab"
    },
    {
      name: "Hurrah for gin",
      image: "./assets/books/HURRAHFORGIN-NONFICTION.jpg",
      price: "₱249",
      link: "https://shopee.ph/00142-HOME-LIBRARY-HURRAH-FOR-GIN-HB-SELF-HELP-NON-FICTION-i.64819058.28655942297?sp_atk=41dac001-9202-451f-9dd7-2b8162d8acaa&xptdk=41dac001-9202-451f-9dd7-2b8162d8acaa"
    },
    {
      name: "Seven secrets of successful parenting",
      image: "./assets/books/SEVENSECRETSOFSUCCESSFULPARENTING-NONFICTION.jpg",
      price: "₱199",
      link: "https://shopee.ph/00180-HOME-LIBRARY-SEVEN-SECRETS-OF-SUCCESSFUL-PARENTING-FAMILY-NON-FICTION-i.64819058.29710327276?sp_atk=7d723453-56f6-482b-a092-0f89ecdde9d9&xptdk=7d723453-56f6-482b-a092-0f89ecdde9d9"
    },
    {
      name: "The easy way to control alcohol",
      image: "./assets/books/THEEASYWAYTOCONTROLALCOHOL-SELF-HELP-NONFICTION.jpg",
      price: "₱149",
      link: "https://shopee.ph/00179-HOME-LIBRARY-THE-EASY-WAY-TO-CONTROL-ALCOHOL-SELF-HELP-NON-FICTION-i.64819058.28210331962?sp_atk=7caf75a1-1227-4ee8-bad9-f432fdb7d6ab&xptdk=7caf75a1-1227-4ee8-bad9-f432fdb7d6ab"
    },
    {
      name: "The unmumsy mum",
      image: "./assets/books/THEUNMUMSYMUM-NONFICTION.jpg",
      price: "₱249",
      link: "https://shopee.ph/00186-HOME-LIBRARY-THE-UNMUMSY-MUM-PARENTING-NON-FICTION-i.64819058.24635705324?sp_atk=f1547672-384c-46f0-9cdf-66fb255711f3&xptdk=f1547672-384c-46f0-9cdf-66fb255711f3"
    },
    {
      name: "Why children matter",
      image: "./assets/books/WHYCHILDRENMATTER-NONFICTION.jpg",
      price: "₱149",
      link: "https://shopee.ph/00182-HOME-LIBRARY-WHY-CHILDREN-MATTER-PARENTING-NON-FICTION-i.64819058.27310323558?sp_atk=9182308d-8ef3-44d8-9ad7-4f5d3f0bf9b2&xptdk=9182308d-8ef3-44d8-9ad7-4f5d3f0bf9b2"
    },
    {
      name: "Work like a woman a manifesto for change",
      image: "./assets/books/WORKLIKEAWOMANAMANIFESTOFORCHANGE-SELFHELP-NONFICTION.jpg",
      price: "₱149",
      link: "https://shopee.ph/00173-HOME-LIBRARY-WORK-LIKE-A-WOMAN-A-MANIFESTO-FOR-CHANGE-SELF-HELP-NON-FICTION-i.64819058.26710211031?sp_atk=5fd0d947-d4fb-4984-935f-a6e37831152c&xptdk=5fd0d947-d4fb-4984-935f-a6e37831152c"
    },
    {
      name: "Windows Magic",
      image: "./assets/books/COMPUTERWIZARD-WINDOWSMAGIC-EDUCATIONAL.jpg",
      price: "₱99",
      link: "https://shopee.ph/00125-HOME-LIBRARY-COMPUTER-WIZARD-WINDOWS-MAGIC-STEP-BY-STEP-ACTIVITIES-PB-EDUCATIONAL-i.64819058.26305825598?sp_atk=ddbe7786-d8ff-482e-b9f1-24c46f60babd&xptdk=ddbe7786-d8ff-482e-b9f1-24c46f60babd"
    },
    {
      name: "13 Artists children should know",
      image: "./assets/books/13ARTISTSCHILDRENSHOULDKNOW-EDUCATIONALBOOK.jpg",
      price: "₱250",
      link: "https://shopee.ph/00088-HOME-LIBRARY-13-ARTISTS-CHILDREN-SHOULD-KNOW-HB-EDUCATIONAL-BOOK-i.64819058.28405387742?sp_atk=20884a8c-1591-4a08-88a4-673a7e6edc2e&xptdk=20884a8c-1591-4a08-88a4-673a7e6edc2e"
    },
    {
      name: "Animals around the world",
      image: "./assets/books/ANIMALSAROUNDTHEWORLD-EDUCATIONALBOOK.jpg",
      price: "₱250",
      link: "https://shopee.ph/00114-HOME-LIBRARY-LIFT-THE-FLAP-ANIMALS-AROUND-THE-WORLD-BOARD-BOOK-EDUCATIONAL-BOOK-i.64819058.28355818550?sp_atk=84854b41-5bed-47c8-b95c-471100462a19&xptdk=84854b41-5bed-47c8-b95c-471100462a19"
    },
    {
      name: "A sense of place",
      image: "./assets/books/ASENSEOFPLACE-EDUCATIONALBOOKFORKIDS.jpg",
      price: "₱99",
      link: "https://shopee.ph/00129-HOME-LIBRARY-A-SENSE-OF-PLACE-PB-EDUCATIONAL-BOOK-FOR-KIDS-i.64819058.27805823829?sp_atk=7e4d9335-6a7b-48df-a112-20b1b61f7a8c&xptdk=7e4d9335-6a7b-48df-a112-20b1b61f7a8c"
    },
    {
      name: "Coding essentials",
      image: "./assets/books/CODINGESSENTIALS-EDUCATIONALBOOK-ACTIVITYBOOK.jpg",
      price: "₱80",
      link: "https://shopee.ph/00079-HOME-LIBRARY-CODING-ESSENTIALS-PB-EDUCATIONAL-BOOK-ACTIVITY-BOOK-i.64819058.26705371188?sp_atk=a8b4ba1b-7834-4647-9cad-dc3d47b29140&xptdk=a8b4ba1b-7834-4647-9cad-dc3d47b29140"
    },
    {
      name: "Word magic",
      image: "./assets/books/COMPUTERWIZARD-WORDMAGIC-EDUCATIONALFORKID.jpg",
      price: "₱99",
      link: "https://shopee.ph/00126-HOME-LIBRARY-COMPUTER-WIZARD-WORD-MAGIC-STEP-BY-STEP-ACTIVITIES-PB-EDUCATIONAL-FOR-KID-i.64819058.26705823359?sp_atk=a2f8b274-a9cd-4396-91f7-6349aff720d7&xptdk=a2f8b274-a9cd-4396-91f7-6349aff720d7"
    },
    {
      name: "Brontosaurus",
      image: "./assets/books/DINOSAURLIBRARY-BRONTOSAURUS-EDUCATIONALBOOK.jpg",
      price: "₱150",
      link: "https://shopee.ph/00040-HOME-LIBRARY-DINOSAUR-LIBRARY-BRONTOSAURUS-HB-EDUCATIONAL-BOOK-i.64819058.26404884441?sp_atk=ff0c6cb0-5bb5-41e9-9bfe-c7b851d7c45c&xptdk=ff0c6cb0-5bb5-41e9-9bfe-c7b851d7c45c"
    },
    {
      name: "Can you feel the force",
      image: "./assets/books/DKCANYOUFEELTHEFORCE-EDUCATIONALBOOK.jpg",
      price: "₱350",
      link: "https://shopee.ph/00085-HOME-LIBRARY-DK-CAN-YOU-FEEL-THE-FORCE-HB-EDUCATIONAL-BOOK-i.64819058.29205384695?sp_atk=eae63d25-1084-45d3-9406-cbc5650852ce&xptdk=eae63d25-1084-45d3-9406-cbc5650852ce"
    },
    {
      name: "Explorers and faraway places",
      image: "./assets/books/EXPLORERSANDFARAWAYPLACES-EDUCATIONALBOOK.jpg",
      price: "₱90",
      link: "https://shopee.ph/00080-HOME-LIBRARY-EXPLORERS-AND-FARAWAY-PLACES-PB-EDUCATIONAL-BOOK-i.64819058.29755384322?sp_atk=ff5d049d-3c80-4f60-aec9-bd8743183d55&xptdk=ff5d049d-3c80-4f60-aec9-bd8743183d55"
    },
    {
      name: "Fun with science water",
      image: "./assets/books/FUNWITHSCIENCEWATER-EDUCATIONALBOOK.jpg",
      price: "₱80",
      link: "https://shopee.ph/00044-HOME-LIBRARY-FUN-WITH-SCIENCE-WATER-PB-EDUCATIONAL-BOOK-i.64819058.28854893407?sp_atk=24f895cc-ade9-4629-baea-b6fee80fb37b&xptdk=24f895cc-ade9-4629-baea-b6fee80fb37b"
    },
    {
      name: "How my body works the muscles",
      image: "./assets/books/HOWMYBODYWORKS-THEMUSCLES-EDUCATIONALBOOK.jpg",
      price: "₱90",
      link: "https://shopee.ph/00041-HOME-LIBRARY-HOW-MY-BODY-WORKS-THE-MUSCLES-HB-EDUCATIONAL-BOOK-i.64819058.26154890130?sp_atk=b0b0354c-0820-4eff-8897-5f1f4fa1b0dc&xptdk=b0b0354c-0820-4eff-8897-5f1f4fa1b0dc"
    },
    {
      name: "It's the times tables rap",
      image: "./assets/books/IT'STHETIMETABLESRAP-BOARDBOOK-EDUCATIONALBOOK.jpg",
      price: "₱150",
      link: "https://shopee.ph/00123-HOME-LIBRARY-IT'S-THE-TIME-TABLES-RAP-BOARD-BOOK-EDUCATIONAL-BOOK-i.64819058.26855823091?sp_atk=097ce158-028d-4e70-8a97-d02740245276&xptdk=097ce158-028d-4e70-8a97-d02740245276"
    },
    {
      name: "My first number",
      image: "./assets/books/MYFIRSTNUMBER-EDUCATIONALBOOK.jpg",
      price: "₱150",
      link: "https://shopee.ph/00082-HOME-LIBRARY-MY-FIRST-NUMBER-HB-EDUCATIONAL-BOOK-i.64819058.27205384497?sp_atk=5d44528a-5d53-4c83-bd06-896baae7a771&xptdk=5d44528a-5d53-4c83-bd06-896baae7a771"
    },
    {
      name: "Nature stat project",
      image: "./assets/books/NATURESTATPROJECTBOOK-EDUCATIONALBOOK.jpg",
      price: "₱30",
      link: "https://shopee.ph/00119-HOME-LIBRARY-NATURE-STAT-PROJECT-BOOK-PB-EDUCATIONAL-BOOK-i.64819058.26655822301?sp_atk=b3d8e8b1-b6db-4eaa-8217-b8cd0b3732c3&xptdk=b3d8e8b1-b6db-4eaa-8217-b8cd0b3732c3"
    },
    {
      name: "On the road",
      image: "./assets/books/ONTHEROAD-EDUCATIONALBOOKFORKIDS.jpg",
      price: "₱120",
      link: "https://shopee.ph/00127-HOME-LIBRARY-ON-THE-ROAD-HB-EDUCATIONAL-BOOK-FOR-KIDS-i.64819058.25733746355?sp_atk=2398daee-2fa5-46f7-8c14-7a688208e282&xptdk=2398daee-2fa5-46f7-8c14-7a688208e282"
    },
    {
      name: "Oxford first encyclopedia",
      image: "./assets/books/OXFORDFIRSTENCYCLOPEDIA-EDUCATIONALBOOK.jpg",
      price: "₱280",
      link: "https://shopee.ph/00037-HOME-LIBRARY-OXFORD-FIRST-ENCYCLOPEDIA-PB-EDUCATIONAL-BOOK-i.64819058.25833266573?sp_atk=8821583d-b8a2-40fa-9d0e-315b4b720e0a&xptdk=8821583d-b8a2-40fa-9d0e-315b4b720e0a"
    },
    {
      name: "Real romans digital time traveller",
      image: "./assets/books/REALROMANSDIGITALTIMETRAVELLER-HISTORY-EDUCATIONALBOOK.jpg",
      price: "₱150",
      link: "https://shopee.ph/00115-HOME-LIBRARY-REAL-ROMANS-DIGITAL-TIME-TRAVELLER-HB-HISTORY-EDUCATIONAL-BOOK-i.64819058.24433743821?sp_atk=d6cebce8-85ec-4e67-b867-95dc0e6d9c1b&xptdk=d6cebce8-85ec-4e67-b867-95dc0e6d9c1b"
    },
    {
      name: "Ripley's human body believe it or not",
      image: "./assets/books/RIPLEY'SHUMANBODYBELIEVEITORNOT!-EDUCATIONALBOOK.jpg",
      price: "₱250",
      link: "https://shopee.ph/00039-HOME-LIBRARY-RIPLEY'S-HUMAN-BODY-BELIEVE-IT-OR-NOT!-HB-EDUCATIONAL-BOOK-i.64819058.23864730555?sp_atk=86eade28-c4c4-4ce3-873b-43a37aa51a6f&xptdk=86eade28-c4c4-4ce3-873b-43a37aa51a6f"
    },
    {
      name: "Silver burdetteginn science discovery works",
      image: "./assets/books/SILVERBURDETTEGINNSCIENCEDISCOVERYWORKS-EDUCATIONALBOOK.jpg",
      price: "₱380",
      link: "https://shopee.ph/00049-HOME-LIBRARY-SILVER-BURDETTE-GINN-SCIENCE-DISCOVERY-WORKS-HB-EDUCATIONAL-BOOK-i.64819058.27254898979?sp_atk=f236d209-4bef-42e2-bfb7-9cc1cf09a2af&xptdk=f236d209-4bef-42e2-bfb7-9cc1cf09a2af"
    },
    {
      name: "The beano book of amazing facts",
      image: "./assets/books/THEBEANOBOOKOFAMIZINGFACTS-EDUCATIONALBOOK.jpg",
      price: "₱180",
      link: "https://shopee.ph/00117-HOME-LIBRARY-THE-BEANO-BOOK-OF-AMIZING-FACTS-PB-EDUCATIONAL-BOOK-i.64819058.29855819292?sp_atk=1457864a-1b6e-4c42-a9ca-cc2e8e9be699&xptdk=1457864a-1b6e-4c42-a9ca-cc2e8e9be699"
    },
    {
      name: "The gaia atlas of planet management",
      image: "./assets/books/THEGAIAATLASOFPLANETMANAGEMENT-EDUCATIONALBOOK.jpg",
      price: "₱350",
      link: "https://shopee.ph/00113-HOME-LIBRARY-THE-GAIA-ATLAS-OF-PLANET-MANAGEMENT-PB-EDUCATIONAL-BOOK-i.64819058.27205821128?sp_atk=1c414838-446d-4994-854b-025a66fc1ae2&xptdk=1c414838-446d-4994-854b-025a66fc1ae2"
    },
    {
      name: "The weetabix illustrated british history book",
      image: "./assets/books/THEWEETABIXILLUSTRATEDBRITISHHISTORYBOOK-EDUCATIONALBOOK.jpg",
      price: "₱99",
      link: "https://shopee.ph/00130-HOME-LIBRARY-THE-WEETABIX-ILLUSTRATED-BRITISH-HISTORY-BOOK-PB-EDUCATIONAL-BOOK-i.64819058.28555826549?sp_atk=55b98f32-af98-482e-bd59-9a3ead7832ec&xptdk=55b98f32-af98-482e-bd59-9a3ead7832ec"
    },
    {
      name: "The what on earth? wall book timeline of british history",
      image: "./assets/books/THEWHATONEARTHWALLBOOKTIMELINEOFBRITISHHISTORY-EDUCATIONALBOOK.jpg",
      price: "₱180",
      link: "https://shopee.ph/00046-HOME-LIBRARY-THE-WHAT-ON-EARTH-WALLBOOK-TIMELINE-OF-BRITISH-HISTORY-HB-EDUCATIONAL-BOOK-i.64819058.28854897592?sp_atk=4a05c143-07d3-4d7a-8b72-b9291d5aed08&xptdk=4a05c143-07d3-4d7a-8b72-b9291d5aed08"
    },
    {
      name: "A world of movement",
      image: "./assets/books/WORLDWATCH2-AWORLDOFMOVEMENT-EDUCATIONALBOOK.jpg",
      price: "₱80",
      link: "https://shopee.ph/00043-HOME-LIBRARY-WORLD-WATCH-2-A-WORLD-OF-MOVEMENT-PB-EDUCATIONAL-BOOK-i.64819058.27004889369?sp_atk=79f339e9-285f-4427-83c2-87065616f346&xptdk=79f339e9-285f-4427-83c2-87065616f346"
    },{
      name: "A children's book of verse",
      image: "./assets/books/ACHILDREN'SBOOKOFVERSE-BOOKFORKIDS.jpg",
      price: "₱250",
      link: "https://shopee.ph/00005-HOME-LIBRARY-A-CHILDREN'S-BOOK-OF-VERSE-HB-BOOK-FOR-KIDS-i.64819058.29504681183?sp_atk=a882ac64-7d08-4cdb-860f-ed598bb91e47&xptdk=a882ac64-7d08-4cdb-860f-ed598bb91e47"
    },{
      name: "A letter to Santa",
      image: "./assets/books/ALETTERTOSANTA-BOOK FOR KIDS.jpg",
      price: "₱250",
      link: "https://shopee.ph/00022-HOME-LIBRARY-A-LETTER-TO-SANTA-HB-PADDED-COVER-BOOK-FOR-KIDS-i.64819058.26054874201?sp_atk=48b48284-8612-4eff-bdc3-6105f023a13e&xptdk=48b48284-8612-4eff-bdc3-6105f023a13e"
    },{
      name: "Alex II magnum force",
      image: "./assets/books/ALEXIIMAGNUMFORCE-BOOKFORKIDS.jpg",
      price: "₱80",
      link: "https://shopee.ph/00141-HOME-LIBRARY-ALEX-II-MAGNUM-FORCE-PB-COMICS-BOOK-FOR-KIDS-i.64819058.29155942088?sp_atk=f7c7f3b5-51b3-4150-aa3b-f1da187c740b&xptdk=f7c7f3b5-51b3-4150-aa3b-f1da187c740b"
    },{
      name: "An aussie night before christmas",
      image: "./assets/books/ANAUSSIENIGHTBEFORECHRISTMAS-BOOKFORKIDS.jpg",
      price: "₱180",
      link: "https://shopee.ph/00008-HOME-LIBRARY-AN-AUSSIE-NIGHT-BEFORE-CHRISTMAS-HB-BOOK-FOR-KIDS-i.64819058.24633168488?sp_atk=4060b84b-0063-47de-b025-0930b6aacc0b&xptdk=4060b84b-0063-47de-b025-0930b6aacc0b"
    },{
      name: "Animals tensil book",
      image: "./assets/books/ANIMALSTENSILBOOK-BOOKFORKIDS.jpg",
      price: "₱250",
      link: "https://shopee.ph/00092-HOME-LIBRARY-ANIMAL-STENSIL-BOOK-BB-BOOK-FOR-KIDS-i.64819058.28805443223?sp_atk=39a94747-0adb-4107-acd4-4e590cdf3b69&xptdk=39a94747-0adb-4107-acd4-4e590cdf3b69"
    },{
      name: "Christmas",
      image: "./assets/books/CHRISTMAS-BOOKFORKIDS.jpg",
      price: "₱99",
      link: "https://shopee.ph/00075-HOME-LIBRARY-CHRISTMAS-PB-BOOK-FOR-KIDS-i.64819058.28205366997?sp_atk=9473e284-17d8-481c-a762-7ef8b9c0380f&xptdk=9473e284-17d8-481c-a762-7ef8b9c0380f"
    },{
      name: "Cinderella",
      image: "./assets/books/CINDERELLA-SHORTSTORIES-BOOKFORKIDS.jpg",
      price: "₱30",
      link: "https://shopee.ph/00161-HOME-LIBRARY-CINDERELLA-SHORT-STORIES-BOOK-FOR-KIDS-i.64819058.24434876753?sp_atk=e1a99ec2-0454-4ce8-a4c1-cdd187e268ad&xptdk=e1a99ec2-0454-4ce8-a4c1-cdd187e268ad"
    },{
      name: "Double trouble",
      image: "./assets/books/DOUBLETROUBLE-USBORNEVERYFIRSTREADINGBOOK1-BOOKFORKIDS.jpg",
      price: "₱150",
      link: "https://shopee.ph/00151-HOME-LIBRARY-DOUBLE-TROUBLE-USBORNE-VERY-FIRST-READING-BOOK-1-BOOK-FOR-KIDS-i.64819058.27958151457?sp_atk=cb37fd72-a248-49ea-aaaa-27b5b42f23fd&xptdk=cb37fd72-a248-49ea-aaaa-27b5b42f23fd"
    },{
      name: "Eddie and dog",
      image: "./assets/books/EDDIEANDDOG-BOOKFORKIDS.jpg",
      price: "₱99",
      link: "https://shopee.ph/00073-HOME-LIBRARY-EDDIE-AND-DOG-PB-BOOK-FOR-KIDS-i.64819058.29755364463?sp_atk=bd485e11-a37a-43b6-9a4d-4dc6cc148b82&xptdk=bd485e11-a37a-43b6-9a4d-4dc6cc148b82"
    },{
      name: "Fantasy phonics",
      image: "./assets/books/FANTASYPHONICS-CORE BOOK-BOOKFORKIDS.jpg",
      price: "₱180",
      link: "https://shopee.ph/00013-HOME-LIBRARY-FANTASY-PHONICS-CORE-BOOK-HB-BOOK-FOR-KIDS-i.64819058.27704688114?sp_atk=ca8a9b4b-c802-45c5-8e73-e93451e2915e&xptdk=ca8a9b4b-c802-45c5-8e73-e93451e2915e"
    },{
      name: "Favourite nursery rhymes",
      image: "./assets/books/FAVOURITENURSEYRHYMES-BOOKFORKIDS.jpg",
      price: "₱180",
      link: "https://shopee.ph/00003-HOMELIBRARY-FAVOURITE-NURSEY-RHYMES-HB-BOOK-FOR-KIDS-i.64819058.29204677459?sp_atk=392c4e34-45f3-405a-871b-8bb9cc35645e&xptdk=392c4e34-45f3-405a-871b-8bb9cc35645e"
    },{
      name: "Flora's blanket",
      image: "./assets/books/FLORA'SBLANKET-BOOKFORKIDS.jpg",
      price: "₱150",
      link:"https://shopee.ph/00016-HOME-LIBRARY-FLORA'S-BLANKET-HB-BOOK-FOR-KIDS-i.64819058.27804696433?sp_atk=050c3999-cb91-4341-9358-b878c8366a73&xptdk=050c3999-cb91-4341-9358-b878c8366a73"
    },{
      name: "Freddie and the fairy",
      image: "./assets/books/FREDDIEANDTHEFAIRY-BOOKFORKIDS.jpg",
      price: "₱99",
      link: "https://shopee.ph/00059-HOME-LIBRARY-FREDDIE-AND-THE-FAIRY-PB-BOOK-FOR-KIDS-i.64819058.24583378838?sp_atk=acf025e4-3919-4182-a24a-4b99cc12d035&xptdk=acf025e4-3919-4182-a24a-4b99cc12d035"
    },{
      name: "Frog and duck/Frog and pig",
      image: "./assets/books/FROGANDDUCK-FROGANDPIG-BIG2IN1-BOARDBOOK-BOOKFORKIDS.jpg",
      price: "₱150",
      link: "https://shopee.ph/00029-HOME-LIBRARY-FROG-AND-DUCK-FROG-AND-PIG-BIG-2-IN-1-BOARD-BOOK-BOOK-FOR-KIDS-i.64819058.27504802621?sp_atk=9f1b241e-ac61-4faa-8b16-8333a38945dc&xptdk=9f1b241e-ac61-4faa-8b16-8333a38945dc"
    },{
      name: "Goldilocks and the three dinosaurs",
      image: "./assets/books/GOLDILOCKSANDTHETHREEDINOSAURS-BOOKFORKIDS.jpg",
      price: "₱99",
      link: "https://shopee.ph/00164-HOME-LIBRARY-GOLDILOCKS-AND-THE-THREE-DINOSAURS-BOOK-FOR-KIDS-i.64819058.27258153797?sp_atk=21944e49-907b-41e9-94ff-f825e4b2966f&xptdk=21944e49-907b-41e9-94ff-f825e4b2966f"
    },{
      name: "Great lies to tell small kids",
      image: "./assets/books/GREATLIESTOTELLSMALLKIDS-BOOKFORKIDS.jpg",
      price: "₱150",
      link: "https://shopee.ph/00098-HOME-LIBRARY-GREAT-LIES-TO-TELL-SMALL-KIDS-HB-COMICS-BOOK-FOR-KIDS-i.64819058.26855473665?sp_atk=920ac950-3957-4e68-a637-80a9d0525925&xptdk=920ac950-3957-4e68-a637-80a9d0525925"
    },{
      name: "Harry and the bucket full of dinosaurs",
      image: "./assets/books/HARRYANDTHEBUCKETFULOFDINOSAURS-BOOKFORKIDS.jpg",
      price: "₱70",
      link: "https://shopee.ph/00099-HOME-LIBRARY-HARRY-AND-THE-BUCKETFUL-OF-DINOSAURS-HB-BOOK-FOR-KIDS-i.64819058.26955473974?sp_atk=d9d09693-9ba7-4a2f-83b5-d86a68791330&xptdk=d9d09693-9ba7-4a2f-83b5-d86a68791330"
    },{
      name: "Here comes mother goose",
      image: "./assets/books/HERECOMESMOTHERGOOSE-BOOKFORKIDS.jpg",
      price: "₱350",
      link: "https://shopee.ph/00028-HOME-LIBRARY-HERE-COMES-MOTHER-GOOSE-HB-BOOK-FOR-KIDS-i.64819058.26454802241?sp_atk=02be0e23-2099-48c5-9aca-41870fdb9293&xptdk=02be0e23-2099-48c5-9aca-41870fdb9293"
    },{
      name: "In search of lemurs",
      image: "./assets/books/INSEARCHOFLEMURS-BOOKFORKIDS.jpg",
      price: "₱220",
      link: "https://shopee.ph/00019-HOME-LIBRARY-IN-SEARCH-OF-LEMURS-HB-BOOK-FOR-KIDS-i.64819058.29154700437?sp_atk=0f00ceed-f7a2-4b1f-b0b0-a7275cb15895&xptdk=0f00ceed-f7a2-4b1f-b0b0-a7275cb15895"
    },{
      name: "Kevin and ketie's christmas adventure",
      image: "./assets/books/KEVINANDKETIE'SCHRISTMASADVENTURE-BOOKFORKIDS.jpg",
      price: "₱200",
      link: "https://shopee.ph/00010-HOME-LIBRARY-KEVIN-AND-KETIE'S-CHRISTMAS-ADVENTURE-HB-BOOK-FOR-KIDS-i.64819058.26754686963?sp_atk=99967b50-aa0a-4578-a023-ea78ea671435&xptdk=99967b50-aa0a-4578-a023-ea78ea671435"
    },{
      name: "Leila's magical monster party",
      image: "./assets/books/LEILA'SMAGICALMONSTERPARTY-BOOKFORKIDS.jpg",
      price: "₱70",
      link: "https://shopee.ph/00101-HOME-LIBRARY-LEILA'S-MAGICAL-MONSTER-PARTY-HB-BOOK-FOR-KIDS-i.64819058.29605474071?sp_atk=50e85bb9-9f76-4501-8112-14826a6e2af4&xptdk=50e85bb9-9f76-4501-8112-14826a6e2af4"
    },{
      name: "Little mist",
      image: "./assets/books/LITTLEMIST-BOOKFORKIDS.jpg",
      price: "₱180",
      link: "https://shopee.ph/00018-HOME-LIBRARY-LITTLE-MIST-HB-BOOK-FOR-KIDS-i.64819058.29104696669?sp_atk=53ca63be-814a-4bdd-bd67-22080fa405c9&xptdk=53ca63be-814a-4bdd-bd67-22080fa405c9"
    },{
      name: "Monster mayhem and monster hit",
      image: "./assets/books/MONSTERMAYHEMANDAMONSTERHIT -2IN1STORY-BOOKFORKIDS.jpg",
      price: "₱150",
      link: "https://shopee.ph/00034-HOME-LIBRARY-MONSTER-MAYHEM-AND-A-MONSTER-HIT-2-IN-1-STORY-HB-BOOK-FOR-KIDS-i.64819058.29854806526?sp_atk=6719922c-f6b6-4e0a-a846-bca383f8b6ea&xptdk=6719922c-f6b6-4e0a-a846-bca383f8b6ea"
    },{
      name: "My first book of things to find animals",
      image: "./assets/books/MYFIRSTBOOKOFTHINGSTOFINDANIMALS-BOARDBOOK-EDUCATIONAL-FORKIDS.jpg",
      price: "₱220",
      link: "https://shopee.ph/00124-HOME-LIBRARY-MY-FIRST-BOOK-OF-THINGS-TO-FIND-ANIMALS-BOARD-BOOK-EDUCATIONAL-FOR-KIDS-i.64819058.26055995446?sp_atk=14bb4785-7526-42ad-9187-9fb4e24e67e1&xptdk=14bb4785-7526-42ad-9187-9fb4e24e67e1"
    }
    // Add more products here...
  ];

  const resultsDiv = document.getElementById("searchResults");
  resultsDiv.innerHTML = ""; // clear previous results
  
  if (input.trim() === "") {
    resultsDiv.style.display = "none";
    return;
  }

  const filtered = allProducts.filter(product =>
    product.name.toLowerCase().includes(input)
  );

  if (filtered.length === 0 && input !== "") {
    resultsDiv.innerHTML = "<p>No products found.</p>";
    return;
  }

  filtered.forEach(product => {
  const link = document.createElement("a");
  link.href = product.link;
  link.classList.add("search-item");

  link.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="search-item-details">
      <h5>${product.name}</h5>
      <h6>${product.price}</h6>
    </div>
  `;

  resultsDiv.appendChild(link);
});

resultsDiv.style.display = "block";
}



const button = document.getElementsByClassName("see-more-button");
const swiperdeact = document.getElementsByClassName(".swiper");

// button.addEventListener("click", seeMore());


function seeMore(){
    swiperdeact.classList.toggle("deact");
    
}






