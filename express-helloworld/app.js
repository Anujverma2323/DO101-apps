var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});
<<<<<<< HEAD

app.get('/mars', function(req, res) {
  res.send('Hello Mars!!\n');
});

=======
app.get('/mars', function(req, res) {
  res.send('Hello Mars!\n');
});
>>>>>>> 051ecda6aa51aa90ac2a7b9c72457a3cf6e7c015
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

