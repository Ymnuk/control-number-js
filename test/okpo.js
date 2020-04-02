const vows = require('vows');
const assert = require('assert');
const okpo = require('../OKPO');

vows.describe('OKPO8')
    .addBatch({
        'normalize': {
            topic: function () {
                return okpo.normalize('00002335');
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Number 233': function (topic) {
                assert.equal(topic, 233);
            }
        },
        'Control summ OKPO8': {
            topic: function () {
                return okpo.controlSumm8(233);
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Number 5': function (topic) {
                assert.equal(topic, 5);
            }
        },
        'Pretty print OKPO8': {
            topic: function () {
                return okpo.prettyPrint8(233);
            },
            'This is string': function (topic) {
                assert.equal(typeof (topic), 'string');
            },
            'Number 00002335': function (topic) {
                assert.equal('00002335', topic);
            }
        },
        'Verify': {
            topic: function () {
                return okpo.verify8('00002335');
            },
            'This is boolean': function (topic) {
                assert.equal(typeof (topic), 'boolean');
            },
            'Verify correct': function (topic) {
                assert.equal(topic, true);
            }
        }
    }).export(module);

vows.describe('OKPO10')
    .addBatch({
        'normalize': {
            topic: function () {
                return okpo.normalize('0002870479');
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Number 287047': function (topic) {
                assert.equal(topic, 287047);
            }
        },
        'Control summ': {
            topic: function () {
                return okpo.controlSumm10(287047);
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Number 9': function (topic) {
                assert.equal(topic, 9);
            }
        },
        'Pretty print': {
            topic: function () {
                return okpo.prettyPrint10(287047);
            },
            'This is string': function (topic) {
                assert.equal(typeof (topic), 'string');
            },
            'Number 0002870479': function (topic) {
                assert.equal('0002870479', topic);
            }
        },
        'Verify': {
            topic: function () {
                return okpo.verify10('0002870479');
            },
            'This is boolean': function (topic) {
                assert.equal(typeof (topic), 'boolean');
            },
            'Verify correct': function (topic) {
                assert.equal(topic, true);
            }
        }
    }).export(module);