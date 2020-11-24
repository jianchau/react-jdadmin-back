var router = require('express').Router()
var bannerController = require('../controller/banner')


router.get('/',bannerController.getBanner)

router.post('/add',bannerController.addBanner)

router.post('/remove',bannerController.removeBanner)

router.post('/removeall',bannerController.removeAllBanner)

module.exports = router
