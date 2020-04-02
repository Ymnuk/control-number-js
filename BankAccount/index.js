const padStart = require('lodash.padstart');

const k = [7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1];

function controlSumm(account, bic) {
    if (typeof (bic) !== 'string') {
        bic = `${bic}`
    }
    bic = bic.replace(/\D/g, '');
    bic = padStart(bic, 9, '0');
    if (typeof (account) !== 'string') {
        account = `${account}`
    }
    account = account.replace(/\D/g, '');
    if (account.length !== 20) {
        return null;
    }
    account = account.split('');
    account.splice(8, 1);
    account = bic.substring(6) + account.join('');
    //account = bik.substring(6) + account;
    account = account.split('');
    let sum = 0;
    for (let i = 0; i < account.length; i++) {
        let v = parseInt(account[i]);
        if (isNaN(v)) {
            return null;
        }
        sum += k[i] * v;
    }
    return ((sum % 10) * 3) % 10
}

function verify(account, bic) {
    if (typeof (account) !== 'string') {
        account = `${account}`
    }
    account = account.replace(/\D/g, '');
    if (account.length !== 20) {
        return false;
    }
    const summ = controlSumm(account, bic);
    if (summ == null) {
        return false;
    }
    return parseInt(account.substring(8, 9)) === summ;
}

module.exports = {
    controlSumm: controlSumm,
    verify: verify
}