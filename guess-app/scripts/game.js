class Game {
    constructor(gameType) {
        this.gameType = gameType;
        this.attemps = [];
    }

    finish() {
        if(this.gameType === 'guess') {
            document.getElementById('numberSelected').disabled = true;
            document.getElementById('guessBtn').disabled = true;
        }
        else{
            document.getElementById('lessBtn').disabled = true;
            document.getElementById('bigBtn').disabled = true;
            document.getElementById('equalBtn').disabled = true;
        }
    };
};



