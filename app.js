const readArgsModule = require('./src/read-command-line'); 
const commandEnum = require('./src/const/command-enum').CommandEnum; 
const filterCommand = require('./src/filter').filterCommand;
const countCommand = require('./src/count').countCommand;
const data = require('./src/const/data').data;
const dataTest = require('./test/data/data-test').dataTest

const args = process.argv.slice(2);
let result = readArgsModule.readCommand(args[0]);

if( result.command === commandEnum.FILTER) {
    console.log(JSON.stringify(filterCommand(data, result.param),null,' '));
} else if ( result.command === commandEnum.COUNT) {
    console.log(JSON.stringify(countCommand(data),null,' '));
}

