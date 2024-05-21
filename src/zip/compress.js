const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

function compress() {
    const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const compressedPath = path.join(__dirname, 'files', 'archive.gz');
    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(compressedPath);
    const gzip = zlib.createGzip();

    readStream.pipe(gzip).pipe(writeStream);
    readStream.on('error', () => console.error('FS operation failed'));
}

compress();
