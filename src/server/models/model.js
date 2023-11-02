const { Pool } = require('pg');

const PG_URI = 'postgres://matrjiag:6AmMSzZT6O44ET5tXqx-9iw_j9mq0L0U@bubble.db.elephantsql.com/matrjiag';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('Query: ', text);
    return pool.query(text, params, callback);
  }
}