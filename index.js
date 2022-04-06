let body = document.body;
let b = document.getElementById("pageone");
let c = document.getElementById("blur");
function menu_btn() {
  let a = document.getElementById("myLinks");
  if (a.style.display === "none") {
    a.style.display = "block";
    body.style.overflowY = "hidden";
    b.style.filter = "blur(2px)";
    c.style.filter = "blur(2px)";
  } else {
    a.style.display = "none";
    b.style.filter = "none";
    c.style.filter = "none";
    body.style.overflowY = "scroll";
  }
}
const project1 = {
  name: "Tonic",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  featuredImage: "./Portoflio/Snapshoot1.png",
  technologies: ["html", "CSS", "Boottrap", "Ruby on Rails"],
  linkToLive:
    "https://saifullah767.github.io/Portfolio_module/project_one.html",
  linkToSource: "https://github.com/saifullah767/Portfolio_module.git",
};
const project2 = {
  name: "Multi-Post Stories",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  featuredImage: "./Portoflio/Snapshoot4.png",
  technologies: ["html", "Bootstrap", "Ruby on Rails"],
  linkToLive:
    "https://saifullah767.github.io/Portfolio_module/project_one.html",
  linkToSource: "https://github.com/saifullah767/Portfolio_module.git",
};

const project3 = {
  name: "Tonic",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  featuredImage: "./Portoflio/Snapshoot3.png",
  technologies: ["html", "CSS", "Boottrap", "Ruby on Rails"],
  linkToLive:
    "https://saifullah767.github.io/Portfolio_module/project_one.html",
  linkToSource: "https://github.com/saifullah767/Portfolio_module.git",
};

const project4 = {
  name: "Multi-Post Stories",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  featuredImage: "./Portoflio/Snapshoot2.png",
  technologies: ["html", "Bootstrap", "Ruby on Rails"],
  linkToLive:
    "https://saifullah767.github.io/Portfolio_module/project_one.html",
  linkToSource: "https://github.com/saifullah767/Portfolio_module.git",
};

let allProjects = [project1, project2, project3, project4];

function popup() {
  const project = document.getElementById("popup");

  if (project.style.display === "none") {
    project.style.display = "flex";
    project.style.overflowY = "scroll";
    b.style.filter = "blur(2px)";
    c.style.filter = "blur(2px)";
    body.style.overflowY = "hidden";

    let title = document.querySelector(".title-one");
    title.innerHTML = `<h2>${project1.name}</h2>`;

    const canopy = document.querySelector(".canopy");
    canopy.innerHTML = `           
 <span class="can-pop"> CANOPY </span>
<img class="dot" src="./images/Counter.png" alt="" />
<span class="side-pop"> BACK END DEV </span>
<img class="dot" src="./images/Counter.png" alt="" />
<span class="side-pop"> 2015 </span>
`;

    const theImage = document.querySelector(".pop-websnap");
    theImage.innerHTML = `
<img  src="${project1.featuredImage}" alt="Project screenshot" />
`;

    const paratext = document.querySelector(".pop-text");
    paratext.innerHTML = `
<p> ${project1.description} </p>`;

    const theList = document.querySelector(".links-pop");
    theList.innerHTML = `
<ul>
<li class='link'>html</li>
<li class='link'>css</li>
<li class='link'>javaScript</li>
</ul>
<ul>
<li class='link hide_ul'>Github</li>
<li class='link hide_ul'>Ruby</li>
<li class='link hide_ul'>Boostrap</li>
</ul>
<hr>
<div class='popup-a' >
<a href="${project1.linkToLive}" class="pro-pop focusable"> See Live <img class="btn_icon" src="./images/share.png" alt="icon"> </a>
<a href="${project1.linkToSource}" class="pro-pop focusable"> See Source <img class="btn_icon" src="./images/github_purple.png" alt="icon"> </a>
`;
  } else {
    project.style.display = "none";
    b.style.filter = "none";
    c.style.filter = "none";
    body.style.overflowY = "scroll";
  }
}

function popup_project2() {
  const project = document.getElementById("popup");

  if (project.style.display === "none") {
    project.style.display = "flex";
    project.style.overflowY = "scroll";
    b.style.filter = "blur(2px)";
    c.style.filter = "blur(2px)";
    body.style.overflowY = "hidden";

    let title = document.querySelector(".title-one");
    title.innerHTML = `<h2>${project3.name}</h2>`;

    const canopy = document.querySelector(".canopy");
    canopy.innerHTML = `           
 <span class="can-pop"> CANOPY </span>
<img class="dot" src="./images/Counter.png" alt="" />
<span class="side-pop"> BACK END DEV </span>
<img class="dot" src="./images/Counter.png" alt="" />
<span class="side-pop"> 2015 </span>
`;

    const theImage = document.querySelector(".pop-websnap");
    theImage.innerHTML = `
<img  src="${project3.featuredImage}" alt="Project screenshot" />
`;

    const paratext = document.querySelector(".pop-text");
    paratext.innerHTML = `
<p> ${project3.description} </p>`;

    const theList = document.querySelector(".links-pop");
    theList.innerHTML = `
<ul>
<li class='link'>html</li>
<li class='link'>css</li>
<li class='link'>javaScript</li>
</ul>
<ul>
<li class='link hide_ul'>Github</li>
<li class='link hide_ul'>Ruby</li>
<li class='link hide_ul'>Boostrap</li>
</ul>
<hr>
<div class='popup-a' >
<a href="${project1.linkToLive}" class="pro-pop focusable"> See Live <img class="btn_icon" src="./images/share.png" alt="icon"> </a>
<a href="${project1.linkToSource}" class="pro-pop focusable"> See Source <img class="btn_icon" src="./images/github_purple.png" alt="icon"> </a>
`;
  } else {
    project.style.display = "none";
    b.style.filter = "none";
    c.style.filter = "none";
    body.style.overflowY = "scroll";
  }
}

function popup_project3() {
  const project = document.getElementById("popup");

  if (project.style.display === "none") {
    project.style.display = "flex";
    project.style.overflowY = "scroll";
    b.style.filter = "blur(2px)";
    c.style.filter = "blur(2px)";
    body.style.overflowY = "hidden";

    let title = document.querySelector(".title-one");
    title.innerHTML = `<h2>${project2.name}</h2>`;

    const canopy = document.querySelector(".canopy");
    canopy.innerHTML = `           
 <span class="can-pop"> CANOPY </span>
<img class="dot" src="./images/Counter.png" alt="" />
<span class="side-pop"> BACK END DEV </span>
<img class="dot" src="./images/Counter.png" alt="" />
<span class="side-pop"> 2015 </span>
`;

    const theImage = document.querySelector(".pop-websnap");
    theImage.innerHTML = `
<img  src="${project2.featuredImage}" alt="Project screenshot" />
`;

    const paratext = document.querySelector(".pop-text");
    paratext.innerHTML = `
<p> ${project2.description} </p>`;

    const theList = document.querySelector(".links-pop");
    theList.innerHTML = `
<ul>
<li class='link'>html</li>
<li class='link'>css</li>
<li class='link'>javaScript</li>
</ul>
<ul>
<li class='link hide_ul'>Github</li>
<li class='link hide_ul'>Ruby</li>
<li class='link hide_ul'>Boostrap</li>
</ul>
<hr>
<div class='popup-a' >
<a href="${project1.linkToLive}" class="pro-pop focusable"> See Live <img class="btn_icon" src="./images/share.png" alt="icon"> </a>
<a href="${project1.linkToSource}" class="pro-pop focusable"> See Source <img class="btn_icon" src="./images/github_purple.png" alt="icon"> </a>
`;
  } else {
    project.style.display = "none";
    b.style.filter = "none";
    c.style.filter = "none";
    body.style.overflowY = "scroll";
  }
}

function popup_project4() {
  const project = document.getElementById("popup");

  if (project.style.display === "none") {
    project.style.display = "flex";
    project.style.overflowY = "scroll";
    b.style.filter = "blur(2px)";
    c.style.filter = "blur(2px)";
    body.style.overflowY = "hidden";

    let title = document.querySelector(".title-one");
    title.innerHTML = `<h2>${project4.name}</h2>`;

    const canopy = document.querySelector(".canopy");
    canopy.innerHTML = `           
 <span class="can-pop"> CANOPY </span>
<img class="dot" src="./images/Counter.png" alt="" />
<span class="side-pop"> BACK END DEV </span>
<img class="dot" src="./images/Counter.png" alt="" />
<span class="side-pop"> 2015 </span>
`;

    const theImage = document.querySelector(".pop-websnap");
    theImage.innerHTML = `
<img  src="${project4.featuredImage}" alt="Project screenshot" />
`;

    const paratext = document.querySelector(".pop-text");
    paratext.innerHTML = `
<p> ${project4.description} </p>`;

    const theList = document.querySelector(".links-pop");
    theList.innerHTML = `
<ul>
<li class='link'>html</li>
<li class='link'>css</li>
<li class='link'>javaScript</li>
</ul>
<ul>
<li class='link hide_ul'>Github</li>
<li class='link hide_ul'>Ruby</li>
<li class='link hide_ul'>Boostrap</li>
</ul>
<hr>
<div class='popup-a' >
<a href="${project1.linkToLive}" class="pro-pop focusable"> See Live <img class="btn_icon" src="./images/share.png" alt="icon"> </a>
<a href="${project1.linkToSource}" class="pro-pop focusable"> See Source <img class="btn_icon" src="./images/github_purple.png" alt="icon"> </a>
`;
  } else {
    project.style.display = "none";
    b.style.filter = "none";
    c.style.filter = "none";
    body.style.overflowY = "scroll";
  }
}
