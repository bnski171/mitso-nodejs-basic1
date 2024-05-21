const fs = require('fs');
const path = require('path');

function write() {
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
    const writeStream = fs.createWriteStream(filePath);

    process.stdin.pipe(writeStream);
    process.stdin.on('error', () => console.error('FS operation failed'));
}

write();
