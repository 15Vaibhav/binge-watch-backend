const express = require('express');
const appRouter = express.Router();

const MovieController = require('../base/controllers/movieController');

appRouter.get('/getAllCartItem', MovieController.GET_ALL_MOVIES);
appRouter.post('/addToCart',MovieController.SAVE_TO_CART);
appRouter.patch('/changeStatus',MovieController.CHANGE_STATUS);

module.exports = appRouter;
