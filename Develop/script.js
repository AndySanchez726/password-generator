// Assignment Code
var generateBtn = document.querySelector("#generate");
// var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var lowerCase = "abcdefghijklmnopqrstuvwxyz"
// var numeric = "012345678"
// var specialChar = "!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
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
        generatePassword()
    };

  charTypes();

  console.log(charChoice.length);

  var createdPassword = [];
  for(var i = 0; i < lengthInput; i++) {
    createdPassword[i] = charChoice[Math.floor(Math.random() * charChoice.length)];
    
  }
  return createdPassword.join('')


}

var charTypes = function() {
  // var charChoice = ""
  var charInput = window.confirm("Would you like to use uppercase characters?");
  if (charInput) {
    charChoice = charChoice + characters.upperCase;
    // console.log(charChoice);
  }
  var charInput = window.confirm("Would you like to use lowercase characters?");
  if (charInput) {
    charChoice = charChoice + characters.lowerCase;
  }
  var charInput = window.confirm("Would you like to use numbers?");
  if (charInput) {
    charChoice = charChoice + characters.numeric;
  }
  // var charInput = window.confirm("Would you like to use special characters?")
  // if (charInput) {
  //   charChoice = charChoice + characters.special;
  // }
  if (charChoice === "" || charChoice === null ) {
    window.alert("You must choose at least one character type.");
    charTypes();
  }
};

// var createPassword = function() {
  



// var characters = {
//   upperCase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
//   lowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
//   numeric: ["1","2","3","4","5","6","7","8","9","0"],
//   special: ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]
// };

var characters = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numeric: "1234567890"
  // special: ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]
};
