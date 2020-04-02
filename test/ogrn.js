const vows = require('vows');
const assert = require('assert');
const ogrn = require('../OGRN');
const ogrnip = require('../OGRNIP');

vows.describe('OGRN')
    .addBatch({
        'normalize': {
            topic: function () {
                return ogrn.normalize('1171690122911');
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Number 117169012291': function (topic) {
                assert.equal(topic, 117169012291);
            }
        },
        'Control summ': {
            topic: function () {
                return ogrn.controlSumm(117169012291);
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Number 1': function (topic) {
                assert.equal(topic, 1);
            }
        },
        'Pretty print': {
            topic: function () {
                return ogrn.prettyPrint(117169012291);
            },
            'This is string': function (topic) {
                assert.equal(typeof (topic), 'string');
            },
            'Number 1171690122911': function (topic) {
                assert.equal('1171690122911', topic);
            }
        },
        'Verify': {
            topic: function () {
                return ogrn.verify('1171690122911');
            },
            'This is boolean': function (topic) {
                assert.equal(typeof (topic), 'boolean');
            },
            'Verify correct': function (topic) {
                assert.equal(topic, true);
            }
        }
    }).export(module);

vows.describe('OGRNIP')
    .addBatch({
        'normalize': {
            topic: function () {
                return ogrnip.normalize('316784700103355');
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Number 31678470010335': function (topic) {
                assert.equal(topic, 31678470010335);
            }
        },
        'Control summ': {
            topic: function () {
                return ogrnip.controlSumm(31678470010335);
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Number 5': function (topic) {
                assert.equal(topic, 5);
            }
        },
        'Pretty print': {
            topic: function () {
                return ogrnip.prettyPrint(31678470010335);
            },
            'This is string': function (topic) {
                assert.equal(typeof (topic), 'string');
            },
            'Number 316784700103355': function (topic) {
                assert.equal('316784700103355', topic);
            }
        },
        'Verify': {
            topic: function () {
                return ogrnip.verify('316784700103355');
            },
            'This is boolean': function (topic) {
                assert.equal(typeof (topic), 'boolean');
            },
            'Verify correct': function (topic) {
                assert.equal(topic, true);
            }
        }
    }).export(module);