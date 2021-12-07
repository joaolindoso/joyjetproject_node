const app = require('./config/express')();
const http = require('http').Server(app);


http.listen('3000', function () {
   console.log("Servidor Ativo!");
});

app.get('/', (req, res) => {
    res.format({
        html: function () {
            res.render('index');
        }
    });
});

