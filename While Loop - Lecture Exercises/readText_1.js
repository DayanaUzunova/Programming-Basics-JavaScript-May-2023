function solve(input){
    let index = 0;
    let word = String(input[index]);

        while (word !== "Stop"){
            console.log(word);

            index++;
            word = input[index];
        }
}