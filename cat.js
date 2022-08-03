const fs = require('fs');

// process.stdin.on('data', (data) => {
//     const cmd = data.toString().trim(); // remove the new line
//     let commands = cmd.split(' ');
//     process.stdout.write(commands + '\n');
//     if (commands[0] === 'cat') {
//         const file = commands[1];


//         });
//     }


//     process.stdout.write('\nprompt >');
//     // process.stdout.write('This is a test\n');

// });


function catCmd(file) {
    fs.readFile(file ,'utf8', (err, data) => {
        if (err){
            throw err;
        }
        else{
            process.stdout.write(data);
            process.stdout.write("\n prompt > \n");
        }
    });
}

module.exports = catCmd;