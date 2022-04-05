let body = document.body;
let b = document.getElementById("pageone");
let c = document.getElementById("blur");
function menu_btn() {
  let a = document.getElementById("myLinks");
  if (a.style.display === "none") {
    a.style.display = "block";
    body.style.overflowY = "hidden"
    b.style.filter = "blur(2px)";
    c.style.filter = "blur(2px)";

  } else {
    a.style.display = "none";
    b.style.filter = "none";
    c.style.filter = "none";
    body.style.overflowY = "scroll"
  }
}
function popup(){
  const project = document.getElementById("popup");

  if (project.style.display === "none") {
    project.style.display = "flex";
    project.style.overflowY = "scroll";
    b.style.filter = "blur(2px)";
    c.style.filter = "blur(2px)";
    body.style.overflowY = "hidden"


  } else {
    project.style.display = "none";
    b.style.filter = "none";
    c.style.filter = "none";
    body.style.overflowY = "scroll"
  }
}
