function vacation(input){
    let pages = Number(input[0]);
    let pagesForHour = Number(input[1]);
    let days = Number(input[2]);

    let allTimeForOneBook = pages / pagesForHour;
    let neededHours = allTimeForOneBook / days;

    console.log(neededHours);
}
vacation(["212 ",
"20 ",
"2 "]
)