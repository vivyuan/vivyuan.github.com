(function(){

    'use strict'

    const startGame = document.getElementById('startgame');
	const gameControl = document.getElementById('gamecontrol');
	const game = document.getElementById('game');
	const score = document.getElementById('score');
	const actionArea = document.getElementById('actions');
    const clickSound = new Audio('media/clicksound.mp3');  //sound made by myself and edited on iMovie
    const startSound = new Audio('media/startsound.mp3');  //sound made by myself on Garageband
    const winningSound = new Audio('media/winningsound.mp3'); //sound made by myself on Garageband

    const gameData = {
	dice: ['images/1die.jpg', 'images/2die.jpg', 'images/3die.jpg', 
		   'images/4die.jpg', 'images/5die.jpg', 'images/6die.jpg'],
	players: ['Player A', 'Player B'],
	score: [0, 0],
	roll1: 0,
	roll2: 0,
	rollSum: 0,
	index: 0,
	gameEnd: 29
    };

    startGame.addEventListener('click', function(){
        startSound.play();
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = '<h2>The Games Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Restart Game</button>';

        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });
        console.log(gameData.index);
        setUpTurn();
    });

    // step 1: randomly select who's turn to play
    function setUpTurn() { 
        game.innerHTML = `<h5>Roll the dice for the ${gameData.players[gameData.index]}</h5>`; 
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>'; 
        document.getElementById('roll').addEventListener('click', function(){
            throwDice(); 
            clickSound.play();
         });
    }

    // step 2: the selected player goes first, and game started
    function throwDice(){ 
        actionArea.innerHTML = ' '; 
        gameData.roll1 = Math.floor(Math.random() * 6) + 1; 
        gameData.roll2 = Math.floor(Math.random() * 6) + 1; 
        game.innerHTML = `<h5>Roll the dice for the ${gameData.players[gameData.index]}</h5>`; 
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> 
                            <img src="${gameData.dice[gameData.roll2-1]}">`; 
        gameData.rollSum = gameData.roll1 + gameData.roll2; 
        console.log(gameData);

        // if two 1's are rolled
        if( gameData.rollSum === 2 ){ 
            game.innerHTML += '<h6>Oh snap! Snake eyes!</h6>';
            gameData.score[gameData.index] = 0; 
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(setUpTurn, 2000); 
        } 
        // if either die is a 1 
        else if(gameData.roll1 === 1 || gameData.roll2 === 1){ 
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<h6>Sorry, one of your rolls was a one, switching to ${ 
                gameData.players[gameData.index] }</h6>`;
            setTimeout(setUpTurn, 2000);
        } 
        // if neither die is a 1 
        else { 
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>'; 
            
            document.getElementById('rollagain').addEventListener('click', function () { 
                setUpTurn(); 
                clickSound.play();
            }); 
            
            document.getElementById('pass').addEventListener('click', function () { 
                gameData.index ? (gameData.index = 0) : (gameData.index = 1); 
                setUpTurn(); 
                clickSound.play();
            }); 

            checkWinningCondition();

        } 
    }

    // check which player wins
    function checkWinningCondition(){ 
        if(gameData.score[gameData.index] > gameData.gameEnd){ 
            score.innerHTML = `<h4>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h4>`; 
            actionArea.innerHTML = ' '; 
            document.getElementById('quit').innerHTML = "Start a New Game?"; 
            winningSound.play();
        } else { 
            showCurrentScore();
        } 
    }

    // score counted for both players
    function showCurrentScore() { 
        score.innerHTML =  `<p><h3>Current Score<h3> <strong id="playerA">${gameData.players[0]} 
            <h4>${gameData.score[0]}</h4></strong> <strong id="playerB">${gameData.players[1]} <h4>${gameData.score[1]}<h4></strong></p>`; 
    }

    
})();