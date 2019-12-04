const routes = require('express').Router();

// Controllers
const CoursesController = require('./app/controllers/CoursesController');
const SessionsController = require('./app/controllers/SessionController');

const authMiddleware = require('./app/middlewares/auth');

routes.post('/sessions', SessionsController.login)
routes.post('/sessions/register', SessionsController.register)

// Authenticate's routes only
routes.use(authMiddleware);
routes.get('/courses', CoursesController.list);

module.exports = routes;
