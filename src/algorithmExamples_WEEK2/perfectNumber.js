let perfectNumber = () => {
    for (let i = 1; i < 1000; i++) {
        let total1 = 0
        for (let j = 0; j <= i / 2; j++) {
            if (i % j === 0) {
                total1 += j
            }
            if (total1 === i) {
                console.log(i + " is a perfect number. ")
            }
        }
    }
}
perfectNumber()