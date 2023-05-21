function greening(input){
    let priceForOneKvM = 7.61;
    let discount = 0.18;
    let kvMForGreening = Number([input[0]]);

    let fullSum = kvMForGreening * priceForOneKvM;
    let fullSumWithDiscount = fullSum * 0.18;
    let finalSum = fullSum - fullSumWithDiscount;

    console.log(`The final price is: ${finalSum} lv.`);
    console.log(`The discount is: ${fullSumWithDiscount} lv.`)
}
greening(["550"])