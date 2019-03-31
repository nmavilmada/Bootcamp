function power(x, y) {
    if (y === 0) {
        return 1;
    }
    return x * power(x, y - 1);
}

function powerloop(x, y) {
    var answer = 1;
    for (var i = 0; i < y; i++) {
        answer = x * answer;
    }
    return answer;
}

// console.log(power(2, 3));
console.log(powerloop(2,3));