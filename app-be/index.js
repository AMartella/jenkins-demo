const _public = require('./routes/public');

const fastify = require('fastify')({ logger: true });

fastify.setNotFoundHandler((request, reply) => {
    if (request.raw.url.startsWith('/api')) {
        reply.status(404).send({ message: 'API not found' });
    } else {
        reply.type('text/html').sendFile('index.html');
    }
});

_public(fastify);

const start = async () => {
    try {
        await fastify.listen({ port: 3000, host: '0.0.0.0' });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();