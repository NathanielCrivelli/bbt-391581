const bbt = require('big-bang-theory');

const title = (req, res) => {
    if (req.params.title != "") {
    res.status(200).json({
            success: true,
            index: req.params.title,
            data: bbt._embedded.episodes.filter(episode => episode.name.includes(req.params.title))
    });
    } else {
        res.status(200).json({
            success: false,
            index: req.params.title,
            data: "Error"
        })
    }
}

module.exports = title;
