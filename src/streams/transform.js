const { Transform } = require('stream');

const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        const reversedChunk = chunk.toString().split('').reverse().join('');
        callback(null, reversedChunk);
    }
});

process.stdin.pipe(transformStream).pipe(process.stdout);
