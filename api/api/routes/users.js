module.exports = app => {
  const controller = app.controllers.users;

  app.route('/api/v1/donators')
    .get(controller.listDonators);

  app.route('/api/v1/institutions')
    .get(controller.listInstitutions);

  app.route('/api/v1/authenticate')
    .post(controller.authenticate);

  app.route('/api/v1/users')
    .get(controller.list)
    .post(controller.register);

  app.route('/api/v1/user/:id')
    .put(controller.update);

  app.route('/api/v1/user/:email')
    .get(controller.getUser);
};