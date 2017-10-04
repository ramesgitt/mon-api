//const MongoClient=require('mongodb').MongoClient
//var user={name:"ram",age:25}
//var{age}=user
//console.log(age)
const{MongoClient}=require('mongodb')
//var obj=new ObjectId()
//
//console.log(obj)


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('cannot connect to server')
    }
    console.log("connected to database")
//    db.collection('test').insertOne({
//        test:"some text",
//        completed:false
//    },(err,result)=>{
//        if(err){
//            return console.log("unable to insert todo",err)
//        }
//        console.log(JSON.stringify(result.ops,undefined,2))
//    })
//    
    db.collection('User').insertOne({
        name:"Rambo",
        age:60,
        location:"usa"
        
    },(err,res)=>{
        if(err){
            return console.log("unable to add to collection",err)
        }
        console.log(JSON.stringify(res.ops,undefined,2))
        
    })
//    db.collection('users').insertOne({
//        name:"Arnold",
//        age:60,
//        location:"usa"
//        
//    },(err,res)=>{
//        if(err){
//            console.log('unable to insert to collection',err)
//        }
//        console.log(res.ops[0]._id.getTimestamp())
//        
//    })
//    
//    
   db.close()
})