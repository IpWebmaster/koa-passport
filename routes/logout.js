
exports.post = function*(next) {
  this.logout();
  this.redirect('/');
  // yield* next;
};
