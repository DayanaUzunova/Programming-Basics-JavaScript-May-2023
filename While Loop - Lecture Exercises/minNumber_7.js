function number(input){
    let maxNumber = Number.MAX_SAFE_INTEGER;
 
    let index = 0;
    let currentInput = input[index];
 
    while(currentInput !== "Stop"){
     let inputAsNumber = Number(currentInput);
 
     if (inputAsNumber < maxNumber){
         maxNumber = inputAsNumber;
     }
     index++;
     currentInput = input[index];
    }
    console.log(maxNumber);
 }