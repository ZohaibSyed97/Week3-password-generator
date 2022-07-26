// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let passLength = prompt("Enter password length (between 8 to 128)");
  let lowerCase = prompt(
    "Do you want to include lower case character/s on your password?)"
  );
  let upperCase = prompt(
    "Do you want to include upper case character/s on your password?)"
  );
  let number = prompt("Do you want to include number/s on your password?)");
  let specialChar = prompt("Do want to special character/s on your password?)");
  const alphabet = "abcdefghijklmnopqrstuvwxyz"; //this code line of code was taken form https://www.coderrocketfuel.com/article/generate-a-random-letter-from-the-alphabet-using-javascript
  let specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  let generated = [];

  for (let i = 0; i <= passLength.length; i++) {
    if (lowerCase === "yes") {
      let randomLowerCase =
        alphabet[Math.floor(Math.random() * alphabet.length)]; //this code line of code was taken form https://www.coderrocketfuel.com/article/generate-a-random-letter-from-the-alphabet-using-javascript
      generated.push(randomLowerCase.toLowerCase().toString());
    }
    if (upperCase === "yes") {
      let randomUpperCase =
        alphabet[Math.floor(Math.random() * alphabet.length)];
      generated.push(randomUpperCase.toUpperCase().toString());
    }
    if (number === "yes") {
      let randomNumber = Math.floor(Math.random() * 11);
      generated.push(randomNumber.toString());
    }
    if (specialChar === "yes") {
      let randomSpecialChar =
        specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
      generated.push(randomSpecialChar.toString());
    }
  }

  console.log(generated);

  return generated;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
