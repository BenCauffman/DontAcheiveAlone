const { Pool } = require('pg');

const PG_URI = 'postgres://fiqxiaxd:KNOpc64y5ldyT67Im2qH7BICPE0Rnh7c@raja.db.elephantsql.com/fiqxiaxd';

const pool = new Pool({
  connectionString: PG_URI
});



module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};