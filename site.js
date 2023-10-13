const changing = document.getElementById("ChangingText");
const winHeight = window.innerHeight;
const navAb = document.getElementById("navAb");
const navEx = document.getElementById("navEx");
const navRe = document.getElementById("navRe");
const navCo = document.getElementById("navCo");
var DisplayText = '';
const baseText = "Hover over one of the images in the grid above to get a description.";
const SPProText = "During the summer I was a software engineering intern with Service Point Pro.";
const BeloitText = "I am student athlete with a double major in computer science and business economics at Beloit College.";
const GoogleDevText = "I am in the Google Developer Student Club on campus.";
const InvestText = "I am in the Investment Club at school and have my own investment portfolio.";
const LanguageText = "I know Java, Python, HTML, PHP, CSS, JavaScript, SQL, and have started to learn C#.";
const PersonalText = "I have built generative AI assitants, helped kids learn to code, and built this website from scratch.";
var fadeout = true;
var x = 0;
//Check to see if AboutHeight.top is within window but have to recheck window height for different computers when window loads
//CHekc if we are within x*y where x is the section that you are on and y is the viewport height
//If true then add class and active class to that part of the nav

function textchange(x){
    if(x==1){
        DisplayText = SPProText;
    }
    if(x==2){
        DisplayText = BeloitText;
    }
    if(x==3){
        DisplayText = GoogleDevText;
    }
    if(x==4){
        DisplayText = InvestText;
    }
    if(x==5){
        DisplayText = LanguageText;
    }
    if(x==6){
        DisplayText = PersonalText;
    }
    if(x==7){
        DisplayText = baseText;
        fadeout = true;
    }
}

function gridIconHover(){
    changing.style.color = "rgba(0,0,0,.75)";
    if (fadeout){
        setTimeout(Half, 125);
    } else {
        changing.style.color = "rgba(0,0,0,1)";
    }
    fadeout = true;
}

function Half(){
    changing.style.color = "rgba(0,0,0,.5)";
    if (fadeout){
        setTimeout(Quarter, 125);
    } else {
        setTimeout(gridIconHover, 125);
    }
}
function Quarter(){
    changing.style.color = "rgba(0,0,0,.25)";
    if (fadeout){
        setTimeout(None, 125);
    } else {
        setTimeout(Half, 125);
    }
}
function None(){
    changing.style.color = "rgba(0,0,0,0)";
    changing.innerHTML = DisplayText;
    fadeout = false;
    Quarter();
}

function addAnimation(){
     const animated = document.getElementsByClassName('preload');
     console.log(animated.length);
     for(var i=0;i<animated.length;i++){
        console.log('Testing');
        animated[i].classList.remove("preload");
     }
}

function NextSlide(){
    if(x==5){
        x = 0;
    } else {
        x = x+1;
    }
    slideshow(x);
}
function PrevSlide(){
    if(x==0){
        x = 4;
    } else {
        x = x-1;
    }
    slideshow(x-1);
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