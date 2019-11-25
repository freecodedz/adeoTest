const assert = require('assert');
const filterCommand = require('../src/filter').filterCommand;
const dataTest = require('./data/data-test').dataTest;

describe('cli filter and count', function () {
    it('should return a filtred data ', function () {
        let result = filterCommand(dataTest, 'no');
        assert.equal(result.length, 2);
    }); 
});