module.exports = {
    getPlayers: function(req, res) {
        PlayerService.getPlayers(function(players) {
            res.json(players)
        })
    },
    addPlayer: function(req, res) {
        console.log(req.body);
        var playerVal = (req.body.value) ? req.body.value : undefined
        PlayerService.addPlayer(playerVal, function(success) {
            res.json(success)
        })
    },
    removePlayer: function(req, res) {
       var playerVal = (req.body.value) ? req.body.value : undefined
        PlayerService.removePlayer(playerVal, function(success) {
            res.json(success)
        })
    }
}