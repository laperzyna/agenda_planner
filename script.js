//TODO: figure out local storage!
$(document).ready(function() {
    var currentDateTimeSpan = $("#currentDay");
    var currentTime = parseInt(moment().format('HH'));
    //time test
    currentTime = 15;
    console.log(currentTime);
    var boxes = new Array;
    var hrNine = $("#box1");
    var hrTen = $("#box2");
    var hrEleven = $("#box3");
    var hrTwelve = $("#box4");
    var hrOne = $("#box5");
    var hrTwo = $("#box6");
    var hrThree = $("#box7");
    var hrFour = $("#box8");
    var hrFive = $("#box9");
    boxes.push(hrNine, hrTen, hrEleven, hrTwelve, hrOne, hrTwo, hrThree, hrFour, hrFive);
    console.log(boxes);
    
    //This function determines what color the boxes should be highlighted
    //for past, present, and future.
    //it does this by checking each boxes specific attribute, data-hour, against
    //the current time to see if the box lies in the past, present, or future.
    //ppf stands for past, present, future
    function ppf() {
        for (var i = 0; i < boxes.length; i++) {
            if (parseInt(boxes[i].attr('hour')) > currentTime) {
                boxes[i].removeClass('past present future');
                boxes[i].addClass('future');
            } else if (parseInt(boxes[i].attr('hour')) === currentTime) {
                boxes[i].removeClass('past present future');
                boxes[i].addClass('present'); 
            } else {
                boxes[i].removeClass('past present future');
                boxes[i].addClass('past');
        
            }
        }
    }

    //This function updates the current date to 
    //display at the top of the page
    function updateCurrentDate() {
        currentDateTimeSpan.text(moment().format("dddd, MMMM Do YYYY"));
    }
    
    updateCurrentDate();
    ppf();
});
