// TODO: Make sure name of user is unique. Either in mongoDB, mongo schema or in app logic

module.exports = (user) => {
    const userInject = (req, res, next) => {
        const id = req.params.userId;
        user.findById(id, (err, user) => {
            if (err) return console.log(err);
            console.log(user);
            req.user = user;
            next();
        })
    }

    const getUser = (req, res, next) => {
        res.json(req.user);
    }

    const getAllUsers = (req, res, next) => {
        user.find({}, function (err, users) {
            if (err) return console.log(err);
            res.json(users);
        });
    }

    const replaceUser = (req, res, next) => {
        
        const userFromDB = req.user;
        const userFromRequest = req.body;

        userFromDB.name = userFromRequest.name;
        userFromDB.password = userFromRequest.password;
        userFromDB.admin = userFromRequest.admin;

        saveUser(userFromDB, res);
    }

    const createUser = (req, res, next) => {
        const userObj = user({
            name: req.body.name,
            password: req.body.password,
            admin: req.body.admin
        })
        saveUser(userObj, res);
    }

    const deleteUser = (req, res, next) => {
        req.user.remove((err, user) => {
            if(err) {
                res.status(500).send(err);
            } else {
                res.status(200).json({ _id : req.user._id })
            }

        })
    }

    const updateUser = (req, res, next) => {
           if (req.body._id) {
            // delete vs null: 
            // http://stackoverflow.com/questions/1947995/when-should-i-use-delete-vs-setting-elements-to-null-in-javascript
            delete req.body._id;
        }

        for (var p in req.body) {
            req.user[p] = req.body[p];
        }

        req.user.save(function (err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(req.user);
            }
        });
    }

    const saveUser = (userObj, res) => {
        userObj.save((err, user) => {
            if (err) {
                res.status(500)
                    .send('Failed. Error: ' + err);
            } else {
                res.status(201);
                // Give back the id of the newly created userobject
                // to the user of the rest api
                res.json({ _id: userObj._id });
            }
        })
    }

    return {
        getAllUsers,
        createUser,
        getUser,
        replaceUser,
        deleteUser,
        updateUser,
        userInject
    }
}