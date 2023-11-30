import ligarServidor from "./servidor.js";

export const server = await ligarServidor();
export const port = 3000;
export const host = '0.0.0.0';

async function main(): Promise<void> {
  try {
    await server.listen({ port, host });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

await main();