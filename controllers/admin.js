module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let adminLoginControllerCallback = (request, response) => {
      // db.tweets.getAll((error, result) => {
      //   // console.log(result[0]);
      //   let thing = {ccb : result}
        // console.log(thing);
        response.render('login');
        // console.log(request.body);
      // });
  };

    let adminVerifyControllerCallback = (request, response) => {

        let data = {
            username: request.body.username,
            password: request.body.password
        };

        //THIS SECTION VERIFIES ID ADMIN LOGIN IS CORRECT
        db.admin.getAll(data,(error, result) => {

        // });
        if (result === null) {
            response.send('login failure');
        } else if (data.username === result[0].username && data.password === result[0].password) {
            response.cookie('loggedin', true);
            // response.send('logged in')
            response.redirect('admin/tasks');
            cos
        };

      });

  };


    let adminPageControllerCallback = (request, response) => {

        console.log(request.cookies);
        if (request.cookies.loggedin) {
            console.log("LOLOKLOLC");
            db.admin.tasks((error, result) => {

                let data = { ccb: result }
                response.render('admin-page', data);
                console.log(data.pickup_date);
          });
        } else {
                    response.send("ERROR");

        }


  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: adminLoginControllerCallback,
    verify: adminVerifyControllerCallback,
    adminpage: adminPageControllerCallback
  };

}