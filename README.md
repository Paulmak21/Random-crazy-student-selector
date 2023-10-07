# Random-crazy-student-selector

## My code before

```javascript
const personArray = [
{ nombre: "Maria" },
{ nombre: "Paul" },
{ nombre: "Jamir" },
{ nombre: "Agustin" }
];

function showPersonArray() {
    const container = document.getElementById("person");
    const peopleOrder = personArray.sort((a, b) => a.nombre.localeCompare(b.nombre));

    peopleOrder.forEach(person => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = persona.nombre;
        contenedor.appendChild(checkbox);

        const label = document.createElement("label");
        label.innerHTML = person.nombre;
        container.appendChild(label);

        container.appendChild(document.createElement("br"));

    });
}
showPersonArray();

```

## My code after 

```javascript
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

function personListShow() {
    return personArray;
};

function orderList(initialList) {
    return initialList.slice().sort((name1, name2 ) => name1.nombre.localeCompare(name2.nombre));
};

function createCheckbox(array) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = array.nombre;
    checkbox.name = array.nombre;
    checkbox.value = array.nombre;
    return checkbox;
}

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

function choosePerson() {
    const selectedPeople = obtainSelected();
    const choosenOne = selectedPeople[Math.floor(Math.random() * selectedPeople.length)];
    if (choosenOne) {
        alert(`The chosen one is ${choosenOne.nombre}`);
    }
    else {
        alert("You didn't select anyone");
    }
}

showPersonArrayNames();

```
