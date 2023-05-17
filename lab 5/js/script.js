function User(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(birthday);
    this.getLogin = function () {
        let login = this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
        return login;
    };
    this.getAge = function () {
        let now = new Date();
        let ageDiff = now - this.birthday;
        let ageDate = new Date(ageDiff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    this.getPassword = function () {
        let password = this.firstName.charAt(0).toUpperCase() + this.lastName.toLowerCase() + this.birthday.getUTCFullYear();
        return password;
    }
}
function CreateNewUser() {
    let firstName = prompt('Enter your name');
    let lastName = prompt('Enter your lastname');
    let birthday = prompt('Enter your birthday in the following format: dd.mm.yyyy')
    return new User(firstName, lastName, birthday);
}
let newUser = CreateNewUser();
console.log(`Login: ${newUser.getLogin()}`);
console.log(`Password: ${newUser.getPassword()}`);
console.log(`Age: ${newUser.getAge()}`);