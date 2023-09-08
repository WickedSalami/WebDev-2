let contacts = [];

function addContact() {
    const lastName = document.getElementById("last-name").value;
    const firstName = document.getElementById("first-name").value;
    const email = document.getElementById("email").value;
    const contactNumber = document.getElementById("contact-number").value;

    if(lastName === "" && firstName === "" && email === "" && contactNumber === "") {
        alert("Please fill up all the text fields");
        return;
    }

    const newContact = [lastName, firstName, email, contactNumber];

    contacts.push(newContact);

    document.getElementById("last-name").value = "";
    document.getElementById("first-name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contact-number").value = "";

    displayContacts();
}

function displayContacts() {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";

    contacts.forEach((contact, index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `<td>${contact[0]}</td>
                        <td>${contact[1]}</td>
                        <td>${contact[2]}</td>
                        <td>${contact[3]}</td>
                        <td>
                            <button onclick="editContact(${index})">Edit</button>
                            <button onclick="deleteContact(${index})">Delete</button>
                        </td>`;
    });
}

function editContact(index) {
    const contact = contacts[index];

    document.getElementById("last-name").value = contact[0];
    document.getElementById("first-name").value = contact[1];
    document.getElementById("email").value = contact[2];
    document.getElementById("contact-number").value = contact[3];

    contacts.splice(index, 1);

    displayContacts();
}

function deleteContact(index) {
    contacts.splice(index, 1);

    displayContacts();
}

document.getElementById("add-contact").addEventListener("click", addContact);

displayContacts();