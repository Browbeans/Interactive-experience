
function getValueStay() {
    var run = document.getElementById("stayHere");
    if(run.style.display == 'block')
       run.style.display = 'none';
    else
       run.style.display = 'block';
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
        
    }
    else if (input.toUpperCase() == valuesPTI[1]){     
        console.log(input)
    }
    else if (input.toUpperCase() == valuesPTI[2]){     
        console.log(input)
    }
    else {
        alert("Please chose punch, talk or ignore")
    }
}
 