//UC1
class Contact {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phone;
    email;

    //create constructor
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
    //override toString() to print person details
    toString() {
        return `${this.firstName} ${this.lastName}, ${this.address}, ${this.city}, ${this.state}, ${this.zip}, ${this.phone}, ${this.email}`;
    }
}


//UC2
function addContact(firstName, lastName, address, city, state, zip, phone, email) {
    // Validation patterns
    const patterns = {
        firstName: /^[A-Z][a-zA-Z]{2,}$/, // First letter capital, min 3 chars
        lastName: /^[A-Z][a-zA-Z]{2,}$/,  // First letter capital, min 3 chars
        address: /^[A-Za-z0-9\s]{4,}$/,   // Min 4 chars
        city: /^[A-Za-z\s]{4,}$/,         // Min 4 chars
        state: /^[A-Za-z\s]{4,}$/,        // Min 4 chars
        zip: /^[0-9]{6}$/,                // Exactly 6 digits
        phone: /^[0-9]{10}$/,             // Exactly 10 digits
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ // Valid email format
    };

    // Validation logic
    const fields = { firstName, lastName, address, city, state, zip, phone, email };

    for (let field in fields) {
        if (!patterns[field].test(fields[field])) {
            console.error(`Invalid ${field}: ${fields[field]}`);
            throw new Error(`Invalid ${field}: ${fields[field]}`);
        }
    }

    // Create new contact
    let newContact = new Contact(firstName, lastName, address, city, state, zip, phone, email);
    console.log("Contact added successfully!", newContact);
}

//UC3
var addressBook = new Array();
addressBook.push(new Contact('Priynshu', 'Kumar', 'Home', 'Bihar', 'Purnea', 854301, 'pk@gmail.com', 1234567890));
addressBook.push(new Contact('Naman', 'Agarwal', 'House', 'UP', 'Agra', 282010, 'naman@gmail.com', 7017999999));
addressBook.push(new Contact('Amit', 'Sharma', 'Flat 123', 'Mumbai', 'Maharashtra', 400001, 'amit@gmail.com', 9123456789));
addressBook.push(new Contact('Sneha', 'Verma', 'Sector 18', 'Noida', 'UP', 201301, 'sneha@gmail.com', 9876501234));
addressBook.push(new Contact('Ravi', 'Gupta', 'Tower B', 'Agra', 'UP', 282001, 'ravi@gmail.com', 9988776655));

console.log(addressBook);

//UC4
function editContact(name, updatedDetails) {
    let contact = addressBook.find(contact => contact.firstName === name);
    
    if (contact) {
        // Update contact details
        Object.assign(contact, updatedDetails);
        console.log(`Contact updated successfully!`, contact);
    } else {
        console.log(`Contact with name ${name} not found.`);
    }
}

//UC5
function deleteContact(name) {
    let index = addressBook.findIndex(contact => contact.firstName === name);
    
    if (index !== -1) {
        addressBook.splice(index, 1);
        console.log(`Contact with name ${name} deleted successfully.`);
    } else {
        console.log(`Contact with name ${name} not found.`);
    }
}

//UC6
function getContactCount() {
    let count = addressBook.reduce((total) => total + 1, 0);
    console.log(`Total Contacts: ${count}`);
    return count;
}
getContactCount();

//UC7
function addUniqueContact(firstName, lastName, address, city, state, zip, phone, email) {
    // Check if contact with the same name exists
    let duplicateCount = addressBook.filter(contact => contact.firstName === firstName && contact.lastName === lastName)
                                    .reduce(count => count + 1, 0);

    if (duplicateCount > 0) {
        console.log(`Duplicate Entry: Contact with name ${firstName} ${lastName} already exists.`);
    } else {
        let newContact = new Contact(firstName, lastName, address, city, state, zip, phone, email);
        addressBook.push(newContact);
        console.log("Contact added successfully!", newContact);
    }
}

//UC8
function searchByCityOrState(city, state) {
    let results = addressBook.filter(contact => contact.city === city || contact.state === state)
                             .map(contact => `${contact.firstName} ${contact.lastName} - ${contact.city}, ${contact.state}`);

    if (results.length > 0) {
        console.log(`Contacts in City "${city}" or State "${state}":`, results);
    } else {
        console.log(`No contacts found in City "${city}" or State "${state}".`);
    }
}

//UC9
function viewPersonsByCity(city) {
    let persons = addressBook.filter(contact => contact.city === city)
                             .map(contact => `${contact.firstName} ${contact.lastName}`);

    if (persons.length > 0) {
        console.log(`Persons in ${city}:`, persons);
    } else {
        console.log(`No persons found in ${city}.`);
    }
}
function viewPersonsByState(state) {
    let persons = addressBook.filter(contact => contact.state === state)
                             .map(contact => `${contact.firstName} ${contact.lastName}`);

    if (persons.length > 0) {
        console.log(`Persons in ${state}:`, persons);
    } else {
        console.log(`No persons found in ${state}.`);
    }
}

//UC10
function countContactsByCity() {
    let cityCounts = addressBook.reduce((acc, contact) => {
        acc[contact.city] = (acc[contact.city] || 0) + 1;
        return acc;
    }, {});

    console.log("Number of Contacts by City:", cityCounts);
}
function countContactsByState() {
    let stateCounts = addressBook.reduce((acc, contact) => {
        acc[contact.state] = (acc[contact.state] || 0) + 1;
        return acc;
    }, {});

    console.log("Number of Contacts by State:", stateCounts);
}

//UC11
function sortAddressBook() {
    addressBook.sort((a, b) => a.firstName.localeCompare(b.firstName));
    console.log("Sorted Address Book:");
    addressBook.forEach(contact => console.log(contact.toString()));
}
sortAddressBook();