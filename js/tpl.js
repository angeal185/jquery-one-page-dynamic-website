
var headerTpl = ("<header class='header' id='particles-js'><div class='container js-scroll-step' id='header'><figure class='logo animated fadeInDown delay-07s'><a href='#'><img src='img/logo.png'></a></figure><h1 class='animated fadeInDown delay-07s Name'></h1><ul class='we-create animated fadeInUp delay-1s'><h4 class='Title'></h4></ul></div></header>");

var navTpl = ("<nav class='Quick-navigation'><a href='#header' class='Quick-navigation-item'>Home</a> <a href='#service' class='Quick-navigation-item'>Services</a> <a href='#Portfolio' class='Quick-navigation-item'>Portfolio</a> <a href='#client' class='Quick-navigation-item'>Clients</a> <a href='#team' class='Quick-navigation-item'>Team</a> <a href='#contact' class='Quick-navigation-item'>Contact</a><div class='Scroll-progress-indicator'></div></nav>");

var serviceTpl = ("<div class='container'><h2>Services</h2><h6 class='Title'></h6><div class='row'><div id='serviceData' class='col-lg-4 col-sm-6 wow fadeInLeft delay-05s'></div><figure class='col-lg-8 col-sm-6 text-right wow fadeInUp delay-02s'><img src='img/imac.png'></figure></div></div>");

var featuredTpl = ("<section class='main-section business-talking' id='featuredTpl'><div class='container'><div class='row'><figure class='col-lg-5 col-sm-4 wow fadeInLeft'><img src='img/iphone.png'></figure><div id='featuredData' class='col-lg-7 col-sm-8 featured-work'><h2>featured work</h2><p class='padding-b Title'></p></div></div></div></section>");

var portfolioTpl = ("<section class='main-section paddind js-scroll-step' id='Portfolio'><div class='container'><h2>Portfolio</h2><h6 class='Title'></h6><div class='portfolioFilter'><ul class='Portfolio-nav wow fadeIn delay-02s'><li><a href='#' data-filter='*' class='current'>All</a></li><li><a href='#' data-filter='.branding'>Branding</a></li><li><a href='#' data-filter='.webdesign'>Web design</a></li><li><a href='#' data-filter='.printdesign'>Print design</a></li><li><a href='#' data-filter='.photography'>Photography</a></li></ul></div></div><div id='portfolioData' class='portfolioContainer wow fadeInUp delay-04s'></div></section>");

var clientTpl = ("<div class='container'><b class='quote-right wow fadeInDown delay-03'><i class='fa-quote-right'></i></b><div class='row'><div class='col-lg-12'><p class='client-part-haead wow fadeInDown delay-05 Lorem'></p></div></div><ul class='client wow fadeIn delay-05s'><li><a href='#'><img src='img/avatar.jpg' style='width:80px'><h3 class='Name'></h3><span class='Title'></span></a></li></ul></div>");

var logoTpl = ("<div class='c-logo-part'><div class='container'><ul><li><a href='#'><img src='img/c-liogo.png'></a></li><li><a href='#'><img src='img/c-liogo.png'></a></li><li><a href='#'><img src='img/c-liogo.png'></a></li><li><a href='#'><img src='img/c-liogo.png'></a></li><li><a href='#'><img src='img/c-liogo.png'></a></li></ul></div></div>");

var teamTpl = ("<div class='container'><h2>team</h2><h6 class='Title'></h6><div id='teamData' class='team-leader-block clearfix'></div></div>");

var businessTpl =("<section class='business-talking'><div class='container'><h2 class='Title'></h2></div></section>");

var contactTpl = ("<div class='row'><div class='col-lg-6 col-sm-7 wow fadeInLeft'><div class='contact-info-box address clearfix'><h3><i class='icon-map-marker'></i>Address:</h3><span>Add address here</span></div><div class='contact-info-box phone clearfix'><h3><i class='fa-phone'></i>Phone:</h3><span>000 000 000</span></div><div class='contact-info-box email clearfix'><h3><i class='fa-pencil'></i>email:</h3><span>admin@admin.com</span></div><div class='contact-info-box hours clearfix'><h3><i class='fa-clock-o'></i>Hours:</h3><span>Add contact hours here</span></div><ul class='social-link'><li class='twitter'><a href='#'><i class='fa-twitter'></i></a></li><li class='facebook'><a href='#'><i class='fa-facebook'></i></a></li><li class='pinterest'><a href='#'><i class='fa-pinterest'></i></a></li><li class='gplus'><a href='#'><i class='fa-google-plus'></i></a></li><li class='dribbble'><a href='#'><i class='fa-dribbble'></i></a></li></ul></div><div class='col-lg-6 col-sm-5 wow fadeInUp delay-05s'><div class='form'><form action='' method='post' role='form' class='contactForm'><div class='form-group'><input type='text' name='name' class='form-control input-text' id='name' placeholder='Your Name' data-rule='minlen:4' data-msg='Please enter at least 4 chars'><div class='validation'></div></div><div class='form-group'><input type='email' class='form-control input-text' name='email' id='email' placeholder='Your Email' data-rule='email' data-msg='Please enter a valid email'><div class='validation'></div></div><div class='form-group'><input type='text' class='form-control input-text' name='subject' id='subject' placeholder='Subject' data-rule='minlen:4' data-msg='Please enter at least 8 chars of subject'><div class='validation'></div></div><div class='form-group'><textarea class='form-control input-text text-area' name='message' rows='5' data-rule='required' data-msg='Please write something for us' placeholder='Message'></textarea><div class='validation'></div></div><div class='text-center'><button type='submit' class='input-btn'>Send Message</button></div></form></div></div></div>");

var footerTpl = ("<div class='container'><div class='footer-logo'><a href='#'><img src='img/logo.png'></a></div><span class='copyright'>2016</span><div class='credits'><p>Ben Eaves</p></div>");

var lightboxTpl = ("<a href='#_' class='lightbox' id='img1'><img src='img/section-bg-1.jpg'></a><a href='#_' class='lightbox' id='img2'><img src='img/section-bg-1.jpg'></a><a href='#_' class='lightbox' id='img3'><img src='img/section-bg-1.jpg'></a><a href='#_' class='lightbox' id='img4'><img src='img/section-bg-1.jpg'></a><a href='#_' class='lightbox' id='img5'><img src='img/section-bg-1.jpg'></a><a href='#_' class='lightbox' id='img6'><img src='img/section-bg-1.jpg'></a>");

$("body").prepend(headerTpl);
$("header").after(navTpl);
$("#service").prepend(serviceTpl);
$("#service").after(featuredTpl);
$("#featuredTpl").after(portfolioTpl);
$("#client").prepend(clientTpl);
$("#client").after(logoTpl);
$("#team").prepend(teamTpl);
$("#team").after(businessTpl);
$("#contact").prepend(contactTpl);
$("#footer").prepend(footerTpl);
$("#footer").prepend(lightboxTpl);

$('#serviceData').jsonRender(serviceData,service);
$('#portfolioData').jsonRender(portfolioData,portfolio);
$('#featuredData').jsonRender(featuredData,featured);
$('#teamData').jsonRender(teamData,team);

$(".Lorem").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.");
$(".Ipsum").html("Integer nec odio");
$(".Name").html("Add Name Here");
$(".Title").html("Add Title Here");

$("i").addClass("fa");

