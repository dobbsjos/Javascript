// 4 arrays holding user choices for characters of password gen
var nums = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["~", "`", "!", "#", "$", "%", "^", "&", "*", "+", "=", "-", "[", "]", "'", ";", "/", "{", "}", "|", ":", "<", ">", "?"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// array of randomized characters consisting of only length of password
var meatball = [];

var finalMeatball =[];

var passwordText = document.querySelector("#password");

function generatePassword()
{ 


  // inform user password must be 8 char or more, prompt for number
  var passwordLength = prompt("Your password can be between 8 and 128 characters. How long would you like your password to be?");
  var passwordLengthInt = parseInt(passwordLength);

  if ((passwordLength === "") || (passwordLength < 8) || (passwordLength > 128) || (isNaN(passwordLengthInt) === true)){
    passwordLengthInput();
  }

  function passwordLengthInput()
  {
   // inform user password must be 8 char or more, prompt for number
  var passwordLength = prompt("Your password can be between 8 and 128 characters. How long would you like your password to be?");
  var passwordLengthInt = parseInt(passwordLength);
    
  // if statements warning user about incorrect input
      if (passwordLength === "")
    {
      alert("Enter a number");
      passwordLength =0;
      passwordLengthInput();
    }
    if(passwordLength < 8)
    {
      alert("Your password must be at least 8 characters long");
      passwordLength =0;
      passwordLengthInput();
    }
    if(passwordLength > 128)
    {
      alert("Your password must be at most 128 characters long");
      passwordLength =0;
      passwordLengthInput();
    }
    if (isNaN(passwordLengthInt) === true)
    {
      alert("Please choose a number");
      passwordLength =0;
      passwordLengthInput();
    }
  }
     // ask user if want to use numbers and push into mysteryMeat
     var wantNum = confirm("Would you like to use numbers in the password?");
     if(wantNum == true)
     {
       meatball.push(numPass);
       alert("Numbers will be added");
     }
     else{
     alert("No numbers will be added");
     }
   // ask user if want to use special characters and push into mysteryMeat
     var wantSpecChar = confirm("Would you like to use special characters in the password?");
     if(wantSpecChar == true)
     {
       meatball.push(specialPas);
       alert("Special characters will be added");
     }
     else{
   alert("No special characters will be added")
     }
   // ask user if want to use lower case letters and push into mysteryMeat
     var wantLowCase = confirm("Would you like to use lower case characters in the password?");
     if(wantLowCase == true)
     {
       meatball.push(lowerCharPas);
       alert("Lower case characters will be used");
     }
     else{
     alert("No lower case characters will be used");
     }
   // ask user if want to use upper case letters and push into mysteryMeat
     var wantUpCase = confirm("Would you like to use upper case characters in the password");
     if(wantUpCase == true)
    {
     meatball.push(upperCharPas);
     alert("Upper case characters will be used");
    }
   else{
     alert("No upper case characters will be used");
   }
 
  //  checks to see what arrays have been added
   for (var i=0; i<meatball.length; i++){
    console.log(meatball[i]);
   }
   
// uses flat method to seperate arrays into one big sole array
  meatball = meatball.flat(1);
  console.log(meatball);
  mysteryMeatFinal = [];
  // select length of password to return
  for (var i = 0; i < passwordLength; i++)
  {
    console.log(meatball[i]);
    mysteryMeatFinal.push(meatball[Math.floor(Math.random()* meatball.length)]);
    
  }
  return finalMeatball.join("");
  }
// end of generatePassword function
//------------------------------------------------------------------------------------;

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  password = generatePassword();
  passwordText.value = password;
}

// copy to clipboard function
function copyToClipboard() {
  // BONUS 

  // Select the text field 
  passwordText.select();

  // Copy the text inside the text field 
  document.execCommand("copy");

  // Alert the copied text 
  alert("Copied the password: " + passwordText.value);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER