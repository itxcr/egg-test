'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.index);
  router.get('/newscontent', controller.news.content);
  router.post('/add', controller.home.add);
  router.get('/logout', controller.home.logOut);
  router.get('/test', controller.home.testSession);



};
