const fs = require('fs');
const path = require('path');

function read() {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
    const readStream = fs.createReadStream(filePath);

    readStream.pipe(process.stdout);
    readStream.on('error', () => console.error('FS operation failed'));
}

read();
