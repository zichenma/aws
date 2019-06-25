// https://www.youtube.com/watch?v=F_fQuIDaqL8
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());

require('./route')(app);


app.listen(3000, () => {
    console.log('prot 3000');
})