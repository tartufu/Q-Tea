/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======             CONFIGURATION          =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */



const pg = require('pg');
const url = require('url');

var configs;

if( process.env.DATABASE_URL ){

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
  };

}else{
  configs = {
    user: 'changhaoteo',
    host: '127.0.0.1',
    database: 'q-tea',
    port: 5432
  };
}


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});



/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======        REQUIRE MODEL FILES         =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */

  const allAdminModelsFunction = require('./models/admin');
  const adminModelsObject = allAdminModelsFunction(pool);


  const allAdminUpdateModelsFunction = require('./models/adminupdate');
  const adminUpdateModelsObject = allAdminUpdateModelsFunction(pool);

  const allSearchModelsFunction = require('./models/search');
  const searchModelsObject = allSearchModelsFunction(pool);

  const allReceiptModelsFunction = require('./models/receipt');
  const receiptModelsObject = allReceiptModelsFunction(pool);

  const allUsersModelsFunction = require('./models/user');
  const userModelsObject = allUsersModelsFunction(pool);

/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======          MODULE EXPORTS            =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */


module.exports = {
  //make queries directly from here
  queryInterface: (text, params, callback) => {
    return pool.query(text, params, callback);
  },

  // get a reference to end the connection pool at server end
  pool:pool,

  /*
   * ADD APP MODELS HERE
   */

  // users: userModelsObject,
  // pokemon: pokemonModelsObject
  admin: adminModelsObject,
  adminupdate: adminUpdateModelsObject,
  search: searchModelsObject,
  receipt: receiptModelsObject,
  user: userModelsObject
};