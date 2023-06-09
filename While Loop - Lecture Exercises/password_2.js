function solve(input){

    let username = String(input[0]);
    let password = String(input[1]);

    let data = String(input[2]);
    let index = 3;
    while(data !== password){
        data = input[index];
        index++;
    }
    console.log(`Welcome ${username}!`);
}