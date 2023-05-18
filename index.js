const hamburg = document.getElementById("hamburg");
const xSection = document.querySelector(".x-section");
const menuToggle = document.querySelector(".menu-toggle");
const menuLinks = document.querySelectorAll(".items-menu-toggle");

function toggleMenu() {
  menuToggle.classList.toggle("show");
}

xSection.addEventListener("click", toggleMenu);
hamburg.addEventListener("click", toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

const projects = [
  {
    name: "Tonic",
    details: ["CANOPY", "Back End Dev", "2015"],
    img: "./image/image-work1.png",
    img2: "./image/bg-desktop1.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> <br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s",
    technologies: ["html", "css", "javaScript"],
    technologies2: ["HTML", "CSS", "JavaScript", "Ruby", "Bootstrap"],
    liveLink: "https://exemple.com.ar/",
    fontLink: "https://exemple.com.ar/",
  },
  {
    name: "Multi-Post Stories",
    details: ["FACEBOOK", "Full Stuck Dev", "2015"],
    img: "./image/image-work22.png",
    img2: "./image/",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> <br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s",
    technologies: ["html", "Ruby on rails", "css", "javaScript"],
    technologies2: ["HTML", "CSS", "JavaScript", "Ruby", "Bootstrap"],
    liveLink: "https://exemple.com.ar/",
    fontLink: "https://exemple.com.ar/",
  },
  {
    name: "Facebook 360",
    details: ["FACEBOOK", "Full Stuck Dev", "2015"],
    img: "./image/image-work3.png",
    img2: "./image/image-work1.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> <br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s",
    technologies: ["html", "Ruby on rails", "css", "javaScript"],
    technologies2: ["HTML", "CSS", "JavaScript", "Ruby", "Bootstrap"],
    liveLink: "https://exemple.com.ar/",
    fontLink: "https://exemple.com.ar/",
  },
  {
    name: "Uber Navigation",
    details: ["Uber", "Lead Developer", "2018"],
    img: "./image/image-work4.png",
    img2: "./image/image-work2.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> <br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s",
    technologies: ["html", "Ruby on rails", "css", "javaScript"],
    technologies2: ["HTML", "CSS", "JavaScript", "Ruby", "Bootstrap"],
    liveLink: "https://exemple.com.ar/",
    fontLink: "https://exemple.com.ar/",
  },
];

function showPopup() {
  const myModal = document.getElementById("myModal");
  myModal.classList.add("show");
}

function closePopup() {
  const myModal = document.getElementById("myModal");
  myModal.classList.remove("show");
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
