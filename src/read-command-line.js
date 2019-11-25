const commandEnum = require('./const/command-enum').CommandEnum; 
const filterPattern =  /--filter=[a-z]*/ig;
const countPattern = /--count/ig;

/**
 read entry from cli and 
 check command validation  
 The command sould be : 
                        --filter='pattern'
                        --count*/
exports.readCommand = function(command){
    if( command.match(filterPattern)) {
        const commandParam = command.split('=')[1];
        return {command:commandEnum.FILTER, param:commandParam}
    } else if (command.match(countPattern)) {
        return {command:commandEnum.COUNT, param:undefined}
    }else {
        console.log('Can not find a command, did you mean --filter or --count commands ?');
    }
}