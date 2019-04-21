module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
   // THIS JUST RENDERS THE SEARCH PAGE
  let testControllerCallback = (request, response) => {
        response.send(request.body);
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: testControllerCallback,
  };

}