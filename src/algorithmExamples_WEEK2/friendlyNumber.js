let friendlyNumber = (number1, number2) => {
    let total1 = 0
    let total2 = 0
    if (number1 !== number2) {
        for (let i = 1; i < number1; i++) {
            if (number1 % i == 0) {
                total1 += i
            }
        }
        for (let j = 1; j < number2; j++) {
            if (number2 % j == 0) {
                total2 += j
            }
        }
    }
    total1 == number2 && total2 == number1 ?
        console.log("Girdiğiniz sayılar arkadaş sayılarıdır") :
        console.log("Girdiğiniz sayılar arkadaş sayılar değildir")

}

friendlyNumber(220, 284)