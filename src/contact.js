function contactPage() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const title = document.createElement("h2");
    title.textContent = "Ante cualquier duda, consulta o queja no dude en comunicarse con el siguiente número:";
    const numero = document.createElement("h3");
    numero.textContent = "123 456 789";
    const direccion = document.createElement("h2");
    direccion.textContent = "Encontranos en:";
    const numdic = document.createElement("h3");
    numdic.textContent = "Calle Falsa 123";
    

    contact.appendChild(title);
    contact.appendChild(numero);
    contact.appendChild(direccion);
    contact.appendChild(numdic);

    return contact;
}

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(contactPage());
}

export default loadContact;