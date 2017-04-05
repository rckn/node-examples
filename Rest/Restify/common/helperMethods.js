// Helper function to find an object in an array and 
// remove the object from the array at the same time
function searchAndRemove(nameKey, myArray, propertyName) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i][propertyName] === nameKey) {
            return myArray.splice(i, 1);
        }
    }
}

// Helper function to find an object in an array and 
// remove the object from the array at the same time
function findAndReplace(obj, myArray) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].id === Number(obj.id)) {
            myArray[i] = obj;
        }
    }
}

module.exports = {
    searchAndRemove,
    findAndReplace
}