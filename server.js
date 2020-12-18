const express = require('express');
const fileUpload = require('express-fileupload');

const photoRoute = require('./routes/photo');

const app = express();
const port = 5000;


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(fileUpload({ debug: true }));

app.use('/photo', photoRoute);


app.listen(port, () => {
    console.log(`Run server in port: ${port}`);
});
