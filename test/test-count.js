const assert = require('assert');
const countCommand = require('../src/count').countCommand;
const dataTest = require('./data/data-test').dataTest;

describe('cli filter and count', function () {
    it('should return data with counting people and animals', function () {
        let result = countCommand(dataTest);
        assert.equal(result[0].name, 'Dillauti[5]');
        assert.equal(result[1].name, 'Tohabdal[8]');
        assert.equal(result[0].people[0].name, 'Winifred Graham[6]')
    });
});