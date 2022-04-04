function menu_btn() {
  let a = document.getElementById("myLinks");
  let b = document.getElementById("pageone");
  let c = document.getElementById("blur");
  if (a.style.display === "none") {
    a.style.display = "block";
    b.style.filter = "blur(2px)";
    c.style.filter = "blur(2px)";
  } else {
    a.style.display = "none";
    b.style.filter = "none";
    c.style.filter = "none";
  }
}
