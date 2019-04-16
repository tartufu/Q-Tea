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
  // const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);

  // app.get('/pokemons', pokemonControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);

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
};