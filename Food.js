class Food{
    constructor(){
        this.image=loadImage("Milk.png")
        this.foodStock=null
        this.lastFed=null;
    }
    getFoodStock(){
        var foodStockRef= database.ref("Food")
        foodStockRef.on("value",(data)=>{
            this.foodStock=data.val();
        })
    }
    updateFoodStock(foodSS){
        database.ref("/").update({
            Food:foodSS
        })
    }
    display(){
        var foodStockRef=database.ref("Food")
        foodStockRef.on("value",(data)=>{
            this.foodStock=data.val()
        })
        var x =80,y=100;
        imageMode(CENTER);
        image(this.image,720,220,70,70)
        if(this.foodStock!==0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x=80;
                    y=y+50
                }
                image(this.image,x,y,50,50);
                x=x+30
            }
        }
        
    }
}
function updateFoodStock(){

}
function getFoodStock(){
  
}
