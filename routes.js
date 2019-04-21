module.exports = (app, allModels) => {



  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller

  // THIS ROUTE IS THE HOMEPAGE
  const homepageCallbacks = require('./controllers/homepage') (allModels);
  app.get('/', homepageCallbacks.index);

  // THIS ROUTE IS THE LOGIN FOR ADMIN
  const adminLoginCallbacks = require('./controllers/admin') (allModels);
  app.get('/admin', adminLoginCallbacks.index);
  app.post('/admin', adminLoginCallbacks.verify);

  // THIS ROUTE IS THE ADMIN BACKEND PAGE
  const adminPageCallbacks = require('./controllers/admin') (allModels);
  app.get('/admin/tasks', adminPageCallbacks.adminpage);
  app.get('/admin/master', adminPageCallbacks.masterlist);

  // THIS ROUTE UPDATES FROM BACKEND
  const adminUpdateCallbacks = require('./controllers/adminupdate') (allModels);
  // app.post('/admin/update', adminUpdateCallbacks.index);
  app.post('/admin/payment', adminUpdateCallbacks.payment);
  app.post('/admin/nopayment', adminUpdateCallbacks.noPayment);
  app.post('/admin/fulfill', adminUpdateCallbacks.fulfill);
  app.post('/admin/cancel', adminUpdateCallbacks.cancel);


  // THIS ROUTE SHOWS YOUR ORDER
  const orderSearchCallbacks = require('./controllers/search') (allModels);
  app.get('/search', orderSearchCallbacks.index);
  app.post('/search', orderSearchCallbacks.order);

  //THIS ROUTE SHOWS ABOUT US PAGE
  const aboutCallbacks = require('./controllers/about') (allModels);
  app.get('/about', aboutCallbacks.index);

  //THIS ROUTE SHOWS CONTACT PAGE
  const contactCallbacks = require('./controllers/contact') (allModels);
  app.get('/contact', contactCallbacks.index);


  // THIS FORM TRACKS THE ORDERS FROM HOMEPAGE
  const formOrderCallbacks = require('./controllers/formorder') (allModels);
  app.post('/formorder', formOrderCallbacks.index);
  app.get('/formorder', formOrderCallbacks.index);

  // THIS FORM SHOWS CONFIRMATION ORDER
  const receiptCallbacks = require('./controllers/receipt') (allModels);
  app.post('/formorder/receipt', receiptCallbacks.index);

    // THIS FORM SHOWS USER LOGIN
  const userLoginCallbacks = require('./controllers/userlogin') (allModels);
  app.get('/userlogin', userLoginCallbacks.index);
  app.post('/userlogin', userLoginCallbacks.verify);

  const testCallbacks = require('./controllers/test') (allModels);
  app.post('/test', testCallbacks.index);
};