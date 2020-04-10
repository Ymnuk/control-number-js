const padStart = require('lodash.padstart');

/**
 * Преобразование СНИЛС из строки в число без контрольной суммы
 * @param {String} value СНИЛС
 * @return Возвращает нормализованное значение, преобразованное из строки
 */
function normalize(value) {
    if (typeof (value) !== 'string') {
        value = `${value}`;
    }
    value = value.replace(/\D/g, '');
    value = parseInt(value);
    if (isNaN(value)) {
        return null;
    }
    value = Math.trunc(value / 100);
    if (value === 0)
        return null;
    return value;
}

/**
 * Расчет контрольной суммы
 * @param {*} value Строка или число без контрольной суммы
 */
function controlSumm(value) {
    if (typeof (value) !== 'string') {
        value = `${value}`;
    }
    value = value.replace(/\D/g, '');
    if (value.length > 9) {
        value.substring(0, 9);
    }
    if (value.length < 9) {
        value = padStart(value, 9, '0');
    }
    value = value.split('');
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        let v = parseInt(value[0]);
        if (isNaN(v))
            return NaN;
        sum += (9 - i) * v;
    }
    if (sum === 100 || sum === 101) {
        sum = 0;
    } else if (sum > 101) {
        sum %= 101;
    }
    return sum;
}

/**
 * Расчет контрольной суммы и вывод номера в соответствии с форматом
 * @param {*} value СНИЛС в виде числа без контрольной суммы
 */
function prettyPrint(value) {
    if (typeof (value) === 'string') {
        value = parseInt(value);
        if (isNaN(value)) {
            return null;
        }
    }
    let sum = controlSumm(value);
    value = padStart(`${value}`, 9, '0');
    return `${value.substring(0, 3)}-${value.substring(3, 6)}-${value.substring(6, 9)} ${padStart(`${sum}`, 2, '0')}`;
}

/**
 * Проверка корректности СНИЛС
 * @param {*} value 
 * @return true если успех, иначе false
 */
function verify(value) {
    if (typeof (value) !== 'string')
        return false;
    value = value.replace(/\D/g, '');
    sum = parseInt(value.substring(9, 11));
    if (isNaN(sum)) {
        return false;
    }
    if (sum === controlSumm(value.substring(0, 9))) {
        return true;
    }
    return false;
}

module.exports = {
    normalize: normalize,
    controlSumm: controlSumm,
    prettyPrint: prettyPrint,
    verify: verify
}