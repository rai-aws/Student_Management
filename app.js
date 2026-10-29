
import { getStudentsAPI, addStudentAPI } from "./api.js";

// Stores the student records.
let localStudents = [];

// Gets the form and table body elements.
const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");

/**
 * Displays student records in the table.
 * @param {Array} dataArray - The list of students.
 */
const renderTable = (dataArray) => {
    // Clear the existing table rows.
    studentTableBody.innerHTML = "";

    // Show a message if no records exist.
    if (dataArray.length === 0) {
        studentTableBody.innerHTML = `
            <tr>
                <td colspan="4" class="no-records">No student records found.</td>
            </tr>`;
        return;
    }

    // Create a row for each student.
    dataArray.forEach((student, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.email}</td>`;
        studentTableBody.appendChild(row);
    });
};

// Handles form submission.
studentForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload.

    // Get the input values.
    const studentData = {
        firstName: document.getElementById("firstName").value.trim(),
        lastName: document.getElementById("lastName").value.trim(),
        email: document.getElementById("email").value.trim()
    };

    // Check if all fields are filled.
    if (!studentData.firstName || !studentData.lastName || !studentData.email) {
        alert("All input fields must be filled out.");
        return;
    }

    // Add the student and update the table.
    addStudentAPI(studentData);
    localStudents = getStudentsAPI();
    renderTable(localStudents);

    studentForm.reset(); // Clear the form fields.
});

/**
 * Loads and displays the student records.
 */
const initApp = () => {
    localStudents = getStudentsAPI();
    renderTable(localStudents);
};

// Initialize the application.
initApp();
