const adviser = require('./adviser.router');
const commission = require('./commission.router');

function routerApi(app) {
  app.use('/advisers', adviser);
  app.use('/commissions', commission)
}

module.exports = routerApi;