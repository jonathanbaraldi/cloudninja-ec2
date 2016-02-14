
// Dependencias
var AWS = require('aws-sdk');
var express = require('express'); 
var app = express();

var bodyParser = require('body-parser');

// Parsear o conteudo
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  	extended: true
}));


// Configuração da requisição, cabeçalhos, etc. CORS
app.use(function(req, res, next) {
  	res.header("Access-Control-Allow-Origin", "*");
  	// Métodos que queremos permitir
  	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	next();
});

// GET
app.get('/',function(req,res){
	
	// Iniciando objeto S3
	var s3 = new AWS.S3();
    
  s3.listBuckets(function(error, data) {
    	
    if (error) {
      returnS3(error);
    	console.log(error);
    } else {
      returnS3(data);
      console.log(data);
    }
        
  });

  var returnS3 = function(result){

    result = JSON.stringify(result);
    result = JSON.parse(result);

  	var body = '<html>'
  		+'	<head>'
  		+'	<meta http-equiv="Content-Type" content="text/html" charset="UTF-8"/>'
  		+'	</head>'
  		+'	<body>'
  		+	result
  		+'	</body>'
  	    +'</html>';

    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write(body);
    res.end();
  }
	
});

app.listen(8080,function(){
	console.log("Conectado e escutando na porta 8080");
});
