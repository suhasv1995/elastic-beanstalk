const express = require('express');
const expressValidator = require('express-validator');
const react = require('react');

const app = express();

app.use('*', (req, res) => {
  res.status(200).json({
    success: true,
  });
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log('Server is listening on port', port));
