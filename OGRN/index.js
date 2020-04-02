const padStart = require('lodash.padstart');

function normalize(value) {
    if (typeof (value) !== 'string') {
        value = `${value}`;
    }
    value = parseInt(padStart(value.replace(/\D/g, ''), 13, '0').substring(0, 12));
    if (isNaN(value)) {
        return null;
    }
    return value;
}

function controlSumm(value) {
    if (typeof (value) !== 'string') {
        value = `${value}`;
    }
    value = parseInt(value.replace(/\D/g, ''));
    if (isNaN(value))
        return null;
    const v1 = Math.trunc(value / 11) * 11;
    return (value - v1) % 10
}

function prettyPrint(value) {
    if (typeof (value) !== 'string') {
        value = `${value}`;
    }
    value = value.replace(/\D/g, '');
    value = parseInt(value);
    if (isNaN(value))
        return null;
    let summ = controlSumm(value);
    if (summ == null)
        return null;
    value = `${padStart(`${value}`, 12, '0')}${summ}`;
    return value;
}

function verify(value) {
    if (typeof (value) !== 'string') {
        value = `${value}`;
    }
    value = padStart(value.replace(/\D/g, ''), 13, '0');
    let s = parseInt(value.substring(12));
    if (isNaN(s))
        return false;
    let summ = controlSumm(value.substring(0, 12));
    if (isNaN(summ))
        return false;
    return s === summ;
}

module.exports = {
    normalize: normalize,
    controlSumm: controlSumm,
    prettyPrint: prettyPrint,
    verify: verify
}