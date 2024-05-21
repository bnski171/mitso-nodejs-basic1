const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

function decompress() {
    const compressedPath = path.join(__dirname, 'files', 'archive.gz');
    const decompressedPath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const readStream = fs.createReadStream(compressedPath);
    const writeStream = fs.createWriteStream(decompressedPath);
    const gunzip = zlib.createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);
    readStream.on('error', () => console.error('FS operation failed'));
}

decompress();
