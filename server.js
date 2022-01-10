const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/profile.html'));
})

app.get('/recipes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/blog.html'));
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
})