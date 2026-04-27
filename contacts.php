<?php
  include("database.php");
$fnameErr = $lnameErr = $emailErr = $occuErr = $messageErr = $duplicate= "";

   if($_SERVER["REQUEST_METHOD"] == "POST"){
    


      if(empty($_POST["firstname"])){
        $fnameErr= "Please enter your first name";
      } else {
       $firstname= filter_input(INPUT_POST, "firstname", FILTER_SANITIZE_SPECIAL_CHARS);
      }

      if(empty($_POST["lastname"])){
        $lnameErr= "Please enter your last name";
      } else {
      $lastname= filter_input(INPUT_POST, "lastname", FILTER_SANITIZE_SPECIAL_CHARS);
      }

      if(empty($_POST["email"])){
        $emailErr= "Please enter your email";
      } else {
      $email= filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
      }

      if(empty($_POST["occupation"])){
        $occuErr= "Please enter your occupation";
      } else {
      $occupation= filter_input(INPUT_POST, "occupation", FILTER_SANITIZE_SPECIAL_CHARS);
      }

      if(empty($_POST["message"])){
        $messageErr= "Please enter your message";
      } else {
      $message= filter_input(INPUT_POST, "message", FILTER_SANITIZE_SPECIAL_CHARS);
      }
      
      if (empty($fnameErr) && empty($lnameErr) && empty($emailErr) && empty($occuErr) && empty($messageErr)){
          $sql= "INSERT INTO tbl_testimonials (firstname, lastname, email, occupation, message)
                    VALUES ('$firstname', '$lastname', '$email', '$occupation', '$message')";
                    
                    
                    
                    try{
                        mysqli_query($conn, $sql);
                    }
                    catch(mysqli_sql_exception){
                        $duplicate= "The email is already used.";
                    }
                    
            header("Location: contacts.php?success=1#form");
            exit;
            $successful= "Thnk you for your feedback!";
      }

  }
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
   <link rel="shortcut icon" href="assets/company_logo.png">

  <link rel="stylesheet" href="style.css" />

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link
    href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Lora:ital,wght@0,400..700;1,400..700&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quattrocento:wght@400;700&display=swap"
    rel="stylesheet">

</head>
<header class="contact-header">
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
    <h1 class="contact-title">CONTACT</h1>
  </div>

  <div class="contact-body">
    <div class="contact-info">

      <div class="nav__logo">
        <img src="assets/icon/call.png" alt="logo" />
        <span>Phone No.</span>
        <span class="text">+(63) 916 654 2235</span>
      </div>

      <div class="nav__logo">
        <img src="assets/icon/email.png" alt="logo" />
        <span>E-mail</span>
        <span class="text">homelibrary.est2021@gmail.com</span>
      </div>

      <div class="nav__logo">
        <img src="assets/icon/location.png" alt="logo" />
        <span>Address</span>
        <span class="text">No.0030(3rd Flr. J&F Bldg 3) M.H. Del Pilar St. Poblacion, 1444 Valenzuela,
          Philippines</span>
      </div>

      <div class="nav__logo">
        <img src="assets/icon/time.png" alt="logo" />
        <span>Opening Hours</span>
        <span class="text">Monday - Friday (9:00 AM to 11:00 PM)</span>
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


  <section class="contact-section" id="form">
      <div class="testimonial-title">
          
      <h2>TESTIMONIAL FORM</h2>
        </div>

    <div class="contact-form">
        <?php if (isset($_GET['success'])) : ?>
        <div class="success"><p>Message sent successfully!</p></div>
        <?php endif; ?>

      <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"])?>" method="post">
        <div class="two-col">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="First Name" name="firstname">
            <div class="error"><?php echo $fnameErr; ?></div>
          </div>

          <div class="form-group">
            <input type="text" class="form-control" placeholder="Last Name" name="lastname">
            <div class="error"><?php echo $lnameErr; ?></div>
          </div>
        </div>

        <div class="two-col">
          <div class="form-group">
            <input type="email" class="form-control" placeholder="E-mail" name="email">
            <div class="error"><?php echo $emailErr; ?></div>
            <div class="error"><?php echo $duplicate; ?></div>
          </div>

          <div class="form-group">
            <input type="text" class="form-control" placeholder="Occupation" name="occupation">
            <div class="error"><?php echo $occuErr; ?></div>
          </div>
          
        </div>
        <div class="form-group">
          <textarea rows="5" placeholder="Message" class="form-control" name="message"></textarea>
          <div class="error"><?php echo $messageErr; ?></div>
        </div>
        <div class="button-wrapper">
                    <input type="submit" class="btn contact-submit-btn" value="Send Message">

        </div>
      </form>

      <div>
        <img src="image/contact-png.png" alt="">
      </div>
    </div>
    </div>

    <div class="map" id="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4572.607192656762!2d120.94403387579982!3d14.708097385791087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b38344240c3d%3A0x2a1bef425c394b15!2s15%20Marcelo%20H.%20Del%20Pilar%20St%2C%20Valenzuela%2C%201444%20Metro%20Manila!5e1!3m2!1sfil!2sph!4v1742888815830!5m2!1sfil!2sph"
        width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div class="contact-footer">
      <h3>FOLLOW US</h3>
      <div class="social-links">
        <a href="https://www.facebook.com/homelibrary.est2021" class="fab fa-facebook-f"></a>
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
</body>

</html>

<?php

 


  mysqli_close($conn)
?>