require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');

const photoRoute = require('./routes/photo');

const app = express();
const port = process.env.PORT || 5000;


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

app.get('/', (req, res) => res.redirect('/photo') );
app.use('/home', photoRoute);


app.listen(port, () => {
    console.log(`Run server at port: ${port}`);
});
