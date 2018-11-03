const init = function() {
    let gameType = document.querySelector('input[name=gameTypeRadio]:checked').value;
    if(gameType == 'guess') {
        let numberToChoice = Math.floor((Math.random() * 100));
        console.log(numberToChoice);
        game = new GuessGame(gameType, numberToChoice);

    }
    else {
        game =  new ChoiceGame(gameType);   
    }    
};

function changeGameType() {
    document.getElementById('startGameBtn').innerText = "Start!";
}

function startGame() {
    clearControls();
    document.getElementById('startGameBtn').innerText = "Restart";
    init();
};

function clearControls() {
    document.getElementById('gameHeader').innerHTML="";
    document.getElementById('gameContainer').innerHTML="";
    document.getElementById('gameMessage').innerHTML="";
};