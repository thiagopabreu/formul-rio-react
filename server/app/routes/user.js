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
        res.status(400).send(error)
    }
})

router.get('/all', async(req, res) => {
    const user = await User.findAll({})
    try {
        if(user != null) {
            res.json(user)
        } else {
            throw new Error('error')
        }
    } catch (error) {
        res.json({ error: error})
    }
  })

router.get('/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id)
    try {
        if(user != null) {
            res.json(user)
        } else {
            throw new Error('Cannot find the User from this CPF')
        }
    } catch (error) {
        res.json({ error: error })
    }
})



module.exports = router