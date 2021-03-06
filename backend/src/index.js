const express = require('express');
const routes = require('./routes');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);
app.use('/static', express.static('uploads'));

app.listen(3333, () => {
    console.log("##################################");
});