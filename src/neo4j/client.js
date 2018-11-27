var neo4j = require('neo4j-driver').v1;
const username = process.env.NEOUSER;
const password = process.env.NEOPASSWORD;
const neoHost = process.env.NEOHOST;
const neoPort = process.env.NEOPORT;

const client = new neo4j.GraphDatabase(`http://${username}:${password}@${neoHost}:${neoPort}`);
const driver = neo4j.driver('bolt://192.168.112.66:7687', neo4j.auth.basic('neo4j', 'kevin123'));

module.exports = client;
