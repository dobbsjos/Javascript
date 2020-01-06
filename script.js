// // Assignment Code
// var generateBtn = document.querySelector("#generate");


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
$(document).ready(function() {
            
    // CREATE THE MISSING CODE HERE. Your code should add content to the random-number div.
    // ...
    $('#generate').on('click', function () {

        var lottery = " ";

        for (let index = 0; index < 9; index++) {
           
            var random = Math.floor(Math.random() * 10);
        }
        $('#password').(lottery);

        console.log(lottery);
    });
    // ...

  });


//   passwordText.value = password;

//   copyBtn.removeAttribute("disabled");
//   copyBtn.focus();
// }

// function copyToClipboard() {
//   // BONUS 
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // BONUS EVENT LISTENER
