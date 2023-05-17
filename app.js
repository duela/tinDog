const express = require('express');
const app = express();
const port = 3000;

app.listen(port, function(){
  console.log("Server is connected to port: "  + port);
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static('public')); // to load other static files associated with the application
