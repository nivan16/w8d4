class Board {
  constructor(size = 3) {
    this.grid = this.makeGrid(size);
  }

  makeGrid(boardSize){
    let arr = [];
    for(let i = 0; i < boardSize; i++){
      let row = [];
      for(let j = 0; j < boardSize; j++){
        row.push(" ");
      }
      arr.push(row);
    }
    return arr;
  }

  isValid(pos) {
    if ((pos[0] < 0 || pos[0] >= this.grid.length) ||
      (pos[1] < 0 || pos[1] >= this.grid.length)) {
        return false;
      }

    return true;
  } 

  empty(pos){
    if (this.grid[pos[0]][pos[1]] === " "){
      return true;
    }
    return false;
  }

  placeMark(pos, mark){
    if(!this.isValid(pos) || !this.empty(pos)){
      throw new Error("Not a valid position!");
    }
    this.grid[pos[0]][pos[1]] = mark;
  }

  horizontalWin() {
    for (let i = 0; i < this.grid.length - 1; i++) {
      let same = true;
      for (let j = 0; j < this.grid.length - 1; j++) {
        if ((this.grid[i][j] !== this.grid[i][j + 1]) || this.grid[i][j] === " ") {
          same = false;
          break;
        }
      }
      if (same) {
        return true;
      }
    }
    return false;
  }

  // horizontalWin2() {
  //   for (let i = 0; i < this.grid.length; i++) {
  //     let row = this.grid[i];
  //     if (row.every(value = value === arr[0] && 
  //         value !== " ")){
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  verticalWin(){
    for (let i = 0; i < this.grid.length - 1; i++) {
      let same = true;
      for (let j = 0; j < this.grid.length - 1; j++) {
        if((this.grid[j][i] !== this.grid[j+1][i]) || this.grid[j][i] === " "){
          same = false;
          break;
        }
      }
      if (same) {
        return true;
      }
    }
    return false;
  }

  diagonalWin(){
    let left = this.grid.length - 1;
    let same = true;
    for(let i = 0; i < this.grid.length - 1; i++) {
      if ((this.grid[i][left] !== this.grid[i+1][left-1]) || this.grid[i][left] === " "){
        same = false;
        break;
      }
      left--;
    }

    if (same) {
      return true;
    }
    same = true;
    for (let i = 0; i < this.grid.length - 1; i++) {
      if ((this.grid[i][i] !== this.grid[i+1][i+1]) || this.grid[i][i] === " ") {
        same = false;
        break;
      }
    }
    if (same) {
      return true;
    }

    return false;
  }

  won(){
    return (this.horizontalWin() || this.verticalWin() || this.diagonalWin());
  }

  winner(){
    
  }

  full(){
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid.length; j++) {
        if (this.grid[i][j] === " "){
          return false;
        }
      }
    }
    return true;
  }

  printBoard(){
    for (let i = 0; i < this.grid.length; i++) {
      let row = this.grid[i];
      console.log(row.join("|"));
      if( i !== this.grid.length - 1){
        console.log(("-").repeat(this.grid.length * 2));
      }
    }
  }

}

