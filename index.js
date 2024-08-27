

const inputvalue = document.getElementById('number');
const resultvalue = document.getElementById('result');

const guessnumber = Math.floor(Math.random()*20);


function printresult() {
    const inputvalue1 = parseInt(inputvalue.value, 10);

    if(inputvalue1 > 20){
        resultvalue.textContent = "Out of limit!!";
        
        setInterval(() => {
            window.location.reload();
        }, 1500);
        return 
    }
    if (isNaN(inputvalue1)) {
        resultvalue.textContent = "Please enter a valid number.";
    } else if (inputvalue1 === guessnumber) {
        resultvalue.textContent = "Hurray, you win the game!!";

        // showBlastEffect();
        setInterval(() => {
            window.location.reload();
        }, 1500);


    } else if (Math.abs(guessnumber - inputvalue1) <=5) {
        if (inputvalue1 > guessnumber) {
            resultvalue.textContent = "You are close, but too high! Go a little lower.";
        } else {
            resultvalue.textContent = "You are close, but too low! Go a little higher.";
        }
    } else if (inputvalue1 > guessnumber) {
        resultvalue.textContent = "You are too high!";
    } else if (inputvalue1 < guessnumber) {
        resultvalue.textContent = "You are too low!";
    } else {
        resultvalue.textContent = "You are far from it!";
    }

    inputvalue.value = ''; 
}

