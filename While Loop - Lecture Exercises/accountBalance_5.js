function accountBalance(input){
    let index = 0;
    let command = input[index];
    index++;
    let totalAccount = 0;
    let finish = false;
     
    while(command !== "NoMoreMoney"){
        let installment = Number(command);
     
        if(installment < 0){
            finish = true;
            break;
        }
        console.log(`Increase: ${installment.toFixed(2)}`)
        totalAccount +=installment
     
        command = input[index];
        index++
    }
    if(finish){
       console.log("Invalid operation!")
       console.log(`Total: ${totalAccount.toFixed(2)}`)
    }else{
        console.log(`Total: ${totalAccount.toFixed(2)}`)
    }
    }