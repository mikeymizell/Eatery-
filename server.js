const express = require('express');
const path = require('path');

const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/profile.html'));
})

app.get('/recipe-maker', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/recipe.html'))
})

app.get('/recipes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/blog.html'));
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
})