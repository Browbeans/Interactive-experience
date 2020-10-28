/**
 * Will display "stay here div" based on users input
 * @if toggle between display and hide the div
 * @else toggle between display and hide the div
 */
function getValueStay() {
    let stay = document.getElementById("stayHere");
    if(stay.style.display == 'block')
       stay.style.display = 'none'
    else
       stay.style.display = 'block'
 }

/**
 * array of choices that the users has
 */ 
let valuesBrochureSign = ["BROCHURE", "SIGN"]

/**
 * Will display one div based on users choice either "actionBrochure", "actionSign" or display a wrong message if user types in invalid value.  
 * @if compares users value to the array "valuesBrochureSign" and display selected div, and toggle between display and hide the div
 * @else toggle between display and hide the div
 */
function choseBrochureSign() {
    let choice = document.getElementById("getBrochureOrSign").value;
    if (choice.toUpperCase() == valuesBrochureSign[0]){
        let brochure = document.getElementById ("actionBrochure")
        if(brochure.style.display == 'block')
            brochure.style.display = 'none'
        else
            brochure.style.display = 'block'
    }
    else if (choice.toUpperCase() == valuesBrochureSign[1]){
        let sign = document.getElementById("actionSign")
        if(sign.style.display == 'block')
        sign.style.display = 'none'
    else
       sign.style.display = 'block'
    }
    else {
        let wrongValue = document.getElementById("stayHere")
        wrongValue.append("Please enter brochure or sign")
    }
}

/**
 * Will display the div called "formValidated"
 * @if toggle between display and hide the div
 * @else toggle between display and hide the div
 */
function validateForm(){
    let stay = document.getElementById("formValidated");
    if(stay.style.display == 'block')
       stay.style.display = 'none'
    else
       stay.style.display = 'block'
}

/**
 * Will display the div called "runAway"
 * @if toggle between display and hide the div
 * @else toggle between display and hide the div
 */
function getValueRun() {
    var run = document.getElementById("runAway");
    if(run.style.display == 'block')
       run.style.display = 'none'
    else
       run.style.display = 'block'
 }


/**
 * array of choices "PUNCH" "TALK" and "IGNORE" 
 */  
let valuesPTI = ["PUNCH", "TALK", "IGNORE"]

/**
 * Will display one of 3 divs "actionPunch", "stayHere", "actionIgnore" or display a wrong message if user types in invalid value based on the users selection
 * @if compares users value to the array "valuesBrochureSign" and display selected div, and toggle between display and hide the div
 * @else toggle between display and hide the div
 */
function chosePunchTalkIgnore() {
    let input = document.getElementById("PTI").value;
    if (input.toUpperCase() == valuesPTI[0]){     
        let punch = document.getElementById("actionPunch")
        if(punch.style.display == 'block')
           punch.style.display = 'none'
        else
           punch.style.display = 'block'
    }

    else if (input.toUpperCase() == valuesPTI[1]){     
        let run = document.getElementById("stayHere");
        if(run.style.display == 'block')
        run.style.display = 'none'
    else
       run.style.display = 'block'
    }

    else if (input.toUpperCase() == valuesPTI[2]){     
        let chooseFightOrDie = document.getElementById("actionIgnore");
        if(chooseFightOrDie.style.display == 'block')
            chooseFightOrDie.style.display = 'none'
        else
            chooseFightOrDie.style.display = 'block'
    }
    else {
        let wrongValue = document.getElementById("runAway")
        wrongValue.append("Please enter Punch, Talk or Ignore")
    }
}

/**
 * Displays a div based on if user chooses pick up the stick
 * @if toggle between display and hide the div
 * @else toggle between display and hide the div
 */
function pickUpStick() {
    let pickStick = document.getElementById("fightWithStick")
    if(pickStick.style.display == 'block')
        pickStick.style.display = 'none'
    else
        pickStick.style.display = 'block'
}


/**
 * Displays a div based on if user chooses not to pick up the stick
 * @if toggle between display and hide the div
 * @else toggle between display and hide the div
 */
function ignoreStick() {
    let ignorestick = document.getElementById("noStick")
    if(ignorestick.style.display == 'block')
        ignorestick.style.display = 'none'
    else
        ignorestick.style.display = 'block'
}

/**
 * Function that will reload the page and start the game over
 */
function restartYes() {
    location.reload();
}

