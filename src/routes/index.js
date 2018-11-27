const router = require('express').Router();
// const db = require('../neo4j');

var neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver('bolt://192.168.112.66:7687', neo4j.auth.basic('neo4j', 'kevin123'));
const db = driver.session();

router.get(('/suggestion'), async (req, res)=> {
  // let minPrice = req.query.min_price;
  // let maxPrice = req.query.min_price;
  // let categories = req.query.category;
  let cod = req.query.cod;
  console.log(cod)
  const resultPromise = db.run(
    `MATCH (c:Client{codigo:$codigo})-[:MAKES]->(o)-[:CONTAIN]->(p)
    RETURN p.categoria, count(*) ORDER BY count(*) DESC LIMIT 3`,{codigo: cod}
  );
  resultPromise.then(result => {
    res.status(200).send(JSON.stringify(result.records));
  })
});

module.exports = router;
