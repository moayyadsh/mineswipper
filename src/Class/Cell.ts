export  class Cell {
    private x: number;
    private y: number;
    private type: number | "mine" = 0;
    private isOpen: boolean = false;
    private isFlage: boolean = false;

    constructor(x: number, y: number,type:number | "mine" = 0) {
        this.x = x;
        this.y = y;
        this.type = type

    }
    public getType(){
        return this.type
    }

     

}