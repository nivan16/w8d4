var Board = require('./board.js');

class Game{
  constructor(){
    this.board = new Board(3);
    this.playerOne = new HumanPlayer();
    this.playerTwo = new HumanPlayer();
    this.currentPlayer = this.playerOne;
  }

  run(reader, completionCallback) {
    while (!this.gameOver()) {
      let move;
      do{
        move = this.currentPlayer.getMove(reader);
      } while(this.board.isValid(move));

      this.board.placeMark(pos, this.currentPlayer.getMark());

      
      
    }





    // if (this.board.won()) {
    //   console.log(`${this.currentPlayer} won!`);
    // } else {
    //   console.log("Tie! No Winner!");
    // }

    // get move => humanplayer => prompt ui => reader
    // get move => computer player => get pos => reader
    // switch turns
  }

  gameOver(){
    return this.board.won() || this.board.full();
  }
}