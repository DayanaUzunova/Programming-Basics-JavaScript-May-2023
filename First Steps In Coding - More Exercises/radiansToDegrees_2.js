function calc(input){
    let radians = Number(input[0]);
    let degrees = radians * 180 / Math.PI;

    console.log(degrees);
}
calc(["3.1416"]);