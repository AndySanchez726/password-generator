// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  var password = generatePassword()
  var passwordText = document.querySelector("#password");
    

  passwordText.value = password;

  // window.prompt("How long do you want your password to be? Must be between 8 and 128.");

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
    console.log(lengthInput);

  //Turning lengthInput into number of characters
  var passwordLength = [];
  for(var i = 0; i < lengthInput; i++){    
    passwordLength.push(i);
  };
  console.log(passwordLength)
  // passwordLength = passwordLength.join('');

  return passwordLength

  
}