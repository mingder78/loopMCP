import { spawn } from "bun";

// Define MCP server processes
const mcpServers = [
  { name: "server1", cmd: ["node", "build/index.js"] },
];

// Function to call MCP servers
async function callMcpServers(method: string, params: any[] = []) {
  const requestBody = JSON.stringify({
    jsonrpc: "2.0",
    method,
    params,
    id: Date.now(), // Unique ID for each call
  });

  const responses = await Promise.all(
    mcpServers.map(async (server) => {
      try {
        console.log(`Connecting to ${server.name}...`);

        // Spawn MCP server process
        const process = spawn({
          cmd: server.cmd,
          stdin: "pipe",
          stdout: "pipe",
          stderr: "pipe",
        });

        // Write JSON-RPC request to stdin
        await process.stdin.write(requestBody);
        process.stdin.end();

        // Collect stdout response
        let stdout = "";
        for await (const chunk of process.stdout) {
          stdout += new TextDecoder().decode(chunk);
        }
console.log(stdout);
        const response = JSON.parse(stdout);
        console.log(`${server.name} Response:`, response);
        return { server: server.name, response };
      } catch (error) {
        console.error(`Error from ${server.name}:`, error);
        return { server: server.name, error: error.message };
      }
    })
  );

  console.log("All responses:", responses);
  return responses;
}

// Example usage
callMcpServers("ping", []);

