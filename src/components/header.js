export default function header() {
  const header = document.createElement("header");
  const nav = document.createElement("nav");

  const btnHome = document.createElement("button");
  btnHome.innerText = "Home";

  btnHome.setAttribute("type", "button");
  btnHome.classList.add("home-btn");

  const btnMenu = document.createElement("button");
  btnMenu.innerText = "Menu";

  btnMenu.setAttribute("type", "button");
  btnMenu.classList.add("menu-btn");

  const btnAbout = document.createElement("button");
  btnAbout.innerText = "About";

  btnAbout.setAttribute("type", "button");
  btnAbout.classList.add("about-btn");

  header.appendChild(nav);
  nav.appendChild(btnHome);
  nav.appendChild(btnMenu);
  nav.appendChild(btnAbout);

  return header;
}
