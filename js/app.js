const navList = document.getElementById("nav-list");
const sections = document.querySelectorAll("section");

//build navigation
buildMenu = () => {
  for (section of sections) {
    const menuNames = section.id;
    navItem = document.createElement("li");
    section.classList = "section_style";
    navItem.innerHTML = `<a href="#${menuNames}" class="navi_link">${menuNames.toUpperCase()}</a>`;

    navList.appendChild(navItem);
  }
};

buildMenu();
