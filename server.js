require('dotenv').config();
const express = require('express');
const app = express();
const  router  = require('./routes.js');
const bodyParser = require('body-parser');
const PORT = process.env.PORT;
const cors = require('cors');

app.use(cors({ origin: 'http://127.0.0.1:3001' }));
app.use(express.json());
app.use(bodyParser.json());
app.use('/', router);


app.listen(PORT, console.log(`Listening on port ${PORT}`));