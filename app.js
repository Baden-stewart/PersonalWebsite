
const express = require('express')
const app = express()
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	res.send('Hello World')
})
app.all('/echo', (req, res) => {
  res.json({
   method: req.method,
   headers: req.headers,
   query: req.query,
   body: req.body
  });
});
app.listen(3000, function() {
	console.log('Hello World app listening on port 3000!');
})



