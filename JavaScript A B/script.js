var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-777",
    email: "bob.jones@example.com"
};
 
console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.email);
 
var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};
 
var contacts = [];
contacts[0] = bob;
contacts[1] = mary;
 
console.log(contacts[1].phoneNumber);
 
 
function printPerson(person){
    console.log(person.firstName + " " + person.lastName);
}
 
printPerson(contacts[0]);
printPerson(contacts[1]);
 
function list(){
    var contactsLength = contacts.length;
    for(var i = 0; i < contactsLength; i++){
        printPerson(contacts[i]);
    }
}
 
list();
 
function search(lastName){
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        if(lastName === contacts[i].lastName){
        printPerson(contacts[i]);
        }
        }
}
 
//search("Jones");
 
function add(firstName, lastName, email, telephone){
    contacts[contacts.length] = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: telephone,
      email: email
    };
}
 
add("Mike", "Jones", "mike@jones.com", "555 555 5555");
list();