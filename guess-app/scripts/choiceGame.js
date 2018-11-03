class ChoiceGame extends Game {
    constructor(gameType) {
        super(gameType);
        this.minRange = 0;
        this.maxRange = 100;
        this.selected = this.selectNumber(this.minRange, this.maxRange);
        this.lessBtn = this.createLessButton(this);
        this.bigBtn = this.createBigButton(this);
        this.equalBtn = this.createEqualButton(this);

        this.htmlElement = document.createElement('div');

        this.renderElement();
    };

    isSmaller(choiceGame) {
        return function () {
            choiceGame.attemps.push(choiceGame.selected);
            choiceGame.maxRange = choiceGame.selected;
            choiceGame.selected = choiceGame.selectNumber(choiceGame.minRange, choiceGame.maxRange);
            choiceGame.updateElement(choiceGame);

        };
    };

    isBigger(choiceGame) {
        return function () {
            choiceGame.attemps.push(choiceGame.selected);
            choiceGame.minRange = choiceGame.selected;
            choiceGame.selected = choiceGame.selectNumber(choiceGame.minRange, choiceGame.maxRange);
            choiceGame.updateElement(choiceGame);
        };
    };

    isEqual(choiceGame) {
        return function () {
            document.getElementById('gameMessage').innerHTML = '<h4 class="text-success">I WON! :) </h4> <p>Attemps: ' + choiceGame.attemps.join(', ') + '</p>';
            choiceGame.finish();
        };
    };

    createLessButton(choiceGame) {
        let button = document.createElement('button');
        button.innerHTML = "No, it is smaller";
        button.classList.add("btn");
        button.classList.add("btn-primary");
        button.classList.add("mr-1");
        button.id = "lessBtn";
        button.onclick = choiceGame.isSmaller(choiceGame);
        return button;
    };

    createBigButton(choiceGame) {
        let button = document.createElement('button');
        button.innerHTML = 'No, it is bigger';
        button.classList.add("btn");
        button.classList.add("btn-danger");
        button.id = "bigBtn";
        button.onclick = choiceGame.isBigger(choiceGame);
        return button;
    };

    createEqualButton(choiceGame) {
        let button = document.createElement('button');
        button.innerHTML = 'Yes, it is!';
        button.classList.add("btn");
        button.classList.add("btn-success");
        button.classList.add("mr-1");
        button.id = "equalBtn";
        button.onclick = choiceGame.isEqual(choiceGame);
        return button;
    };

    selectNumber(min, max) {
        let number = Math.floor(Math.random() * (max - min)) + min;
        if (this.attemps.includes(number))
        {
            if((max - min) > 1 ){
                this.selectNumber(min, max);
            }
        }
        return number;
    };

    renderElement() {
        document.getElementById('gameHeader').innerHTML = '<h4>is your number equal to <strong>' + this.selected + '</strong>?</h4>';
        this.htmlElement.appendChild(this.lessBtn);
        this.htmlElement.appendChild(this.equalBtn);
        this.htmlElement.appendChild(this.bigBtn);
        document.getElementById('gameContainer').appendChild(this.htmlElement);
    };

    updateElement(choiceGame) {
        if(choiceGame.maxRange - choiceGame.minRange != 0) { 
            document.getElementById('gameHeader').innerHTML = '<h4>is your number equal to <strong>' + choiceGame.selected + '</strong>?</h4>';
            if (choiceGame.attemps.length) {
                document.getElementById('gameMessage').innerHTML = '<p>Attemps: ' + choiceGame.attemps.join(', ') + '</p>';
            }
        }
        else {
            alert('Are you sure? it seems somebody is cheating');
        }
    };

};