
//  * Manipulating the DOM exercise.
//  * Exercise programmatically builds navigation,
//  * scrolls to anchors from navigation,
//  * and highlights section in viewport upon scrolling.


//global variables
const navList = document.getElementById("nav-list");
const sections = document.querySelectorAll("section");
const buttonScroll = document.getElementById("button_scroll");


// build the navigation
const buildMenu = () => {
  for (section of sections) {
    const navItem = document.createElement("li");
    section.classList = "section_style";
    // add anchor links to navigation based on the section id
    navItem.innerHTML = `<a href="#${section.id}" class="navi_link">${section.id.toUpperCase()}</a>`;
    navList.appendChild(navItem);
  }
};

buildMenu();


// Add class 'active' to section when near top of viewport
const sectionActiveClass = () => {
  sections.forEach((section) => {
    const viewportElement = section.getBoundingClientRect().top;
    section.classList.remove("section_style_active");

    const addActiveClass = (section) => {
      if (viewportElement < 200 && viewportElement >= -150) {
        section.classList.add("section_style_active");
      }
    };
    return addActiveClass(section);
  });
};

window.addEventListener("scroll", sectionActiveClass);


// Scroll to top button
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

buttonScroll.addEventListener("click", scrollToTop);
