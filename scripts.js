const contactForm = document.getElementById('contact-form');
const lastNameInput = document.getElementById('last-name');
const firstNameInput = document.getElementById('first-name');
const emailInput = document.getElementById('email');
const contactNumberInput = document.getElementById('contact-number');
const addContactButton = document.getElementById('add-contact');
const contactTableBody = document.getElementById('table-body');

const contacts = [];

function addContact() {
    const lastName = lastNameInput.value;
    const firstName = firstNameInput.value;
    const email = emailInput.value;
    const contactNumber = contactNumberInput.value;

    if (lastName && firstName && email && contactNumber) {
        const row = document.createElement('tr');

        row.innerHTML = 
            `<td>${lastName}</td>
            <td>${firstName}</td>
            <td>${email}</td>
            <td>${contactNumber}</td>
            <td>
                <button onclick="editContact(${contacts.length})">Edit</button>
                <button onclick="deleteContact(${contacts.length})">Delete</button>
            </td>`;

        contactTableBody.appendChild(row);

       lastNameInput.value = '';
        firstNameInput.value = '';
        emailInput.value = '';
        contactNumberInput.value = '';

    } else {
        alert('Please fill up all the text fields.');
    }
}

function editContact(index) {
    const row = contactTableBody.children[index];

    lastNameInput.value = row.cells[0].textContent;
    firstNameInput.value = row.cells[1].textContent;
    emailInput.value = row.cells[2].textContent;
    contactNumberInput.value = row.cells[3].textContent;

    contactTableBody.removeChild(row);
}

function deleteContact(index) {
    const row = contactTableBody.children[index];
    contactTableBody.removeChild(row);
}

addContactButton.addEventListener('click', addContact);