// index.js
const express = require('express');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100 
});
app.use(limiter);

// "database" for users (for simplicity)
const users = [];

// Routes
app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const { name, age } = req.body;
    if (!name || !age) {
        return res.status(400).json({ error: 'Name and age are required' });
    }
    const user = { name, age };
    users.push(user);
    res.status(201).json(user);
});

app.delete('/users/:index', (req, res) => {
    const { index } = req.params;
    if (index < 0 || index >= users.length) {
        return res.status(404).json({ error: 'User not found' });
    }
    users.splice(index, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
