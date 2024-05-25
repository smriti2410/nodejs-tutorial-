// routes.js
const express = require('express');
const router = express.Router();

// Dummy user data
const users = [
    { id: 1, name: 'smriti1' },
    { id: 2, name: 'smriti2' },
    { id: 3, name: 'smriti3' }
];

// Route for "/"
router.get('/', (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>Welcome to our website!</h1>
                <form action="/create-user" method="POST">
                    <input type="text" name="username" placeholder="Enter username" required />
                    <button type="submit">Create User</button>
                </form>
            </body>
        </html>
    `);
});

// Route for "/users"
router.get('/users', (req, res) => {
    let userList = '<ul>';
    users.forEach(user => {
        userList += `<li>${user.name}</li>`;
    });
    userList += '</ul>';

    res.send(`
        <html>
            <body>
                <h1>User List</h1>
                ${userList}
            </body>
        </html>
    `);
});

// Route for handling form submission
router.post('/create-user', (req, res) => {
    const username = req.body.username;
    console.log('New user:', username);
    res.redirect('/');
});

module.exports = router;
