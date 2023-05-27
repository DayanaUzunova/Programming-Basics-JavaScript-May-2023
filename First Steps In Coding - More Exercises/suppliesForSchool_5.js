function school(input){
    let pencilsPrice = 5.80;
    let markersPrice = 7.20;
    let preparatPrice = 1.20;

    let numberPensils = Number(input[0]);
    let numberMarkers = Number(input[1]);
    let numberPreparats = Number(input[2]);
    let discount = Number(input[3]) / 100;

    let allPencilsPrice = pencilsPrice * numberPensils;
    let allMarkersPrice = markersPrice * numberMarkers;
    let allPreparatesPrice = preparatPrice * numberPreparats;

    let allSum = allPencilsPrice + allMarkersPrice + allPreparatesPrice;
    let finalSum = allSum - (allSum * discount);

    console.log(finalSum);
}
school(["2 ",
"3 ",
"4 ",
"25 "]
)