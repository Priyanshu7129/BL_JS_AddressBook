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
console.log(addressBook);