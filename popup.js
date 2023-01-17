// function to generate a random password
function generatePassword() {
    // possible characters for the password
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    var password = "";

    // choose random characters for the password
    for (var i = 0; i < 16; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}

// get the generate button
var generateButton = document.getElementById("generate");

// add an event listener to the button
generateButton.addEventListener("click", function() {
    // get the password input field
    var passwordField = document.getElementById("password");

    // set the value of the password field to the generated password
    passwordField.value = generatePassword();
});