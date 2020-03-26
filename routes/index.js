const { Router } = require('express');
const indexRouter = Router();

// controller
const Controller = require('../controllers/Controller');


indexRouter.get('/home?', Controller.showGallery);
indexRouter.get('/upload?', Controller.showUpload)
indexRouter.get('/gallery/image/:id/?', Controller.showImage);

// upload
indexRouter.post('/gallery/image/add?', Controller.addImage);
indexRouter.post('/gallery/image/vote/:id/?', Controller.rateImage);

//add settings menu:
//edit username/password
//delete accout
module.exports = indexRouter;