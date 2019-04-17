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

        db.receipt.getAll((error, result) => {
        // console.log(result[0]);
        let thing = {ccb : result}
        console.log(thing);
        response.render('receipt', thing)
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