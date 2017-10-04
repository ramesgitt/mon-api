//const MongoClient=require('mongodb').MongoClient
//var user={name:"ram",age:25}
//var{age}=user
//console.log(age)
const{MongoClient,ObjectId}=require('mongodb')





MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('cannot connect to server')
    }
    console.log("connected to database")
//    db.collection('test').find().count().then((count)=>{
//        console.log(`test to dos ${count}`)
//        
//        
//    },(err)=>{
//        console.log('unable to fetch data',err)
//        
//    })
    
    db.collection('User').find({name:"Rambo"}).toArray().then((res)=>{
        console.log(res)
        
    },(err)=>{
        
        console.log('unable to fetch data',err)
    })

    
    
//    db.close()
})