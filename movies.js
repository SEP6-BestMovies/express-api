// the api is represented by a package import which is a func
const express = require('express');
const app = express();
const PORT = 8080;

// apply json middleware for processeing req body
app.use( express.json() )

app.get('/movie', (req, res) => {
    res.status(200).send({
        id: '1234',
        category: 'action'
    })
});

app.post('/movie/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    if (!title) {
        res.status(418).send({ message: 'We need a logo!' })
    }

    res.send({
        movie: `movie with ID: ${id} and title ${title}`,
    });
});

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
);
