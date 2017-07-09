let express = require('express'),
    appl = express(),
    http = require('http'),
    bodyParser = require('body-parser'),
    servak = http.createServer(appl);
   // bodyclass = require('bodyclass');

let bodyobject = {
    page,
    firstname,
    lastname,
};

appl.use(bodyParser.json());
appl.use(bodyParser.urlencoded({extended: false}));

appl.post('/hernya', function (req, res) {
    let body = req.body;
    let query = req.query;
    console.log(body.pagefrom);
    console.log(body.input1);
    console.log(body.input2);

    res.send(
        {query,body}
        //{query:query,body:body}
    )
});

appl.get('/test', function (request, response, next) {
    let htmltext = "ok";
    response.send(htmltext);
});

appl.get('*', function (req, res) {
    res.sendFile("index.html",{root:__dirname})
});


servak.listen(3010, function () {
    console.log("servak started");
});


