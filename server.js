const express = require('express');
const path = require('path');
const app = express();
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: 'e207a4ff5d4f4ab0bd3fe758eb5fc9a3',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.use(express.json())


app.get('/', function(req, res) {
    rollbar.log('hello world')
    res.sendFile(path.join(__dirname, '/public/index.html'))
})



const port = process.env.PORT || 4545;

app.listen(port, function() 
{console.log(`servera jamming on ${port}`)})