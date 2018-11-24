const path = require('path')

const friends = require('../data/friends.js')
    




module.exports = function(app) {
      
    app.get("/api/friends", function(req,res){
        res.json(friends)
    })
    
    app.post("/api/friends", function(req, res) {
        console.log(req.body)

        let answers = req.body.questions

        let match = {
            name: "",
            img : "",
            total : 100}

        for (i=0; i<friends.length; i++){
            let difference = 0

            for (j=0; j<req.body.length; j++){
                difference += Math.abs(answers[j] - friends[i].questions[j])
            }

            if(difference < match.total){
                total = difference
                match.name = friends[i].name
                match.img = friends[i].imageUrl
            }
        }

        friends.push(req.body)
        res.json(match)
    })

    app.post("/api/clear", function(req, res) {        
        friends = []
        
    });
}