const express = require('express');
const router = express.Router();

const {json} = require('body-parser');
const mysql = require('mysql2');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'fantasyc_user',
  password: 'o6UZMvPZas0H',
  database: 'fantasyc_database',
});

router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM history', (err, results, fields) => {
    res.send(results);
  });
});

router.get('/:id', function(req, res, next) {
  connection.query(`SELECT * FROM history WHERE identifier = '${req.params.id}'`, (err, results, fields) => {
    res.send(results);
  });
});

router.post('/', json(), function(req, res, next) {
  // primary key check - if it doesn't exist, it's a bad request
  if (!req.body.identifier) {
    res.sendStatus(400);
  } else {
    const dbEntry = [
      req.body.identifier,
      req.body.seller,
      req.body.buyer,
      req.body.price,
      req.body.timestamp,
      req.body.lasttrade,
    ];

    // dbEntry[4] (corresponding to our datetime object) needs to be converted to something mysql can accept
    dbEntry[4] = new Date(dbEntry[4]).toISOString().slice(0, 19).replace('T', ' ');

    for (const i in dbEntry) {
      if (typeof(dbEntry[i]) === 'string') {
        dbEntry[i] = `'${dbEntry[i]}'`;
      }
    }

    const dbEntryArgs = dbEntry.join(', ');

    connection.query(`INSERT INTO history VALUES (${dbEntryArgs})`, (err, results, fields) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  }
});

router.put('/:id', json(), function(req, res, next) {
  const dbEntry = {
    identifier: req.body.identifier,
    seller: req.body.seller,
    buyer: req.body.buyer,
    price: req.body.price,
    timestamp: req.body.timestamp,
    lasttrade: req.body.lasttrade,
  };

  dbEntry.timestamp = new Date(dbEntry.timestamp).toISOString().slice(0, 19).replace('T', ' ');

  for (const item of Object.keys(dbEntry)) {
    if (dbEntry[item] != undefined) {
      if (typeof(dbEntry[item]) == 'string') {
        connection.query(`UPDATE history SET ${item} = '${dbEntry[item]}' WHERE identifier = '${req.params.id}'`);
      } else {
        connection.query(`UPDATE history SET ${item} = ${dbEntry[item]} WHERE identifier = '${req.params.id}'`);
      }
    }
  }

  res.sendStatus(200);
});

module.exports = router;
