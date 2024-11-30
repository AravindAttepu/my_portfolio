const project_tab= document.getElementById("project_tab");
const projects_gate=  document.getElementById("projects_gate");
const arrow= document.querySelector(".bx-chevron-down");

projects_gate.addEventListener("click", function(){

    project_tab.classList.toggle("hide")
    arrow.classList.toggle("bx-rotate-180");

});