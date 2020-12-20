const express = require('express');
const fileUpload = require('express-fileupload');

const photoRoute = require('./routes/photo');

const app = express();
const port = 5000;


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());

app.get('/', (req, res) => { res.redirect('/') });
app.use('/photo', photoRoute);


app.listen(port, () => {
    console.log(`Run server in port: ${port}`);
});
