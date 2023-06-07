function boat(input){
        let budget = Number(input[0]);
        let season = String(input[1]);
        let fishmen = Number(input[2]);

        let priceShip = 0.0;

        if (season === "Spring"){
            priceShip = 3000;
        } else if (season === "Summer"){
            priceShip = 4200;
        }else if (season === "Autumn"){
            priceShip = 4200;
        }else if (season === "Winter"){
            priceShip = 2600;
        }
        if (fishmen <= 6){
            priceShip = priceShip - (priceShip * 0.10);
        } else if (fishmen <= 11) {
            priceShip = priceShip - (priceShip * 0.15);
        } else {
            priceShip = priceShip - (priceShip * 0.25);
        }
        if (season === "Spring" || season === "Summer" || season === "Winter") {
            if (fishmen % 2 == 0){
                priceShip= priceShip - (priceShip * 0.05);
            }
        }
        if (budget >= priceShip){
            console.log(`Yes! You have ${(budget - priceShip).toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money! You need ${(priceShip - budget).toFixed(2)} leva.`);
        }
}