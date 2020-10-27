
function getValueStay() {
    let stay = document.getElementById("stayHere");
    if(stay.style.display == 'block')
       stay.style.display = 'none';
    else
       stay.style.display = 'block';
 }

let valuesBrochureSign = ["BROCHURE", "SIGN"]

function choseBrochureSign() {
    let choice = document.getElementById("getBrochureOrSign").value;
    if (choice.toUpperCase() == valuesBrochureSign[0]){
        let brochure = document.getElementById ("actionBrochure")
        if(brochure.style.display == 'block')
           brochure.style.display = 'none';
        else
           brochure.style.display = 'block';
    }
    else if (choice.toUpperCase() == valuesBrochureSign[1]){
        let sign = document.getElementById("actionSign");
        if(sign.style.display == 'block')
        sign.style.display = 'none';
    else
       sign.style.display = 'block';
    }
}

function getValueRun() {
    var run = document.getElementById("runAway");
    if(run.style.display == 'block')
       run.style.display = 'none';
    else
       run.style.display = 'block';
 }

let valuesPTI = ["PUNCH", "TALK", "IGNORE"]

function chosePunchTalkIgnore() {
    let input = document.getElementById("PTI").value;
    if (input.toUpperCase() == valuesPTI[0]){     
        let punch = document.getElementById("actionPunch")
        if(punch.style.display == 'block')
           punch.style.display = 'none';
        else
           punch.style.display = 'block';
    }

    else if (input.toUpperCase() == valuesPTI[1]){     
        let run = document.getElementById("stayHere");
        if(run.style.display == 'block')
        run.style.display = 'none';
    else
       run.style.display = 'block';
    }

    else if (input.toUpperCase() == valuesPTI[2]){     
        let chooseFightOrDie = document.getElementById("actionIgnore");
        if(chooseFightOrDie.style.display == 'block')
            chooseFightOrDie.style.display = 'none';
        else
            chooseFightOrDie.style.display = 'block';
    }
    else {
        let wrongValue = document.getElementById("runAway")
        wrongValue.append("Please enter Punch, Talk or Ignore")

    }
}
 