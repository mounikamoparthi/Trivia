const mongoose = require('mongoose');

const TriviaSchema = new mongoose.Schema({
    question: {type: String},
    correctans: {type: String},
    fake1: {type: String},
    fake2: {type: String}
}, {timestamps: true});

mongoose.model('Trivia', TriviaSchema);