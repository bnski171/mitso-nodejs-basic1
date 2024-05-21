const { spawn } = require('child_process');
const path = require('path');

function spawnChildProcess(args) {
    const scriptPath = path.join(__dirname, 'script.js');
    const child = spawn('node', [scriptPath, ...args]);

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
}

spawnChildProcess(process.argv.slice(2));
