'use strict';

exports.get = function*(next) {
  this.body = this.render('registration');
};

exports.post = function*(next) {
  let User = require('../models/user');
  let body =  this.request.body;
  let userInfo;

  if (body.password === body.passwordConfirm) {
    userInfo = yield User.create({
      email: body.email,
      password: body.password,
      displayName: 'mk'
    });

    this.body = {
      success: true,
      message: 'Пользователь успешно зарегестирован'
    };
  } else {
    this.body = {
      success: false,
      message: 'Пароли не совпадают'
    };
  }

};
