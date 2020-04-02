const vows = require('vows');
const assert = require('assert');
const isin = require('../ISIN');

vows.describe('ISIN16')
    .addBatch({
        'normalize': {
            topic: function () {
                return isin.normalize('5610 0000 0000 0001');
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Number 561000000000000': function (topic) {
                assert.equal(topic, 561000000000000)
            }
        },
        'Control summ': {
            topic: function () {
                return isin.controlSumm('561000000000000');
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Control number 1': function (topic) {
                assert.equal(topic, 1);
            }
        },
        'Pretty print 5610 0000 0000 0001': {
            topic: function () {
                return isin.prettyPrint('561000000000000');
            },
            'This is string': function (topic) {
                assert.equal(typeof (topic), 'string');
            },
            'Number 5610 0000 0000 0001': function (topic) {
                assert.equal(topic, '5610 0000 0000 0001');
            }
        },
        'Verify 5610 0000 0000 0001': {
            topic: function () {
                return isin.verify('5610 0000 0000 0001');
            },
            'This is boolean': function (topic) {
                assert.equal(typeof (topic), 'boolean');
            },
            'Verify correct': function (topic) {
                assert.equal(topic, true);
            }
        }
    }).export(module);

vows.describe('ISIN13')
    .addBatch({
        'normalize': {
            topic: function () {
                return isin.normalize('4000-0000-0000-6');
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Number 400000000000': function (topic) {
                assert.equal(topic, 400000000000)
            }
        },
        'Control summ': {
            topic: function () {
                return isin.controlSumm('400000000000');
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Control number 6': function (topic) {
                assert.equal(topic, 6);
            }
        },
        'Pretty print 400000000000': {
            topic: function () {
                return isin.prettyPrint(400000000000);
            },
            'This is string': function (topic) {
                assert.equal(typeof (topic), 'string');
            },
            'Number 4000 0000 0000 6': function (topic) {
                assert.equal(topic, '4000 0000 0000 6');
            }
        },
        'Verify 4000 0000 0000 6': {
            topic: function () {
                return isin.verify('4000 0000 0000 6');
            },
            'This is boolean': function (topic) {
                assert.equal(typeof (topic), 'boolean');
            },
            'Verify correct': function (topic) {
                assert.equal(topic, true);
            }
        }
    }).export(module);

vows.describe('ISIN14 security paper')
    .addBatch({
        'normalize': {
            topic: function () {
                return isin.normalize('RU0007661625');
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Number 2730000766162': function (topic) {
                assert.equal(topic, 2730000766162)
            }
        },
        'Control summ': {
            topic: function () {
                return isin.controlSumm(2730000766162);
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Control number 5': function (topic) {
                assert.equal(topic, 5);
            }
        },
        'Pretty print 2730000766162': {
            topic: function () {
                return isin.prettyPrint(2730000766162);
            },
            'This is string': function (topic) {
                assert.equal(typeof (topic), 'string');
            },
            'Number RU0007661625': function (topic) {
                assert.equal(topic, 'RU0007661625');
            }
        },
        'Verify RU0007661625': {
            topic: function () {
                return isin.verify('RU0007661625');
            },
            'This is boolean': function (topic) {
                assert.equal(typeof (topic), 'boolean');
            },
            'Verify correct': function (topic) {
                assert.equal(topic, true);
            }
        }
    }).export(module);

vows.describe('ISIN14 Bank card Estonia')
    .addBatch({
        'normalize': {
            topic: function () {
                return isin.normalize('DE0001136927');
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Number 1314000113692': function (topic) {
                assert.equal(topic, 1314000113692)
            }
        },
        'Control summ': {
            topic: function () {
                return isin.controlSumm(1314000113692);
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Control number 7': function (topic) {
                assert.equal(topic, 7);
            }
        },
        'Pretty print 1314000113692': {
            topic: function () {
                return isin.prettyPrint(1314000113692);
            },
            'This is string': function (topic) {
                assert.equal(typeof (topic), 'string');
            },
            'Number DE0001136927': function (topic) {
                assert.equal(topic, 'DE0001136927');
            }
        },
        'Verify DE0001136927': {
            topic: function () {
                return isin.verify('DE0001136927');
            },
            'This is boolean': function (topic) {
                assert.equal(typeof (topic), 'boolean');
            },
            'Verify correct': function (topic) {
                assert.equal(topic, true);
            }
        }
    }).export(module);