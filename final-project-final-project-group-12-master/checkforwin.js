// This lets you export the checkForWin function.
module.exports = {
	checkForWin: checkForWin
}

/*

Returns 0 if there is no win, 
Returns 1 if player 1 is the winner, 
Returns 2 if player 2 is the winner.

boardstate shoudld be an array where:

[[] [] [] [] [] [] []]


Each of the mini-elemets should contain a value: 0 if unoccupied
						 1 if owned by player 1 
  0 1 2 3 4 5 6					 2 if owned by player 2
  v v v v v v v
[ * * * * * * * ]
  * * * * * * *
  * * * * * * *
  * * * * * * *
  * * * * * * *
  * * * * * * *
*/

/*
var board = 
	[
		[1, 2, 2, 2, 1],
		[2, 2, 2, 1],
		[2, 1, 1, 2],
		[1, 2, 2, 1],
		[2, 1, 1, 2],
		[2, 1, 1, 2],
		[1, 1]
	]


checkForWin(board); 
*/
function checkForWin(boardstate){
	var result = 0;
	var success = false;
	for(var i = 0; i < 7 && !success; i++){
		for(var j = 0; j < boardstate[i].length && !success; j++){
			result = checkAtSpot(boardstate, i, j, boardstate[i][j]);
			if(result){
				success = true;
				console.log("Player", result, "has won the game.");
			}
		}
	}
	return result;
}

/*    EVERYTHING BELOW HERE ARE HELPER FUNCTIONS.
 *    
 *    EDIT WITH EXTREME DISCRETION.
 *
 *
 *
 *
 */

function checkAtSpot(boardstate, loci, locj, occupy){
	if(!occupy)
		return 0;
	else{
		var victor = 0;
		victor = checkHorizontal(boardstate, 1, occupy, loci, locj);
		if(victor)
			return victor;
		victor = checkVertical(boardstate, 1, occupy, loci, locj);
		if(victor)
			return victor;
		victor = checkDiagPos(boardstate, 1, occupy, loci, locj);
		if(victor)
			return victor;
		victor = checkDiagNeg(boardstate, 1, occupy, loci, locj);
		return victor;
	}
}




function checkHorizontal(boardstate, prev, playerOfInterest, loci, locj){
	loci++;
	if(loci > 6 || boardstate[loci].length <= locj)
		return 0;
	if(boardstate[loci][locj] == playerOfInterest){
		prev++;
		if(prev == 4)
			return playerOfInterest;
		else
			return checkHorizontal(boardstate, prev, playerOfInterest, loci, locj);
	}
	else
		return 0;
}




function checkVertical(boardstate, prev, playerOfInterest, loci, locj){
	locj++;
	if(locj > 5 || boardstate[loci].length <= locj)
		return 0;
	if(boardstate[loci][locj] == playerOfInterest){
		prev++;
		if(prev == 4){
			console.log("Player ", playerOfInterest, " returned!");
			return playerOfInterest;
		}
		else
			return checkVertical(boardstate, prev, playerOfInterest, loci, locj);
	}
	else
		return 0;
}



function checkDiagPos(boardstate, prev, playerOfInterest, loci, locj){
	loci++;
	locj++;
	if(locj > 5 || loci > 6 || boardstate[loci].length <= locj)
		return 0;
	if(boardstate[loci][locj] == playerOfInterest){
		prev++;
		if(prev == 4)
			return playerOfInterest;
		else
			return checkDiagPos(boardstate, prev, playerOfInterest, loci, locj);
	}
	else
		return 0;
}


function checkDiagNeg(boardstate, prev, playerOfInterest, loci, locj){
	loci++;
	locj--;
	if(locj < 0 || loci > 6 || boardstate[loci].length <= locj)
		return 0;
	if(boardstate[loci][locj] == playerOfInterest){
		prev++;
		if(prev == 4)
			return playerOfInterest;
		else
			return checkDiagNeg(boardstate, prev, playerOfInterest, loci, locj);
	}
	else
		return 0;
}
