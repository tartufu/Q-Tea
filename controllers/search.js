module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
   // THIS JUST RENDERS THE SEARCH PAGE
  let searchControllerCallback = (request, response) => {
        response.render('search');
  };

  //THIS PARSES SEARCH DATA INTO THE DB
    let searchOrderControllerCallback = (request, response) => {
      // db.tweets.getAll((error, result) => {
      //   // console.log(result[0]);
      //   let thing = {ccb : result}
        // console.log(thing);
      // });


      let data = request.body.ref_no.toUpperCase();
      // data.toUpperCase();
      console.log(data);

      db.search.getAll(data,(error,result) =>{
        if (result === null ) {
            let test = {error : "ERROR, ORDER NOT FOUND"}
            response.render('search',test);
        } else {

        let orderSearch = result[0];
        response.render('search', orderSearch);
        console.log(orderSearch);

        }

      })
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: searchControllerCallback,
    order: searchOrderControllerCallback
  };

}