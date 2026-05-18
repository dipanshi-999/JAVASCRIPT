function calculateAge() {

    let birthYear =
        document.getElementById("birthYear").value;

    let currentYear =
        new Date().getFullYear();

    let age = currentYear - birthYear;

    document.getElementById("Result").innerHTML = "Your age is" + age;
    if (age >= 18) {
        alert("You are eligible for vote")
    }
}