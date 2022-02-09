let bolunuyor
let asalFunction = (...numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        bolunuyor = false
        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i] % j == 0) {
                bolunuyor = true
                if (bolunuyor == true) {
                    console.log("Bu bir asal sayı değildir : " + numbers[i])
                    break;
                }
            }
        }
        if (bolunuyor == false) {
            console.log("Bu bir asal sayıdır : " + numbers[i])
        }
    }
}

asalFunction(32, 15, 23, 29, 31, 12, 13, 11)