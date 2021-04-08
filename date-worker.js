switch( new Date().getHours()){
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
        document.getElementById("greeting-text").innerHTML="Good Morning";
    break;
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
        document.getElementById("greeting-text").innerHTML="Good Afternoon";
    break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        document.getElementById("greeting-text").innerHTML="Good Evening";
    break;
    default:
        console.error();
}

setInterval( myTimer, 1000);

function myTimer(){
    let date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var day = date.getDay();
    var month = date.getMonth();
    var dateNumber = date.getDate();
    let dayName = ["sun","mon","tue","wed","thurs","fri","sat"];
    let monthName = ["january","february","march","april","may",
    "june","july","august","september","october","november","december"];
    if( minutes <= 10 ){
        document.getElementById("minutes").innerHTML = ":" + "0" + minutes ; 
    }else{
        document.getElementById("minutes").innerHTML = ":" + minutes ; 
    }
    document.getElementById("hours").innerHTML = hours ; 
    document.getElementById("day").innerHTML = dayName[day] + "," ;
    document.getElementById("date").innerHTML = dateNumber ; 
    document.getElementById("month").innerHTML = monthName[month] ;
}


