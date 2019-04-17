module.exports = (app, allModels) => {



  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
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

};