const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

const Task = require('../models/task')
const User = require('../models/user')

const { sKey, verifyToken } = require('../utils/jwt.utils')

router.get('/', verifyToken, (req, res) => {
    jwt.verify(req.token, sKey, async (err, authData) => {
        if (err) {
            res.sendStatus(401)
        } else {
            const psw = Buffer.from(authData.password.data)
            const data = { email: authData.email, password: psw }

            const user = await User.findOne(data)
            const owner = user._id

            const tasks = await Task.find({owner})
            res.json(tasks)
        }
    })
})

router.get('/:id', verifyToken, (req, res) => {
    jwt.verify(req.token, sKey, async (err, authData) => {
        if (err) {
            res.sendStatus(401)
        } else {
            const task = await Task.findById(req.params.id)
            res.json(task)
        }
    })
})

router.post('/', verifyToken, (req, res) => {
    jwt.verify(req.token, sKey, async (err, authData) => {
        if (err) {
            res.sendStatus(401)
        } else {
            const psw = Buffer.from(authData.password.data)
            const data = { email: authData.email, password: psw }

            const user = await User.findOne(data)
            const owner = user._id

            const { title, description} = req.body
            const newTask = new Task({ title, description, owner })
            await newTask.save()
            res.json({ status: 'Todo added' })
        }
    })
})

router.put('/:id', verifyToken, (req, res) => {
    jwt.verify(req.token, sKey, async (err, authData) => {
        if (err) {
            res.sendStatus(401)
        } else {
            const { title, description } = req.body
            try {
                await Task.findByIdAndUpdate(req.params.id, { title, description })
                res.json({ status: 'Todo updated' })
            } catch (exception) {
                res.json({ status: 'Nothing to update' })
            }
        }
    })
})

router.delete('/:id', verifyToken, (req, res) => {
    jwt.verify(req.token, sKey, async (err, authData) => {
        if (err) {
            res.sendStatus(401)
        } else {
            try {
                await Task.findByIdAndDelete(req.params.id)
                res.json({ status: 'Todo deleted' })
            } catch(error) {
                res.json({ status: 'Nothing to delete' })
            }
        }
    })
})

module.exports = router