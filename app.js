var express = require('express');
var app = express();
const Pool = require('pg').Pool


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'carburant',
  password: 'bpsen',
  port: 5432,
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    console.log(req.url);
    next();
  });

app.get('/getByMinusDays/:minusDays', function(req, res){
    const minusDays = req.params.minusDays;

    let query = `SELECT * 
    FROM histo
    WHERE "Date" = CURRENT_DATE - INTERVAL '${minusDays} day'
    ORDER BY "Date"`;

    pool.query(query, function(error, results){
        if (error) console.log(error);

        res.send(results.rows[0]);
    });

});

app.get('/getAll', function(req, res){
    const minusDays = req.params.minusDays;

    let query = `SELECT * 
                 FROM histo 
                 ORDER BY "Date"`;

    pool.query(query, function(error, results){
        if (error) console.log(error);

        res.send(results.rows);
    });

});

app.get('/getPrixFrance', function(req, res){
    let query = `SELECT "PrixCarburantFrance"."Date", "PrixCarburantFrance"."PrixMoyen", "TypesCarburant"."Type"
                 FROM "PrixCarburantFrance"
                 INNER JOIN "TypesCarburant" ON "PrixCarburantFrance"."Id_carburant" = "TypesCarburant"."Id"
                 ORDER BY "Date"`;

    pool.query(query, function(error, results){
        if(error) console.log(error);

        res.send(results.rows);
    });

});

app.get('/getCommunes', function(req, res){
    let query = `SELECT UPPER("Ville") as ville, "Code_postal" as code_postal FROM "Communes" ORDER BY UPPER("Ville")`;

    pool.query(query, function(error, results){
        if(error) console.log(error);
        res.send(results.rows);
    })
})


var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("running at http://%s:%s", host, port);
});