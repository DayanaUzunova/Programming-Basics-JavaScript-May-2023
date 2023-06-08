function Histogram(input) {

    let n = Number(input[0]);

    let p1 = 0.0;
    let p2 = 0.0;
    let p3 = 0.0;
    let p4 = 0.0;
    let p5 = 0.0;

    for (let i = 1; i <= n; i++) {
        let currentNum = Number(input[i])

        if (currentNum < 200) {
            p1++;
        }
        else if (currentNum >= 200 && currentNum <= 399) {
            p2++;
        }
        else if (currentNum >= 400 && currentNum <= 599) {
            p3++;
        }
        else if (currentNum >= 600 && currentNum <= 799) {
            p4++;
        }
        else if (currentNum >= 800) {
            p5++;
        }
    }
 
    let result1 = (p1 / n * 100);
    let result2 = (p2 / n * 100);
    let result3 = (p3 / n * 100);
    let result4 = (p4 / n * 100);
    let result5 = (p5 / n * 100);
 
    console.log(`${result1.toFixed(2)+'%'}`);
    console.log(`${result2.toFixed(2)+'%'}`);
    console.log(`${result3.toFixed(2)+'%'}`);
    console.log(`${result4.toFixed(2)+'%'}`);
    console.log(`${result5.toFixed(2)+'%'}`);
    
}