const hamburg = document.getElementById('hamburg');
const xSection = document.querySelector('.x-section');
const menuToggle = document.querySelector('.menu-toggle');
const menuLinks = document.querySelectorAll('.items-menu-toggle');

function toggleMenu() {
  menuToggle.classList.toggle('show');
}

xSection.addEventListener('click', toggleMenu);
hamburg.addEventListener('click', toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', toggleMenu);
});

const cardsData = [
  {
    id: 'portfolio1',
    class: 'work',
    img: './image/image-work1.png',
    img2: './image/new-image.png',
    title: 'Tonic',
    title2: 'Tonic',
    infoMobile1: 'CANOPY',
    infoMobile2: 'Back End Dev',
    infoMobile3: '2015',
    infoDesktop1: 'CANOPY',
    infoDesktop2: 'Back End Dev',
    infoDesktop3: '2015',
    p1: 'A daily selection of privately personalized reads; no accounts orsign-ups required.',
    p2: 'A daily selection of privately personalized reads; no accounts orsign-ups required.',
    langMobile1: 'html',
    langMobile2: 'css',
    langMobile3: 'javaScript',
    langDesk1: 'html',
    langDesk2: 'css',
    langDesk3: 'javaScript',
    langDesk4: '',
    classButtons: 'work-button',
    onClickButton: '0',
  },
  {
    id: 'portfolio2',
    class: 'work multipost',
    img: './image/image-work22.png',
    img2: './image/image-work4.png',
    title: 'Multi-Post Stories',
    title2: 'Multi-Post Stories',
    infoMobile1: 'CANOPY',
    infoMobile2: 'Back End Dev',
    infoMobile3: '2015',
    infoDesktop1: 'FACEBOOK',
    infoDesktop2: 'Full Stuck Dev',
    infoDesktop3: '2015',
    p1: 'A daily selection of privately personalized reads; no accounts orsign-ups required.',
    p2: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    langMobile1: 'html',
    langMobile2: 'css',
    langMobile3: 'javaScript',
    langDesk1: 'html',
    langDesk2: 'Ruby on rails',
    langDesk3: 'css',
    langDesk4: 'javaScript',
    classButtons: 'work-button',
    onClickButton: '1',
  },
  {
    id: 'portfolio3',
    class: 'work selected',
    img: './image/image-work3.png',
    img2: './image/image-work1.png',
    title: 'Tonic',
    title2: 'Facebook 360',
    infoMobile1: 'CANOPY',
    infoMobile2: 'Back End Dev',
    infoMobile3: '2015',
    infoDesktop1: 'FACEBOOK',
    infoDesktop2: 'Full Stuck Dev',
    infoDesktop3: '2015',
    p1: 'A daily selection of privately personalized reads; no accounts orsign-ups required.',
    p2: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    langMobile1: 'html',
    langMobile2: 'css',
    langMobile3: 'javaScript',
    langDesk1: 'html',
    langDesk2: 'Ruby on rails',
    langDesk3: 'css',
    langDesk4: 'javaScript',
    classButtons: 'work-button button-corrected ',
    onClickButton: '2',
  },
  {
    id: 'portfolio4',
    class: 'work multipost',
    img: './image/image-work4.png',
    img2: './image/image-work2.png',
    title: 'Multi-Post Stories',
    title2: 'Uber Navigation',
    infoMobile1: 'CANOPY',
    infoMobile2: 'Back End Dev',
    infoMobile3: '2015',
    infoDesktop1: 'Uber',
    infoDesktop2: 'Lead Developer',
    infoDesktop3: '2015',
    p1: 'A daily selection of privately personalized reads; no accounts orsign-ups required.',
    p2: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    langMobile1: 'html',
    langMobile2: 'css',
    langMobile3: 'javaScript',
    langDesk1: 'html',
    langDesk2: 'Ruby on rails',
    langDesk3: 'css',
    langDesk4: 'javaScript',
    classButtons: 'work-button',
    onClickButton: '3',
  },

];

let cards = '';
cardsData.forEach((card) => {
  cards += `
    <div id="${card.id}" class="${card.class}">
      <img class="work-img img-replace" src="${card.img}" />
      <img class="new-image" src="${card.img2}" />
      <div class="work-content">
        <h2 class="work-title">${card.title}</h2>
        <h2 class="desktop-title">${card.title2}</h2>
        <ul class="info-mobile">
          <li>${card.infoMobile1}</li>
          <img src="./image/point.png" />
          <li>${card.infoMobile2}</li>
          <img src="./image/point.png" />
          <li>${card.infoMobile3}</li>
        </ul>
        <ul class="info-desktop">
          <li>${card.infoDesktop1}</li>
          <img src="./image/point.png" />
          <li>${card.infoDesktop2}</li>
          <img src="./image/point.png" />
          <li>${card.infoDesktop3}</li>
        </ul>
        <p class="work-p old-p">
          ${card.p1}
        </p>
        <p id="p2p" class="new-p">
          ${card.p2}
        </p>
        <ul class="languages-hidden">
          <li>${card.langMobile1}</li>
          <li>${card.langMobile2}</li>
          <li>${card.langMobile3}</li>
        </ul>
        <ul class="languages-ruby">
          <li>${card.langDesk1}</li>
          <li>${card.langDesk2}</li>
          <li>${card.langDesk3}</li>
          <li>${card.langDesk4}</li>
        </ul>
        <button class="${card.classButtons}" onclick="onClickProject(${card.onClickButton})">See Project</button>
      </div>
    </div>
  `;
});

document.querySelector('#section2').innerHTML = cards;

const projects = [
  {
    name: 'Tonic',
    details: ['CANOPY', 'Back End Dev', '2015'],
    img: './image/image-work1.png',
    img2: './image/bg-desktop1.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> <br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s",
    technologies: ['html', 'css', 'javaScript'],
    technologies2: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    liveLink: 'https://exemple.com.ar/',
    fontLink: 'https://exemple.com.ar/',
  },
  {
    name: 'Multi-Post Stories',
    details: ['FACEBOOK', 'Full Stuck Dev', '2015'],
    img: './image/image-work22.png',
    img2: './image/image-work4.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> <br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s",
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    technologies2: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    liveLink: 'https://exemple.com.ar/',
    fontLink: 'https://exemple.com.ar/',
  },
  {
    name: 'Facebook 360',
    details: ['FACEBOOK', 'Full Stuck Dev', '2015'],
    img: './image/image-work3.png',
    img2: './image/image-work1.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> <br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s",
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    technologies2: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    liveLink: 'https://exemple.com.ar/',
    fontLink: 'https://exemple.com.ar/',
  },
  {
    name: 'Uber Navigation',
    details: ['Uber', 'Lead Developer', '2018'],
    img: './image/image-work4.png',
    img2: './image/image-work2.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> <br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s",
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    technologies2: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    liveLink: 'https://exemple.com.ar/',
    fontLink: 'https://exemple.com.ar/',
  },
];

function showPopup() {
  const myModal = document.getElementById('myModal');
  myModal.classList.add('show');
}

function closePopup() {
  const myModal = document.getElementById('myModal');
  myModal.classList.remove('show');
}

/* eslint-disable */

function onClickProject(index) {
  const project = projects[index];

  const projectHTML = `
  <div class="popup">
  <div class="popup-header">
      <h5 class="popup-name">${project.name}</h5>
      <button class="popup-btn-close">
        <img src="./image/x-icon.png" alt="" />
      </button>
    </div>
    <ul class="popup-details">
      <li class="detail1">${project.details[0]}</li>
      <img src="./image/Counter.png" alt="" />
      <li class="detail2">${project.details[1]}</li>
      <img src="./image/Counter.png" alt="" />
      <li class="detail3">${project.details[2]}</li>
    </ul>
    <div class="popup-img-container">
      <img src="${project.img}" alt="Project Image" />
    </div>
    <div class="popup-img-container-desktop">
      <img src="${project.img2}" alt="Project Image" />
    </div>
    <div class="popup-body">
      <div class="popup-desc-container-mobile">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
      </div>
      <div class="popup-desc-container-desktop">
      <p>${project.description}</p>
      </div>
      <div class="tech-and-buttons">
      <div class="popup-technologies-buttons">
        <ul class="popup-technologies">
          <li class="popup-technology1">${project.technologies[0]}</li>
          <li class="popup-technology2">${project.technologies[1]}</li>
          <li class="popup-technology3">${project.technologies[2]}</li>
        </ul>
      </div>
      <div class="popup-tech-buttons-desk">
        <ul class="popup-technologies">
          <li class="popup-technology1">${project.technologies2[0]}</li>
          <li class="popup-technology2">${project.technologies2[1]}</li>
          <li class="popup-technology3">${project.technologies2[2]}</li>
        </ul>
        <ul class="popup-technologies">
          <li class="popup-technology4">${project.technologies2[3]}</li>
          <li class="popup-technology5">${project.technologies2[4]}</li>
        </ul>
      </div>
      <div class="popup-buttons">
        <a href="${project.liveLink}" class="popup-button1">
        See Live
          <img src="./image/button1.png" alt="Icono"/>
        </a>
        <a href="${project.fontLink}" class="popup-button2">
        See source
          <img src="./image/button2.png" alt="Icono" />
        </a>
      </div>
      
      </div>
    </div>
  
  
  </div>
  `;

  myModal.innerHTML = projectHTML;
  showPopup();

  const closeButton = document.querySelector(".popup-btn-close");
  closeButton.addEventListener("click", closePopup);
}

/* eslint-enable */

/* form validation */

const form = document.querySelector('#form');

function validateEmail() {
  const emailInput = document.querySelector('#email');
  const email = emailInput.value.trim();

  if (email !== email.toLowerCase()) {
    const errorElement = document.createElement('span');
    errorElement.classList.add('error-message');

    const submitButton = document.querySelector('#button-form');
    submitButton.insertAdjacentElement('afterend', errorElement);
  } else {
    form.submit();
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateEmail();
});
