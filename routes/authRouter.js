const authRouter = require('express').Router();
const AuthController = require('../controllers/AuthController');

authRouter.get('/', AuthController.goToLogInPage);
authRouter.get('/login', AuthController.goToLogInPage);
authRouter.post('/login', AuthController.login);
authRouter.use((req, res, next) => {
  if (req.session.user) {
    next()
  } else {
    res.redirect('/login/?err=you need to log in')
  }
})
authRouter.get('/home', (req, res) => {
  res.render('home')
})
authRouter.get('/logout', AuthController.logout)

authRouter.get('/signUp', AuthController.goToSignUpPage);
authRouter.post('/signUp', AuthController.signUp);

module.exports = authRouter;