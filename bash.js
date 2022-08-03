let variable = require('./pwd.js');
let lsCmd = require('./ls.js');


// Output a prompt 
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // remove the new line

    if (cmd === 'pwd') {
        variable();
    } 
    else if (cmd === 'ls'){
        lsCmd();
    }
    else {
        process.stdout.write('You typed: ' + cmd);
    }


    process.stdout.write('\nprompt >');
    // process.stdout.write('This is a test\n');

});