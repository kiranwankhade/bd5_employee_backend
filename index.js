const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  return res.send('Starter template');
});

app.listen(PORT, () => console.log('Server is running on port', PORT));
