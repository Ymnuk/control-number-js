const vows = require('vows');
const assert = require('assert');
const Snils = require('../SNILS');

vows.describe('Verify SNILS')
    .addBatch({
        'Normalize': {
            topic: function () {
                return Snils.normalize('555-555-555 23');
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Number 555555555': function (topic) {
                assert.equal(topic, 555555555)
            }
        },
        'Control summ': {
            topic: function () {
                return Snils.controlSumm(555555555);
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Number 23': function (topic) {
                assert.equal(topic, 23);
            }
        },
        'Pretty print': {
            topic: function () {
                return Snils.prettyPrint(555555555);
            },
            'This is string': function (topic) {
                assert.equal(typeof (topic), 'string');
            },
            'Pretty printed': function (topic) {
                assert.equal(topic, '555-555-555 23')
            }
        },
        'Verify snils': {
            topic: function () {
                return Snils.verify('555-555-555 23');
            },
            'This is boolean': function (topic) {
                assert.equal(typeof (topic), 'boolean');
            },
            'Control summ confirm': function (topic) {
                assert.equal(topic, true);
            }
        }
    }).
    addBatch({
        'Verify normalize SNILS with null': {
            topic: function () {
                return Snils.normalize('нет сведений');
            },
            'Normalized to null': function (topic) {
                assert.equal(topic, null);
            }
        }
    })
    .addBatch({
        'Normalize': {
            topic: function () {
                return Snils.normalize('080-058-323-36');
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Number 80058323': function (topic) {
                assert.equal(topic, 80058323)
            }
        },
        'Control summ': {
            topic: function () {
                return Snils.controlSumm(80058323);
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Number 36': function (topic) {
                assert.equal(topic, 36);
            }
        },
        'Pretty print': {
            topic: function () {
                return Snils.prettyPrint(80058323);
            },
            'This is string': function (topic) {
                assert.equal(typeof (topic), 'string');
            },
            'Pretty printed': function (topic) {
                assert.equal(topic, '080-058-323 36')
            }
        },
        'Verify snils': {
            topic: function () {
                return Snils.verify('080-058-323-36');
            },
            'This is boolean': function (topic) {
                assert.equal(typeof (topic), 'boolean');
            },
            'Control summ confirm': function (topic) {
                assert.equal(topic, true);
            }
        }
    })
    .export(module);