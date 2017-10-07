var mongoose=require('mongoose')
//var Todo=mongoose.model('Todo',{
//    text:{
//        type:String
//    },
//    completed:{
//        type:Boolean
//    },
//    completedAt:{
//        type:Number
//    }
//})
//
//var newTodo=new Todo({
//    text:'Eat Dinner'
//})
//
//newTodo.save().then((res)=>{
//    console.log('new To Do',res)
//    
//},(err)=>{
//    console.log("not added to db")

var Todo=mongoose.model('Todo',{
    text:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    },
    completed:{
        type:Boolean,
        default:false
    },
    coompletedAt:{
        type:Number,
        default:null
    }
})
//
//var newTodo=new Todo({
//    text:'Eat breakfasrt',
//    completed:false,
//    coompletedAt:2
//})
//
//newTodo.save().then((res)=>{
//    console.log('new to do',res)
//    
//},(err)=>{
//    console.log("'not inserted")
//})

//var secTodo=new Todo({
//    text:'  Hello '
//    })
//secTodo.save().then((res)=>{
//    console.log("second to do",res)
//    
//},(err)=>{
//    
//})
module.exports={
    Todo
}

