const assert = require('assert');
const vows = require('vows');
const bankAccount = require('../BankAccount');

vows.describe('Bank Account')
    .addBatch({
        'Control summ': {
            topic: function () {
                return bankAccount.controlSumm('40702810500000000014', '44544512');
            },
            'Control summ is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Control summ is 5': function (topic) {
                assert.equal(topic, 5)
            }
        },
        'Verify': {
            topic: function () {
                return bankAccount.verify('40702810500000000014', '44544512');
            },
            'Result boolean': function (topic) {
                assert.equal(typeof (topic), 'boolean');
            },
            'Verify is true': function (topic) {
                assert.equal(topic, true)
            }
        }
    })
    .export(module);