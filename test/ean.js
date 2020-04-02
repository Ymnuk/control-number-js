const vows = require('vows');
const assert = require('assert');
const ean = require('../EAN');

vows.describe('EAN-13')
    .addBatch({
        'normalize': {
            topic: function () {
                return ean.normalize('4600051000057');
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Number 460005100005': function (topic) {
                assert.equal(topic, 460005100005);
            }
        },
        'Control summ': {
            topic: function () {
                return ean.controlSummEAN13(460005100005);
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Number 7': function (topic) {
                assert.equal(topic, 7);
            }
        },
        'Pretty print': {
            topic: function () {
                return ean.prettyPrintEAN13(460005100005);
            },
            'This is string': function (topic) {
                assert.equal(typeof (topic), 'string');
            },
            'Number 4600051000057': function (topic) {
                assert.equal('4600051000057', topic);
            }
        },
        'Verify': {
            topic: function () {
                return ean.verifyEAN13('4600051000057');
            },
            'This is boolean': function (topic) {
                assert.equal(typeof (topic), 'boolean');
            },
            'Verify correct': function (topic) {
                assert.equal(topic, true);
            }
        }
    }).export(module);
vows.describe('EAN-8')
    .addBatch({
        'normalize': {
            topic: function () {
                return ean.normalize('46009333');
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Number 4600933': function (topic) {
                assert.equal(topic, 4600933);
            }
        },
        'Control summ': {
            topic: function () {
                return ean.controlSummEAN8(4600933);
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Number 3': function (topic) {
                assert.equal(topic, 3);
            }
        },
        'Pretty print': {
            topic: function () {
                return ean.prettyPrintEAN8(4600933);
            },
            'This is string': function (topic) {
                assert.equal(typeof (topic), 'string');
            },
            'Number 46009333': function (topic) {
                assert.equal('46009333', topic);
            }
        },
        'Verify': {
            topic: function () {
                return ean.verifyEAN8('46009333');
            },
            'This is boolean': function (topic) {
                assert.equal(typeof (topic), 'boolean');
            },
            'Verify correct': function (topic) {
                assert.equal(topic, true);
            }
        }
    })
    .export(module);

vows.describe('UPC-12')
    .addBatch({
        'normalize': {
            topic: function () {
                return ean.normalize('041689300494');
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Number 4168930049': function (topic) {
                assert.equal(topic, 4168930049);
            }
        },
        'Control summ': {
            topic: function () {
                return ean.controlSummUPC12(4168930049);
            },
            'This is number': function (topic) {
                assert.equal(typeof (topic), 'number');
            },
            'Number 4': function (topic) {
                assert.equal(topic, 4);
            }
        },
        'Pretty print': {
            topic: function () {
                return ean.prettyPrintUPC12(4168930049);
            },
            'This is string': function (topic) {
                assert.equal(typeof (topic), 'string');
            },
            'Number 041689300494': function (topic) {
                assert.equal('041689300494', topic);
            }
        },
        'Verify': {
            topic: function () {
                return ean.verifyUPC12('041689300494');
            },
            'This is boolean': function (topic) {
                assert.equal(typeof (topic), 'boolean');
            },
            'Verify correct': function (topic) {
                assert.equal(topic, true);
            }
        }
    })
    .export(module);