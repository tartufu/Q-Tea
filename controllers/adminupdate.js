module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let adminPaymentControllerCallback = (request, response) => {

        let data = request.body;
        console.log(data.id);
        // console.log(data);
            db.adminupdate.payment(data,(error, result) => {
            // console.log(result[0]);
            console.log(data);
            let thing = {ccb : result}
            console.log(thing);
            // response.redirect('tasks');
            response.redirect('tasks');
            console.log(request.body);
          });
  };

    let adminNoPaymentControllerCallback = (request, response) => {

        let data = request.body;
        console.log(data.id);
        // console.log(data);
            db.adminupdate.noPayment(data,(error, result) => {
            // console.log(result[0]);
            console.log(data);
            let thing = {ccb : result}
            console.log(thing);
            // response.redirect('tasks');
            response.redirect('tasks');
            console.log(request.body);
          });
  };

      let adminFulfillControllerCallback = (request, response) => {

        let data = request.body;
        console.log(data.id);
        // console.log(data);
            db.adminupdate.fulfill(data,(error, result) => {
            // console.log(result[0]);
            console.log(data);
            let thing = {ccb : result}
            console.log(thing);
            // response.redirect('tasks');
            response.redirect('tasks');
            console.log(request.body);
          });
  };

        let adminCancelControllerCallback = (request, response) => {

        let data = request.body;
        console.log(data.id);
        // console.log(data);
            db.adminupdate.cancel(data,(error, result) => {
            // console.log(result[0]);
            console.log(data);
            let thing = {ccb : result}
            console.log(thing);
            // response.redirect('tasks');
            response.redirect('tasks');
            console.log(request.body);
          });
  };


// THIS SECTION NO LONGER WORKS BUT IS KEPT FOR REFERENCE
  //   let adminUpdateControllerCallback = (request, response) => {

  //       let data = request.body;

  //       if (data.payment) {
  //           db.adminupdate.payment(data,(error, result) => {
  //           // console.log(result[0]);
  //           console.log(data.order_no);
  //           let thing = {ccb : result}
  //           console.log(thing);
  //           // response.redirect('tasks');
  //           response.redirect('tasks');
  //           console.log(request.body);
  //         });

  //       } else if (data.fulfilment === 'fulfilled'){
  //           // response.send("ETSTESN OENTOIEST");

  //             db.adminupdate.fulfill(data,(error, result) => {
  //               // console.log(result[0]);
  //               console.log(data.order_no);
  //               let thing = {ccb : result}
  //               console.log(thing);
  //               // response.redirect('tasks');
  //               response.redirect('tasks');
  //               console.log(request.body);
  //             });

  //       } else if (data.fulfilment === 'void') {
  //           // response.send("WEDCVBJHGFC BN");

  //             db.adminupdate.cancel(data, (error, result) => {
  //               // console.log(result[0]);
  //               console.log(data.order_no);
  //               let thing = {ccb : result}
  //               console.log(thing);
  //               // response.redirect('tasks');
  //               response.redirect('tasks');
  //               console.log(request.body);
  //             });

  //       };

  // };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    // index: adminUpdateControllerCallback,
    payment: adminPaymentControllerCallback,
    noPayment: adminNoPaymentControllerCallback,
    fulfill: adminFulfillControllerCallback,
    cancel: adminCancelControllerCallback
  };

}