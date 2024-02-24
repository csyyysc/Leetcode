/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
    let eats = 0;

    while (students.length > 0 && students.includes(sandwiches[0])) {
        const prefer = students.shift();
        if (prefer === sandwiches[0]) {
            sandwiches.shift();
        } else {
            students.push(prefer);
        }
    }

    return students.length - eats;
};
