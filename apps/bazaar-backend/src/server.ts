import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", async (request, reply) => {
  reply.send({ hello: "world" });
});

const start = async () => {
  try {
    await fastify.listen({ port: 8080 });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
