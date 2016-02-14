// Dependencias
var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');

// Parsear o conteudo
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  	extended: true
}));

// Configuração da requisição, cabeçalhos, CORS
app.use(function(req, res, next) {
  	res.header("Access-Control-Allow-Origin", "*");
  	// Métodos que queremos permitir
  	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	next();
});

// GET
app.get('/',function(req,res){

	var body = '<html>'
				+'	<head>'
				+'	<meta http-equiv="Content-Type" content="text/html" charset="UTF-8"/>'
				+'	</head>'
				+'	<body>'
				+	'<h1>Bem vindo Cloud Ninja</h1>'
				+'	</body>'
			    +'</html>';

	res.writeHead(200,{"Content-Type" : "text/html"});
	res.write(body);
	res.end();
});

app.listen(8080,function(){
	console.log("Conectado e escutando na porta 8080");
});
