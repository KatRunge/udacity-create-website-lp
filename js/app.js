//global variables
const navList = document.getElementById("nav-list");
const sections = document.querySelectorAll(".section_style");
const buttonScroll = document.getElementById("button_scroll");

// const buildMenu = () => {
//   sections.map((section) => {
//     const navItem = document.createElement("li");
//     navItem.innerHTML = `<a class="navi_link">${section.id.toUpperCase()}</a>`;
//     navList.appendChild(navItem);
//   });
// };
// console.log(buildMenu);
// build the navigation
console.log(sections);

const buildNavigation = () => {
  sections.forEach((section) => {
    const navigationItem = document.createElement("li");
    navigationItem.innerHTML = `<a class="nav_link">${section.id.toUpperCase()}</a>`;
    navList.appendChild(navigationItem);
  });
};

buildNavigation();

// const buildMenu = () => {
//   for (section of sections) {
//     const navItem = document.createElement("li");
//     navItem.innerHTML = `<a class="navi_link">${section.id.toUpperCase()}</a>`;
//     navList.appendChild(navItem);
//   }
// };

// buildMenu();

// // Add class 'active' to section when near top of viewport
// const sectionActiveClass = () => {
//   sections.forEach((section) => {
//     const viewportElement = section.getBoundingClientRect().top;
//     section.classList.remove("section_style_active");

//     const addActiveClass = (section) => {
//       if (viewportElement < 200 && viewportElement >= -150) {
//         section.classList.add("section_style_active");
//       }
//     };
//     return addActiveClass(section);
//   });
// };

// window.addEventListener("scroll", sectionActiveClass);

// // Scroll to top button
// const scrollToTop = () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// };

// buttonScroll.addEventListener("click", scrollToTop);
