const bbt = require('big-bang-theory');

const image = (req, res) => {
    if (req.params.season < 12 || req.params.season > 0) {
    res.status(200).json({
            success: true,
            index: req.params.season + ", " + req.params.episode,
            data: bbt._embedded.episodes.filter(episode => episode.season == req.params.season)[req.params.episode].image.original
    });
    } else {
        res.status(200).json({
            success: false,
            index: req.params.season + ", " + req.params.episode,
            data: "Error"
        })
    }
}

module.exports = image;
