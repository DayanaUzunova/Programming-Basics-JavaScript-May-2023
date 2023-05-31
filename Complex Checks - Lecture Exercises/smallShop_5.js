function solve(input){

    let product = String(input[0]);
    let town = String(input[1]);
    let quantity = Number(input[2]);

    let price = 0.00;
    let allSum = 0.00

    switch (town){
        case "Sofia":
            if (product == "coffee"){
                price = 0.50;
                allSum = quantity * price;
                console.log(allSum);
            }
            else if (product == "water"){
                price = 0.80;
                allSum = quantity * price;
                console.log(allSum);
            }
            else if (product == "beer"){
                price = 1.20;
                allSum = quantity * price;
                console.log(allSum);
            }
            else if(product == "sweets"){
                price = 1.45;
                allSum = quantity * price
                console.log(allSum)
            }
            else if (product == "peanuts"){
                price = 1.60;
                allSum = quantity * price;
                console.log(allSum);
            }
            break;
        case "Plovdiv":
            if (product == "coffee"){
                price = 0.40;
                allSum = quantity * price;
                console.log(allSum);
            }
            else if (product == "water"){
                price = 0.70;
                allSum = quantity * price;
                console.log(allSum);
            }
            else if (product == "beer"){
                price = 1.15;
                allSum = quantity * price;
                console.log(allSum);
            }
            else if(product == "sweets"){
                price = 1.30;
                allSum = quantity * price
                console.log(allSum)
            }
            else if (product == "peanuts"){
                price = 1.50;
                allSum = quantity * price;
                console.log(allSum);
            }
            break;
        case "Plovdiv":
            if (product == "coffee"){
                price = 0.40;
                allSum = quantity * price;
                console.log(allSum);
            }
            else if (product == "water"){
                price = 0.70;
                allSum = quantity * price;
                console.log(allSum);
            }
            else if (product == "beer"){
                price = 1.15;
                allSum = quantity * price;
                console.log(allSum);
            }
            else if(product == sweets){
                price = 1.30;
                allSum = quantity * price
                console.log(allSum)
            }
            else if (product == "peanuts"){
                price = 1.50;
                allSum = quantity * price;
                console.log(allSum);
            }
            break;
        case "Varna":
            if (product == "coffee"){
                price = 0.45;
                allSum = quantity * price;
                console.log(allSum);
            }
            else if (product == "water"){
                price = 0.70;
                allSum = quantity * price;
                console.log(allSum);
            }
            else if (product == "beer"){
                price = 1.10;
                allSum = quantity * price;
                console.log(allSum);
            }
            else if(product == "sweets"){
                price = 1.35;
                allSum = quantity * price
                console.log(allSum)
            }
            else if (product == "peanuts"){
                price = 1.55;
                allSum = quantity * price;
                console.log(allSum);
            }
            break;
    }
}
solve (["coffee",
"Varna",
"2"])
