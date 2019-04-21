/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope
  let getAll = (data, callback) => {

    let query = `INSERT INTO orders (ref_no, order_detail, qty, pickup_date, pickup_time, payment, fulfilment, contact) VALUES ('${data.refNum}', '${data.orderDetail}', ${data.qty}, '${data.pickupDate}', '${data.pickupTime}', '${data.payment}', '${data.fulfilment}', ${data.contact})`;

    dbPoolInstance.query(query, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };


  return {
    getAll,
  };
};