function sock(callback){
  callback();
}

function putOn(){
  console.log("putting on my sock");
}

sock(putOn());

//we're getting an error when you try to run it! Modify the code to get rid of the error, but still log "putting on my sock"
