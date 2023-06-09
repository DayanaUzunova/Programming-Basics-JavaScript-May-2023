function numbers(input) {
    let n = Number(input.shift());
    let sum = 0;
    while (sum < n) {
        let num = Number(input.shift());
        sum += num;
    }
    console.log(sum);
};