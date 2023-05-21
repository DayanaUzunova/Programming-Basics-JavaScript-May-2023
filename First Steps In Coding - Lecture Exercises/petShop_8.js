function shop(input){
    let countDogs = Number(input[0]);
    let countCats = Number(input[1]);

    let priceDogs = countDogs * 2.50;
    let priceCats = countCats * 4.00;

    let result = priceCats + priceDogs;
    console.log(`${result} lv.`)
}
shop(["5 ",
"4 "]
)