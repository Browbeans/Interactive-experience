
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

let valuesPTI = ["Punch", "Talk", "Ignore"]

let i = 0;

function othername() {
    let input = document.getElementById("PTI").value;
    
    if(valuesPTI.includes(input)){
        alert(input)
    }
    else {
        alert("wrong value")
    }
}
 