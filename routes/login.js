
var passport = require('koa-passport');

exports.post = function*(next) {
  var ctx = this;

  var middleware = passport.authenticate('local', function* (err, user, info) {
    if (err) {
      ctx.status =500;
      ctx.body = info;
    }

    if (!user) {
      ctx.status = 401;
      ctx.body = info;
    }

    yield ctx.login(user);
    ctx.body = {user: {
      email: user.email
    }};
  });

  yield* middleware.call(this, next);
};
