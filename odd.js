// create the function

function isOdd (num){
  let trueOrFalse = "";
  if (num%2 === 1){
    trueOrFalse = true;
  }
  else{
    trueOrFalse = false; 
  }
  return trueOrFalse
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));