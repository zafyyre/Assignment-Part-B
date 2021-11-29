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

let contactList = [{
        name: "Roberta Dobbs",
        phone: "778-555-1234",
        address: "101 Main St, Anytown, USA",
        email: "subgenius@slack.example.com",
    },
    {
        name: "Bugs Bunny",
        phone: "123-867-5309",
        address: "Warner Brothers Animation Lot",
        email: "whatsup@doc.example.com",
    },
    {
        name: "Zaafir Ali",
        phone: "911",
        address: "The dumpster",
        email: "waaf21@hotmail.com"
    }
]

function renderIndex(contactList) {
    for (let i = 0; i < contactList.length; i++) {
        let a = document.createElement('a');
        a.setAttribute('href', 'page3.html');

        let div = document.createElement('div');
        div.setAttribute('class', 'contact');
        a.appendChild(div);

        let p = document.createElement('p')
        div.appendChild(p)
        p.textContent = `${contactList[i]["name"]}`;
        let main = document.querySelector(".main");
        main.appendChild(a)
    }
}

function cleanUpView() {
    const main = document.querySelector(".contactinfo")
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}