class Game{
        
    constructor(){

    }

    updateHeight(){

        database.ref('balloon/height').set({
            'x': balloon.x,
            'y': balloon.y
        })

    }

    

    readHeight(data){

        height = data.val();
        balloon.x = balloon.height.x;
        balloon.y = height.y;
        drawSprites();
        
     

    }
  
  

  move(){

    if(keyDown(LEFT_ARROW)){
        balloon.x = balloon.x-10;
    }else if(keyDown(RIGHT_ARROW)){
        balloon.x = balloon.x+10;
    }else if(keyDown(UP_ARROW)){
        balloon.y = balloon.y-10;
        balloon.scale= balloon.scale-0.01
    }else if(keyDown(DOWN_ARROW)){
        balloon.y = balloon.y+10;
        balloon.scale= balloon.scale+0.01

    }
  }
}
