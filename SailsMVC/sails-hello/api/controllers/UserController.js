/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
     create: function (req, res) {
     sails.log('create: ' + req.body);
    User.create(req.body).exec(function(err, user) {
      res.end(JSON.stringify(user));
    });
  },
  
  destroy: function(req, res) {
    User.destroy(req.body).exec(function(err) {
      if(err) {
        res.end("Error: "+err);
      } else {
        res.end("User destroyed.");
      }
    });
  },
  
  index: function(req, res) {
    sails.log('index');
    User.find(function(err, users) {
      console.log(JSON.stringify(users));
      res.view({
        users: users
      });
    });
  }


};

