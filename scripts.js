document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Simulated database check
    const user = validateCredentials(username, password, role);

    if (user) {
        redirectUser(role);
    } else {
        document.getElementById('error-message').textContent = 'Incorrect username or password';
    }
});

function validateCredentials(username, password, role) {
    const users = {
        student: { username: 'student1', password: 'password1' },
        faculty: { username: 'faculty1', password: 'password2' },
        administrator: { username: 'admin1', password: 'password3' }
    };

    return users[role] && users[role].username === username && users[role].password === password;
}

function redirectUser(role) {
    if (role === 'student') {
        window.location.href = 'dashboard_student.html';
    } else if (role === 'faculty') {
        window.location.href = 'dashboard_faculty.html';
    } else if (role === 'administrator') {
        window.location.href = 'dashboard_admin.html';
    }
}
