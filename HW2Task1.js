function pinCodeGenerator(length){
    let randomNumbersArray = []
    for (let i = 0; i < length; i++){
        let randomNumber = Math.round(Math.random()*10-0.5)
        randomNumbersArray.push(randomNumber)
    }
    return randomNumbersArray.join("")
}

console.log(pinCodeGenerator(5))