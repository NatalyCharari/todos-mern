const mongoose = require('mongoose')

const URI = 'mongodb://localhost/bob-tasks'
const OPTIONS = { useNewUrlParser: true, useFindAndModify: false }

mongoose.connect(URI, OPTIONS)
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))

module.exports = mongoose