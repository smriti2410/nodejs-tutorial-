const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.urlencoded({ extended: true }));

// Dummy user data
const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' }
];

// Route for "/"
app.get('/', (req, res) => {
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
app.get('/users', (req, res) => {
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
app.post('/create-user', (req, res) => {
    const username = req.body.username;
    console.log('New user:', username);
    res.redirect('/');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
