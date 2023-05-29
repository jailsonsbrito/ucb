let express = require('express');
let app = express();

app.get ('/', function (req, resp){
    resp.send('Criando uma rota de API e depois testando com postamn');
});

app.listen(3002, function(){
    console.log('Rota criada com sucesso!');
});