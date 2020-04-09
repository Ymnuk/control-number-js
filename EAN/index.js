const padStart = require('lodash.padstart');

const k = [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1];

function normalize(value) {
    if (typeof (value) !== 'string') {
        value = `${value}`;
    }
    value = value.replace(/\D/g, '');
    value = value.substring(0, value.length - 1);
    value = parseInt(value);
    if (isNaN(value)) {
        return 0;
    }
    if (value === 0)
        return null;
    return value;
}

function controlSummEAN13(value) {
    if (typeof (value) !== 'string')
        value = `${value}`;
    value = padStart(value.replace(/\D/g, ''), 12, '0');
    value = value.split('');
    let sum = 0;
    for (let i = 0; i < 12; i++) {
        const v = parseInt(value[i]);
        if (isNaN(v)) {
            return NaN;
        }
        sum += v * k[i];
    }
    sum %= 10;
    if (sum > 0) {
        return 10 - sum;
    }
    return 0;
}

function controlSummEAN8(value) {
    if (typeof (value) !== 'string')
        value = `${value}`;
    value = padStart(value.replace(/\D/g, ''), 7, '0');
    value = value.split('');
    let sum = 0;
    for (let i = 0; i < 7; i++) {
        const v = parseInt(value[i]);
        if (isNaN(v)) {
            return NaN;
        }
        sum += v * k[i + 1];
    }
    sum %= 10;
    if (sum > 0) {
        return 10 - sum;
    }
    return 0;
}

function controlSummUPC12(value) {
    if (typeof (value) !== 'string')
        value = `${value}`;
    value = padStart(value.replace(/\D/g, ''), 11, '0');
    value = value.split('');
    let sum = 0;
    for (let i = 0; i < 11; i++) {
        const v = parseInt(value[i]);
        if (isNaN(v)) {
            return NaN;
        }
        sum += v * k[i + 1];
    }
    sum %= 10;
    if (sum > 0) {
        return 10 - sum;
    }
    return 0;
}

function prettyPrintEAN13(value) {
    const summ = controlSummEAN13(value);
    if (isNaN(summ))
        return null;
    if (typeof (value) !== 'string')
        value = `${value}`;
    return `${padStart(value.replace(/\D/g, ''), 12, '0')}${summ}`;
}

function prettyPrintEAN8(value) {
    const summ = controlSummEAN8(value);
    if (isNaN(summ))
        return null;
    if (typeof (value) !== 'string')
        value = `${value}`;
    return `${padStart(value.replace(/\D/g, ''), 7, '0')}${summ}`;
}

function prettyPrintUPC12(value) {
    const summ = controlSummUPC12(value);
    if (isNaN(summ))
        return null;
    if (typeof (value) !== 'string')
        value = `${value}`;
    return `${padStart(value.replace(/\D/g, ''), 11, '0')}${summ}`;
}

function verifyEAN13(value) {
    if (typeof (value) !== 'string') {
        value = `${value}`;
    }
    value = padStart(value.replace(/\D/g, ''), 13, '0');
    return controlSummEAN13(value.substring(0, 12)) === parseInt(value.substring(12));
}

function verifyEAN8(value) {
    if (typeof (value) !== 'string') {
        value = `${value}`;
    }
    value = padStart(value.replace(/\D/g, ''), 7, '0');
    return controlSummEAN8(value.substring(0, 7)) === parseInt(value.substring(7, 8));
}

function verifyUPC12(value) {
    if (typeof (value) !== 'string') {
        value = `${value}`;
    }
    value = padStart(value.replace(/\D/g, ''), 12, '0');
    return controlSummUPC12(value.substring(0, 11)) === parseInt(value.substring(11));
}

module.exports = {
    normalize: normalize,
    controlSummEAN13: controlSummEAN13,
    controlSummEAN8: controlSummEAN8,
    controlSummUPC12: controlSummUPC12,
    prettyPrintEAN13: prettyPrintEAN13,
    prettyPrintEAN8: prettyPrintEAN8,
    prettyPrintUPC12: prettyPrintUPC12,
    verifyEAN13: verifyEAN13,
    verifyEAN8: verifyEAN8,
    verifyUPC12: verifyUPC12
}