let values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

let func = function(s) {
    let sum = 0;
    let i = 0;
    while (i < s.length) {
        let val = values[s.charAt(i)];
        let valNext = (i < s.length - 1) ? values[s.charAt(i + 1)] : null;

        if (val < valNext) {
            sum += valNext - val;
            i += 2;
        } else {
            sum += val;
            i++;
        }
    }
    return sum
};

console.log(func("MCMXCIV"))