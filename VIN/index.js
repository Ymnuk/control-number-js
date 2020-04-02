const alf = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    J: 1,
    K: 2,
    L: 3,
    M: 4,
    N: 5,
    P: 7,
    R: 9,
    S: 2,
    T: 3,
    U: 4,
    V: 5,
    W: 6,
    X: 7,
    Y: 8,
    Z: 9
};

const k = [8, 7, 6, 5, 4, 3, 2, 10, 9, 8, 7, 6, 5, 4, 3, 2];

function prepare(value) {
    if (typeof (value) !== 'string') {
        value = `${value}`;
    }
    value = value.toUpperCase().split('');
    const a = Object.keys(alf);
    for (let i = 0; i < value.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (value[i] === a[j]) {
                value[i] = alf[a[j]];
                break;
            }
        }
    }
    value = value.join('').replace(/\D/g, '');
    return value;
}

function controlSumm(value) {
    value = prepare(value);
    value = `${value.substring(0, 8)}${value.substring(9)}`.split('');
    let summ = 0;
    for (let i = 0; i < value.length; i++) {
        const v = parseInt(value[i]);
        if (isNaN(v)) {
            return null;
        }
        summ += v * k[i];
    }
    summ = summ - (Math.trunc(summ / 11) * 11);
    if (summ === 10) {
        summ = 'X';
    } else {
        summ = `${summ}`;
    }
    return summ;
}

function verify(value) {
    value = prepare(value);
    const cont = value.substring(8, 9);
    const summ = controlSumm(value);
    return cont === summ;
}

module.exports = {
    controlSumm: controlSumm,
    verify: verify
}