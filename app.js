import { getStudentsAPI, addStudentAPI } from "./api.js";

// Fields
let localStudents = [];
const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");

// Render the table
const renderTable = (dataArray) => {
    studentTableBody.innerHTML = "";

    if (dataArray.length === 0) {
        studentTableBody.innerHTML = `
            <tr>
                <td colspan="4" class="no-records">No student records found.</td>
            </tr>`;
        return;
    }

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

// Handle form submission
studentForm.addEventListener("submit", (event) => {
    event.preventDefault(); // stop the page from reloading

    const studentData = {
        firstName: document.getElementById("firstName").value.trim(),
        lastName: document.getElementById("lastName").value.trim(),
        email: document.getElementById("email").value.trim()
    };

    if (!studentData.firstName || !studentData.lastName || !studentData.email) {
        alert("All input fields must be filled out.");
        return;
    }

    addStudentAPI(studentData);
    localStudents = getStudentsAPI(); // re-fetch so localStudents includes the new record
    renderTable(localStudents);

    studentForm.reset(); // clear all fields
});

// Start the app
const initApp = () => {
    localStudents = getStudentsAPI();
    renderTable(localStudents);
};



initApp();