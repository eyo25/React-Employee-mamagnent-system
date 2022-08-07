const express = require('express');
const connectDB = require('./config/db');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));

// Connect Database
connectDB();
//call Employee
app.use(express.json())
app.use('/api/Employee',   require('./routs/api/Employee'))
app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));