function solve(input){
    let number = Number(input[0]);
    let k = 1;

    while(k <= number){
        console.log(k);
        k = 2 * k + 1;
    }
}