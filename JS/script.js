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
var progressbar = document.querySelectorAll(".skillProgress > div");
var skillsContainer = document.getElementById("skills");
window.addEventListener("scroll", scrollcheck);

function initialSkillbar(){
    for(let bar of progressbar){
        bar.style.width = 0 +"%";
    }
}
initialSkillbar();


function fillbar(){
    for(let bar of progressbar){
        let targetwidth = bar.getAttribute("data-bar-width");
        let currentWidth = 0;
    }

}

function scrollcheck() {
  var ordinates = skillsContainer.getBoundingClientRect();
  console.log(ordinates);
  var innerHeight = window.innerHeight;
  console.log(innerHeight);
  if (ordinates.top < innerHeight) {
    console.log("skills section is visible");
    fillbar();
  }
  
}





