const { parentPort } = require('worker_threads');

parentPort.on('message', (number) => {
    const result = number * 2; // Replace with actual computation
    parentPort.postMessage(result);
});
