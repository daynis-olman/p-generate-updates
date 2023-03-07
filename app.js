// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passwordLength;

function generatePassword() {
    var passwordLength = prompt("How many characters would you like your password to contain? (8-128)", "");

    if (passwordLength === null) {
        // User clicked cancel button
        return;
    } else if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        window.alert("Password length must be a number between 8 and 128.");
        return generatePassword();
    }

    var special = confirm("Click OK to confirm you would like to include special characters.");
    var numeric = confirm("Click OK to confirm you would like to include numeric characters.");
    var lowerCase = confirm("Click OK to confirm you would like to include lowercase characters.");
    var upperCase = confirm("Click OK to confirm you would like to include uppercase characters.");

    if (!special && !numeric && !lowerCase && !upperCase) {
        window.alert("At least one character type must be selected.");
        return generatePassword();
    }

    var password = [];

    while (password.length < passwordLength) {
        var randomNum = Math.floor(Math.random() * 4) + 1;
        if (special && (randomNum === 1)) {
            var randomIndex = Math.floor(Math.random() * specialCharacters.length);
            password.push(specialCharacters[randomIndex]);
        }
        if (numeric && (randomNum === 2)) {
            var randomIndex = Math.floor(Math.random() * numericCharacters.length);
            password.push(numericCharacters[randomIndex]);
        }
        if (lowerCase && (randomNum === 3)) {
            var randomIndex = Math.floor(Math.random() * lowerCaseCharacters.length);
            password.push(lowerCaseCharacters[randomIndex]);
        }
        if (upperCase && (randomNum === 4)) {
            var randomIndex = Math.floor(Math.random() * upperCaseCharacters.length);
            password.push(upperCaseCharacters[randomIndex]);
        }
    }

    return password.join("");
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    if (password !== undefined) {
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
