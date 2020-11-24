module.exports = {
    insert(WhichModel,insertData){
        return new Promise((resolve,reject)=>{
            WhichModel.insertMany(insertData,(err)=>{
                if(err) throw err
                resolve()
            })
        })
    },
    delete(WhichModel,whereData,deleteNum){
        return new Promise(resolve=>{
            const deleteType = deleteNum === 1?'deleteMany':'deleteOne'
            WhichModel[deleteType](whereData,err=>{
                if(err) throw err
                resolve()
            })
        })
    },
    update(WhichModel,whereData,updateData,updateNum){
        return new Promise(resolve=>{
            const updateType = updateNum === 1?'updateMany':'updateOne'
            WhichModel[updateType](whereData,updateData,err=>{
                if(err) throw err
                resolve()
            })
        })
    },
    find(WhichModel,whereData,showData){
        return new Promise(resolve=>{
            WhichModel.find(whereData,showData).exec((err,data)=>{
                if(err) throw err
                resolve(data)
            })
        })
    },
    paging(WhichModel,whereData,showData,count=1,limitNum=10){
        return new Promise(resolve=>{
            WhichModel.find(whereData).ship((count - 1) * limitNum).exec((err,data)=>{
                if(err) throw err
                resolve(data)
            })
        })
    }
}