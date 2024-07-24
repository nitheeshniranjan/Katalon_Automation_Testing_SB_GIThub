document.addEventListener('DOMContentLoaded', function() {
    loadStudentProfile();
    loadAdvisors();
    loadClassList();
    setupProfileUpdateForm();
});

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
    ],
    facultyProfile: {
        officeHours: 'Mon-Fri 10am-12pm',
        contactEmail: 'faculty@example.com',
        contactPhone: '(123) 456-7893'
    },
    classList: [
        { photo: 'path/to/photo1.jpg', name: 'Student One', contact: 'student1@example.com' },
        { photo: 'path/to/photo2.jpg', name: 'Student Two', contact: 'student2@example.com' },
        // Add more class list records here
    ]
};

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

function loadClassList() {
    const classList = database.classList;
    const classListContainer = document.getElementById('class-list');
    classList.forEach(student => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td><img src="${student.photo}" alt="${student.name}'s photo" class="class-list-photo"></td>
                        <td>${student.name}</td>
                        <td>${student.contact}</td>`;
        classListContainer.appendChild(tr);
    });
}

function setupProfileUpdateForm() {
    const profile = database.facultyProfile;
    document.getElementById('office-hours').value = profile.officeHours;
    document.getElementById('contact-email').value = profile.contactEmail;
    document.getElementById('contact-phone').value = profile.contactPhone;

    document.getElementById('profileUpdateForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const officeHours = document.getElementById('office-hours').value;
        const contactEmail = document.getElementById('contact-email').value;
        const contactPhone = document.getElementById('contact-phone').value;

        // Update the simulated database
        database.facultyProfile.officeHours = officeHours;
        database.facultyProfile.contactEmail = contactEmail;
        database.facultyProfile.contactPhone = contactPhone;

        document.getElementById('update-message').textContent = 'Profile updated successfully';
    });
}
