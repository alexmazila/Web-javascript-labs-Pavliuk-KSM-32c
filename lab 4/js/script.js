function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getLogin = function() {
        let login = this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
        return login;
    };
}
function CreateNewUser() {
    let firstName = prompt('Enter your name');
    let lastName = prompt('Enter your lastname');
    return new User(firstName, lastName);
}
let newUser = CreateNewUser();
console.log(newUser.getLogin());
