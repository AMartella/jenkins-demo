const fastifyTest = require('fastify');

test("Test 1", async () => {
    const fastify = fastifyTest();
    fastify.get("/", () => ({ hello: "world" }));

    const response = await fastify.inject({ method: "GET", url: "/" });
    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ hello: "world" });
});