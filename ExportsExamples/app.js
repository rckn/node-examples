function Greetr() {
  this.greet = function() {
    console.log("I Greet you!");
  };
  this.secret;
}

module.exports = new Greetr();
