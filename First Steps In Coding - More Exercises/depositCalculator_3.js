function solve(input){
    //сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
    let deposiedSum = Number(input[0]);
    let timeForDeposit = Number(input[1]);
    let lihva = Number(input[2])/100;

    let lihvaResult = deposiedSum * lihva;
    let lihvaForMonth = lihvaResult / 12;
    let finalSum = deposiedSum + timeForDeposit * lihvaForMonth;

    console.log(finalSum);
}
solve(["2350",
"6 ",
"7 "]
)