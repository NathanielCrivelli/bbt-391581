const bbt = require('big-bang-theory');



const season = (req, res) => {
    if (req.params.season < 12 || req.params.season > 0) {
    res.status(200).json({
            success: true,
            index: req.params.season,
            data: bbt._embedded.episodes.filter(episode => episode.season == req.params.season)
    });
    } else {
        res.status(200).json({
            success: false,
            index: req.params.season,
            data: "Index out of bounds, there are only 12 seasons"
        })
    }
}

module.exports = season;
