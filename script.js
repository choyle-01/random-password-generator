// Assignment Code
var generateBtn = document.querySelector("#generate");
var possibleChoices = [];
for (var i = 8; i <= 128; i++) {
  possibleChoices.push(i);
}

function generatePassword() {
  var count = Number(prompt("Please enter the amount of characters you would like in your password."));

  if (!count) {
    alert('Select a valid character amount');
  }

  if (count != possibleChoices) {
    alert('Please select a character amount ranging from 8 to 128');
  }

  var lower = prompt('Would you like lowercase letters in your password?')

  var upper = prompt('Would you like uppercase letters in your password?');

  var num = prompt('Would you like numbers in your password?');

  var spCharacters = prompt('Would you like special characters in your password?')

  var letters = "abcdefghijklmnopqrstuvwxyz";
  var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "~!@#$%&?_=+/.,'()\]["
  var genPassword = "";

  for (var i = 0; i < count; i++) {
    genPassword += special[Math.floor(Math.random() * special.length)] + letters[Math.floor(Math.random() * letters.length)] + upperLetters[Math.floor(Math.random() * upperLetters.length)] + numbers[Math.floor(Math.random() * numbers.length)];
  }

  console.log(genPassword);

  return genPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
