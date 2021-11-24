function menuPage() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    
    menu.appendChild(
        createDish(
            "Ravioles con bolognesa",
            "Unos clásicos ravioles de jamón y ricota acompañados de una salsa bolognesa. Nunca falla."
        )
    );
    
    menu.appendChild(
        createDish(
            "Matambre a la pizza",
            "Hecho con el mejor de los quesos y la mejor de las carnes, es un plato que sin lugar a dudas no vas a poder parar de comer"
        )
    );

    return menu;
}

function createDish(name, description) {
    const dishItem = document.createElement("div");
    dishItem.classList.add("dish-item");

    const dishName = document.createElement("h2");
    dishName.textContent = name;

    const dishDescription = document.createElement("p");
    dishDescription.textContent = description;

    const dishImage = document.createElement("img");
    dishImage.src = `images/${name.toLowerCase()}.jpg`;

    
    dishItem.appendChild(dishName);
    dishItem.appendChild(dishDescription);
    dishItem.appendChild(dishImage);

    return dishItem;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(menuPage());
}
export default loadMenu;