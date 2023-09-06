// Define an array to store contact objects
let contacts = [];

// Function to add a new contact to the array and update the table
function addContact() {
    // Get input values
    const lastName = document.getElementById("last-name").value;
    const firstName = document.getElementById("first-name").value;
    const email = document.getElementById("email").value;
    const contactNumber = document.getElementById("contact-number").value;

    // Create a new contact object
    const newContact = {
        lastName,
        firstName,
        email,
        contactNumber,
    };

    // Add the contact to the array
    contacts.push(newContact);

    // Clear the input fields
    document.getElementById("last-name").value = "";
    document.getElementById("first-name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contact-number").value = "";

    // Update the table
    displayContacts();
}

// Function to display contacts in the table
function displayContacts() {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";

    // Loop through the contacts array and create table rows
    contacts.forEach((contact, index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${contact.lastName}</td>
            <td>${contact.firstName}</td>
            <td>${contact.email}</td>
            <td>${contact.contactNumber}</td>
            <td>
                <button onclick="editContact(${index})">Edit</button>
                <button onclick="deleteContact(${index})">Delete</button>
            </td>
        `;
    });
}

// Function to edit a contact
function editContact(index) {
    // Get the contact at the specified index
    const contact = contacts[index];

    // Populate the input fields with the contact details
    document.getElementById("last-name").value = contact.lastName;
    document.getElementById("first-name").value = contact.firstName;
    document.getElementById("email").value = contact.email;
    document.getElementById("contact-number").value = contact.contactNumber;

    // Remove the edited contact from the array
    contacts.splice(index, 1);

    // Update the table
    displayContacts();
}

// Function to delete a contact
function deleteContact(index) {
    // Remove the contact at the specified index from the array
    contacts.splice(index, 1);

    // Update the table
    displayContacts();
}

// Add an event listener to the "Add Contact" button
document.getElementById("add-contact").addEventListener("click", addContact);

// Initial display of contacts
displayContacts();
