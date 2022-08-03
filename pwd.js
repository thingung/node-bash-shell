function pwdCmd() {
    const pwd = process.cwd();
    process.stdout.write(pwd);
}

module.exports = pwdCmd;