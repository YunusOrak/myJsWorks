let primeNumbers = () => {
    for (let i = 2; i < 1000; i++) {
        let bolunuyor = false
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                bolunuyor = true
            }
        }
        if (bolunuyor == false) {
            console.log("is a prime number. " + i)
        }
    }
}

primeNumbers()