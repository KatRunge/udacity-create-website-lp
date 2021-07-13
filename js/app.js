/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const navList = document.getElementById("nav-list");
const sections = document.querySelectorAll("section");
const buttonScroll = document.getElementById("button_scroll");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const buildMenu = () => {
  for (section of sections) {
    const navItem = document.createElement("li");
    section.classList = "section_style";
    navItem.innerHTML = `<a href="#${
      section.id
    }" class="navi_link">${section.id.toUpperCase()}</a>`;
    navList.appendChild(navItem);
    console.log(navItem);
  }
};

buildMenu();

// Add class 'active' to section when near top of viewport


const sectionActive = () => {
  sections.forEach((section) => {
    const elementViewport = section.getBoundingClientRect().top;
    section.classList.remove("section_style_active");

    const addActive = (section) => {
      if (elementViewport < 200 && elementViewport >= -150) {
        section.classList.add("section_style_active");
      }
    };
    return addActive(section);
  });
};

window.addEventListener("scroll", sectionActive);

// Scroll to anchor ID using scrollTO event

// Scroll to top button
const topFunction = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

buttonScroll.addEventListener("click", topFunction);
