
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
  }}
  const data = {
    projects: [ {
      key: 0,
  name: "Tonic",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    normaldesc: "A daily selection of privately personalized reads; no accounts or sign-ups required",
    featuredImage: "./Portoflio/Snapshoot1.png",
  MobileImage: "./images/Snap.png",
  technologies: ["html", "CSS", "Javascript", "Github", "Ruby", "Bootstrap"],
  company: "CANOPY",
  position: "BACK END DEV",
  year: "2015",
  dot: "./images/Counter.png",
  closebtn: "./images/closeIcon.png",
  linkToLive:
    "https://saifullah767.github.io/Portfolio_module/project_one.html",
  linkToSource: "https://github.com/saifullah767/Portfolio_module.git",
},
 {
  key: 1,
  name: "Multi-Post Stories",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    normaldesc:"A daily selection of privately personalized reads; no accounts or sign-ups required",
    featuredImage: "./Portoflio/Snapshoot4.png",
  MobileImage: "./images/Snap2.png",
  company: "CANOPY",
  position: "BACK END DEV",
  year: "2015",
  dot: "./images/Counter.png",
  technologies: ["html", "CSS", "Javascript", "Github", "Ruby", "Bootstrap"],
  closebtn: "./images/closeIcon.png",
  linkToLive:
  "https://saifullah767.github.io/Portfolio_module/project_one.html",
  linkToSource: "https://github.com/saifullah767/Portfolio_module.git",
},
 {
  key: 3,
  name: "Tonic",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    normaldesc:"A daily selection of privately personalized reads; no accounts or sign-ups required",
    featuredImage: "./Portoflio/Snapshoot3.png",
  MobileImage: "./images/Snap3.png",
  company: "CANOPY",
  position: "BACK END DEV",
  year: "2015",
  dot: "./images/Counter.png",
  technologies: ["html", "CSS", "Javascript", "Github", "Ruby", "Bootstrap"],
  closebtn: "./images/closeIcon.png",
  linkToLive:
    "https://saifullah767.github.io/Portfolio_module/project_one.html",
    linkToSource: "https://github.com/saifullah767/Portfolio_module.git",
  },
{
  key: 4,
  name: "Multi-Post Stories",
  description:
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  normaldesc:"A daily selection of privately personalized reads; no accounts or sign-ups required",
  featuredImage: "./Portoflio/Snapshoot2.png",
  MobileImage: "./images/Snap4.png",
  company: "CANOPY",
  position: "BACK END DEV",
  year: "2015",
  dot: "./images/Counter.png",
  technologies: ["html", "CSS", "Javascript", "Github", "Ruby", "Bootstrap"],
  closebtn: "./images/closeIcon.png",
  linkToLive:
  "https://saifullah767.github.io/Portfolio_module/project_one.html",
  linkToSource: "https://github.com/saifullah767/Portfolio_module.git",
},
],
};// console.log(data);
const myProjects = data.projects;
const Work = document.querySelector('#portfolio');
function implementProject(){
  let i=0 ;
  myProjects.forEach((project) =>  {
    const cardId = `card-button-${i + 1}`;
    Work.innerHTML += ` 
      <div class="card">
    <div class="snap">
      <img src=${project.MobileImage} alt="Project screenshot" />
    </div>
    <div class="websnap">
      <img src=${project.featuredImage} alt="Project screenshot" />
    </div>
    <section class="main">
      <h2>${project.name}</h2>
      <div class="mid">
        <span class="can"> ${project.company} </span>
        <img class="dot" src=${project.dot} alt="" />
        <span class="side"> ${project.position} </span>
        <img class="dot" src=${project.dot} alt="" />
        <span class="side"> ${project.year} </span>
      </div>
      <p class="para">
      ${project.normaldesc}
      </p>
      <div class="links">
        <ul>
        <li class='link'>${project.technologies[0]}</li>
        <li class='link'>${project.technologies[1]}</li>
        <li class='link'>${project.technologies[2]}</li>
        </ul>
      </div>
      <a data-key="${project.key}" id="${cardId}" type="button" class="pro focusable" >
        See Project
      </a>
    </section>
  </div>
  <br/>
` 
    i += 1; 
});
}
implementProject();

function openPopup() {
  const allCardButtons = document.querySelectorAll("[id*='card-button']");
  let i = 0;
  myProjects.forEach((project) => {
    allCardButtons[i].addEventListener('click', () => {
      const popupElement = document.createElement('div');
      
    
      popupElement.setAttribute('id','popup');
     ;

     Work.appendChild(popupElement);

      popupElement.innerHTML =
      ` 
      <div class="pop-card">
      <h2>${project.name}</h2>
      <a href="javascript:void(0);" class="close_pop">
        <img
          src=${project.closebtn}
          onclick="popup()"
          alt="close botton"
        />
        </a>

      <div class="canopy"> 
       <span class="can-pop">${project.company}</span>
       <img class="dot" src=${project.dot} alt="" />
       <span class="side-pop">${project.position}</span>
       <img class="dot" src=${project.dot} alt="" />
       <span class="side-pop">${project.year}</span>
      </div>
      
      <div class="pop-mobile">
      <img src=${project.MobileImage} alt="Project screenshot" />
      </div>

      <div class="pop-websnap">
      <img src=${project.featuredImage} alt="Project screenshot" />
      </div>
      <div class="pop-content">
        <div class="pop-text">
        <p> ${project.description} </p>'
        </div>

        <div class="links-pop">
        <ul>
        <li class='link'>${project.technologies[0]}</li>
        <li class='link'>${project.technologies[1]}</li>
        <li class='link'>${project.technologies[2]}</li>
        </ul>
        <ul>
        <li class='link hide_ul'>${project.technologies[3]}</li>
        <li class='link hide_ul'>${project.technologies[4]}</li>
        <li class='link hide_ul'>${project.technologies[5]}</li>
        </ul>
        </div>
      </div>
     </div> 
     <hr>
     <div class='popup-a' >
     <a href="${project.linkToLive}" class="pro-pop focusable"> See Live <img class="btn_icon" src="./images/share.png" alt="icon"> </a>
     <a href="${project.linkToSource}" class="pro-pop focusable"> See Source <img class="btn_icon" src="./images/github_purple.png" alt="icon"> </a>
     `

      document.querySelector('html').style.overflowY = 'hidden';



      const closeBtn = document.querySelector('.close-icon');
      window.onload=function(){
        
      
      
      closeBtn.addEventListener('click', () => {
        const openPopUp = document.getElementById('openPopUp');
        openPopUp.remove();
        document.querySelector('html').style.overflowY = 'auto';
        const blurPage = document.querySelectorAll('.blur');

        for (let i = 0; i < blurPage.length; i += 1) {
          blurPage[i].style.filter = 'blur(0)';
        }
      });
    }
  });

    i += 1;
    });
}
openPopup();

// function popup_project() {
//   let profile = document.getElementById("popup");

//   if (profile.style.display === "flex") {
//     profile.style.display = "flex";
//     profile.style.overflowY = "scroll";
//     b.style.filter = "blur(2px)";
//     c.style.filter = "blur(2px)";
//     body.style.overflowY = "hidden";

//     if(document.getElementById("card-button-1")){
//       const popupElement = document.createElement('div');

//       popupElement.id = 'popup';
//       popupElement.setAttribute('id','popup');
//       popupElement.innerHTML =
//      ` 
//       <div class="pop-card">
//       <h2>${project.name}</h2>
//       <a href="javascript:void(0);" class="close_pop">
//         <img
//           src=${project.closebtn}
//           onclick="popup()"
//           alt="close botton"
//         />
//       </a>

//       <div class="canopy"> 
//        <span class="can-pop">${project.company}</span>
//        <img class="dot" src=${project.dot} alt="" />
//        <span class="side-pop">${project.position}</span>
//        <img class="dot" src=${project.dot} alt="" />
//        <span class="side-pop">${project.year}</span>
//       </div>

//       <div class="pop-mobile">
//       <img src=${project.MobileImage} alt="Project screenshot" />
//       </div>

//       <div class="pop-websnap">
//       <img src=${project.featuredImage} alt="Project screenshot" />
//       </div>
//       <div class="pop-content">
//         <div class="pop-text">
//         <p> ${project.description} </p>'
//         </div>

//         <div class="links-pop">
//         <ul>
//         <li class='link'>${project.technologies[0]}</li>
//         <li class='link'>${project.technologies[1]}</li>
//         <li class='link'>${project.technologies[2]}</li>
//         </ul>
//         <ul>
//         <li class='link hide_ul'>${project.technologies[3]}</li>
//         <li class='link hide_ul'>${project.technologies[4]}</li>
//         <li class='link hide_ul'>${project.technologies[5]}</li>
//         </ul>
//         </div>
//       </div>
//      </div> 
//      <hr>
//      <div class='popup-a' >
//      <a href="${project.linkToLive}" class="pro-pop focusable"> See Live <img class="btn_icon" src="./images/share.png" alt="icon"> </a>
//      <a href="${project.linkToSource}" class="pro-pop focusable"> See Source <img class="btn_icon" src="./images/github_purple.png" alt="icon"> </a>
//      `;
//     }

//   } 
//   else {
//         project.style.display = "none";
//         b.style.filter = "none";
//         c.style.filter = "none";
//         body.style.overflowY = "scroll";
//       }




//     }



// function popup() {
// const newcards = allProjects.map((value) => {
//   return `const project = document.getElementById("popup");
//   if (project.style.display === "none") {
//     project.style.display = "flex";
//     project.style.overflowY = "scroll";
//     b.style.filter = "blur(2px)";
//     c.style.filter = "blur(2px)";
//     body.style.overflowY = "hidden";

//     let title = document.querySelector(".title-one");
//     title.innerHTML = '<h2>${allProjects.name}</h2>';

//     const canopy = document.querySelector(".canopy");
//     canopy.innerHTML = '           
//  <span class="can-pop"> CANOPY </span>
// <img class="dot" src="./images/Counter.png" alt="" />
// <span class="side-pop"> BACK END DEV </span>
// <img class="dot" src="./images/Counter.png" alt="" />
// <span class="side-pop"> 2015 </span>';

//     const theImage = document.querySelector(".pop-websnap");
//     theImage.innerHTML = '
// <img  src="${allProjects.featuredImage}" alt="Project screenshot" />
// ';

//     const paratext = document.querySelector(".pop-text");
//     paratext.innerHTML = '
// <p> ${allProjects.description} </p>';

//     const theList = document.querySelector(".links-pop");
//     theList.innerHTML = '
// <ul>
// <li class='link'>${allProjects.technologies[0]}</li>
// <li class='link'>${allProjects.technologies[1]}</li>
// <li class='link'>${project1.technologies[2]}</li>
// </ul>
// <ul>
// <li class='link hide_ul'>${allProjects.technologies[3]}</li>
// <li class='link hide_ul'>${allProjects.technologies[4]}</li>
// <li class='link hide_ul'>${allProjects.technologies[5]}</li>
// </ul>
// <hr>
// <div class='popup-a' >
// <a href="${allProjects.linkToLive}" class="pro-pop focusable"> See Live <img class="btn_icon" src="./images/share.png" alt="icon"> </a>
// <a href="${allProjects.linkToSource}" class="pro-pop focusable"> See Source <img class="btn_icon" src="./images/github_purple.png" alt="icon"> </a>
// ';
//   } else {
//     project.style.display = "none";
//     b.style.filter = "none";
//     c.style.filter = "none";
//     body.style.overflowY = "scroll";
//   }`;
// });
// }

  

// function popup_project2() {
//   const project = document.getElementById("popup");

//   if (project.style.display === "none") {
//     project.style.display = "flex";
//     project.style.overflowY = "scroll";
//     b.style.filter = "blur(2px)";
//     c.style.filter = "blur(2px)";
//     body.style.overflowY = "hidden";

//     let title = document.querySelector(".title-one");
//     title.innerHTML = `<h2>${project3.name}</h2>`;

//     const canopy = document.querySelector(".canopy");
//     canopy.innerHTML = `           
//  <span class="can-pop"> CANOPY </span>
// <img class="dot" src="./images/Counter.png" alt="" />
// <span class="side-pop"> BACK END DEV </span>
// <img class="dot" src="./images/Counter.png" alt="" />
// <span class="side-pop"> 2015 </span>
// `;

//     const theImage = document.querySelector(".pop-websnap");
//     theImage.innerHTML = `
// <img  src="${project3.featuredImage}" alt="Project screenshot" />
// `;

//     const paratext = document.querySelector(".pop-text");
//     paratext.innerHTML = `
// <p> ${project3.description} </p>`;

//     const theList = document.querySelector(".links-pop");
//     theList.innerHTML = `
// <ul>
// <li class='link'>${project2.technologies[0]}</li>
// <li class='link'>${project2.technologies[1]}</li>
// <li class='link'>${project2.technologies[2]}</li>
// </ul>
// <ul>
// <li class='link hide_ul'>${project2.technologies[3]}</li>
// <li class='link hide_ul'>${project2.technologies[4]}</li>
// <li class='link hide_ul'>${project2.technologies[5]}</li>
// </ul>
// <hr>
// <div class='popup-a' >
// <a href="${project2.linkToLive}" class="pro-pop focusable"> See Live <img class="btn_icon" src="./images/share.png" alt="icon"> </a>
// <a href="${project2.linkToSource}" class="pro-pop focusable"> See Source <img class="btn_icon" src="./images/github_purple.png" alt="icon"> </a>
// `;
//   } else {
//     project.style.display = "none";
//     b.style.filter = "none";
//     c.style.filter = "none";
//     body.style.overflowY = "scroll";
//   }
// }

// function popup_project3() {
//   const project = document.getElementById("popup");

//   if (project.style.display === "none") {
//     project.style.display = "flex";
//     project.style.overflowY = "scroll";
//     b.style.filter = "blur(2px)";
//     c.style.filter = "blur(2px)";
//     body.style.overflowY = "hidden";

//     let title = document.querySelector(".title-one");
//     title.innerHTML = `<h2>${project2.name}</h2>`;

//     const canopy = document.querySelector(".canopy");
//     canopy.innerHTML = `           
//  <span class="can-pop"> CANOPY </span>
// <img class="dot" src="./images/Counter.png" alt="" />
// <span class="side-pop"> BACK END DEV </span>
// <img class="dot" src="./images/Counter.png" alt="" />
// <span class="side-pop"> 2015 </span>
// `;

//     const theImage = document.querySelector(".pop-websnap");
//     theImage.innerHTML = `
// <img  src="${project2.featuredImage}" alt="Project screenshot" />
// `;

//     const paratext = document.querySelector(".pop-text");
//     paratext.innerHTML = `
// <p> ${project2.description} </p>`;

//     const theList = document.querySelector(".links-pop");
//     theList.innerHTML = `
// <ul>
// <li class='link'>${project3.technologies[0]}</li>
// <li class='link'>${project3.technologies[1]}</li>
// <li class='link'>${project3.technologies[2]}</li>
// </ul>
// <ul>
// <li class='link hide_ul'>${project3.technologies[3]}</li>
// <li class='link hide_ul'>${project3.technologies[4]}</li>
// <li class='link hide_ul'>${project3.technologies[5]}</li>
// </ul>
// <hr>
// <div class='popup-a' >
// <a href="${project3.linkToLive}" class="pro-pop focusable"> See Live <img class="btn_icon" src="./images/share.png" alt="icon"> </a>
// <a href="${project3.linkToSource}" class="pro-pop focusable"> See Source <img class="btn_icon" src="./images/github_purple.png" alt="icon"> </a>
// `;
//   } else {
//     project.style.display = "none";
//     b.style.filter = "none";
//     c.style.filter = "none";
//     body.style.overflowY = "scroll";
//   }
// }

// function popup_project4() {
//   const project = document.getElementById("popup");

//   if (project.style.display === "none") {
//     project.style.display = "flex";
//     project.style.overflowY = "scroll";
//     b.style.filter = "blur(2px)";
//     c.style.filter = "blur(2px)";
//     body.style.overflowY = "hidden";

//     let title = document.querySelector(".title-one");
//     title.innerHTML = `<h2>${project4.name}</h2>`;

//     const canopy = document.querySelector(".canopy");
//     canopy.innerHTML = `           
//  <span class="can-pop"> CANOPY </span>
// <img class="dot" src="./images/Counter.png" alt="" />
// <span class="side-pop"> BACK END DEV </span>
// <img class="dot" src="./images/Counter.png" alt="" />
// <span class="side-pop"> 2015 </span>
// `;

//     const theImage = document.querySelector(".pop-websnap");
//     theImage.innerHTML = `
// <img  src="${project4.featuredImage}" alt="Project screenshot" />
// `;

//     const paratext = document.querySelector(".pop-text");
//     paratext.innerHTML = `
// <p> ${project4.description} </p>`;

//     const theList = document.querySelector(".links-pop");
//     theList.innerHTML = `
// <ul>
// <li class='link'>${project4.technologies[0]}</li>
// <li class='link'>${project4.technologies[1]}</li>
// <li class='link'>${project4.technologies[2]}</li>
// </ul>
// <ul>
// <li class='link hide_ul'>${project4.technologies[3]}</li>
// <li class='link hide_ul'>${project4.technologies[4]}</li>
// <li class='link hide_ul'>${project4.technologies[5]}</li>
// </ul>
// <hr>
// <div class='popup-a' >
// <a href="${project4.linkToLive}" class="pro-pop focusable"> See Live <img class="btn_icon" src="./images/share.png" alt="icon"> </a>
// <a href="${project4.linkToSource}" class="pro-pop focusable"> See Source <img class="btn_icon" src="./images/github_purple.png" alt="icon"> </a>
// `;
//   } else {
//     project.style.display = "none";
//     b.style.filter = "none";
//     c.style.filter = "none";
//     body.style.overflowY = "scroll";
//   }
// }

