function concatenate(input){
    let age = input[2];
    let firstName = input[0];
    let secondName = input[1];
    let town = input[3];
    console.log('You are ' + firstName + ' ' +  secondName + ', a ' 
    + age + '-years old person from ' + town + '.');
}
concatenate(['Maria', 'Ivanova', 20, 'Sofia'])