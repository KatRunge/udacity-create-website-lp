//global variables
//get element to add navigation list inside it
const navList = document.getElementById("nav-list");

//get all sections to use thteir id and add them to the navigatiton
const sections = document.querySelectorAll(".section_style");

//get button element to add scroll to Top function
const buttonScroll = document.getElementById("button_scroll");

//Build navigation
const buildNavigation = () => {
  sections.forEach((section) => {
    //create navitatiton item (li element)
    const navigationItem = document.createElement("li");
    //add navigation text inside li element
    navigationItem.innerHTML = `<p >${section.id.toUpperCase()}</p>`;
    //add a class to the li item, so some styles can be added
    navigationItem.classList.add("nav_item");
    //set an id attribute to li element too use it for the scroll event
    navigationItem.setAttribute("id", `${section.id}`);
    //add the li elements inside the ul list, the ul element was taken form the global variables
    navList.appendChild(navigationItem);
    //add scroll event to each li element. Whenever you click an item it will scroll to the right section with the matching id name
    navigationItem.addEventListener("click", () => {
      //add behavior smooth so that the scroll event
      section.scrollIntoView({ behavior: "smooth" });
    });
  });
};

buildNavigation();


//add active class to section when scrolling
const sectionActiveClass = () => {
  //for each section add an active class
  sections.forEach((section) => {
    //remove active class for every section when is not in viewport
    section.classList.remove("section_style_active");
    //Add condition for when a section is in viewporot
    if (
      //viewport must have this characteristics
      section.getBoundingClientRect().top < 100 &&
      section.getBoundingClientRect().top >= -150
    ) {
      //if the condition is fullfilled then the active class shall be added
      section.classList.add("section_style_active");
    }
  });
};

//Add scroll event listener
window.addEventListener("scroll", sectionActiveClass);

// Scroll to top button
const buttonScrollTop = () => {
  //scroll event that ads a smooth behavior to the scroll action, goes directly to the top part of the page
  window.scrollTo({ top: 0, behavior: "smooth" });
};
//add event to button, whenever you click on it, it will directly scroll to the top page
buttonScroll.addEventListener("click", buttonScrollTop);
