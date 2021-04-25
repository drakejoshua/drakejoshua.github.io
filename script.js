//get all elements to be manipulated by js
let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let formElement = document.getElementById("form");
let passwordInput = document.getElementById("passwordInput");
let firstPassBar = document.getElementById("firstPassBar");
let secondPassBar = document.getElementById("secondPassBar");
let thirdPassBar = document.getElementById("thirdPassBar");
let signedUpDisplay = document.getElementById("signedUpDisplay");
let  checkBox = document.getElementById("checkBox");
let submitInput = document.getElementById("submitInput");
let passCommentPane = document.getElementById("passCommentPane");

//shows the password range by default
setInterval(function() {
    // checks if input doesnt have values
    if( passwordInput.value === "" ){
        passCommentPane.style.display = "block";
        firstPassBar.style.display = "none";
        secondPassBar.style.display = "none";
        thirdPassBar.style.display = "none";
    }
}, 100);

//event listener to check for the password value to the password animator
passwordInput.addEventListener( "input", passwordSecurityAnimator);

//the password security range animator function
function passwordSecurityAnimator(){
//checks if input has values as caps and greater than 1
    if( passwordInput.value != "" && /[ABCDEFGHIJKLMNOPQRSTUVXYZ]/.test(passwordInput.value) == true && passwordInput.value.length >= 8 ){
        passCommentPane.style.display = "block";
        firstPassBar.style.display = "inline";
        secondPassBar.style.display = "none";
        thirdPassBar.style.display = "none";
    }
//checks if input has values as smalls and greater than 1
    if( passwordInput.value != "" && /[abcdefghijklmnopqrstuvwxyz]/.test(passwordInput.value) == true && passwordInput.value.length >= 8 ){
        passCommentPane.style.display = "block";
        firstPassBar.style.display = "none";
        secondPassBar.style.display = "inline";
        thirdPassBar.style.display = "none";
    }
//checks if input has values as nums and greater than 1
    if( passwordInput.value != "" && /[0123456789]/.test(passwordInput.value) == true && passwordInput.value.length >= 8 ){
        passCommentPane.style.display = "block";
        firstPassBar.style.display = "none";
        secondPassBar.style.display = "none";
        thirdPassBar.style.display = "inline";
    }
//checks if input has values as caps and smalls and also greater than 1
    if( passwordInput.value != "" && /[ABCDEFGHIJKLMNOPQRSTUVXYZ]/.test(passwordInput.value) == true && /[abcdefghijklmnopqrstuvwxyz]/.test(passwordInput.value) == true && passwordInput.value.length >= 8 ){
        passCommentPane.style.display = "block";
        firstPassBar.style.display = "inline";
        secondPassBar.style.display = "inline";
        thirdPassBar.style.display = "none";
    }
//checks if input has values as caps and nums and also greater than 1
    if( passwordInput.value != "" && /[ABCDEFGHIJKLMNOPQRSTUVXYZ]/.test(passwordInput.value) == true && /[0123456789]/.test(passwordInput.value) == true && passwordInput.value.length >= 8 ){
        passCommentPane.style.display = "block";
        firstPassBar.style.display = "inline";
        secondPassBar.style.display = "none";
        thirdPassBar.style.display = "inline";
    }
//checks if inputs has values as smalls and nums and also greater than 1
    if( passwordInput.value != "" && /[0123456789]/.test(passwordInput.value) == true && /[abcdefghijklmnopqrstuvwxyz]/.test(passwordInput.value) == true && passwordInput.value.length >= 8 ){
        passCommentPane.style.display = "block";
        firstPassBar.style.display = "none";
        secondPassBar.style.display = "inline";
        thirdPassBar.style.display = "inline";
    }
//checks if inputs has values as caps,nums and smalls and also greater than 1
    if( passwordInput.value != "" && /[ABCDEFGHIJKLMNOPQRSTUVXYZ]/.test(passwordInput.value) == true && /[abcdefghijklmnopqrstuvwxyz]/.test(passwordInput.value) == true && /[0123456789]/.test(passwordInput.value) == true && passwordInput.value.length >= 1 ){
        passCommentPane.style.display = "block";
        firstPassBar.style.display = "inline";
        secondPassBar.style.display = "inline";
        thirdPassBar.style.display = "inline";
    }
//checks if inputs has values but lengthis less than 8
    if( passwordInput.value != "" && passwordInput.value.length < 8 ){
        passCommentPane.style.display = "block";
        firstPassBar.style.display = "inline";
        secondPassBar.style.display = "none";
        thirdPassBar.style.display = "none";
    }
}

//to make the submit button validate the inputs on click
submitInput.onclick = validator;

//the form validator
function validator(  a = 0 ,callback = checkAnimator, callback2 = displayLogIn ){
    //declare the check variables
    let emailCheck, passCheck, nameCheck;

    //perform checks on input and assign true or false to the variables

    //on the email input
    if( emailInput.value === "" || /[@.com]/i.test(emailInput.value) != true ){
        emailCheck = false;
    }else{
        emailCheck = true ;
    }

    //on the password input
    if( passwordInput.value.length < 8 || passwordInput.value === "" ){
        passCheck = false;
    } else {
        passCheck = true ;
    }

    //on the name input
    if( nameInput.value === "" ){
        nameCheck = false ;
    }else{
        nameCheck = true ;
    }

    //perform comparisons for validation based on the different results
    if( nameCheck === false && passCheck === true && emailCheck == true && checkBox.checked === true){
        alert("Please input a name");
    }
    if( nameCheck === true && passCheck === false && emailCheck== true && checkBox.checked === true){
        alert("Please input a password that's atleast 8 characters long");
    }
    if( nameCheck === true && passCheck === true && emailCheck== false && checkBox.checked === true){
        alert("Please input a valid email or you might have skipped the '.com' or the '@' symbols");
    }
    if( nameCheck === true && passCheck === true && emailCheck== true && checkBox.checked === true){
        alert("Thank you for for putting your trust in us to deliver your best of camping");
        callback2(true);
    }
    if( nameCheck === true && passCheck === true && emailCheck== true && checkBox.checked === false){
        callback(true);
    }
}

function checkAnimator(bool, counter = 0){
    if( bool === true ){
        let arry = [ false , true, false, true, false];
        let x = setInterval(function(){
            checkBox.checked = arry[counter];
            counter++;
            if(counter === 5){
                checkBox.checked = false;
                clearInterval(x);
            }
        }, 300);
    }

}

function displayLogIn(bool){
    if( bool === true ){
        formElement.style.display = "none";
        signedUpDisplay.style.display = "block"
    }
    
}

//end of code
//written by mabawonku joshua...major..24/4/2021