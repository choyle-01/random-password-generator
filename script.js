var generateBtn = document.querySelector("#generate");
// create a function titled generatePassword 
function generatePassword() {
  // prompts the user to enter a value of how many charaters they would like in their password 
  var count = Number(
    prompt(
      "Please enter the amount of characters you would like in your password."
    )
  );
  // if the password is not between 8 and 128 characters it promps the user to enter a valid character amount 
  if (count < 8 || count > 128 || !count) {
    alert("Password must be between 8 and 128 characters.");
    alert("Please type a number");
    return "";
  }
  // creates variables for all of the possible inputs into the password as well as a genPassword variable that will output the password 
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var upperLetters = letters.toUpperCase();
  var numbers = "0123456789";
  var special = '~!@#$%^&*()_-+={}[]";:/?<>.,';
  var genPassword = "";
  // creates a variable that allows users to choose what charcter types goes into their password 
  var charPool = "";

  // creates confirm statements that allows users to append character types to their passwords 
  if (confirm("Would you like lowercase letters in your password?")) {
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
    // creates an else statement in case the user decided to decline all character types
  } else {
    alert("Please select a valid character amount.");
    return "";
  }

  // creates a for loop that takes in the count number and increments through the character pool randomly with the selected character types
  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * charPool.length);
    genPassword += charPool[random];

    console.log(genPassword);
  }
// returns the generated password
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
