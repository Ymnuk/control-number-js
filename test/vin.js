const vows = require('vows');
const assert = require('assert');
const vin = require('../VIN');

vows.describe('VIN')
    .addBatch({
        'ControlSumm': {
            topic: function () {
                return vin.controlSumm('JHMCM56557C404453');
            },
            'Result is string': function (topic) {
                assert.equal(typeof (topic), 'string');
            },
            'Result is 5': function (topic) {
                assert.equal(topic, '5');
            }
        },
        'Verify': {
            topic: function () {
                return vin.verify('JHMCM56557C404453');
            },
            'Result is boolean': function (topic) {
                assert.equal(typeof (topic), 'boolean');
            },
            'Result is true': function (topic) {
                assert.equal(topic, true);
            }
        }
    })
    .export(module);