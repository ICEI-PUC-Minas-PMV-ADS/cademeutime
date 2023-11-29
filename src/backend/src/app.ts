import ligarServidor from "./servidor.js";

const server = await ligarServidor();
const port = 3000;
const host = '0.0.0.0';

async function main(): Promise<void> {
  try {
    await server.listen({ port, host });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

await main();