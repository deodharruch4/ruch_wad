function registerUser() {
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const city = document.getElementById('city').value;

    if (!name || !username || !email || !phone || !dob || !city) {
        alert('Please fill out all fields.');
        return;
    }

    const userData = { name, username, email, phone, dob, city };

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));

    document.getElementById('registrationForm').reset();
    alert('User registered successfully!');
}

function displayUsers() {
    const userDataList = document.getElementById('userDataList');
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.length === 0) {
        userDataList.innerHTML = '<tr><td colspan="6">No registered users yet.</td></tr>';
        return;
    }

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.dob}</td>
            <td>${user.city}</td>
        `;
        userDataList.appendChild(row);
    });
}

if (document.getElementById('userDataList')) {
    window.onload = displayUsers;
}
