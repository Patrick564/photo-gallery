require('dotenv').config();
const AWS = require('aws-sdk');
const router = require('express').Router();

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});


router.get('/', async (req, res, next) => {
    let img = 'https://photo-gallery-heroku.s3.us-east-2.amazonaws.com/661658.png';
    let data;
    let params = {
        Bucket: 'photo-gallery-heroku',
    }

    try {
        data = await s3.listObjectsV2(params).promise();
    } catch (error) {
        next(error);
    }

    res.render('index', { img: img, others: data.Contents });
});

router.post('/', async (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.json({
            message: 'Error, select an image'
        });
    }

    let photo = req.files.photo;
    let params = {
        Bucket: 'photo-gallery-heroku',
        Key: photo.name,
        Body: photo.data,
    };

    try {
        await s3.upload(params).promise();
    } catch (error) {
        next(error);
    }

    res.json({
        status: 'Uploaded successfully',
        name: photo.name,
    });
});

// router.delete();


module.exports = router;
