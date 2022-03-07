window.onload = function () {
  let menuBtn = document.getElementById("menu");
  let backBtn = document.getElementById("backBtn");

  menuBtn.onclick = function() { toggleMenu()};
  backBtn.onclick = function() { toggleMenu()};
    
 }
 
 /* Section below to be continued */
function toggleHover(){
  let itemHovered = document.getElementById("levelOne");

  console.log(itemHovered);
}
 /* Section above to be continued */

function toggleMenu(){
  
  let levelOne = document.getElementById("levelOne");
  
  if (levelOne.classList.contains("hidden")){
    levelOne.classList.remove("hidden");
  } else {
    levelOne.classList.add("hidden");
  }
}
