var router = require('express').Router()
var sql = require('./../sql')
var BannerModel = require('../sql/model/Banner')
const utils = require('../utils')

router.get('/',(req,res,next)=>{
    sql.find(BannerModel,{},{_id:0,__v:0}).then(data=>{
        res.status('200').send({
            code:'200',
            message:'轮播图数据',
            data
        })
    })
})

router.post('/add',(req,res,next)=>{
    console.log(112)
    let insertData = req.body;
    insertData.bannerid = 'banner_'+utils.getUuid()
    sql.insert(BannerModel,insertData).then(()=>{
        res.status('200').send({
            code:'200',
            message:'添加轮播图'
        })
    })
})

module.exports = router
