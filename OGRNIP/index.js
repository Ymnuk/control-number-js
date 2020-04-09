const padStart = require('lodash.padstart');

function normalize(value) {
    if (typeof (value) !== 'string') {
        value = `${value}`;
    }
    value = parseInt(padStart(value.replace(/\D/g, ''), 15, '0').substring(0, 14));
    if (isNaN(value)) {
        return null;
    }
    if (value === 0)
        return null;
    return value;
}

function controlSumm(value) {
    if (typeof (value) !== 'string') {
        value = `${value}`;
    }
    value = parseInt(value.replace(/\D/g, ''));
    if (isNaN(value))
        return null;
    const v1 = Math.trunc(value / 13) * 13;
    return (value - v1) % 10
}

function prettyPrint(value) {
    if (typeof (value) !== 'string') {
        value = `${value}`;
    }
    value = value.replace(/\D/g, '');
    if (value.length < 14)
        value = padStart(value, 14, '0');
    let summ = controlSumm(value);
    if (summ == null)
        return null;
    return `${value}${summ}`;
}

function verify(value) {
    if (typeof (value) !== 'string') {
        value = `${value}`;
    }
    value = value.replace(/\D/g, '');
    if (value.length < 15)
        value = padStart(value, 15, '0');
    let s = parseInt(value.substring(14));
    if (isNaN(s))
        return false;
    let summ = controlSumm(value.substring(0, 14));
    if (summ == null)
        return false;
    return s === summ;
}

module.exports = {
    normalize: normalize,
    controlSumm: controlSumm,
    prettyPrint: prettyPrint,
    verify: verify
}