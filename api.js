/**
 * Counter used to avoid duplicate IDs for the initial students
 * created within the same millisecond.
 */
let add = 0;

/**
 * Mock student database containing the initial student records.
 * Date.now() generates a timestamp in milliseconds.
 */
let mockStudentDb = [
    {
        id: Date.now() + add++,
        firstName: "Ry",
        lastName: "Lee",
        email: "rylee@gmail.com"
    },
    {
        id: Date.now() + add++,
        firstName: "Migs",
        lastName: "San",
        email: "Migssan@gmail.com"
    }
];

/**
 * Retrieves all student records from the mock database.
 *
 * @returns {Array<Object>} The list of students.
 */
export function getStudentsAPI() {
    return mockStudentDb;
}

console.log("Initial DB State: ",getStudentsAPI());
console.log("\n");

/**
 * Creates a new student record using the current timestamp,
 * saves it to the mock database, and returns the new record.
 *
 * @param {Object} newStudentData - The student's information.
 * @returns {Object} The newly created student record.
 */
export function addStudentAPI(newStudentData) {
    const student = {
        id: Date.now() + add++,
        ...newStudentData
    };

    // Save the new student in the database.
    mockStudentDb.push(student);

    return student;
}

const addNewStudent = addStudentAPI({
    firstName: "Kurt",
    lastName: "San",
    email: "kurtsan@gmail.com"
});

console.log("Returned Saved Object: ",addNewStudent);
console.log("Updated DB State: ",getStudentsAPI());
