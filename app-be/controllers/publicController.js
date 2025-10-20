const { Worker } = require('worker_threads');
const redis = require('../config/redisClient');

const controller = {
    home: async (request, reply) => {
        const input = 99999999999;
        console.log(input);
        return new Promise((resolve, reject) => {
            console.log('start worker');
            const worker = new Worker('./worker.js');
            worker.postMessage(input);

            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
                console.log('worker stopped');
                if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
            });
        });
    },
    cache: async (request, reply) => {
        const id = request.query.id;
        if (!id) {
            return reply.status(400).send({ error: 'Missing "id" parameter' });
        }

        try {
            const cacheKey = `todo-${id}`;
            const cached = await redis.get(cacheKey);

            if (cached) {
                return reply.status(200).send({
                    message: 'Cache hit',
                    data: JSON.parse(cached),
                });
            }

            const data = await controller.callPreCache(id);
            if (!data) {
                return reply.status(404).send({ error: 'Data not found' });
            }

            await redis.set(cacheKey, JSON.stringify(data));

            return reply.status(200).send({
                message: 'API called and cached',
                data,
            });
        } catch (error) {
            console.error('Cache error:', error);
            return reply.status(500).send({ error: error.message });
        }
    },
    callPreCache: async (id) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('PreCache error:', error);
            throw error;
        }
    },
}

module.exports = controller;