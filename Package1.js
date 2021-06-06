class{
    constructor(x,y,width,height){
        var option={
            'restitution' : 0.8
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
    }
    
}