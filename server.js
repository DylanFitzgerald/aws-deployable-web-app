const express = require('express');
var port = 8000;
const cors = require('cors');

var corsOptions = {
    origin: '//localhost:8000',
    optionsSuccessStatus: 200
}

const app = express();
//needed to share resources between different origins, aka can't share 
//resources betweeen 4200 and 8000
app.use(cors());

const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "@Montrose1"
});

app.listen(port, () => {
    console.log('Listening on port: ' + port);
});


//get from database
app.route('/api/boats').get((req, res) => {
    con.query('USE boats', function (err, result) {
        if (err) throw err;
        console.log("Requesed from database: boats ");
    });

    con.query("SELECT * FROM ships", function (err, result) {
        if (err) throw err;
        res.send(
            {boats : result});

    });
});

app.route('/api/boats/:ship_id').delete((req, res) => {
    var id = req['params']['ship_id'];

    con.query('DELETE FROM ships WHERE ship_id = \"' + id  + '\"', function(err, result) {
        if (err) throw err;
        console.log('Deleted item' + id);
    });
    res.send('Deleted item');
});

//parses body as json
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//post to database
app.route('/api/boats').post((req, res) => {

    con.query('USE boats', function (err, result) {
        if (err) throw err;
        console.log("Posted to database: boats ");
    });

    var shipName = req['body']['shipName'];
    var shipType = req['body']['shipType'];

    con.query('INSERT INTO ships (shipName, shipType) VALUES (\"' + shipName  + '\", \"' + shipType  + '\")', function (err, result) {
        if (err) throw err;
    });

    res.status(201).send(req.body);
});
