const changing = document.getElementById("ChangingText");
var DisplayText = '';
const baseText = "Hover over one of the images in the grid above to get a description.";
const SPProText = "During the summer I was a software engineering intern with Service Point Pro.";
const BeloitText = "I am student athlete with a double major in computer science and business economics at Beloit College.";
const GoogleDevText = "I am in the Google Developer Student Club on campus.";
const InvestText = "I am in the Investment Club at school and have my own investment portfolio.";
const LanguageText = "I know Java, Python, HTML, PHP, CSS, JavaScript, SQL, and have started to learn C#.";
const PersonalText = "I have built generative AI assitants, helped kids learn to code, and built this website from scratch.";
var fadeout = true;
const test = document.getElementById('screentrack');
var height = test.getBoundingClientRect();
console.log(height.top)

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