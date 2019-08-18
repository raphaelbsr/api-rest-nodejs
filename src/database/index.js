const mongoose = require('mongoose');

mongoose.createConnection('mongodb://localhost/noderest', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;