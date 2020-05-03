const crypto = require('crypto')
const algorithm = 'aes-256-ccm'
const password = 'jhaiuyabJKHSAU'

let encrypt = data => {
    try {
        let cipher = crypto.createCipher(algorithm, password, { authTagLength: 16 })
        let buffer = Buffer.from(JSON.stringify(data), "utf8")
        return Buffer.concat([cipher.update(buffer), cipher.final()])
    } catch (exception) {
        throw new Error(exception.message)
    }
}

let decrypt = data => {
    try {
        let decipher = crypto.createDecipher(algorithm, password, { authTagLength: 16 })
        let buffer = Buffer.from(data)
        let decrypted = Buffer.concat([decipher.update(buffer), decipher.final()])
        return JSON.parse(decrypted.toString())
    } catch (exception) {
        throw new Error(exception.message)
    }
}

module.exports = { encrypt, decrypt }