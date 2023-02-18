// Assignment Code
var generateBtn = document.querySelector("#generate");
function confirmPWLen (pwlength) {
  console.log("User has decided on a  " + pwlength + "-character password.");
}
 // Prompts the user whether to include lowercase and log response
function confirmLower (includesLower) { 
  if (includesLower)
  console.log("User has decided to include lower");
  else
  console.log("User has opted not to include lowercase letters.");
}
// Prompts the user whether to include uppercase
function confirmUpper (includesUpper) { 
  if (includesUpper)
  console.log("User has decided to include uppercase letters.");
  else
  console.log("User has opted not to include uppercase letters.");
}
// Prompts the user whether to include numbers
    function confirmNum (includesNum) { 
      if (includesNum)
      console.log("User has decided to include numbers.");
      else
      console.log("User has opted not to include numbers.");
  }
  
// Prompts the user whether to include spec char
    function confirmSpec (includesSpec) { 
      if (includesSpec)
      console.log("User has decided to include special characters.");
      else
      console.log("User has opted not to include special characters.");
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log("The password is " + password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let pwlength = prompt('Enter password length (between 8 and 128 characters):');
  let includesLower= confirm('Would you like to include lowercase letters?');
  let includesUpper = confirm('Would you like to include uppercase letters?');
  let includesNum = confirm('Include numbers?');
  let includesSpec = confirm('Include special characters?');
 
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numChars = '0123456789';
  const specChars = '!@#$%^&*()_+-={}[]|\\:;\"\'<>,.?/';

  var selectedChars = [];
  var pwString = [];
  //selectedChars.push(lowerChars + upperChars + numChars + specChars);
  if (includesLower) selectedChars += lowerChars;
  if (includesUpper) selectedChars += upperChars;
  if (includesNum) selectedChars += numChars;
  if (includesSpec) selectedChars += specChars;

for (let i = 0; i < pwlength; i++) {
  const randomChar = selectedChars[Math.floor(Math.random() * selectedChars.length)];
  pwString += randomChar;
}

confirmPWLen (pwlength)
confirmLower (includesLower);
confirmUpper(includesUpper);
confirmNum(includesNum);
confirmSpec(includesSpec);

return pwString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
