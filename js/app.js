const navList = document.getElementById("nav-list");
const sections = document.querySelectorAll("section");


buildMenu = () => {
  for (section of sections) {
    const menuNames = section.id;

    navItem = document.createElement("li");
    navItem.innerHTML = `<a href="#${menuNames}">${menuNames}</a>`;

    navList.appendChild(navItem);
  }
};

buildMenu();
