function Power(base, exponent) {
    if(base == 0) {
        return 0;
    }
    if(exponent == 0) {
        return 1;
    }
    let sum = 1;
    if (exponent > 0) {
        for(let i = 0; i < exponent; i++) {
            sum *= base;
        }
    } else {
        for(let i = 0; i < (-exponent); i++) {
            sum = sum / base;
        }
    }
    return sum;
}

console.log(Power(2.00000,-2))