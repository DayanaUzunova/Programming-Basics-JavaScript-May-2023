function repaint(input){
    let naylonPrice = 1.50;
    let boyaPrice = 14.50;
    let razreditelPrice = 5.00;

    let countNaylon = Number(input[0]);
    let countBoya = Number(input[1]);
    let countRazreditel = Number(input[2]);
    let hours = Number(input[3]);

    let priceNaylon = (countNaylon + 2) * naylonPrice;
    let priceBoya = (countBoya + (countBoya *0.1)) * boyaPrice;
    let priceRazreditel = countRazreditel * razreditelPrice;
    let torbichki = 0.40;

    let allSum = priceNaylon + priceBoya + priceRazreditel + torbichki;
    let sumMaistors = (allSum * 0.3) * hours;
    let finalSum = allSum + sumMaistors;

    console.log(finalSum);
}
repaint(["10 ",
"11 ",
"4 ",
"8 "]
)