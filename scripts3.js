// Simulated database for demo purposes
const database = {
    studentProfile: {
        name: 'John Doe',
        photo: 'path/to/photo.jpg',
        contact: 'johndoe@example.com, (123) 456-7890',
        courses: 'Math, Science, History',
        grades: 'A, B+, A-',
        attendance: '95%'
    },
    students: [
        { name: 'Alice Johnson', department: 'Science', year: 'Sophomore' },
        { name: 'Bob Smith', department: 'Math', year: 'Senior' },
        // Add more student records here
    ],
    advisors: [
        { name: 'Dr. Brown', email: 'brown@example.com', phone: '(123) 456-7891' },
        { name: 'Prof. Green', email: 'green@example.com', phone: '(123) 456-7892' },
        // Add more advisor records here
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    loadStudentProfile();
    loadAdvisors();
});

function loadStudentProfile() {
    const profile = database.studentProfile;
    document.getElementById('profile-photo').src = profile.photo;
    document.getElementById('profile-name').textContent = `Name: ${profile.name}`;
    document.getElementById('profile-contact').textContent = `Contact: ${profile.contact}`;
    document.getElementById('profile-courses').textContent = `Courses: ${profile.courses}`;
    document.getElementById('profile-grades').textContent = `Grades: ${profile.grades}`;
    document.getElementById('profile-attendance').textContent = `Attendance: ${profile.attendance}`;
}

function searchStudents() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const results = database.students.filter(student => 
        student.name.toLowerCase().includes(query) ||
        student.department.toLowerCase().includes(query) ||
        student.year.toLowerCase().includes(query)
    );
    displaySearchResults(results);
}

function displaySearchResults(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';
    results.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `${student.name} - ${student.department}, ${student.year}`;
        resultsContainer.appendChild(li);
    });
}

function loadAdvisors() {
    const advisors = database.advisors;
    const advisorsContainer = document.getElementById('advisor-list');
    advisors.forEach(advisor => {
        const li = document.createElement('li');
        li.innerHTML = `${advisor.name} - <a href="mailto:${advisor.email}">${advisor.email}</a>, <a href="tel:${advisor.phone}">${advisor.phone}</a>`;
        advisorsContainer.appendChild(li);
    });
}
