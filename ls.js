const fs = require('fs')

function lsCmd(){
    fs.readdir('./', 'utf8', (err, files) => {
        if (err){
            throw err;
        }
        else{
            process.stdout.write(files.join('\n'));
            process.stdout.write("\n prompt > \n");
        }
    })
}

module.exports = lsCmd;