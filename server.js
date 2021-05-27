const express = require('express');
const mongoose = require('mongoose');
const items = require('./routes/api/items');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const db = require('./config/keys').mongoURI;

mongoose
        .connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
          })
        .then( ()=> console.log('MongoDB connected ...'))
        .catch(err=> console.log(err));

app.use('/api/items',items);

const port = process.env.PORT || 5000 ; 

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
