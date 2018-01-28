const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();



app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT);
})