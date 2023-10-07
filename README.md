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
