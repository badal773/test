const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello from Node.js app! 🚀');
});

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
