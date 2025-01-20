let LastImage = document.getElementsByClassName("last-img")[0];
let BottomImage = document.getElementsByClassName("bottom-img")[0];
let TopImage = document.getElementsByClassName("top-img")[0];
let CenterImage = document.getElementsByClassName("center-img")[0];
let AboutMe = document.querySelector("#landing h1");

// // Add overflow-x hidden to specific elements
// document.querySelectorAll('#content .content, #dreams .dreams, #cv .cv, #contact .contact').forEach(function(element) {
//   element.style.overflowX = 'hidden';
// });

// parallax effect
window.addEventListener("scroll", function () {
  let value = window.scrollY;

  if (window.innerWidth > 800) {
    // efek parallax aktif
    BottomImage.style.right = value * 0.9 + "px";
    TopImage.style.left = value * 0.9 + "px";
    CenterImage.style.left = value * 0.7 + "px";
    CenterImage.style.top = value * 0.6 + "px";
    LastImage.style.bottom = value * 0.8 + "px";
    AboutMe.style.left = value * 0.5 + "px";
  } else {
    // reset nilai ke posisi awal
    BottomImage.style.right = "0px";
    TopImage.style.left = "0px";
    CenterImage.style.left = "0px";
    CenterImage.style.top = "0px";
    LastImage.style.bottom = "0px";
    AboutMe.style.left = "0px";
  }
});

// parallax efect on scroll paragraph 
$(window).on('scroll', function() {
  $('.paragraph').addClass('active');
  $('.paragraphtranslate').addClass('active');
  $('.headline').addClass('active');
  $(".contact-list").addClass("active");

});

// hamburger menu script
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});









