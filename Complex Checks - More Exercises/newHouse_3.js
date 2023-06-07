function newHouse(input){
    let kindFlowers = String(input[0]);
    let count = Number(input[1]);
    let budget = Number(input[2]);

    let priceRoses = 5.00;
    let priceDahlias = 3.80;
    let priceTulips = 2.80;
    let priceNarcissus = 3.00;
    let priceGladiolus = 2.50;

    let price = 0;

    switch (kindFlowers) {
        case "Roses":
            price = count * priceRoses;
            if (count > 80){
                price = price - (price * 0.10);
            }
            break;
        case "Dahlias":
            price = count * priceDahlias;
            if (count > 90) {
                price = price - (price * 0.15);
            }
            break;
        case "Tulips":
            price = count * priceTulips;
            if (count > 80) {
                price = price - (price * 0.15);
            }
            break;
        case "Narcissus":
            price = count * priceNarcissus;
            if (count < 120) {
                price = price + (price * 0.15);
            }
            break;
        case "Gladiolus":
            price = count * priceGladiolus;
            if (count < 80) {
                price = price + (price * 0.20);
            }
            break;
    }

    if (price <= budget) {
        console.log(`Hey, you have a great garden with ${count} ${kindFlowers} and ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
    }
}