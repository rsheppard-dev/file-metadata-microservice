var express = require('express');
var cors = require('cors');
require('dotenv').config({ path: __dirname + '/config/.env' })
const fileRouter = require('./routers/file')

var app = express();

app.use(cors());
app.use(fileRouter)
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
