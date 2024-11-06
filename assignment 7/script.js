
const userForm = document.getElementById('userForm');
const userList = document.getElementById('userList');

userForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    // send the data to API
    const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, age })
    });
    const newUser = await response.json();

    // update the UI
    addUserToUI(newUser);

    userForm.reset();
});

// fetch and display users from API
async function fetchUsers() {
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();
    users.forEach(addUserToUI);
}

function addUserToUI(user, index) {
    const userItem = document.createElement('div');
    userItem.className = 'user-item';
    userItem.innerHTML = `
        <span>${user.name} (${user.age})</span>
        <button onclick="deleteUser(${index})">Delete</button>
    `;
    userList.appendChild(userItem);
}

// delete user from API and UI
async function deleteUser(index) {
    await fetch(`http://localhost:3000/users/${index}`, { method: 'DELETE' });
    userList.innerHTML = '';
    fetchUsers(); // Refresh the list
}

// initial fetch of users when the page loads
fetchUsers();
