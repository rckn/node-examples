module.exports = (function PersonModule() {
    function calcRealAge(gender,age) {
        if (gender === 'female') return age + 10;
        return age;
    }

    return {
        personApi: {
            getPerson : (age, gender) => {
                return {
                    "Name": 'Jane',
                    "Gender": gender,
                    "Age": calcRealAge(gender,age)
                }
            }
        }
    }
}());