// Assignment Code
var generateBtn = document.querySelector("#generate");


var specialCharacters = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~"];
var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"];
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passwordLength;

function generatePassword () {
    var passwordLength = prompt ("How many charater would you like your password to contain?", " ")
    if (passwordLength === null) {
        return;
    } else if ((passwordLength < 8) || (passwordLength > 128)) {
        window.alert ("Password length must be between 8 to 128 charater.");
        return generatePassword ();
    };

    var special = confirm("Click Ok to confirm your password including special character");
    var numeric = confirm("Click Ok to confirm your password including numeric character");
    var lowerCase = confirm("Click Ok to confirm your password including lowercase character");
    var upperCase = confirm("Click Ok to confirm your password including uppercase character");

    if (!special && !numeric && !lowerCase && !upperCase) {
        window.alert("At least one charater type must be selected")
        return generatePassword ();
    };

    var password = [];

    while (password.length < passwordLength) {
        var randomNum = Math.floor(Math.random() * 4) + 1;
        if (special && (randomNum === 1)) {
            var randomIndex = Math.floor(Math.random() * specialCharacters.length);
            randomElement = specialCharacters [randomIndex];
            password.push(randomElement);
        }
        if (numeric && (randomNum === 2)) {
            var randomIndex = Math.floor(Math.random() * numericCharacters.length);
            randomElement = numericCharacters [randomIndex];
            password.push(randomElement);
        }
        if (lowerCase && (randomNum === 3)) {
            var randomIndex = Math.floor(Math.random() * lowerCaseCharacters.length);
            randomElement = lowerCaseCharacters [randomIndex];
            password.push(randomElement);
        }
        if (upperCase && (randomNum === 4)) {
            var randomIndex = Math.floor(Math.random() * upperCaseCharacters.length);
            randomElement = upperCaseCharacters [randomIndex];
            password.push(randomElement);
        }

    }

    return password.join("");

};


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
