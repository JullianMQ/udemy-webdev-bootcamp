// Capitalizing the first letter
var firstName = prompt("Enter your first name: ");
capitalFirstName = firstName.slice(0,1).toUpperCase() + firstName.slice(1,firstName.length).toLowerCase();
alert(`Hello ${capitalFirstName}`)
