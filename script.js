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

function renderView(contactList) {
    let img = document.createElement('img');
    img.setAttribute('src', './img/profile.jpg');
    img.setAttribute('class', 'profilepic');
    img.setAttribute('alt', 'Profile picture');

    let contactname = document.createElement('div');
    contactname.setAttribute('class', 'contactname');
    contactname.textContent = `${contactList[1]["name"]}`;
    contactname.appendChild(img);

    let contactinfo = document.createElement('div');
    contactinfo.setAttribute('class', 'contactinfo');
    contactinfo.appendChild(contactname);

    let contactemail = document.createElement('div');
    contactemail.setAttribute('class', 'contactemail');
    contactemail.textContent = `email: ${contactList[1]["email"]}`;
    contactinfo.appendChild(contactemail);

    let contactphone = document.createElement('div');
    contactphone.setAttribute('class', 'contactphone');
    contactphone.textContent = `phone: ${contactList[1]["phone"]}`;
    contactinfo.appendChild(contactphone);

    let contactaddress = document.createElement('div');
    contactaddress.setAttribute('class', 'contactaddress');
    contactaddress.textContent = `address: ${contactList[1]["address"]}`;
    contactinfo.appendChild(contactaddress);

    let buttons = document.createElement('div');
    buttons.setAttribute('class', 'buttons');
    contactinfo.appendChild(buttons)

    let buttonedit = document.createElement('button');
    buttonedit.setAttribute('class', 'button edit');
    buttonedit.setAttribute('value', 'Edit')
    buttonedit.textContent = 'Edit';
    buttons.appendChild(buttonedit);

    let buttonclose = document.createElement('button');
    buttonclose.setAttribute('class', 'button close');
    buttonclose.setAttribute('value', 'Close');
    buttonclose.textContent = 'Close';
    buttons.appendChild(buttonclose)

    let main = document.createElement('div');
    main.setAttribute('class', 'main');
    main.appendChild(contactinfo)
    document.body.appendChild(main)
}

function cleanUpCreate() {
    const main = document.querySelector(".contactedit")
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}