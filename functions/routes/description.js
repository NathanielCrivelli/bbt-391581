const bbt = require('big-bang-theory');

const desc = (req, res) => {
    if (req.params.word != "") {
    res.status(200).json({
            success: true,
            index: req.params.word,
            data: bbt._embedded.episodes.filter(episode => episode.summary.includes(req.params.word))
    });
    } else {
        res.status(200).json({
            success: false,
            index: req.params.word,
            data: "Index out of bounds, there are only 12 seasons"
        })
    }
}

module.exports = desc;
