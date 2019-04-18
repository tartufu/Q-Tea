module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let adminUpdateControllerCallback = (request, response) => {

        let data = request.body;

        if (data.payment) {
            db.adminupdate.payment(data,(error, result) => {
            // console.log(result[0]);
            console.log(data.order_no);
            let thing = {ccb : result}
            console.log(thing);
            // response.redirect('tasks');
            response.redirect('tasks');
            console.log(request.body);
          });

        } else if (data.fulfilment === 'fulfilled'){
            // response.send("ETSTESN OENTOIEST");

              db.adminupdate.fulfill(data,(error, result) => {
                // console.log(result[0]);
                console.log(data.order_no);
                let thing = {ccb : result}
                console.log(thing);
                // response.redirect('tasks');
                response.redirect('tasks');
                console.log(request.body);
              });

        } else if (data.fulfilment === 'void') {
            response.send("WEDCVBJHGFC BN");
        }





  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: adminUpdateControllerCallback
  };

}