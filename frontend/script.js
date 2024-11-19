document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const phone = document.getElementById('phone').value;

    const data = {
        name: name,
        email: email,
        dateOfBirth: dob,
        phone: phone
    };

    // Send POST request to backend
    fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        alert('User registered successfully!');
        loadUsers(); // Reload the user list
    })
    .catch(error => console.error('Error:', error));
});

// Function to load registered users
function loadUsers() {
    fetch('http://localhost:3000/api/register')
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('user-list');
            userList.innerHTML = ''; // Clear the list before adding new data
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `Name: ${user.Name}, Email: ${user.Email}, Date of Birth: ${user.DateOfBirth}, Phone: ${user.Phone}`;
                userList.appendChild(li);
            });
        })
        .catch(error => console.error('Error:', error));
}

// Load the users on page load
loadUsers();
