const router = require('express').Router();
const episodes = require('./routes/episodes');
const episodeIndex = require('./routes/episodeIndex');
const season = require('./routes/seasons');

router.get("/episodes", episodes);
router.get("/episode-index/:index", episodeIndex);
router.get("/season/:season", season);

module.exports = router;
