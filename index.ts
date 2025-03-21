import * as readline from 'readline';
import { v4 as uuidv4 } from 'uuid'; // For generating a unique session ID

// Create a readline interface for CLI input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// MCP server endpoint (replace with your actual MCP server URL)

// Generate a unique session ID for this CLI session
const sessionId = '0b7461ab-65d7-41c8-8e0f-795082ad63b6'//uuidv4();
console.log(`Using sessionId: ${sessionId}`);
const params = new URLSearchParams({
  sessionId
}).toString();

const MCP_SERVER_URL = `http://localhost:3000/message?${params}`;

async function connectToMCP(): Promise<string> {
  try {
    const response = await fetch(MCP_SERVER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
{"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{"sampling":{},"roots":{"listChanged":true}},"clientInfo":{"name":"mcp-inspector","version":"0.0.1"}},"jsonrpc":"2.0","id":0}
    ) // MCP expects a message payload
    });

  console.log(response)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return 'connected to server';
  } catch (error) {
    console.error('Error contacting MCP server:', error);
    return 'Error: Could not get a response';
  }
}

// Simple function to send a message to the MCP server and get a response
async function sendToMCP(message: string): Promise<string> {

  try {
    const response = await fetch(MCP_SERVER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: message // MCP expects a message payload
    });

  console.log(response)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

 const text = await response.text(); // Get raw text first
    console.log('Raw response:', text);

    const data = JSON.parse(text); // Parse manually
    console.log('Parsed JSON:', data);

//    const data = await response.json();
    return 'No response from server';

  } catch (error) {
    console.error('Error contacting MCP server:', error);
    return 'Error: Could not get a response';
  }
}

// Main loop function
async function startCLI() {
  console.log('Simple MCP CLI Client (type "exit" to quit)');
  await connectToMCP();
  while (true) {
    // Prompt user for input
    const userInput = await new Promise<string>((resolve) => {
      rl.question('You: ', resolve);
    });

    // Exit condition
    if (userInput.toLowerCase() === 'exit') {
      console.log('Goodbye!');
      rl.close();
      break;
    }

    // Send input to MCP server and display response
    const response = await sendToMCP(userInput);
    console.log('MCP: ', response);
  }
}

// Start the CLI
startCLI().catch((error) => {
  console.error('CLI failed:', error);
  rl.close();
});
