const padStart = require('lodash.padstart');

const k = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8];

function normalize(value) {
    if (typeof (value) !== 'string') {
        value = `${value}`;
    }
    value = value.replace(/\D/g, '');
    value = parseInt(value);
    if (isNaN(value)) {
        return null;
    }
    return Math.trunc(value / 10);
}

function controlSumm10(value) {
    if (typeof (value) !== 'string') {
        value = `${value}`;
    }
    value = padStart(value.replace(/\D/g, ''), 9, '0').split('');
    let sum = 0;
    for (let i = 0; i < value.length; i++) {
        const v = parseInt(value[i]);
        if (isNaN(v)) {
            return null;
        }
        sum += v * k[i + 2];
    }
    return (sum % 11) % 10;

}

function controlSumm12(value) {
    if (typeof (value) !== 'string') {
        value = `${value}`;
    }
    value = padStart(value.replace(/\D/g, ''), 10, '0').split('');
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        const v = parseInt(value[i]);
        if (isNaN(v)) {
            return null;
        }
        sum += v * k[i + 1];
    }
    let allsum = ((sum % 11) % 10) * 10;
    value = value.join('');
    value = `${value}${(sum % 11) % 10}`.split('');
    sum = 0;
    for (let i = 0; i < 11; i++) {
        const v = parseInt(value[i]);
        if (isNaN(v)) {
            return null;
        }
        sum += v * k[i];
    }
    allsum += (sum % 11) % 10;
    return allsum;
}

function prettyPrint10(value) {
    if (typeof (value) !== 'string') {
        value = `${value}`;
    }
    value = padStart(value.replace(/\D/g, ''), 9, '0');
    const summ = controlSumm10(value);
    if (summ == null)
        return null;
    return `${value}${summ}`;
}

function prettyPrint12(value) {
    if (typeof (value) !== 'string') {
        value = `${value}`;
    }
    value = padStart(value.replace(/\D/g, ''), 10, '0');
    const summ = controlSumm12(value);
    if (summ == null)
        return null;
    if (summ < 10) {
        summ = `0${sum}`
    }
    return `${value}${summ}`;
}

function verify10(value) {
    if (typeof (value) !== 'string') {
        value = `${value}`;
    }
    value = value.replace(/\D/g, '');
    if (value.length < 10)
        value = padStart(value, 10, '0');
    const s = parseInt(value.substring(9));
    if (isNaN(s))
        return false;
    const summ = controlSumm10(value.substring(0, 9));
    if (isNaN(summ))
        return null;
    return s === summ;
}

function verify12(value) {
    if (typeof (value) !== 'string') {
        value = `${value}`;
    }
    value = value.replace(/\D/g, '');
    if (value.length < 12)
        value = padStart(value, 12, '0');
    const s = parseInt(value.substring(10));
    if (isNaN(s))
        return false;
    const summ = controlSumm12(value.substring(0, 10));
    if (isNaN(summ))
        return null;
    return s === summ;
}

module.exports = {
    //normalize10: normalize10,
    controlSumm10: controlSumm10,
    prettyPrint10: prettyPrint10,
    verify10: verify10,
    //normalize12: normalize12,
    normalize: normalize,
    controlSumm12: controlSumm12,
    prettyPrint12: prettyPrint12,
    verify12: verify12
}