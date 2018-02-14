function punchBag(callback){
  let target = {
    firstTarget: "center",
    secondTarget: "outerRing"
  };
  callback(target);
}

function myFunction(thing){
  for(var key in thing){
    console.log(thing[key])
  }
}

//create a function, passing it into punchBag() below, that iterates over data and logs each value in the key-value pair

punchBag(myFunction);


