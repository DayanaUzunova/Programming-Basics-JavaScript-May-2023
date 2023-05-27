function solve(input){
    let taxPrice = Number(input[0]);

    let basketballShoes = taxPrice * 0.6;
    let basketballEquipe = basketballShoes * 0.8;

    let priceForBall = basketballEquipe * 0.25;
    let priceForAccesoires = priceForBall * 0.2;

    let allPrice = taxPrice + basketballShoes + basketballEquipe + 
    priceForBall + priceForAccesoires;
    console.log(allPrice);
}
solve(["365 "])