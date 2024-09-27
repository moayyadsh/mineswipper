class Game{

}
  
class Board{
public cells:Cell[];

public createBoard(row:number , column:number){
    for (let i = 0; i < row; i++) {
       for (let j = 0; j < column; j++) {
        console.log([i][j]);
        
        
       }
        
    }
}


}

class Cell{

}