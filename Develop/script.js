// Assignment Code
var generateBtn = document.querySelector("#generate");
// var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var lowerCase = "abcdefghijklmnopqrstuvwxyz"
// var numeric = "012345678"
// var specialChar = "!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


// Write password to the #password input
function writePassword() {

  var password = generatePassword()
  var passwordText = document.querySelector("#password");
    

  passwordText.value = password;


};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword = function() {
  //Prompt for password length
  var lengthInput = window.prompt("How long do you want your password to be? Must be between 8 and 128.");
    if(lengthInput < 8 || lengthInput > 128) {
        window.alert("Please select a number between 8 and 128.");
        generatePassword()
    };
    // lengthInput = characters.numeric
    // console.log(lengthInput);

  // //Turning lengthInput into number of characters
  // var passwordLength = [];
  // for(var i = 0; i < lengthInput; i++){    
  //   passwordLength.push(i);
  // };
  // console.log(passwordLength)
  // passwordLength = passwordLength.join('');

  // return passwordLength


// character choices
  var charChoice = ""
console.log(charChoice)
  var charInput = window.confirm("Would you like to use uppercase characters?")
  if (charInput) {
    charChoice = charChoice + characters.upperCase;
    // console.log(charChoice);
  }
  var charInput = window.confirm("Would you like to use lowercase characters?")
  if (charInput) {
    charChoice = charChoice + characters.lowerCase
  }
  var charInput = window.confirm("Would you like to use numbers?")
  if (charInput) {
    charChoice = charChoice + characters.numeric
  }
  // var charInput = window.confirm("Would you like to use special characters?")
  // if (charInput) {
  //   charChoice = charChoice + characters.specialChar

  // }

  console.log(charChoice);
};

var characters = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numeric: "0123456789",
  // special: "!"\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"
};

console.log(characters.special)