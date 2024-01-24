const changing = document.getElementById("ChangingText");
const winHeight = window.innerHeight;
const navAb = document.getElementById("navAb");
const navEx = document.getElementById("navEx");
const navRe = document.getElementById("navRe");
const navCo = document.getElementById("navCo");
var fadeout = true;
var x = 0;

//window.scrollY
//console.log(expheight);
function ActiveAside(){
    var expheight = document.getElementById("Experience").getBoundingClientRect().top;
    var resheight = document.getElementById("Resume").getBoundingClientRect().top;
    var conheight = document.getElementById("Contact").getBoundingClientRect().top;
    if(expheight > (winHeight*.66)){
        navAb.classList.add("navitemactive");
        navEx.classList.remove("navitemactive");
        navRe.classList.remove("navitemactive");
        navCo.classList.remove("navitemactive");
    } else if (expheight < (winHeight*.66) && expheight > 0){
        navAb.classList.remove("navitemactive");
        navEx.classList.add("navitemactive");
        navRe.classList.remove("navitemactive");
        navCo.classList.remove("navitemactive");
    } else if (resheight < (winHeight*.66) && resheight > 0){
        navAb.classList.remove("navitemactive");
        navEx.classList.remove("navitemactive");
        navRe.classList.add("navitemactive");
        navCo.classList.remove("navitemactive");
    } else if (conheight < (winHeight*.66)){
        navAb.classList.remove("navitemactive");
        navEx.classList.remove("navitemactive");
        navRe.classList.remove("navitemactive");
        navCo.classList.add("navitemactive");
    }
    console.log("test");
}

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

//setInterval(ActiveAside, 500);