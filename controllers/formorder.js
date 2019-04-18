module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let formOrderControllerCallback = (request, response) => {
      // db.tweets.getAll((error, result) => {
      //   // console.log(result[0]);
      //   let thing = {ccb : result}
        // console.log(thing);
        // console.log(request.body);
        data = request.body;
        response.render('formorder', data);
      // });
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: formOrderControllerCallback,
  };

}