/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores,roundScore,activePlayer,dice,gamePlaying,previous;



atStart();

document.querySelector('.btn-roll').addEventListener('click',function(){
	if(gamePlaying){
	//Random number
	var dice = Math.floor(Math.random()*6 +1);
	//Displsy the result
	var diceDOM = document.querySelector('.dice');

	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' +dice+ '.png';
	//Update the round Score if the rolled dice is not 1
	
if(previous === dice && previous === 6){
			scores[activePlayer] = 0;
			document.querySelector('#scores-' +activePlayer).textContent = scores[activePlayer]; 	
			active();
		}
		else if(dice !== 1){
		roundScore += dice;
		document.querySelector('#current-' +activePlayer).textContent = roundScore;	
		}
	
	else{
		active();
	}	
	previous = dice;	
	

}
});
		
	document.querySelector('.btn-hold').addEventListener('click',function(){
		if(gamePlaying){

	scores[activePlayer] += roundScore;
	document.querySelector('#scores-' +activePlayer).textContent = scores[activePlayer]; 	

	if(scores[activePlayer]>=30){
			gamePlaying = false;
			//DO something
			document.querySelector('#name-' +activePlayer).textContent = 'WINNER';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' +activePlayer+ '-panel').classList.remove('active');
			document.querySelector('.player-' +activePlayer+ '-panel').classList.add('winner');
		}

		else{
			active();
		}	
		}
		});

document.querySelector('.btn-new').addEventListener('click', atStart);




function active(){
		document.querySelector('.dice').style.display = 'none';
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;

		document.querySelector('#current-' +0).textContent = '0';
		document.querySelector('#current-' +1).textContent = '0';

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

}

function atStart(){
		scores = [0,0];
		roundScore = 0;
		activePlayer = 0;
		gamePlaying = true;
		document.querySelector('.dice').style.display = 'none';
		document.getElementById('scores-0').textContent = '0';
		document.getElementById('scores-1').textContent = '0';
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
			document.querySelector('.player-0-panel').classList.remove('winner');
			document.querySelector('.player-1-panel').classList.remove('winner');

		document.querySelector('.player-0-panel').classList.remove('active');
		document.querySelector('.player-1-panel').classList.remove('active');
		document.querySelector('.player-0-panel').classList.add('active');

		document.querySelector('#name-0').textContent = 'PLAYER 1';
		document.querySelector('#name-1').textContent = 'PLAYER 2';
}









