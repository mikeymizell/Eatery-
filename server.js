const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('./index.html');
})

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
})