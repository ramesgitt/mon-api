const{MongoClient,ObjectId}=require('mongodb')





MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('cannot connect to server')
    }
    console.log("connected to database")
    
    //delete many
//    db.collection('test').deleteMany({todo:"eat dinner"}).then((result)=>{
//        console.log(result)
//    })
//    db.collection('test').deleteOne({text:"eat dinner"}).then((result)=>{
//        console.log(result)
//    })
    
    //db findoneanddelete
    
//    db.collection('test').findOneAndDelete({completed:false}).then((result)=>{
//        console.log(result)
//    })
    
    
    
//    db.collection('User').deleteMany({name:'Rambo'}).then((result)=>{
//        console.log(result)
//    })
//    
    db.collection('User').findOneAndDelete({_id:new ObjectId("59d5d1ecebce7ec849aca214")}).then((reuslt)=>{
        console.log(reuslt)
    })
    
    
    
    
    
    
    
    
    
//    db.close()
})