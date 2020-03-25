const { Router } = require('express');
const indexRouter = Router();
const Controller = require('../controllers/Controller');
indexRouter.get('/', Controller.goToLogInPage);
indexRouter.get('/login', Controller.goToLogInPage);
indexRouter.post('/login', Controller.logIn);
indexRouter.get('/signUp', Controller.goToSignUpPage);
indexRouter.post('/signUp', Controller.signUp);
indexRouter.get('/gallery?', Controller.showGallery);
indexRouter.post('/gallery/image/add?', Controller.addImage);
indexRouter.get('/gallery/image/:id/?', Controller.showImage);
indexRouter.post('/gallery/image/vote/:id/?', Controller.rateImage);
//add settings menu:
    //edit username/password
    //delete accout
module.exports = indexRouter;