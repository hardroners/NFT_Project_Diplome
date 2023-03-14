<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <title>Chain It - Home</title>

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">


    <!-- Additional CSS Files -->
    <link rel="stylesheet" href="assets/css/fontawesome.css">
    <link rel="stylesheet" href="assets/css/templatemo-tale-seo-agency.css">
    <link rel="stylesheet" href="assets/css/animate.css">
    <link rel="stylesheet"href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>
    <link rel="stylesheet" href="assets/css/diploma.css">
<!--


-->
  </head>

<body>

  <!-- ***** Preloader Start ***** -->
  <div id="js-preloader" class="js-preloader">
    <div class="preloader-inner">
      <span class="dot"></span>
      <div class="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
  <!-- ***** Preloader End ***** -->

  <!-- ***** Pre-Header Area Start ***** -->
  <div class="pre-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-sm-9">
          <div class="left-info">
            <ul>
              <li><a href="#"><i class="fa fa-phone"></i>+000 0000 0000</a></li>
              <li><a href="#"><i class="fa fa-envelope"></i>support@chainit.com</a></li>
              <li><a href="#"><i class="fa fa-map-marker"></i>Location</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-sm-3">
          <div class="social-icons">
            <ul>
              <li><a href="#"><i class="fab fa-facebook"></i></a></li>
              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
              <li><a href="#"><i class="fab fa-google-plus"></i></a></li>
              <li><a href="authentification/auth-magic.html"><i class="profile">Log in</i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ***** Pre-Header Area End ***** -->

  <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                    <!-- ***** Logo Start ***** -->
                    <a href="index.html" class="logo">
                        <img src="assets/images/logo.png" alt="" style="max-width: 112px;">
                    </a>
                    <!-- ***** Logo End ***** -->
                    <!-- ***** Menu Start ***** -->
                    <ul class="nav">
                      <li class="scroll-to-section"><a href="index.html" class="active">Home</a></li>
                      <li class="scroll-to-section"><a href="index.html#services">Services</a></li>
                      <li class="scroll-to-section"><a href="index.html">About Us</a></li>
                      <li class="scroll-to-section"><a href="faqs.html">FAQ</a></li>
                      <li class="scroll-to-section"><a href="index.html#contact">Contact</a></li>
                      <li class="scroll-to-section"><a href="manage_diploma.html">manage diploma</a></li>
                    </ul>   
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                    <!-- ***** Menu End ***** -->
                </nav>
            </div>
        </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->

  <div class="presentation">
    <img id="diplome" src="assets/images/diplome.jpg">
    <div class="description">
        <div class="description-sub">
            <label><strong>Nom :</strong></label><br>
            <label id="nom">Nom</label>
        </div>
        <div class="description-sub">
            <label><strong>Prénom :</strong></label><br>
            <label id="prenom">Prénom</label>
        </div>
        <div class="description-sub">
            <label><strong>Année :</strong></label><br>
            <label id="annee">Année</label>
        </div>
        <div class="description-sub">
            <label><strong>Filière :</strong></label><br>
            <label id="filiere">Filière</label>
        </div>
        <div class="description-sub">
            <label><strong>Description :</strong></label><br>
            <label id="diplome">Description</label>
        </div>
        <div class="description-sub">
            <label><strong>Jury :</strong></label><br>
            <label id="jury">Jury</label>
        </div>
    </div>
  </div>


  <footer>
    <div class="container">
      <div class="col-lg-12">
        <p> <a href="#">Welcome to Chain It. </a> 
        
        <br>Add your your block to the chain !</p>
      </div>
    </div>
  </footer>


  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
  <script src="./eth/sm.js"></script>
  
  <!-- Bootstrap core JavaScript -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

  <script src="assets/js/custom.js"></script>


<?php
  $token = $_GET['diploma_token'];
  var_dump($token);
  echo '<script type="text/javascript">getNFTMetadata(' .$token.');</script>';

?>

  </body>

</html>