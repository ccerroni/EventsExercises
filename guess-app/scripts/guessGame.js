class GuessGame extends Game {
    constructor (gameType, numberToChoice) {
        super(gameType);
        this.numberToChoice = numberToChoice;
        this.inputNumber = this.createInput();
        this.guessButton = this.createButton(this);
        this.htmlElement = document.createElement('div');

        this.renderElement();
    }

    createInput() {
        let inputNumber = document.createElement('input');
        inputNumber.type = 'number';
        inputNumber.max = 100;
        inputNumber.min = 0;
        inputNumber.value = 0;
        inputNumber.id = 'numberSelected';
        return inputNumber;
    };

    createButton(gameGuess) {
        var button = document.createElement('button');
        button.innerHTML = 'Guess Number';
        button.id = "guessBtn";
        button.onclick = this.checkNumber(gameGuess);
        return button;
    };

    renderElement() {
        document.getElementById('gameHeader').innerHTML="What is my number?";
        this.htmlElement.appendChild(this.inputNumber);
        this.htmlElement.appendChild(this.guessButton);

        document.getElementById('gameContainer').appendChild(this.htmlElement);
    };

    checkNumber (gameGuess) {
        return function () {    
            let number = document.getElementById('numberSelected').value;
            if(number && number >= 0 && number <= 100) {
                gameGuess.attemps.push(number);
                if (number > gameGuess.numberToChoice) {
                    document.getElementById('gameMessage').innerHTML = '<h5 class="text-danger">Mi Number is smaller! </h5> <div class="mt-2"> Your Attemps: ' + gameGuess.attemps.join(', ')+ ' </div>';
                }
                else if (number < gameGuess.numberToChoice) {
                    document.getElementById('gameMessage').innerHTML = '<h5 class="text-danger">Mi Number is bigger! </h5> <div class="mt-2"> Your Attemps: ' + gameGuess.attemps.join(', ')+ ' </div>';
                }
                else {
                    document.getElementById('gameMessage').innerHTML = '<h5 class="text-success">You Win! </h5> <div class="mt-2"> Your Attemps: ' + gameGuess.attemps.join(', ')+ ' </div>';
                    gameGuess.finish();
                }
                document.getElementById('numberSelected').value = '';
                document.getElementById('numberSelected').focus();
            }
            else {
                alert('The number must be between 0 - 100');
            }
        }        
    };
};