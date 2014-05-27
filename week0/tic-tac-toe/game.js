"use strict";
var prompt = require("sync-prompt").prompt;

function printBoard(board) {
  var
    i = 0, 
    n = board.length;

  for(i; i < n; i++)
    console.log(board[i].join(""));
}

function win(board, sign) {
  var 
    check = true,
    n = board.length;

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - 1; j++)
        check = (check && (board[i][j] == board[i][j+1]) && (board[i][j+1] == sign)) || // horizontals
                (check && (board[j][i] == board[j+1][i]) && (board[j+1][i] == sign));   // verticals
    if (check) 
      return true;    
  }
  check = true;
  for ( i = 0; i < n - 1; i++) 
    check = check && (board[i][i] == board[i+1][i+1]) && (board[i][i] == sign);
  if (check) 
    return true; 

  check = true;
  for ( i = 0 ; i < n; i++) {
    check = check && (board[n-i-1][i] == sign) && (sign == board[n-i-2][i+1]);
  }

return check;


}
// entry point for the game
function gameLoop() {
  var
    board = [ ["*", "*", "*"],
              ["*", "*", "*"],
              ["*", "*", "*"]
             ],
    xTurn = true,
    position = null,
    count = 0,
    sign;

  var user1 = prompt("Enter the name of user1: "), 
      user2 = prompt("Enter the name of user2: ");

  while(count < 9) {

    console.log("This is the current state of the board:");
    printBoard(board);

    if(xTurn) {
      sign = "X";
      console.log(user1 + "'s move!");
    }
    else {
      sign = "O";
      console.log(user2 + "'s move!");
    }

    // this is blocking prompt
    position = prompt("x y>").split(" ");
    //console.log(position);


   var n1 = parseInt(position[0],10),
       n2 = parseInt(position[1],10);

    if (n1 < 1 || n2 < 1 || n1 > 3 || n2 > 3 ||
        board[n1-1][n2-1] == "X" || board[n1-1][n2-1] == "O") {
      console.log("Invalid position!!!");
      continue;
    }

      board[n1-1][n2-1] = sign; 
    
    if ( win(board,"X")) {
       console.log(user1 + " winned!");
       return; 
     }
     else if (win(board,"Y")){ 
      console.log(user2 + " winned!");
      return;
    }

    xTurn = !xTurn;
    count++;

  
  }

  console.log("Draw!");
  var answer = prompt("Start again? (y/n)");
  if (answer == "y")
    gameLoop();
  else console.log("Goodbye!");
}
gameLoop();
