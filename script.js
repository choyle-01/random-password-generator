// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var count = Number(
    prompt(
      "Please enter the amount of characters you would like in your password."
    )
  );

  if (count < 8 || count > 128) {
    alert("Password must be between 8 and 128 characters.");
    return "";
  }

  var letters = "abcdefghijklmnopqrstuvwxyz";
  var upperLetters = letters.toUpperCase();
  var numbers = "0123456789";
  var special = '~!@#$%^&*()_-+={}[]";:/?<>.,';
  var genPassword = "";
  var charPool = '';

  if (confirm('Would you like lowercase letters in your password?')) {
    charPool += letters;
  }


  if (confirm("Would you like uppercase letters in your password?")) {
    charPool += upperLetters;
  }

  if (confirm("Would you like numbers in your password?")) {
    charPool += numbers;
  }

  if (confirm("Would you like special characters in your password?")) {
    charPool += special;
  }

  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * charPool.length);
    genPassword += charPool[random];

    console.log(genPassword);

    return genPassword;
  }

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
