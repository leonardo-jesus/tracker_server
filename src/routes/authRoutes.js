const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res, next) => {
    // console.log(req.body);
    const { email, password } = req.body;
    try {
        const user = new User({ email, password });
        await user.save();
        // res.send(user);
    } catch (err){
        console.log(err)
        res.status(422).send({error:"i got an error"});
    }
});

module.exports = router;