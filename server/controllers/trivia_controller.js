const mongoose = require('mongoose');
const Trivia = mongoose.model('Trivia');
mongoose.Promise = global.Promise;

module.exports = {
    list_all: (req, res, next) => {
        Trivia.find({})
        .then((questions) => {
            res.json(questions);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    },
    addQuestion: (req,res,next) => {
        let p = new Trivia(req.body);
        p.save()
        .then(() => {
            res.json(true);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    },
     getRandomQuestions: (req, res, next) => {
        Trivia.aggregate([{ $sample: {size: 3}}])
        console.log("do")
        .then((questions) => { 
            console.log("gfhjk")
            res.json(questions); 
        })
        .catch((err) => { res.status(425).json(err); });
    },
    logout: (req, res) => {
		req.session.destroy()
		res.redirect("/")
	}
}