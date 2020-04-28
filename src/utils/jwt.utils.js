const jwt = require('jsonwebtoken')

const sKey = 'parkbob-secretKey'
const expTime = 60 * 60 // in seconds [60 min * 60 sec]

let verifyToken = (req, res, next) => {
    // Get auth header value
    const bearerHeader = req.headers['authorization']
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        // Set the token
        req.token = bearerToken
    } else {
        req.token = null
    }
    // Call next middleware
    next()
}

module.exports = { sKey, expTime, verifyToken }