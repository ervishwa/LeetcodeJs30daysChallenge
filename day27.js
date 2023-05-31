//! Question 2694. Event Emitter

//* Solution

class EventEmitter {
     obj = {};
  subscribe(event, cb) {
      if(event in this.obj){
          this.obj[event].add(cb);
      }else{
          this.obj[event] = new Set().add(cb);
      }

    return {
        unsubscribe: () => {
         this.obj[event].delete(cb);
        }
    };
  }

  emit(event, args = []) {
     if(event in this.obj){
       const ans = [];

       for(const i of this.obj[event].values()){
           ans.push(i(...args));
           
       }
       return ans;
     }else{
         return [];
     }
  }
}

