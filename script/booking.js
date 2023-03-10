/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var numDays = 0;
var dailyRate = 35;

var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");

var fullDay = document.getElementById("full");
var halfDay = document.getElementById("half");

var clearButton = document.getElementById("clear-button");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function changeDayToOrange() {
    if (!this.classList.contains("clicked")) {
        this.classList.add("clicked");
        numDays++;
    }
    recalculate();
}

monday.addEventListener("click", changeDayToOrange);
tuesday.addEventListener("click", changeDayToOrange);
wednesday.addEventListener("click", changeDayToOrange);
thursday.addEventListener("click", changeDayToOrange);
friday.addEventListener("click", changeDayToOrange);





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clear() {
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");
    numDays = 0;
    recalculate();
}

clearButton.addEventListener("click", clear);




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function changeToHalfDay() {
    dailyRate = 20;
    halfDay.classList.add("clicked");
    fullDay.classList.remove("clicked");
    recalculate();
}

halfDay.addEventListener("click", changeToHalfDay);



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function changeToFullDay() {
    dailyRate = 35;
    halfDay.classList.remove("clicked");
    fullDay.classList.add("clicked");
    recalculate();
}

fullDay.addEventListener("click", changeToFullDay);



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    costLabel.innerHTML = numDays * dailyRate;
    // document.getElementById("calculated-cost").innerHTML = numDays * dailyRate;
}

