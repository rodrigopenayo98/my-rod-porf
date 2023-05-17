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

function disableBodyScroll() {
  // Obtener la posición actual de desplazamiento del cuerpo
  const scrollY = window.scrollY;

  // Establecer estilos en el cuerpo para deshabilitar el desplazamiento
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.overflow = "hidden";
}

const addBodyScroll = () => {
  const scrollY = document.body.style.top;
  console.log(window.scrollY);
  document.body.classList.remove("no-scroll");
  document.body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
};

const projects = [
  {
    name: "Tonic",
    details: ["CANOPY", "Back End Dev", "2015"],
    img: "./image/image-work1.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups requerid",
    technologies: ["html", "css", "javaScript"],
    liveLink: "https://exemple.com.ar/",
    fontLink: "https://exemple.com.ar/",
  },
  {
    name: "Multi-Post Stories",
    details: ["FACEBOOK", "Full Stuck Dev", "2015"],
    img: "./image/image-work22.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n \n \n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s",
    technologies: ["html", "Ruby on rails", "css", "javaScript"],
    liveLink: "https://exemple.com.ar/",
    fontLink: "https://exemple.com.ar/",
  },
  {
    name: "Facebook 360",
    details: ["FACEBOOK", "Full Stuck Dev", "2015"],
    img: "./image/image-work3.png",
    description:
      "Exploring the future of media in Facebook's first Virtual Reality \n app; a place to discover and enjoy 360 photos and videos on \n Gear VR.",
    technologies: ["html", "Ruby on rails", "css", "javaScript"],
    liveLink: "https://exemple.com.ar/",
    fontLink: "https://exemple.com.ar/",
  },
  {
    name: "Uber Navigation",
    details: ["Uber", "Lead Developer", "2018"],
    img: "./image/image-work3.png",
    description:
      "A smart assistant to make driving more safe, efficient, and fun \n by unlocking your most expensive computer: your car.",
    technologies: ["html", "Ruby on rails", "css", "javaScript"],
    liveLink: "https://exemple.com.ar/",
    fontLink: "https://exemple.com.ar/",

  },
];

function showPopup() {
  myModal.classList.add("show");
}


function closePopup() {
  myModal.classList.remove("show");
}



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
    <div class="popup-body">
      <div class="popup-desc-container-mobile">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
      </div>
      <div class="popup-desc-container-desktop">
      <p>${project.description}</p>
      </div>
      <div class="popup-technologies-buttons">
        <ul class="popup-technologies">
          <li class="popup-technology1">${project.technologies[0]}</li>
          <li class="popup-technology2">${project.technologies[1]}</li>
          <li class="popup-technology3">${project.technologies[2]}</li>
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
  `;

  myModal.innerHTML = projectHTML;
  showPopup();

  const closeButton = document.querySelector(".popup-btn-close");
  closeButton.addEventListener("click", closePopup);
}

