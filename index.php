<?php
include("database.php"); 
?>
<!DOCTYPE html>
<html lang="en">

<head>
    
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JF26WP4B3E"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JF26WP4B3E');
</script>
    
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
    integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
    crossorigin="anonymous" />
  <link href="https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

  <title>HOME LIBRARY WEBSITE</title>
 <link rel="shortcut icon" href="assets/logo/company_logo.png">
  <link rel="stylesheet" href="style.css" />

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link
    href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Lora:ital,wght@0,400..700;1,400..700&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quattrocento:wght@400;700&display=swap"
    rel="stylesheet">

</head>
<header class="home-header">
  <nav>
    <div class="nav__header">
      <div class="nav__logo">
        <a href="index.php"><img src="assets/logo/company_logo.png" alt="logo" /></a>
      </div>

      <!-- <div class="nav__menu__btn" id="menu-btn">
            <i class="ri-menu-3-line"></i>
        </div> -->

      <div class="ham-menu" id="hamburger">
        <span></span>
        <span></span>
        <span></span>

      </div>

    </div>
    <ul class="nav__links off-screen-menu" id="off-screen-menu">
      <li><a href="index.php">Home</a></li>
      <li><a href="products.html">Products</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="gallery.html">Gallery</a></li>
      <li><a href="contacts.php">Contact</a></li>
    </ul>
  </nav>

  <div class="section__container header__container" id="home">

    <h1 class="home-title"><span>HOME LIBRARY</span></h1>
    <h4>Your cozy corner of infinite stories</h4>
    <p>Offers an extensive collection of books,
      ranging from classic literature to contemporary works,
      perfectly paired with our signature beverages and pastries.
    </p>

    <div class="header__btns">
      <button class="btn"><a href="products.html">See Products</a></button>
    </div>

  </div>
</header>

<body class="loading">
    <!-- From Uiverse.io by 3bdel3ziz-T --> 
<div class="loader">
  <div class="container">
    <div class="coffee-header">
      <div class="coffee-header__buttons"></div>
      <div class="coffee-header__display"></div>
      <div class="coffee-header__details"></div>
    </div>
    <div class="coffee-medium">
      <div class="coffe-medium__exit"></div>
      <div class="coffee-medium__arm"></div>
      <div class="coffee-medium__liquid"></div>
      <div class="smoke one"></div>
      <div class="smoke two"></div>
      <div class="smoke three"></div>
      <div class="smoke four"></div>
      <div class="coffee-medium__cup"></div>
    </div>
  </div>
</div>

    
  <button onclick="topFunction()" id="go-up-btn"><img src="./assets/icon/goUp.png" alt="" id="go-up-img"></button>

  <section class="offers" id="offers">
    <div class="section__container menu__container">
      <h2 class="section__header">WHAT WE OFFER</h2>

      <div class="menu__grid">

        <div class="menu__card">

          <div class="menu-card-circle-out">
            <div class="menu-card-circle">
              <img src="assets/icon/Wcoffee.png" alt="menu" />
            </div>
          </div>

          <div class="menu__card__content">
            <h4>Drinks</h4>
            <button class="btn"><a href="products.html#beverages">See More</a></button>
          </div>
        </div>

        <div class="menu__card">

          <div class="menu-card-circle-out">
            <div class="menu-card-circle">
              <img src="assets/icon/Wpastries.png" alt="menu" />
            </div>
          </div>

          <div class="menu__card__content">
            <h4>Bites</h4>
            <button class="btn"><a href="products.html#foodSection">See More</a></button>
          </div>
        </div>

        <div class="menu__card">

          <div class="menu-card-circle-out">
            <div class="menu-card-circle">
              <img src="assets/icon/Wbook.png" alt="menu" />
            </div>
          </div>

          <div class="menu__card__content">
            <h4>Books</h4>
            <button class="btn"><a href="products.html#books">See More</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="client" id="tesimonials">
    <div class="section__container client__container">
      <h2 class="section__header">TESTIMONIALS</h2>
      <!-- Swiper Container -->
      <div class="swiper">
        <!-- Swiper Wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          
         <?php
          
          $sql = "SELECT * FROM tbl_testimonials ORDER BY id DESC";
          $result = mysqli_query($conn, $sql);
        
            if(mysqli_num_rows($result) > 0){
        
                while ($row = mysqli_fetch_assoc($result)) {
            
                echo "<div class=\"swiper-slide\">";
                echo "<div class=\"client__card\">";
                echo   "<div class=\"client__details\">";
                echo     "<img src=\"assets/logo/company_logo.jpg\" alt=\"client\" />";
                echo     "<div>";
                echo       "<h4>{$row['firstname']} {$row['lastname']}</h4>";
                echo       "<h5>{$row['occupation']}</h5>";
                echo     "</div>";
                echo   "</div>";
                echo   "<p>";
                echo     "{$row['message']}";
                echo   "</p>";
                echo "</div>";
                echo "</div>";
                }
            
            }

        
        ?>
          
         
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>



  <footer>
            <div class="section__container footer__container">
                <div class="footer__col" id="logo-section">
                    <a href="index.php" class="footer__logo">
                        <img src="assets/logo/company_logo.png" alt="logo" />
                    </a>
                    <div class="footer-titleTagline">
                        <h3>HOME LIBRARY</h3>
                        <p>Your cozy space of infinite stories</p>
                    </div>

                </div>
                <div class="footer__col">
                    <ul class="footer__links">
                        <div class="dropdown-btn" id="dropdown-home" onclick="dropdownHome()">
                            <li>
                                <a href="index.php">
                                    Home
                                </a>
                            </li>
                            <img src="./assets/icon/dropdown.png" alt="" id="home-dropdownIcon" class="">
                        </div>

                        <div class="dropdown-content" id="home-dropdown-content">
                            <li>
                                <a href="index.php#offers">
                                    What we offer
                                </a>
                            </li>
                            <li>
                                <a href="index.php#tesimonials">
                                    Testimonials
                                </a>
                            </li>
                        </div>

                    </ul>
                </div>
                <div class="footer__col">

                    <ul class="footer__links">
                        <div class="dropdown-btn" id="dropdown-products" onclick="dropdownProducts()">
                            <li><a href="products.html">Products</a></li>
                            <img src="./assets/icon/dropdown.png" alt="" id="products-dropdownIcon" class="">
                        </div>

                        <div class="dropdown-content" id="products-dropdown-content">
                            <li><a href="products.html#beverages">Beverages</a></li>
                            <li><a href="products.html#foodSection">Bites</a></li>
                            <li><a href="products.html#booksSection">Books</a></li>
                        </div>

                    </ul>
                </div>
                <div class="footer__col">

                    <ul class="footer__links">
                        <div class="dropdown-btn" id="dropdown-about" onclick="dropdownAbout()">
                            <li><a href="about.html">About us</a></li>
                            <img src="./assets/icon/dropdown.png" alt="" id="about-dropdownIcon" class="">
                        </div>
                        <div class="dropdown-content" id="about-dropdown-content">
                            <li><a href="about.html#inspiration">Inspirations</a></li>
                            <li><a href="about.html#people">Owner/Staffs</a></li>
                        </div>

                    </ul>
                </div>
                <div class="footer__col">

                    <ul class="footer__links">
                        <div class="dropdown-btn" id="dropdown-about">
                            <li><a href="gallery.html">Gallery</a></li>
                        </div>
                    </ul>
                </div>
                <div class="footer__col">

                    <ul class="footer__links">
                        <div class="dropdown-btn" id="dropdown-about" onclick="dropdownContacts()">
                            <li><a href="contacts.php">Contact</a></li>
                            <img src="./assets/icon/dropdown.png" alt="" id="contacts-dropdownIcon" class="">
                        </div>
                        <div class="dropdown-content" id="contacts-dropdown-content">
                            <li><a href="contacts.php#form">Form</a></li>
                            <li><a href="contacts.php#map">Map</a></li>
                        </div>

                    </ul>
                </div>
            </div>


            <div class="footer__divider">
                <hr />
                <div class="footer__social">
                    <a href="https://www.facebook.com/homelibrary.est2021"><img src="./assets/icon/facebook.png"
                            alt="facebook icon" class="icon contact-icon" /></a>

                    <a href="contacts.php#map"><img src="./assets/icon/location.png" alt="location icon"
                            class="icon contact-icon" /></a>

                    <a href="mailto:homelibrary.est2021@gmail.com"><img src="./assets/icon/email.png" alt="email icon"
                            class="icon contact-icon" /></a>
                </div>
            </div>

            <div class="footer__bar">
                Copyright ©2025 CRUZDELACRUZ. All rights reserved.
            </div>
        </footer>
  
  

  <script src="https://unpkg.com/scrollreveal"></script>
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script src="https://unpkg.com/scrollreveal"></script>
  <script src="main.js"></script>
  <script src="testimonialCarousel.js"></script>
</body>

</html>

<?php
mysqli_close($conn);
?>