exports.get = function*(next) {
  this.body = this.render('registration');
};

exports.post = function*(next) {
  this.body = this.render('registration');
};
