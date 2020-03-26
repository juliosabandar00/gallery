const { Router } = require('express');
const indexRouter = Router();

// controller
const Controller = require('../controllers/Controller');

// home after sign in
indexRouter.get('/home?', Controller.showGallery);

// view image
indexRouter.get('/upload?', Controller.showUpload)

// galery
indexRouter.get('/gallery/image/:id/?', Controller.showImage);



// upload
indexRouter.post('/gallery/image/add?', Controller.addImage);
indexRouter.post('/gallery/image/vote/:id/?', Controller.rateImage);

//add settings menu:
//edit username/password
//delete accout
module.exports = indexRouter;