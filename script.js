function cleanupindex() {
    const main = document.querySelector(".main")
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

const contact = {
    name: "Roberta Dobbs",
    phone: "778-555-1234",
    address: "101 Main St, Anytown, USA",
    email: "subgenius@slack.example.com",
}

function createSingleIndex(contact) {

    let a = document.createElement('a');
    a.setAttribute('href', 'page3.html');

    let div = document.createElement('div');
    div.setAttribute('class', 'contact');
    a.appendChild(div);

    let p = document.createElement('p')
    div.appendChild(p);
    p.textContent = `${contact["name"]}`;
    return a

}