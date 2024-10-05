export  class Cell {
    private x: number;
    private y: number;
    private type: number | "mine" = 0;
    private isOpen: boolean = false;
    private isFlage: boolean = false;
    private mineNumber : number = 0
    constructor(x: number, y: number,type:number | "mine" = 0) {
        this.x = x;
        this.y = y;
        this.type = type
        
    }
    public getType(){
        return this.type
    }
    public isMine (){
        return this.getType() === "mine"
    }
public getIsOpen(){
    return this.isOpen
}
    public openCell(){
       
    this.isOpen = true
      
    }
    
    public getX(){
        return this.x
    }
    public getY(){
        return this.y
    }

     
    public setmineNumber(number : number){
         this.mineNumber = number
    }
    public getmineNumber(){
        return this.mineNumber
    }
    
    public isEmpty(){
        if(this.mineNumber == 0 && !this.isMine())
        {
            return true;
        }
        else{
            return false;
        }
    }

    
}