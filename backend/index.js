const config = require('./config.js');

const express = require('express');
const app = express();

app.use(express.json());

const db = require('./models');

//Routers
const userRouter = require('./routes/Users');
app.use('/users', userRouter);

db.sequelize.sync().then(()=> {

    app.listen(config.port, () => {
        console.log(`Server started on port ${config.port}.`);
    });

});
