const { Worker } = require('worker_threads');
const os = require('os');

const numCPUs = os.cpus().length;

function createWorkers() {
    const workers = [];
    const results = [];

    for (let i = 0; i < numCPUs; i++) {
        workers.push(new Promise((resolve, reject) => {
            const worker = new Worker('./worker.js');
            const number = 10 + i;

            worker.postMessage(number);

            worker.on('message', (result) => {
                resolve({ status: 'resolved', data: result });
            });

            worker.on('error', () => {
                resolve({ status: 'error', data: null });
            });

            worker.on('exit', (code) => {
                if (code !== 0) {
                    resolve({ status: 'error', data: null });
                }
            });
        }));
    }

    return Promise.all(workers).then((res) => {
        console.log(res);
    });
}

createWorkers();
