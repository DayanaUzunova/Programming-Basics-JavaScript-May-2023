function operations(input){
        let n1 = Number(input[0]);
        let n2 = Number(input[1]);
        let operator = String(input[2]);
        let result = 0.0;

        if (operator === "+") {
            result = n1 + n2;
            if (result % 2 == 0) {
                console.log(`${n1} + ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} + ${n2} = ${result} - odd`);
            }
        } else if (operator === "-") {
            result = n1 - n2;
            if (result % 2 == 0) {
                console.log(`${n1} - ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} - ${n2} = ${result} - odd`);
            }
        } else if (operator === "*") {
            result = n1 * n2;
            if (result % 2 == 0) {
                console.log(`${n1} * ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} * ${n2} = ${result} - odd`);
            }
        } else if (operator === "/") {
            if (n1 == 0) {
                console.log(`Cannot divide ${n2} by zero`);
            } else if (n2 == 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                result = n1 / (n2 * 1.00);
                console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
            }
        } else if (operator === "%") {
            if (n1 == 0) {
                console.log(`Cannot divide ${n2} by zero`);
            } else if (n2 == 0) {
                console.log(`Cannot divide ${n1} by zero`);
            }else{
                result = n1 % n2;
                console.log(`${n1} % ${n2} = ${result}`);
            }
        }
}