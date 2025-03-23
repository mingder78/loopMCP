import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
console.log('asdf')
  res.send("Hello from the spawned server!");
});

// Listen for input from parent process
process.stdin.on("data", (data) => {
  console.log(`Received input: ${data.toString().trim()}`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
