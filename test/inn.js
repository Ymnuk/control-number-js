const assert = require('assert');
const vows = require('vows');
const inn = require('../INN');

vows.describe('INN10')
    .addBatch({
        'INN normalize 7830002293': {
            topic: function () {
                return inn.normalize('7830002293');
            },
            'Result is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Normalized 783000229': function (topic) {
                assert.equal(topic, 783000229)
            }
        },
        'Control summ INN': {
            topic: function () {
                return inn.controlSumm10(783000229)
            },
            'Result is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Control summ 3': function (topic) {
                assert.equal(topic, 3);
            }
        },
        'Pretty print': {
            topic: function () {
                return inn.prettyPrint10(783000229);
            },
            'Result is string': function (topic) {
                assert.equal(typeof (topic), 'string');
            },
            'Result 7830002293': function (topic) {
                assert.equal(topic, '7830002293');
            }
        },
        'Verify': {
            topic: function () {
                return inn.verify10(7830002293);
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

vows.describe('INN12')
    .addBatch({
        'INN normalize 500100732259': {
            topic: function () {
                return inn.normalize('500100732259');
            },
            'Result is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Normalized 50010073225': function (topic) {
                assert.equal(topic, 50010073225)
            }
        },
        'Control summ INN': {
            topic: function () {
                return inn.controlSumm12(5001007322)
            },
            'Result is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Control summ 59': function (topic) {
                assert.equal(topic, 59);
            }
        },
        'Pretty print': {
            topic: function () {
                return inn.prettyPrint12(5001007322);
            },
            'Result is string': function (topic) {
                assert.equal(typeof (topic), 'string');
            },
            'Result 500100732259': function (topic) {
                assert.equal(topic, '500100732259');
            }
        },
        'Verify': {
            topic: function () {
                return inn.verify12(500100732259);
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