const padStart = require('lodash.padstart');

const k = [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1];
const alf = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    G: 16,
    H: 17,
    I: 18,
    J: 19,
    K: 20,
    L: 21,
    M: 22,
    N: 23,
    O: 24,
    P: 25,
    Q: 26,
    R: 27,
    S: 28,
    T: 29,
    U: 30,
    V: 31,
    W: 32,
    X: 33,
    Y: 34,
    Z: 35
}

function prepareNumber(value) {
    if (typeof (value) !== 'string') {
        value = `${value}`;
    }
    value = value.split('');
    const a = Object.keys(alf);
    for (let i = 0; i < value.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (value[i] === a[j]) {
                value[i] = alf[a[j]];
            }
        }
    }
    return value.join('').replace(/\D/g, '');
}

function normalize(value) {
    value = prepareNumber(value);
    value = parseInt(value.substring(0, value.length - 1));
    if (isNaN(value))
        return null;
    return value;
}

function controlSumm(value) {
    value = prepareNumber(value);
    value = value.split('');
    let sum = 0;
    for (let i = 0; i < value.length; i++) {
        v = parseInt(value[i]);
        if (isNaN(v)) {
            return null;
        }
        let f = 0;
        if (value.length == 12) {
            f = v * k[i + 1];
        } else {
            f = v * k[i];
        }
        if (f > 9) {
            f -= 9;
        }
        sum += f;
    }
    return 10 - (sum % 10);
}

function getLiteral(value) {
    if (typeof (value) === 'string')
        value = parseInt(value);
    if (isNaN(value))
        return null;
    for (let i of Object.keys(alf)) {
        if (alf[i] === value)
            return i;
    }
    return null;
}

function prettyPrint(value, separator) {
    if (separator == null) {
        separator = ' ';
    }
    value = prepareNumber(value);
    if (isNaN(value))
        return null;
    let control = controlSumm(value);
    if (control == null)
        return null;
    value = `${value}${control}`;
    if (value.length === 14) {
        const liter1 = getLiteral(value.substring(0, 2));
        if (liter1 == null)
            return null;
        const liter2 = getLiteral(value.substring(2, 4));
        if (liter2 == null)
            return null;
        return `${liter1}${liter2}${value.substring(4)}`;
    }
    if (value.length === 13 || value.length === 16) {
        return `${value.substring(0, 4)}${separator}${value.substring(4, 8)}${separator}${value.substring(8, 12)}${separator}${value.substring(12)}`
    }
    return value;

}

function verify(value) {
    value = prepareNumber(value);
    const lastNumber = parseInt(value.substring(value.length - 1));
    if (isNaN(lastNumber))
        return false;
    value = value.substring(0, value.length - 1);
    const control = controlSumm(value);
    return control === lastNumber;
}

module.exports = {
    normalize: normalize,
    controlSumm: controlSumm,
    prettyPrint: prettyPrint,
    verify: verify
};