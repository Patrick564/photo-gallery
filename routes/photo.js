const router = require('express').Router();


router.get('', async (req, res) => {
    // res.json({
    //     'message': 'Hi'
    // });

    res.render('index');
});

// router.post();

// router.delete();


module.exports = router;
