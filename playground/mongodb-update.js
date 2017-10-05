const{MongoClient,ObjectId}=require('mongodb')





MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('cannot connect to server')
    }
    console.log("connected to database")
    
      
//   db.collection('test').findOneAndUpdate({_id:new ObjectId("59d5ca0bebce7ec849aca211")},
//                                          {
//                                             $set:{
//                                                 completed:true
//                                             }
//       
//                                           },
//                                          {
//                                           retrunOriginal:false
//                                         }
//                                         ).then((result)=>{
//                                               console.log(result)
//        
//                                                })
//                                          
    
    
//    
//   db.collection('User').findOneAndUpdate(
//       {_id:new ObjectId("59d5d11cebce7ec849aca213")},
//       {
//           $set:{
//               name:"Dora"
//           }
//       },
//       {
//           $inc:{
//               age:12
//           }
//       },
//       {
//           returnOrginal:false
//       }
//   
//   ).then((result)=>{
//       console.log(result)
//   })
    
    
    db.collection('User').findOneAndUpdate(
       {_id:new ObjectId("59d5d11cebce7ec849aca213")},
       
       {
           $set:{
              name:"explorer" 
           },
           $inc:{
               age:1
           }
       },
       {
           returnOrginal:false
       }
   
   ).then((result)=>{
       console.log(result)
   })
    
    
    
    
    
//    db.close()
})