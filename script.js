//TODO: do the past/present/future things!
$(document).ready(function() {
    var currentDateTimeSpan = $("#currentDay");

    //This function updates the current date to 
    //display at the top of the page
    function updateCurrentDate() {
        currentDateTimeSpan.text(moment().format("dddd, MMMM Do YYYY"));
    }
    
    updateCurrentDate();
});
