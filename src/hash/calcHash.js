const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

async function calcHash() {
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(filePath);

    stream.on('data', chunk => hash.update(chunk));
    stream.on('end', () => console.log(hash.digest('hex')));
    stream.on('error', () => console.error('FS operation failed'));
}

calcHash();
