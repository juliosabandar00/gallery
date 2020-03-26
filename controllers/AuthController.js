const { User } = require('../models');
const { Op } = require('sequelize')

class AuthController {
  static goToLogInPage(req, res) {
    let error = req.query.err
    res.render('login', { error: error });
  }

  static login(req, res) {
    User.findOne(
      {
        where: {
          [Op.and]: [
            { username: req.body.username },
            { password: req.body.password }
          ]
        }
      })
      .then(data => {
        if (data) {
          req.session.user = data.username;
          console.log(req.session.user)
          res.redirect('/home')
        } else {
          res.redirect(`/login/?err=account not found`)
        }
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static logout(req, res) {
    req.session.destroy(err => {
      if (err) {
        res.send(err)
      } else {
        res.redirect('/')
      }
    })
  }

  static goToSignUpPage(req, res) {
    res.render('signup');
  }
  static signUp(req, res) {
    // console.log('test')
    let newUser = req.body;
    // console.log(newUser)
    User.create(newUser).then(() => {
      return User.findAll({ where: { username: newUser.username } })
      // .then((user) => {
      //   //automatically redirects to libary after sign-up
      //   res.redirect('/gallery?userid=' + user[0].id)

      // })
    })
      .then(user => {
        res.redirect('/')
      })
      .catch((err) => {
        throw err;
      });
  }
}

module.exports = AuthController