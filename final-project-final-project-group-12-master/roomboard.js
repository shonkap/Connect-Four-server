// Lets you export this function.

module.exports = {
	registerMove: registerMove
}

/*
boardstate shoudld be an array where:

[[] [] [] [] [] [] []]


Each of the mini-elemets should contain a value: 0 if unoccupied
						 1 if owned by player 1 
  0 1 2 3 4 5 6 ---> i 				 2 if owned by player 2
  v v v v v v v
5>* * * * * * *
4>* * * * * * *
3>* * * * * * *
2>* * * * * * *
1>* * * * * * *
0>* * * * * * *
 

playerNumber is the number of the player (1 or 2) who is making the move.


colummNumber is the column of the play, as identified above.


*/


function registerMove(playerNumber, columnNumber, boardstate){
	for(var i = 5; i >= 0; i--){
		if(boardstate[columnNumber][i] == 0)
			boardstate[columnNumber][i] = playerNumber;
	}
	return boardstate;
}
