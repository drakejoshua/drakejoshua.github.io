//welcome section
//decide your action
let welcomeVariable = prompt("welcome, please which operation do you want to perform: arithmetic , base conversion from 10 to any base , trigonometric")

//action decided
if( welcomeVariable == "arithmetic" ){
    //creating arithmetic varibles
    let input1,input2,input3;

    //collect data values
    input1 = prompt("input a number");
    input2 = prompt("input a number");

    //check if inputs have a empty value or not and performs action
    if( input1=="" || input2=="" ){
        alert("pleae reload and enter a value for both inputs so as to calculate efficiently");
        console.error("no value have been inputted");
    } else {
        input3 = prompt("input a mathematical operator");
    }


    //converting prompt enteries from string to numbers
    let calcInput1 = Number(input1);
    let calcInput2 = Number(input2);

    //actual calculator which makes the calculation based on the prompt input of the
    //mathematical operator
    switch(input3){
        case "+":
        alert( calcInput1 + calcInput2);
        break;

        case "-":
        alert( calcInput1 - calcInput2);
        break;

        case "x":
        case "*":
        alert( calcInput1 * calcInput2 );
        break;

        case "/":
        alert( calcInput1 / calcInput2 );
        break;

        case "^":
        alert( calcInput1 ** calcInput2 );
        break;

        case "":
        case null:
        alert(" please input an arithmetic operator in order for you to be able to calculate");
        break;

        default:
        alert("there's a syntax or logic error");
    }
} else if( welcomeVariable == "base conversion from 10 to any base" || welcomeVariable == "baseconversionfrom10toanybase" ){
    //create base conversion variables
    let input5,calcInput5,askinput;

    //collect data value
    input5 = prompt("Enter the number you want convert in base 10");
    calcInput5 = Number(input5);

    //ask for action
    askinput = prompt("Enter the base number you want to convert to");

    //calculate answer
    alert( calcInput5.toString(Number(askinput)) )
} else {
    //creating trig variables
    let input4,calcInput4,askinput;

    input4 = prompt("please enter a degree for which you want to find its cosine");
    calcInput4 = Number(input4);

    //convert calcInput4 to radians
    calcInput4InRad = calcInput4 * Math.PI / 180;

    //ask for action 
    askinput = prompt(" do you want to find its sine or cosine or tangent");

    //perform calculation and give answer
    if( askinput == "sine" ){
        alert( "the sine function of the angle is " + Math.sin(calcInput4InRad) );
    } else if( askinput == "cosine" ){
        alert( "the cosine function of the angle is " + Math.cos(calcInput4InRad) );
    } else {
        alert( "the tangent function of the angle is " + Math.tan(calcInput4InRad) );
    }
}



//end of code
//made by mabawonku joshua..major..10/4/2021