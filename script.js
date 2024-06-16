const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const generatePasswordsEl = document.querySelector("#generate-password-el")
const passwordEl1 = document.querySelector("#password-one")
const passwordEl2 = document.querySelector("#password-two")
let firstPassword = "";
let secondPassword = "";
const passwordLength = 15;

generatePasswordsEl.addEventListener("click", function() {
    for (i = 0; i < passwordLength; i++){
        const randomIndexOne = Math.floor(Math.random() * characters.length);
        const randomIndexTwo = Math.floor(Math.random() * characters.length);
        firstPassword += characters[randomIndexOne];
        if (firstPassword.length === passwordLength) {
            passwordEl1.textContent = firstPassword;
            firstPassword = "";
        }
        secondPassword += characters[randomIndexTwo]
        if (secondPassword.length === passwordLength) {
            passwordEl2.textContent = secondPassword;
            secondPassword = "";
        }
    }

})


