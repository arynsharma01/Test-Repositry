// const bodyParser = require('body-parser')
// const express = require('express')
// const app = express()
// const port = 3000

// app.use(express.json);


// app.get('/', function(req, res){
//   res.send('Hello World!')
// })
// app.post('/second/page', function(req,res){
//   console.log(req.headers.authorization);
//   console.log(req.body.message);

//   res.json({
//     "name" :  "aryan",
//     "age" : "22"
//   })
// })

// app.listen(port)
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.get('/first/page', function(req, res) {
  res.send('Hello World!');
  
});

app.post('/second/page', function(req, res) {
  console.log(req.headers.authorization);
  console.log(req.body);

  res.json({
    "name": "aryan",
    "age": "22"
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
