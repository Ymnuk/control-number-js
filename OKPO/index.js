const padStart = require('lodash.padstart');

function prepare(value) {
    if (typeof (value) !== 'string') {
        value = `${value}`;
    }
    value = parseInt(value.replace(/\D/g, ''));
    if (isNaN(value))
        return null;
    return value;
}

function control(value) {
    if (value.length > 9)
        return null;
    value = value.split('');
    let summ = 0;
    for (let i = 1; i <= value.length; i++) {
        const v = parseInt(value[i - 1]);
        if (isNaN(v))
            return null;
        summ += v * i;
    }
    summ %= 11;
    if (summ < 10)
        return summ;
    summ = 0;
    for (let i = 3; i <= (value.length + 2); i++) {
        const v = parseInt(value[i - 3]);
        if (isNaN(v)) {
            return null;
        }
        if (i > 9) {
            summ += v * (i % 10 + 1);
        } else {
            summ += v * i;
        }
    }
    summ %= 11;
    if (summ === 10)
        return 0
    return summ;
}

function normalize(value) {
    value = prepare(value);
    if (value == null)
        return null;
    return (value - value % 10) / 10;
    //return value.substring(0, value.length - 1);
}

function controlSumm8(value) {
    value = prepare(value);
    if (value == null)
        return null;
    value = padStart(`${value}`, 7, '0');
    return control(value);
}

function controlSumm10(value) {
    value = prepare(value);
    if (value == null)
        return null;
    value = padStart(`${value}`, 9, '0');
    return control(value);
}

function prettyPrint8(value) {
    value = prepare(value);
    if (value == null)
        return null;
    value = padStart(`${value}`, 7, '0');
    return `${value}${control(value)}`;
}

function prettyPrint10(value) {
    value = prepare(value);
    if (value == null)
        return null;
    value = padStart(`${value}`, 9, '0');
    return `${value}${control(value)}`;
}

function verify8(value) {
    value = prepare(value);
    if (value == null)
        return null;
    const s = value % 10;
    value = (value - value % 10) / 10;
    value = padStart(`${value}`, 7, '0');
    const summ = control(value);
    if (summ == null)
        return false;
    return s === summ;
}

function verify10(value) {
    value = prepare(value);
    if (value == null)
        return null;
    const s = value % 10;
    value = (value - value % 10) / 10;
    value = padStart(`${value}`, 9, '0');
    const summ = control(value);
    if (summ == null)
        return false;
    return s === summ;
}

module.exports = {
    normalize: normalize,
    controlSumm8: controlSumm8,
    controlSumm10: controlSumm10,
    prettyPrint8: prettyPrint8,
    prettyPrint10: prettyPrint10,
    verify8: verify8,
    verify10: verify10
}