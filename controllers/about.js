module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let aboutControllerCallback = (request, response) => {
      // db.tweets.getAll((error, result) => {
      //   // console.log(result[0]);
      //   let thing = {ccb : result}
        // console.log(thing);
        response.render('about');
      // });
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: aboutControllerCallback,
  };

}