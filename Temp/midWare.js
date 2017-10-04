// class Middleware {
//   use(fn) {
//     this.go = (stack => next => stack(() => fn.call(this, next.bind(this))))(
//       this.go
//     );
//   }
//   go(next) {
//     next();
//   }
// }

var Middleware = function() {};

Middleware.prototype.use = function(fn) {
  var self = this;

  this.go = (function(stack) {
    return function(next) {
      stack.call(self, function() {
        fn.call(self, next.bind(self));
      });
    }.bind(this);
  })(this.go);
};

Middleware.prototype.go = function(next) {
  next();
};

var middleware = new Middleware();

middleware.use(function(next) {
  var self = this;
  setTimeout(function() {
    self.hook1 = "one";
    next();
  }, 10);
});

middleware.use(function(next) {
  var self = this;
  setTimeout(function() {
    self.hook2 = "two";
    next();
  }, 10);
});

var start = new Date();
middleware.go(function() {
  console.log(this.hook1); // true
  console.log(this.hook2); // true
  console.log(new Date() - start); // around 20
});
