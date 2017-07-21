const path = require("path")
const mongoose = require('mongoose');
const Trivia = mongoose.model('Trivia');
const questions = require("./../controllers/trivia_controller.js")


module.exports = (app) =>{
    app.get("/logout", questions.logout)
    app.get('/randomlist', questions.getRandomQuestions);
    app.get('/question/list',questions.list_all);
    app.post('/addQuestion', questions.addQuestion);
    app.get("*", (req,res) =>{
        res.sendFile(path.resolve("./client/dist/index.html"))
    })
}
