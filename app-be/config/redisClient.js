const { createClient } = require('redis');

const redis = createClient({
    socket: {
        host: process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_PORT || 6379
    }
});

redis.connect().then(() => {
    console.log('Connected to Redis');
}).catch(console.error);

module.exports = redis;