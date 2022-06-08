//TODO: figure out how to keep events there after refresh!
//TODO: put getset into loop somehow
$(document).ready(function() {
    var currentDateTimeSpan = $("#currentDay");
    var currentTime = parseInt(moment().format('HH'));
    //time test
    currentTime = 15;
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
    //btns.push(btnNine, btnTen, btnEleven, btnTwelve, btnOne, btnTwo, btnThree, btnFour, btnFive)
    console.log(boxes);
    //console.log(btns);
    

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

    // function getSet() {
    //     for (var i = 0; i < btns.length; i++) {
    //         btns[0].on('click', function() {
    //             getSet.preventDefault();
    //             if (boxes[0].val() !== '') {
    //                 localStorage.setItem('Entry9', boxes[0].val());
    //             }
    //         });
    // }
    function getSet() {
        btnNine.on('click', function(event) {
            event.preventDefault();
            if (boxes[0].val() !== '') {
                localStorage.setItem('userText9', boxes[0].val());
            }
        });
    
        btnTen.on('click', function(event) {
            event.preventDefault();
            if (boxes[1].val() !== '') {
                localStorage.setItem('userText10', boxes[1].val());
            }
    
        });
    
        btnEleven.on('click', function(event) {
            event.preventDefault();
            if (boxes[2].val() !== '') {
                localStorage.setItem('userText11', boxes[2].val());
            }
    
        });
    
        btnTwelve.on('click', function(event) {
            event.preventDefault();
            if (boxes[3].val() !== '') {
                localStorage.setItem('userText12', boxes[3].val());
    
            }
        });
    
        btnOne.on('click', function(event) {
            event.preventDefault();
            if (boxes[4].val() !== '') {
                localStorage.setItem('userText1', boxes[4].val());
            }
    
        });
    
        btnTwo.on('click', function(event) {
            event.preventDefault();
            if (boxes[5].val() !== '') {
                localStorage.setItem('userText2', boxes[5].val());
            }
    
        });
    
        btnThree.on('click', function(event) {
            event.preventDefault();
            if (boxes[6].val() !== '') {
                localStorage.setItem('userText3', boxes[6].val());
            }
    
        });
    
        btnFour.on('click', function(event) {
            event.preventDefault(); 
            if (boxes[7].val() !== '') {
                localStorage.setItem('userText4', boxes[7].val());  
            }
        });
        
        btnFive.on('click', function(event) {
            event.preventDefault();
            if (boxes[8].val() !== '') {
                localStorage.setItem('userText5', boxes[8].val());
            } 
        });
    }

    //This function updates the current date to 
    //display at the top of the page
    function updateCurrentDate() {
        currentDateTimeSpan.text(moment().format("dddd, MMMM Do YYYY"));
    }
    
    updateCurrentDate();
    ppf();
    getSet();
});
