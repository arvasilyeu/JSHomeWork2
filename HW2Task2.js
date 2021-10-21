function validatePhoneNymber (inputString) {
    let str = inputString.replace(/\s+/g, '')
    console.log(/^\d{10}$/.test(str));
}

validatePhoneNymber('067 734 4343')// → true
validatePhoneNymber('094 643 7432')// → true
validatePhoneNymber('083 jfvj 4554')// → false
validatePhoneNymber('Anton0938 884')// → false
validatePhoneNymber('0437348348')// → true
validatePhoneNymber('04373483')// → false