var mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/expressdb');

mongoose.connect('mongodb+srv://express22:L40cMsDF3b6nlB8r@expressdb.1qng9ug.mongodb.net/expressdb?retryWrites=true&w=majority');

var mongoosedb = module.exports = mongoose;

