const navLinks = document.querySelectorAll("header nav a");
const sections = document.querySelectorAll("section");
const logoLink = document.querySelector(".logo");
const resumeBtns = document.querySelectorAll(".resume-btn");
const resumeDetails = document.querySelectorAll(".resume-detail");
const arrowRight = document.querySelector(
  ".portfolio-container .navigation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".portfolio-container .navigation .arrow-left"
);
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-x");
  navbar.classList.toggle("active");
});

let index = 0;
const maxIndex = 9;

// Function to reset active classes
const activePage = () => {
  const barbox = document.querySelector(".bar-box");
  const header = document.querySelector("header");

  header.classList.remove("active");
  barbox.classList.remove("active");
  sections.forEach((section) => section.classList.remove("active"));
  navLinks.forEach((link) => link.classList.remove("active"));

  menuIcon.classList.remove("fa-x");
  navbar.classList.remove("active");

  // Add classes back with delay
  setTimeout(() => {
    header.classList.add("active");
    barbox.classList.add("active");
  }, 1000);
};

// Navigation links click
navLinks.forEach((link, idx) => {
  link.addEventListener("click", () => {
    if (!link.classList.contains("active")) {
      activePage();
      link.classList.add("active");
      setTimeout(() => {
        sections[idx].classList.add("active");
      }, 1000);
    }
  });
});

// Logo click resets to first section
logoLink.addEventListener("click", () => {
  if (!navLinks[0].classList.contains("active")) {
    activePage();
    navLinks[0].classList.add("active");
    setTimeout(() => {
      sections[0].classList.add("active");
    }, 1000);
  }
});

// Resume section buttons
resumeBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    resumeBtns.forEach((b) => b.classList.remove("active"));
    resumeDetails.forEach((d) => d.classList.remove("active"));

    btn.classList.add("active");
    resumeDetails[idx].classList.add("active");
  });
});

// Portfolio image + content slider
const activePortfolio = () => {
  const imgSlide = document.querySelector(".portfolio-carousel .img-slide");
  const allDetails = document.querySelectorAll(".portfolio-detail");

  // Slide image
  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${
    index * 2
  }rem))`;

  // Update portfolio content
  allDetails.forEach((detail, i) => {
    detail.classList.toggle("active", i === index);
  });
};

// Arrow buttons
if (arrowRight && arrowLeft) {
  arrowRight.addEventListener("click", () => {
    if (index < maxIndex) {
      index++;
      arrowLeft.classList.remove("disabled");
      if (index === maxIndex) arrowRight.classList.add("disabled");
      activePortfolio();
    }
  });

  arrowLeft.addEventListener("click", () => {
    if (index > 0) {
      index--;
      arrowRight.classList.remove("disabled");
      if (index === 0) arrowLeft.classList.add("disabled");
      activePortfolio();
    }
  });
}

// ✅ Trigger initial portfolio state
activePortfolio();
