function callFriend(callback){
  callback();
}


function testFunc(){
  console.log(` I'm calling my friend`);
}

  callFriend(testFunc);
//create a new function below that will be passed into callFriend(). This function that you create will 
//console log "i'm calling my friend"

//verify it works by 1. having no errors logged and 2. having "i'm calling my friend" logged
