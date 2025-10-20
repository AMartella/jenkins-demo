const fastify = require('fastify')({ logger: true });
const _public = require('./routes/public');

fastify.post('/register', {
    schema: {
        body: {
            type: 'object',
            required: ['email', 'password'],
            properties: {
                email: { type: 'string', format: 'email' },
                password: { type: 'string', minLength: 6 }
            }
        }
    }
}, async (request, reply) => {
    const { email, password } = request.body;
    reply.send({ email, password });
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

let count = 0;
setInterval(() => {
    console.log('Main thread is alive:', ++count);
}, 1000);

start();