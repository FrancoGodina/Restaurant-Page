const container = document.querySelector("#content");
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";


function displayHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Ituzaingodi";

    header.appendChild(restaurantName);
    header.appendChild(buttons());

    return header;
}

function buttons() {
    const btnBar = document.createElement("btnbar");

    const homeButton = document.createElement("button");
    homeButton.classList.add("button");
    homeButton.textContent = "PÁGINA PRINCIPAL";
    homeButton.addEventListener("click", () => {
        loadHome();
    });


    const menuButton = document.createElement("button");
    menuButton.classList.add("button");
    menuButton.innerText = "MENÚ";
    menuButton.addEventListener("click", () => {
        loadMenu();
    });


    const contactButton = document.createElement("button");
    contactButton.classList.add("button");
    contactButton.innerText = "CONTACTO";
    contactButton.addEventListener("click", () => {
        loadContact();
    });

    btnBar.appendChild(homeButton);
    btnBar.appendChild(menuButton);
    btnBar.appendChild(contactButton);

    return btnBar;
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

container.appendChild(displayHeader());
container.appendChild(createMain());