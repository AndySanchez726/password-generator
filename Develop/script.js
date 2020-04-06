// Assignment Code
var generateBtn = document.querySelector("#generate");
var charChoice = ""
var lengthInput = ""

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
      generatePassword();
    };
    
  charTypes();

  //Randomizer
  var createdPassword = [];
  for(var i = 0; i < lengthInput; i++) {
    createdPassword[i] = charChoice[Math.floor(Math.random() * charChoice.length)];
    
  }
  return createdPassword.join('');
}

//Prompts asking for which characters user would like to use
var charTypes = function() {
  var charInput = window.confirm("Would you like to use uppercase characters?");
  if (charInput) {
    charChoice = charChoice + characters.upperCase;
  }
  var charInput = window.confirm("Would you like to use lowercase characters?");
  if (charInput) {
    charChoice = charChoice + characters.lowerCase;
  }
  var charInput = window.confirm("Would you like to use numbers?");
  if (charInput) {
    charChoice = charChoice + characters.numeric;
  }
  var charInput = window.confirm("Would you like to use special characters?")
  if (charInput) {
    charChoice = charChoice + characters.special;
  }
  if (charChoice === "" || charChoice === null ) {
    window.alert("You must choose at least one character type.");
    charTypes();
  }
};  

//character object
var characters = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numeric: "1234567890",
  special: "\"!#$%&'()*+,-./:;<=>?@[]^_`{|}~\\"
};
