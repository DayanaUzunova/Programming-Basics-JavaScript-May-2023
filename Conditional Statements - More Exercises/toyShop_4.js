function toyShop(input) {
    
    const puzzle = 2.6;
    const doll = 3;
    const teddyBear = 4.10;
    const minion = 8.20;
    const truck = 2;
 
    const holiday = Number(input[0]);
    const numberPuzzle = Number(input[1]);
    const numberDoll = Number(input[2]);
    const numberTeddyBear = Number(input[3]);
    const numberMinion = Number(input[4]);
    const numberTruck = Number(input[5]);
 
    const totalNumber = numberDoll + numberMinion + numberPuzzle + numberTeddyBear + numberTruck;
 
    const puzzlesCost = numberPuzzle * puzzle;
    const dollsCost = numberDoll * doll;
    const teddyBearsCost = numberTeddyBear * teddyBear;
    const minionsCost = numberMinion * minion;
    const trucksCost = numberTruck * truck;
 
    let totalCost = puzzlesCost + dollsCost + teddyBearsCost + minionsCost + trucksCost;
 
    if (totalNumber >= 50) {
        totalCost *= 0.75;
        // totalCost -= totalCost * 0.25;
    }
 
    totalCost *= 0.9;
    const difference = Math.abs(totalCost - holiday)
    // totalCost -= totalCost * 0.1;
    // const difference = totalCost - holiday;
 
 
    if (totalCost >= holiday) {
    // if (difference >= 0) {
        console.log(`Yes! ${difference.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
        // console.log(`Not enough money! ${-difference.toFixed(2)} lv needed.`);
    }
 
}