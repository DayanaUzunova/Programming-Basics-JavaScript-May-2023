function cinema(input){
    let type = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let price = 0;
    let ticketsCount = rows * cols;

    if (type === 'Premiere'){
        price = ticketsCount * 12;
    }
    else if (type === 'Normal'){
        price = ticketsCount * 7.5;
    }
    else if (type === 'Discount'){
        price = ticketsCount * 5;
    }

    console.log(`${price.toFixed(2)} leva`);
}
cinema(["Premiere",
"10",
"12"])
