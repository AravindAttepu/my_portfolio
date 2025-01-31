const project_tab= document.getElementById("project_tab");
const projects_gate=  document.getElementById("projects_gate");
const arrow= document.querySelector(".bx-chevron-down");

let button=true;
let scaleUp = true;
let intervalid=null;

projects_gate.addEventListener("click", function(){
  button=!button;
  project_tab.classList.toggle("hide")
  arrow.classList.toggle("bx-rotate-180");
  
   


});