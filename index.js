const body = document.querySelector('body');
const b = document.getElementById('pageone');
const c = document.getElementById('blur');
function menuBtn(x) {
  const a = document.getElementById('myLinks');
  if (a.style.display === 'none') {
    a.style.display = 'block';
    body.style.overflowY = 'hidden';
    b.style.filter = 'blur(2px)';
    c.style.filter = 'blur(2px)';
  } else {
    a.style.display = 'none';
    b.style.filter = 'none';
    c.style.filter = 'none';
    body.style.overflowY = 'scroll';
  }
}

const data = {
  projects: [
    {
      key: 0,
      name: 'Tonic',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      normaldesc:
        'A daily selection of privately personalized reads; no accounts or sign-ups required',
      featuredImage: './Portoflio/Snapshoot1.png',
      MobileImage: './images/Snap.png',
      technologies: [
        'html',
        'CSS',
        'Javascript',
        'Github',
        'Ruby',
        'Bootstrap',
      ],
      company: 'CANOPY',
      position: 'BACK END DEV',
      year: '2015',
      dot: './images/Counter.png',
      closebtn: './images/closeIcon.png',
      linkToLive:
        'https://saifullah767.github.io/Portfolio_module/project_one.html',
      linkToSource: 'https://github.com/saifullah767/Portfolio_module.git',
    },
    {
      key: 1,
      name: 'Multi-Post Stories',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      normaldesc:
        'A daily selection of privately personalized reads; no accounts or sign-ups required',
      featuredImage: './Portoflio/Snapshoot4.png',
      MobileImage: './images/Snap2.png',
      company: 'CANOPY',
      position: 'BACK END DEV',
      year: '2015',
      dot: './images/Counter.png',
      technologies: [
        'html',
        'CSS',
        'Javascript',
        'Github',
        'Ruby',
        'Bootstrap',
      ],
      closebtn: './images/closeIcon.png',
      linkToLive:
        'https://saifullah767.github.io/Portfolio_module/project_one.html',
      linkToSource: 'https://github.com/saifullah767/Portfolio_module.git',
    },
    {
      key: 3,
      name: 'Tonic',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      normaldesc:
        'A daily selection of privately personalized reads; no accounts or sign-ups required',
      featuredImage: './Portoflio/Snapshoot3.png',
      MobileImage: './images/Snap3.png',
      company: 'CANOPY',
      position: 'BACK END DEV',
      year: '2015',
      dot: './images/Counter.png',
      technologies: [
        'html',
        'CSS',
        'Javascript',
        'Github',
        'Ruby',
        'Bootstrap',
      ],
      closebtn: './images/closeIcon.png',
      linkToLive:
        'https://saifullah767.github.io/Portfolio_module/project_one.html',
      linkToSource: 'https://github.com/saifullah767/Portfolio_module.git',
    },
    {
      key: 4,
      name: 'Multi-Post Stories',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      normaldesc:
        'A daily selection of privately personalized reads; no accounts or sign-ups required',
      featuredImage: './Portoflio/Snapshoot2.png',
      MobileImage: './images/Snap4.png',
      company: 'CANOPY',
      position: 'BACK END DEV',
      year: '2015',
      dot: './images/Counter.png',
      technologies: [
        'html',
        'CSS',
        'Javascript',
        'Github',
        'Ruby',
        'Bootstrap',
      ],
      closebtn: './images/closeIcon.png',
      linkToLive:
        'https://saifullah767.github.io/Portfolio_module/project_one.html',
      linkToSource: 'https://github.com/saifullah767/Portfolio_module.git',
    },
  ],
};
const myProjects = data.projects;
const Work = document.querySelector('#portfolio');
function implementProject() {
  let i = 0;
  myProjects.forEach((project) => {
    const cardId = `card-button-${i + 1}`;
    Work.innerHTML += ` 
      <div class='card'>
    <div class='snap'>
      <img src=${project.MobileImage} alt='Project screenshot' />
    </div>
    <div class='websnap'>
      <img src=${project.featuredImage} alt='Project screenshot' />
    </div>
    <section class='main'>
      <h2>${project.name}</h2>
      <div class='mid'>
        <span class='can'> ${project.company} </span>
        <img class='dot' src=${project.dot} alt='' />
        <span class='side'> ${project.position} </span>
        <img class='dot' src=${project.dot} alt='' />
        <span class='side'> ${project.year} </span>
      </div>
      <p class='para'>
      ${project.normaldesc}
      </p>
      <div class='links'>
        <ul>
        <li class='link'>${project.technologies[0]}</li>
        <li class='link'>${project.technologies[1]}</li>
        <li class='link'>${project.technologies[2]}</li>
        </ul>
      </div>
      <a onclick='popupProject()' id='${cardId}' type='button' class='pro focusable' >
        See Project
      </a>
    </section>
  </div>
  <br/>
`;
    i += 1;
  });
}
implementProject();

const popProjects = data.projects[0];
function popupProject(y) {
  const project = document.getElementById('popup');
  if (project.style.display === 'none') {
    project.style.display = 'flex';
    project.style.overflowY = 'scroll';
    b.style.filter = 'blur(2px)';
    c.style.filter = 'blur(2px)';
    body.style.overflowY = 'hidden';

    const title = document.querySelector('.title-one');
    title.innerHTML = `<h2>${popProjects.name}</h2>`;

    const canopy = document.querySelector('.canopy');
    canopy.innerHTML = `           
   <span class='can-pop'> CANOPY </span>
  <img class='dot' src='./images/Counter.png' alt='' />
  <span class='side-pop'> BACK END DEV </span>
  <img class='dot' src='./images/Counter.png' alt='' />
  <span class='side-pop'> 2015 </span>
  `;

    const theImage = document.querySelector('.pop-websnap');
    theImage.innerHTML = `
  <img  src='${popProjects.featuredImage}' alt='Project screenshot' />
  `;

    const paratext = document.querySelector('.pop-text');
    paratext.innerHTML = `
  <p> ${popProjects.description} </p>`;

    const theList = document.querySelector('.links-pop');
    theList.innerHTML = `
  <ul>
  <li class='link'>${popProjects.technologies[0]}</li>
  <li class='link'>${popProjects.technologies[1]}</li>
  <li class='link'>${popProjects.technologies[2]}</li>
  </ul>
  <ul>
  <li class='link hide_ul'>${popProjects.technologies[3]}</li>
  <li class='link hide_ul'>${popProjects.technologies[4]}</li>
  <li class='link hide_ul'>${popProjects.technologies[5]}</li>
  </ul>
  <hr>
  <div class='popup-a' >
  <a href='${popProjects.linkToLive}' class='pro-pop focusable'> See Live <img class='btn_icon' src='./images/share.png' alt='icon'> </a>
  <a href='${popProjects.linkToSource}' class='pro-pop focusable'> See Source <img class='btn_icon' src='./images/github_purple.png' alt='icon'> </a>
  `;
  } else {
    project.style.display = 'none';
    b.style.filter = 'none';
    c.style.filter = 'none';
    body.style.overflowY = 'scroll';
  }
}

const cform = document.querySelector('.contact-form');
const errMessage = document.querySelector('.validate');
const mail = document.querySelector('.contactme');

cform.addEventListener('submit', (event) => {
  event.preventDefault();
  if (mail.value !== mail.value.toLowerCase()) {
    errMessage.style.display = 'block';
  } else {
    cform.submit();
  }
});
