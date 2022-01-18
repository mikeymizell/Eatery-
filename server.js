const express = require('express');
const path = require('path');

const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

// app.get('/profile', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/profile.html'));
// })

// app.get('/recipe-maker', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/recipe.html'))
// })

// app.get('/recipes', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/blog.html'));
// })

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
})