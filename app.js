const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ API: 'Running...' });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
