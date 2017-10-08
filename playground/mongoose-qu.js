const {mongoose}=require('./../server/db/mongoose')
const {Todo}=require('./../server/models/todo')
const {User}=require('./../server/models/user')
const{ObjectId}=require('mongodb')

var id="59d7820882c6a70adc41076b11"
var userId="59d88608c3834216d05adfed11"

//Todo.find({
//    _id:id
//}).then((doc)=>{
//    console.log('todos',doc)
//    
//},(err)=>{
//   console.log(err) 
//})
//
//Todo.findOne({
//    _id:id
//}).then((doc)=>{
//     console.log(doc)   
//        },(err)=>{
//    
//})
//Todo.findById(id).then((doc)=>{
//    if(!doc){
//        return  console.log("not found in db") 
//    }
//     console.log(doc)   
//        },(err)=>{
//    console.log('error',err)
//})


//User.findById(userId).then((doc)=>{
//    if(!doc){
//        return  console.log("not found in db") 
//    }
//    console.log('User doc',doc)
//})
if(ObjectId.isValid(userId)){
    
    User.findById(userId).then((doc)=>{
    if(!doc){
        return  console.log("not found in db") 
    }
    console.log('User doc',doc)
})


    
}else{
    console.log('Not a valid User Id')
}


