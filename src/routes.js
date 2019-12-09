const routes = require('express').Router();

// Controllers
const CoursesController = require('./app/controllers/CoursesController');
const SessionsController = require('./app/controllers/SessionController');

const authMiddleware = require('./app/middlewares/auth');

routes.post('/sessions', SessionsController.login)
routes.post('/sessions/register', SessionsController.register)

// Authenticate's routes only
routes.use(authMiddleware);
routes.post('/sessions/me', SessionsController.me);
routes.get('/courses', CoursesController.list);
routes.get('/courses/:id', CoursesController.listOne);
routes.get('/taxas', CoursesController.taxa)

module.exports = routes;
