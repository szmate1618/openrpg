const config = require('./config.js');

const express = require('express');
const db = require('./models');


const app = express();

db.sequelize.sync().then(()=> {

    app.listen(config.port, () => {
        console.log(`Server started on port ${config.port}.`);
    });

});