
/**
 * Counter used to avoid duplicate IDs for the initial students
 * created within the same millisecond.
 */
let addOne = 0;

/**
 * Mock student database containing the initial student records.
 * Date.now() generates a timestamp in milliseconds.
 */
let mockStudentDb = [
    // {
    //     id: Date.now() + addOne++,
    //     firstName: "Ry",
    //     lastName: "Lee",
    //     email: "rylee@gmail.com"
    // },
    // {
    //     id: Date.now() + addOne++,
    //     firstName: "Migs",
    //     lastName: "San",
    //     email: "Migssan@gmail.com"
    // }
];

/**
 * Retrieves all student records from the mock database.
 *
 * @returns {Array<Object>} The list of students.
 */
export function getStudentsAPI() {
    return [...mockStudentDb]
}

/**
 * Creates a new student record using the current timestamp,
 * saves it to the mock database, and returns the new record.
 *
 * @param {Object} newStudentData - The student's information.
 * @returns {Object} The newly created student record.
 */
export function addStudentAPI(newStudentData) {
    const student = {
        id: Date.now() + 1,
        ...newStudentData
    };

    // Save the new student in the database.
    mockStudentDb.push(student);

    return student;
}
