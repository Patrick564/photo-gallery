require('dotenv').config();
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const router = require('express').Router();

const S3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});


router.get('/', async (req, res, next) => {
    let url = 'https://photo-gallery-heroku.s3.us-east-2.amazonaws.com/';
    let data;
    let params = {
        Bucket: 'photo-gallery-heroku',
    }

    try {
        data = await S3.listObjectsV2(params).promise();
    } catch (error) {
        next(error);
    }

    res.render('index', { url, content: data.Contents });
});

router.post('/', async (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.redirect('/');
    }

    let photo = req.files.photo;
    let params = {
        Bucket: 'photo-gallery-heroku',
        Key: photo.name,
        Body: `${uuidv4()}-${photo.data}`,
    };

    try {
        await S3.upload(params).promise();
    } catch (error) {
        next(error);
    }

    res.redirect('/');
});

router.post('/delete', async (req, res, next) => {
    let file = req.body.file;
    let params = {
        Bucket: 'photo-gallery-heroku',
        Key: file,
    };

    try {
        await S3.deleteObject(params).promise();
    } catch (error) {
        next(error);
    }

    res.redirect('/');
});


module.exports = router;
