//TODO: figure out how to keep events there after refresh!
//TODO: put getset into loop somehow maybe?
$(document).ready(function() {
    var currentDateTimeSpan = $("#currentDay");
    var currentTime = parseInt(moment().format('HH'));
    //time test
    // currentTime = 15;
    console.log(currentTime);
    var boxes = new Array;
    var btns = new Array;
    var hrNine = $("#box1");
    var btnNine = $("#bOne");
    hrNine.val(localStorage.getItem('userText9'));
    var hrTen = $("#box2");
    var btnTen = $("#bTwo");
    hrTen.val(localStorage.getItem('userText10'));
    var hrEleven = $("#box3");
    var btnEleven = $("#bThree");
    hrEleven.val(localStorage.getItem('userText11'));
    var hrTwelve = $("#box4");
    var btnTwelve = $("#bFour");
    hrTwelve.val(localStorage.getItem('userText12'));
    var hrOne = $("#box5");
    var btnOne = $("#bFive");
    hrOne.val(localStorage.getItem('userText1'));
    var hrTwo = $("#box6");
    var btnTwo = $("#bSix");
    hrTwo.val(localStorage.getItem('userText2'));
    var hrThree = $("#box7");
    var btnThree = $("#bSeven");
    hrThree.val(localStorage.getItem('userText3'));
    var hrFour = $("#box8");
    var btnFour = $("#bEight");
    hrFour.val(localStorage.getItem('userText4'));
    var hrFive = $("#box9");
    var btnFive = $("#bNine");
    hrFive.val(localStorage.getItem('userText5'));
    boxes.push(hrNine, hrTen, hrEleven, hrTwelve, hrOne, hrTwo, hrThree, hrFour, hrFive);
    btns.push(btnNine, btnTen, btnEleven, btnTwelve, btnOne, btnTwo, btnThree, btnFour, btnFive)
    console.log(boxes);
    //console.log(btns);
    
    //-----TEST------
    // localStorage.setItem('Entry1', 'hi');
    // localStorage.setItem('Entry2', 'hola');
   
    

    //This function determines what color the boxes should be highlighted
    //for past, present, and future.
    //it does this by checking each boxes specific attribute, data-hour, against
    //the current time to see if the box lies in the past, present, or future.
    //ppf stands for past, present, future
    function ppf() {
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].val(localStorage.getItem('Entry1'));
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

    //-----TEST FUNCTION------
    // function getSet() {
    //     for (var i = 0; i < btns.length; i++) {
    //         btns[0].on('click', function() {
    //             getSet.preventDefault();
    //             if (boxes[0].val() !== '') {
    //                 localStorage.setItem('Entry9', boxes[0].val());
    //             }
    //         });
    // }
    
    //This function sets the local storage to be whatever the user puts into
    //the text boxes by using .setItem. The only thing is I cannot figure out
    //how to retrieve the data after a refresh.
    function getSet() {
        btns[0].on('click', function(event) {
            event.preventDefault();
            if(!localStorage.getItem('userText9')){
                localStorage.setItem('userText9', JSON.stringify(boxes[0].val()));
            }
        });
    
        btns[1].on('click', function(event) {
            event.preventDefault();
            if(!localStorage.getItem('userText10')){
                localStorage.setItem('userText10', JSON.stringify(boxes[1].val()));
            } 
        });
    
        btns[2].on('click', function(event) {
            event.preventDefault();
            if(!localStorage.getItem('userText11')){
                localStorage.setItem('userText11', JSON.stringify(boxes[2].val()));
            }
        });
    
        btns[3].on('click', function(event) {
            event.preventDefault();
            if(!localStorage.getItem('userText12')){
                localStorage.setItem('userText12', JSON.stringify(boxes[3].val()));
            }
        });
    
        btns[4].on('click', function(event) {
            event.preventDefault();
            if(!localStorage.getItem('userText1')){
                localStorage.setItem('userText1', JSON.stringify(boxes[4].val()));
            }  
        });
    
        btns[5].on('click', function(event) {
            event.preventDefault();
            if(!localStorage.getItem('userText2')){
                localStorage.setItem('userText2', JSON.stringify(boxes[5].val()));
            }
        });
    
        btns[6].on('click', function(event) {
            event.preventDefault();
            if(!localStorage.getItem('userText3')){
                localStorage.setItem('userText3', JSON.stringify(boxes[6].val()));
            }
        });
    
        btns[7].on('click', function(event) {
            event.preventDefault(); 
            if(!localStorage.getItem('userText4')){
                localStorage.setItem('userText4', JSON.stringify(boxes[7].val()));
            } 
        });
        
        btns[8].on('click', function(event) {
            event.preventDefault();
            if(!localStorage.getItem('userText5')){
                localStorage.setItem('userText5', JSON.stringify(boxes[8].val()));
            }
        });
    }

    //This function updates the current date to 
    //display at the top of the page
    function updateCurrentDate() {
        currentDateTimeSpan.text(moment().format("dddd, MMMM Do YYYY"));
    }
    
    //function calls
    updateCurrentDate();
    ppf();
    getSet();
});
