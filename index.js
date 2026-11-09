// bring in express
import express from 'express'

// create the express app 
const app = express();

// serve static files using a built-in middleware
app.use(express.static('./public'));

// setup a GET request
app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

// listen for incoming requeusts
app.listen(3000, () => {
    console.log('Server running on port: 3000')
});