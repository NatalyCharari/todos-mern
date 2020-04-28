const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

const User = require('../models/user')
const { sKey, expTime } = require('../utils/jwt.utils')
const { encrypt } = require('../utils/crypto.utils')

router.get('/', async (req, res) => {
    const users = await User.find()
    res.json(users)
})

router.delete('/', async (req, res) => {
    await User.remove({})
    res.json({ status: 'All users removed' })
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const data = { email: email, password: encrypt(password) }
    const user = await User.findOne(data)

    if (user) {
        jwt.sign(data, sKey, { expiresIn: expTime }, (err, token) => {
            res.json({token})
        })
    } else {
        res.sendStatus(404)
    }
})

router.post('/signup', (req, res) => {
    const { email, password } = req.body
    const data = { email: email, password: encrypt(password) }

    jwt.sign(data, sKey, { expiresIn: expTime }, async (err, token) => {
        const newUser = new User(data)
        await newUser.save()

        res.json({token})
    })
})

module.exports = router