let name = prompt('Enter your name');
let age = prompt('Enter your age', 18);
if (age < 18) {
    alert('You are not allowed to visit this website')
} else if (age >= 18 && age <= 24) {
    let conf = confirm('Are you sure you want to continue?');
    if (conf == true) {
        alert(`Welcome, ${name}`)
    } else {
        alert('You are not allowed to visit this website')
    }
} else {
    alert(`Welcome, ${name}`)
}
