class Balloon {
    constructor(){
      this.index = null;
      this.height = 0;
    }
  
    update(){
      var balloonIndex;
      database.ref(balloonIndex).set({
        distance:this.distance
      });
    }
  
    static getballoonInfo(){
       var balloonInfo
       balloonInfo = database.ref('height');
       balloonInfo.on("value",(data)=>{

        balloon0 = data.val();

       })
    }
  }
  