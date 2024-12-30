let LastImage = document.getElementsByClassName("last-img")[0];
let BottomImage = document.getElementsByClassName("bottom-img")[0];
let TopImage = document.getElementsByClassName("top-img")[0];
let CenterImage = document.getElementsByClassName("center-img")[0];
let AboutMe = document.querySelector("#landing h1");
let Button = document.querySelector(".btn");

window.addEventListener('scroll', function() {
    let value = window.scrollY;

    BottomImage.style.right = value * 0.9 + 'px';
    TopImage.style.left = value * 0.9 + 'px';    
    CenterImage.style.left = value * 0.7 + 'px';
    CenterImage.style.top = value * 0.6 + 'px';
    LastImage.style.bottom = value * 0.8 + 'px';

    AboutMe.style.left = value * 0.5 + 'px';
})