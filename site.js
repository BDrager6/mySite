const winHeight = window.innerHeight;
const navAb = document.getElementById("navAb");
const navEx = document.getElementById("navEx");
const navRe = document.getElementById("navRe");
const navCo = document.getElementById("navCo");
var x = 0;

//Next/Prev slideshow image
function NextSlide(){
    x = (x+1)%5
    slideshow(x);
}
function PrevSlide(){
    if(x==0){
        x = 5;
    }
    slideshow(--x);
}

function slideshow(y){
    const slideshow = document.getElementById("ContactImg");
    if(y==0){
        slideshow.style.backgroundImage = "url('static/BeloitSoccer.jpg')";
    }
    else if(y==1){
        slideshow.style.backgroundImage = "url('static/Skiing.jpg')";
    }
    else if(y==2){
        slideshow.style.backgroundImage = "url('static/SkiingFreinds.jpg')";
    }
    else if(y==3){
        slideshow.style.backgroundImage = "url('static/RockDrop.jpg')";
    }
    else if(y==4){
        slideshow.style.backgroundImage = "url('static/Ball.jpg')";
    }
}