const express = require('express');

const app = express();

app.use('*', (req, res) => {
  res.status(200).json({
    success: true,
  });
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log('Server is listening on port', port));
