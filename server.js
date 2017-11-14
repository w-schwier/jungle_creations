const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('listening on 3000')
});

app.use(express.static(__dirname + '/src'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index');
});
