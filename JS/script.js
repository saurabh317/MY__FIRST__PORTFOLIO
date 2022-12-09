// var targetPos = 1500;
// var currentPos = 0;
// function timer(){
//     if(currentPos >= targetPos){
//         clearInterval(smoothScroll);
//         return;
//     }
//     currentPos+=50;
//     window.scrollY(0,currentPos)

// }
// var smoothScroll = setInterval(timer , 50);

// ***************script for the skills progress bar****************

var progressbar = document.querySelectorAll(".skillProgress > div");

// ***********before doing anything we need to set the progress to the zero first***************

function initialSkillbar() {
  for (let bar of progressbar) {
    bar.style.width = 0 + "%";
  }
}
initialSkillbar();

// ***********now we need to have an eye on the scroll behavior of the window*************
window.addEventListener("scroll", scrollcheck);
var animationdone = false;

var skillsContainer = document.getElementById("skills");
function scrollcheck() {
  var ordinates = skillsContainer.getBoundingClientRect();
  console.log(ordinates);
  var innerHeight = window.innerHeight;
  if (!animationdone && ordinates.top <= innerHeight) {
    animationdone = true;
    console.log("skills section is visible");
    fillbar();
  } else if (ordinates.top > innerHeight) {
    animationdone = false;
    initialSkillbar();
  }
}

// **********function for fillig up the bar**********

function fillbar() {
  for (let bar of progressbar) {
    let targetwidth = bar.getAttribute("data-bar-width");
    let currentWidth = 0;
    let interval = setInterval(function () {
      if (currentWidth > targetwidth) {
        clearInterval(interval);
        return;
      }
      currentWidth++;
      bar.style.width = currentWidth + "%";
    }, 7);
  }
}
