let variable = require('./pwd.js');
let lsCmd = require('./ls.js');
let catCmd = require('./cat.js');


// Output a prompt 
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // remove the new line
    let commands = cmd.split(' ');

    if (commands[0] === 'pwd') {
        variable();
    } 
    else if (commands[0]  === 'ls'){
        lsCmd();
    }
    else if (commands[0] === 'cat') {
        catCmd(commands[1]);
    }
    else {
        process.stdout.write('You typed: ' + cmd);
    }


    process.stdout.write('\nprompt >');
    // process.stdout.write('This is a test\n');

});