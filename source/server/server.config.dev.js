require('../../config/babel.register')

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

const routes = require('./server.routes')

app.use(bodyParser.json({ limit: '2mb' }));
// app.use('*', (req,res)=>{
//   res.send("hello world");
// })
app.use('/', routes);

app.listen(port, error => {
  error
    ? console.log(error)
    : console.info(`==> Proxy server listen on port ${port}`);
});
