module.exports = () => {
    var counter = 0;
    // fake objects
    groups = [
        {
            id: counter++,
            courseId: 0,
            name: 'Web dev group 1',
            maxCapacity: 4,
            numberOfStudents: 3
        },
         {
            id: counter++,
            courseId: 0,
            name: 'Web dev group 2',
            maxCapacity: 0,
            numberOfStudents: 0
        }
    ]

    var getGroupsByCourse = function(courseId) {
        var groupsByCourse = [];
        groups.forEach(group => {
            if (group.courseId === courseId) {
                groupsByCourse.push(group);
            }
        })
        return groupsByCourse
    }

    return {
        api: {
            get: (id) => { return groups[id] },
            getGroupsByCourse: getGroupsByCourse
        }
    }
}