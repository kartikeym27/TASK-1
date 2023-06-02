const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Heartbeat is Running.');
});

app.listen(3000, () => console.log('apna port 3000 pe hai.'));