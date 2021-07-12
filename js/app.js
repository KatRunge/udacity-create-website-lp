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
    const menuNames = section.id;
    const navItem = document.createElement("li");
    section.classList = "section_style";
    navItem.innerHTML = `<a href="#${menuNames}" class="navi_link">${menuNames.toUpperCase()}</a>`;
    navList.appendChild(navItem);
  }
};

buildMenu();

// Add class 'active' to section when near top of viewport

const removeActive = (section) => {
  section.classList.remove("section_style_active");
};

const addActive = (conditional, section) => {
  if (conditional) {
    section.classList.add("section_style_active");
  }
};

const sectionActive = () => {
  sections.forEach((section) => {
    const elementViewport = Math.floor(section.getBoundingClientRect().top);
    const viewPortSection = () =>
      elementViewport < 250 && elementViewport >= -200;

    removeActive(section);
    addActive(viewPortSection(), section);
  });
};
window.addEventListener("scroll", sectionActive);
// Scroll to anchor ID using scrollTO event

const topFunction = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

buttonScroll.addEventListener("click", topFunction);

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
