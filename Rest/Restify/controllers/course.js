const { searchAndRemove, findAndReplace } = require('../common/helperMethods');
const groupsController = require('./groups')();

module.exports = () => {
    var counter = 0;
    // fake objects
    courses = [
        {
            id: counter++,
            name: 'Node.js',
            numberOfStudents: 23
        }
    ]

    var createCourse = course => {
          // usually it is the databae that gives obejcts an id, not our code.
                course.id = counter++;
                courses.push(course);
                return course.id;
    }

    return {
        api : {
            get: (id) => { return courses[id] },
            post: createCourse,
            put: (course) => { findAndReplace(course, courses) },
            delete: (id) => { return searchAndRemove(id, courses,'id') },
            getGroups: groupsController.api.getGroupsByCourse
        }
    }
}