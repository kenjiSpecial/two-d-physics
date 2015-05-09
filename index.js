var express = require('express');
var MobileDetect = require('./mobile-detect');

var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {

  var md = new MobileDetect(request.headers['user-agent']);
  if(md.mobile()){
    response.sendFile(__dirname + "/public/sp/index.html");
  }else{
    response.sendFile(__dirname + "/public/pc/index.html");
  }

})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
