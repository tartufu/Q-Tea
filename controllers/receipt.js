module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let receiptControllerCallback = (request, response) => {
      // db.tweets.getAll((error, result) => {
      //   // console.log(result[0]);
      //   let thing = {ccb : result}
        // console.log(thing);
        // console.log(request.body);
        // response.send(request.body);
      // });


        let data = {
            refNum: request.body.ref_no,
            orderDetail: request.body.order_detail,
            qty: request.body.qty,
            pickupDate: request.body.pickup_date,
            pickupTime: request.body.pickup_time,
            contact: request.body.contact,
            payment: request.body.payment,
            fulfilment: request.body.fulfilment,
            contact: request.body.contact
        }

        console.log("ADNSAIDNS "+data.orderDetail);

        db.receipt.getAll( data, (error, result) => {
        // console.log(result[0]);

        console.log(data);
        response.render('receipt', data)
        // console.log(request.body);
        // response.send(request.body);
      });
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: receiptControllerCallback,
  };

}