const { parentPort } = require('worker_threads');

parentPort.on('message', (n) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += Math.sqrt(i);
        if (sum > 10000) throw new Error('Sum is too big');
    }
    parentPort.postMessage(sum);
});