const personArray = [
    { nombre: "Maria" },
    { nombre: "Paul" },
    { nombre: "Jamir" },
    { nombre: "Agustin" }
];

const personNamesHTML = document.getElementById('tags');

function showPersonArrayNames() {
    const list = orderList(personListShow());
    personListShowHTML(list);
};

function createCheckbox(array) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = array.nombre;
    checkbox.name = array.nombre;
    checkbox.value = array.nombre;
    return checkbox;
}

function personListShow() {
    return personArray;
};

function choosePerson() {
    const selectedPeople = obtainSelected();
    const choosenOne = selectedPeople[Math.floor(Math.random() * selectedPeople.length)];
    if (choosenOne) {
        alert(`The chosen one is ${choosenOne.nombre}`);
    }
    else {
        alert("Error, please select minimun 2 names");
    }
};

function orderList(initialList) {
    return initialList.slice().sort((name1, name2 ) => name1.nombre.localeCompare(name2.nombre));
};

function createTag(tag) {
    const label = document.createElement("label");
    label.htmlFor = tag.nombre;
    label.appendChild(document.createTextNode(tag.nombre));
    return label;
}

function personListShowHTML(list) {
    list.forEach(nameSelect => {
        const checkbox = createCheckbox(nameSelect);
        const label = createTag(nameSelect);
        personNamesHTML.appendChild(checkbox);
        personNamesHTML.appendChild(label);
        personNamesHTML.appendChild(document.createElement("br"));
    });
}

function obtainSelected() {
    const selectedCheckbox = personNamesHTML.querySelectorAll('input[type="checkbox"]:checked');
    const selectedPeople = [];
    selectedCheckbox.forEach(checkbox => {
        const tag = personArray.find(tag => tag.nombre === checkbox.value);
        selectedPeople.push(tag);
    });
    return selectedPeople;
};



showPersonArrayNames();
