import Fastify from "fastify";

const PORT = Number(process.env.PORT) || 8080;

const fastify = Fastify({
  logger: true,
});

fastify.get("/", async (request, reply) => {
  reply.send({ hello: "world" });
});

const start = async () => {
  try {
    await fastify.listen({ port: PORT, host: "0.0.0.0.0" });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
