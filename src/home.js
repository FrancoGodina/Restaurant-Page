function homePage() {
    const home = document.createElement("div");
    home.classList.add("home");

    home.appendChild(createParagraph("Bienvenidos a Ituzaingodi!"));
    home.appendChild(createParagraph("Somos un restaurante fundado en 1988 por la familia Godina. La calidad de nuestros increíbles platos nos llevó a tener la fama que tenemos."));

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(homePage());
}
export default loadHome;