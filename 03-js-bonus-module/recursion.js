function sum(i) {
    if (i == 1) {
        return 1
    }
    let r = i + sum(i - 1);

    return r
}

// console.log(sum(5));

// recursion using factorial

function fac(i) {
    if (i == 1) {
        return 1
    }
    return i * fac(i - 1);
}
console.log(fac(5));
