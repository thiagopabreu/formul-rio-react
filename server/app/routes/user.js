var express = require('express')
var router = express.Router()
const User = require('../models/userMode/index')

router.post('/register', async (req, res) => {
    const { name, cpf, email, isWorking} = req.body
    const user = new User({name, cpf, email, isWorking})

    try {
        await user.save()
        res.json(user)
    } catch (error) {
        res.json({ error: error })
    }
})

router.get('/:id', (req, res) => {
    res.status(200).json({message: 'funcionou'})
})

module.exports = router