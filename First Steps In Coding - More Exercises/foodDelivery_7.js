function food(input){
    let chichenMenu = 10.35;
    let fishMenu = 12.40;
    let veganMenu = 8.15;

    let numberChickenMenu = Number(input[0]);
    let numberFishMenu = Number(input[1]);
    let numberVeganMenu = Number(input[2]);

    let delivery = 2.50;

    let priceForChickenMenu = numberChickenMenu * chichenMenu;
    let priceForFishMenu = numberFishMenu * fishMenu;
    let priceForVeganMenu = numberVeganMenu * veganMenu;

    let allPriceMenus = priceForChickenMenu + priceForFishMenu + priceForVeganMenu;
    let dessertPrice = 0.20 * allPriceMenus;

    let allSum = allPriceMenus + dessertPrice + delivery;

    console.log(allSum);
}
food(["2 ",
"4 ",
"3 "]
)