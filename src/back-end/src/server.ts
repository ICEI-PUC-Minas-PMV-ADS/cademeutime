import fastify from 'fastify'

const server = fastify()

server.get('/teste', async (request, reply) => {
  console.log('TUDO OK NESSE ENDPOINT');
  return 'funcionou\n'
})

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})