var BannerModel = require('../sql/model/Banner')
var sql = require('../sql')
var utils = require('../utils')
const getBanner = (req,res,next)=>{
    sql.find(BannerModel,{},{_id:0,__v:0}).then(data=>{
        res.status('200').send({
            code:'200',
            message:'轮播图数据',
            data
        })
    })
}

const addBanner = (req,res,next)=>{
    let insertData = req.body;
    insertData.bannerid = 'banner_'+utils.getUuid()
    sql.insert(BannerModel,insertData).then(()=>{
        res.status('200').send({
            code:'200',
            message:'添加轮播图'
        })
    })
}
const removeBanner = (req,res,next)=>{
    sql.delete(BannerModel,req.body,0).then(()=>{
        res.status(200).send({
            code:200,
            message:'移除轮播图'
        })
    })
}
const removeAllBanner = (req,res,next)=>{
    var deleteArr = req.body.deleteArr
    promiseArr = deleteArr.map(item=>(
        sql.delete(BannerModel,{bannerid:item},0)
    ))
    Promise.all(promiseArr).then(()=>{
        res.status(200).send({
            code:200,
            message:'批量删除轮播图'
        })
    })
}

module.exports={getBanner,addBanner,removeBanner,removeAllBanner}