module.exports = {
    getPlayers: function(req, res) {
        PlayerService.getPlayers(function(players) {
            res.json(players)
        })
    },
    addPlayer: function(req, res) {
        PlayerService.addPlayer(req.body, function(success) {
            res.json(success)
        })
    },
    removePlayer: function(req, res) {
        PlayerService.removePlayer(req.body, function(success) {
            res.json(success)
        })
    }
}