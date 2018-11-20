const path = require('path')

const friends = require('../data/friends.js')
    




module.exports = function(app) {
      
    app.get("/api/friends", function(req,res){
        res.json(friends)
    })
    
    app.post("/api/friends", function(req, res) {
        console.log(req.body)

        let answers = req.body.questions

        let match = ""
        let matchImg = ""
        let total = 100

        for (i=0; i<friends.length; i++){
            let difference = 0

            for (j=0; j<req.body.length; j++){
                difference += Math.abs(answers[j] - friends[i].questions[j])
            }

            if(difference < total){
                total = difference
                match = friends[i].name
                matchImg = friends[i].imageUrl
            }
        }

        friends.push(req.body)
    })

    app.post("/api/clear", function(req, res) {        
        friends = []
        
    });
}