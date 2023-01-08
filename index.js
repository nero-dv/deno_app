import { ConnInfo, serve } from "https://deno.land/std@0.171.0/http/server.ts";

const body: Uint8Array = await Deno.readFile("./index.html");

serve((_req: Request, _connInfo: ConnInfo): Response => {
  return new Response(body);
}, {
  onListen({ hostname, port }: { hostname: string; port: number }): void {
    console.log(`Listening on ${hostname}:${port}`);
  },
});
