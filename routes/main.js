__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/docs/redirect.html')
})
router.get('/user/login', (req, res) => {
    res.sendFile(__path + '/docs/index.html')
})
router.get('/user/register.html', (req, res) => {
    res.sendFile(__path + '/docs/index.html')
})

router.get('/api', (req, res) => {
	res.sendFile(__path + '/docs/dashboard.html')
})
router.get('/api/asupan', (req, res) => {
	res.sendFile(__path + '/api/asupan.html')
})
router.get('/api/anime', (req, res) => {
	res.sendFile(__path + '/api/anime.html')
})

router.get('/api/cecan', (req, res) => {
	res.sendFile(__path + '/api/cecan.html')
})

router.get('/api/downloader', (req, res) => {
	res.sendFile(__path + '/api/downloader.html')
})

router.get('/api/filmapik', (req, res) => {
	res.sendFile(__path + '/api/filmapik.html')
})

router.get('/api/game', (req, res) => {
	res.sendFile(__path + '/api/game.html')
})

router.get('/api/islam', (req, res) => {
	res.sendFile(__path + '/api/islam.html')
})

router.get('/api/lk21', (req, res) => {
	res.sendFile(__path + '/api/lk21.html')
})

router.get('/api/news', (req, res) => {
 	res.sendFile(__path + '/api/news.html')
})

router.get('/api/nsfw', (req, res) => {
	res.sendFile(__path + '/api/nsfw.html')
})
router.get('/api/other', (req, res) => {
	res.sendFile(__path + '/api/other.html')
})

router.get('/api/photooxy', (req, res) => {
 	res.sendFile(__path + '/api/photooxy.html')
})

router.get('/api/search', (req, res) => {
	res.sendFile(__path + '/api/search.html')
})
router.get('/beta', (req, res) => {
    res.sendFile(__path + '/docs/test.html')
})

router.get('/ping', (req, res) => {
    config = {
        status: true,
        result: {
            Pong,
        }
    }
    res.json(config)
})

module.exports = router