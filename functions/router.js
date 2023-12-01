const router = require('express').Router();
const episodes = require('./routes/episodes');
const episodeIndex = require('./routes/episodeIndex');
const season = require('./routes/seasons');
const titleGet = require('./routes/title');
const descGet = require('./routes/description');
const imageGet = require('./routes/image');

router.get("/episodes", episodes);
router.get("/episode-index/:index", episodeIndex);
router.get("/season/:season", season);
router.get("/titleFilter/:title", titleGet);
router.get("/description/:word", descGet);
router.get("/image/:season/:episode", imageGet);

module.exports = router;
