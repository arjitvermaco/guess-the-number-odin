// console.log("File Loaded")

// console.log(document.querySelector(".number").textContent)

// document.querySelector('.number').textContent = 100;

// document.querySelector('.guess').value = 30;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNumber)


function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess)

    // 1.Check if input is empty and show error 

    if (!guess) {
        displayMessage('❌ Enter a number');
        return
    }


    // 2.Check if guess === secretNumber and show message of win
    // and check if score > highscore then update highscore

    if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 Correct Number';
        displayMessage('🎉 Correct Number');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.background = '#60b347';
        document.querySelector('.number').style.background = '#60b347';
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti()
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
            score--
            document.querySelector('.score').textContent = score;
            // if (guess > secretNumber) {
            //     // document.querySelector('.message').textContent = '📉 Too High';
            //     displayMessage('📉 Too High');
            // } else {
            //     // document.querySelector('.message').textContent = '📈 Too Low';
            //     displayMessage('📈 Too Low');
            // }
            // let message = guess > secretNumber? '📉 Too High' : '📈 Too Low';
            displayMessage(guess > secretNumber ? '📉 Too High' : '📈 Too Low');
        } else {
            // document.querySelector('.message').textContent = '💥 You Lost the Game';
            displayMessage('💥 You Lost the Game');
            document.querySelector('.score').textContent = 0;
            document.querySelector('.number').textContent = '?'
            document.querySelector('body').style.background = 'red';
        }

    }

    // 3.Check if guess < secretNumber and show message of too low
    // and decrease score by 1
    // 4.Check if guess > secretNumber and show message of too high
    // and decrease score by 1
    // 5. User can only play when score > 0

})

document.querySelector(".again").addEventListener('click', function () {
    //Score back to 20
    score = 20;
    document.querySelector('.score').textContent = score;
    //Create another secret Number
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    //Change the message to Start guessing...
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');

    //Change number to ?
    document.querySelector('.number').textContent = '?';
    //Empty the input box
    document.querySelector('.guess').value = '';
    //Change the background to default
    document.querySelector('body').style.background = 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 5%, rgba(0,212,255,1) 100%)';
})