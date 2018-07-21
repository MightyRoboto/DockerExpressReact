const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  if (!req.get('Authorization'))
  {
    res.status(403).send('You are not allowed to access this resource.');
    return;
  }
  
  const options = {
    root: __dirname,
    dotfiles: 'deny',
    headers: {
      'Authorization': req.get('Authorization')
    }
  };
  
  res.sendFile('index.html', options);
});

app.listen(process.env.PORT || 8080);