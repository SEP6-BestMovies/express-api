const express = require('express');
const app = express();
const hostname = "0.0.0.0";
const port = 3000;
// apply json middleware for processeing req body
app.use( express.json() )

app.get("/", (req, res) => {
    res.send("Running Express JS in a Docker container");
});

app.get('/movie', (req, res) => {
    res.status(200).send({
        movie: 'action',
        title: 'My movie title'
    })
});

app.post('/movie/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    if (!title) {
        res.status(418).send({ message: 'We need a title!' })
    }

    res.send({
        movie: `tshirt with ID: ${id} and logo ${title}`,
    });
});

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});