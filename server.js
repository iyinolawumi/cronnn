


const express = require('express');
const app = express();

require('dotenv').config(); // loads credentials
require('./cron/taskJob'); // activates cron

app.listen(4000, () => {
    console.log('Server running on port 4000');
});
