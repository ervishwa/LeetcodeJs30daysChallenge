//! Question  Sleep

/**Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds.
 * 
 *  It can resolve any value.
 * 
 */


//* Solution

async function sleep(millis) {
 
    //  let ans = await new Promise((res,rej)=>{
    //      setTimeout(()=>{
    //       res("hello");
    //      },millis)
    //  })
    
     return  new Promise((res,rej)=>{
         setTimeout(()=>{
            res("heello");
         }
     ,millis);
    })
    }