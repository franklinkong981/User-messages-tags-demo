/** Database client for pg-relationships-demo. */
const {Client} = require("pg");

let db = new Client({
  connectionString: "postgres://franklinkong981:123456789@127.0.0.1:5432/pg_relationships"
});

db.connect();

module.exports = db;